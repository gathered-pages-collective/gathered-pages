import { NextRequest } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json() as {
    name: string;
    email: string;
    message: string;
  };

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }

  await resend.emails.send({
    from: "Gathered Pages Collective <hello@gatheredpages.org>",
    to: "jamie@gatheredpages.org",
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #1b3a6b;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <div style="background: #faf7f2; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  });

  return Response.json({ success: true });
}
