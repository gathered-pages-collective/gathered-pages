import { NextRequest } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json() as { email: string };
  const { email } = body;

  if (!email) {
    return Response.json({ error: "Email is required" }, { status: 400 });
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!audienceId) {
    return Response.json({ error: "Newsletter not configured" }, { status: 500 });
  }

  await resend.contacts.create({
    email,
    audienceId,
    unsubscribed: false,
  });

  return Response.json({ success: true });
}
