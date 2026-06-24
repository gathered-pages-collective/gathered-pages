import { NextRequest } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "placeholder");

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return Response.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return Response.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const donationType = session.metadata?.donationType;
    const isDonation = donationType === "one-time" || donationType === "monthly";

    if (!isDonation) {
      return Response.json({ received: true });
    }

    const donorEmail = session.customer_details?.email;
    if (!donorEmail) {
      return Response.json({ received: true });
    }

    const amountTotal = session.amount_total ?? 0;
    const amountFormatted = (amountTotal / 100).toFixed(2);
    const isMonthly = donationType === "monthly";

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Gathered Pages Collective <hello@gatheredpages.org>",
      to: donorEmail,
      subject: `Tax Receipt — Your ${isMonthly ? "Monthly " : ""}Donation to Gathered Pages Collective`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #1b3a6b;">
          <img src="https://gatheredpages.org/logo.png" alt="Gathered Pages Collective" width="100" style="margin-bottom: 24px;" />

          <h1 style="font-size: 28px; margin-bottom: 8px;">Thank You for Your Donation</h1>
          <p style="color: #666; margin-bottom: 24px;">This email serves as your official donation receipt for tax purposes.</p>

          <div style="background: #faf7f2; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">Organization</td>
                <td style="padding: 8px 0; font-weight: bold; text-align: right;">Gathered Pages Collective</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">EIN</td>
                <td style="padding: 8px 0; font-weight: bold; text-align: right;">42-3092238</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">Donation Amount</td>
                <td style="padding: 8px 0; font-weight: bold; text-align: right; font-size: 20px; color: #e05a2b;">$${amountFormatted}${isMonthly ? "/month" : ""}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">Type</td>
                <td style="padding: 8px 0; font-weight: bold; text-align: right;">${isMonthly ? "Recurring Monthly" : "One-Time"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">Date</td>
                <td style="padding: 8px 0; font-weight: bold; text-align: right;">${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</td>
              </tr>
            </table>
          </div>

          <p style="margin-bottom: 16px;">
            Gathered Pages Collective is a 501(c)(3) nonprofit organization. Your donation is
            tax-deductible to the full extent allowed by law. No goods or services were provided
            in exchange for this contribution.
          </p>

          <p style="margin-bottom: 24px; color: #666; font-size: 14px;">
            Please retain this email as your official tax receipt. If you have any questions,
            contact us at <a href="mailto:jamie@gatheredpages.org" style="color: #e05a2b;">jamie@gatheredpages.org</a>.
          </p>

          <hr style="border: none; border-top: 1px solid #e5e5e5; margin-bottom: 24px;" />

          <p style="color: #999; font-size: 12px; text-align: center;">
            Gathered Pages Collective · gatheredpages.org · EIN: 42-3092238<br/>
            Colorado, USA
          </p>
        </div>
      `,
    });
  }

  return Response.json({ received: true });
}
