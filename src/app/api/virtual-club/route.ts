import { NextRequest } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json() as {
    name: string;
    email: string;
    affinityGroup: string;
    note: string;
  };

  const { name, email, affinityGroup, note } = body;

  if (!name || !email) {
    return Response.json({ error: "Required fields missing" }, { status: 400 });
  }

  await resend.emails.send({
    from: "Gathered Pages Collective <hello@gatheredpages.org>",
    to: "jamie@gatheredpages.org",
    replyTo: email,
    subject: `New Virtual Book Club Signup — ${name}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #1b3a6b;">
        <h2>New Virtual Book Club Signup</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 160px;">Name</td><td><strong>${name}</strong></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Identifies with</td><td>${affinityGroup || "Not provided"}</td></tr>
        </table>
        <div style="background: #faf7f2; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <p><strong>Note:</strong></p>
          <p style="white-space: pre-wrap;">${note || "Not provided"}</p>
        </div>
      </div>
    `,
  });

  return Response.json({ success: true });
}
