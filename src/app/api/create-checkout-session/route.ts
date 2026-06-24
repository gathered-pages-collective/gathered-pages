import { NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "placeholder");

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gatheredpages.org";

export async function POST(request: NextRequest) {
  const body = await request.json() as {
    amountCents: number;
    mode: "one-time" | "monthly";
    coverFees?: boolean;
  };

  const { amountCents, mode, coverFees } = body;
  const feesCovered = String(Boolean(coverFees));

  if (!amountCents || amountCents < 100) {
    return Response.json({ error: "Minimum donation is $1.00" }, { status: 400 });
  }

  if (mode === "monthly") {
    const price = await stripe.prices.create({
      currency: "usd",
      unit_amount: amountCents,
      recurring: { interval: "month" },
      product_data: {
        name: "Monthly Donation — Gathered Pages Collective",
      },
    });

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: price.id, quantity: 1 }],
      success_url: `${SITE_URL}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/donate`,
      metadata: { donationType: "monthly", feesCovered },
    });

    return Response.json({ url: session.url });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    submit_type: "donate",
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: amountCents,
          product_data: {
            name: "Donation — Gathered Pages Collective",
            description: "Tax-deductible donation. EIN: 42-3092238",
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${SITE_URL}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${SITE_URL}/donate`,
    metadata: { donationType: "one-time", feesCovered },
  });

  return Response.json({ url: session.url });
}
