import { NextRequest } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json() as {
    organizationName: string;
    organizationType: string;
    location: string;
    contactName: string;
    email: string;
    womenServed: string;
    description: string;
  };

  const { organizationName, organizationType, location, contactName, email, womenServed, description } = body;

  if (!organizationName || !contactName || !email) {
    return Response.json({ error: "Required fields missing" }, { status: 400 });
  }

  await resend.emails.send({
    from: "Gathered Pages Collective <hello@gatheredpages.org>",
    to: "jamie@gatheredpages.org",
    replyTo: email,
    subject: `New Partner Application — ${organizationName}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #1b3a6b;">
        <h2>New Partner Application</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 160px;">Organization</td><td><strong>${organizationName}</strong></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Type</td><td>${organizationType}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Location</td><td>${location}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Contact Name</td><td>${contactName}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Women Served</td><td>${womenServed || "Not provided"}</td></tr>
        </table>
        <div style="background: #faf7f2; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <p><strong>About the Organization:</strong></p>
          <p style="white-space: pre-wrap;">${description || "Not provided"}</p>
        </div>
      </div>
    `,
  });

  return Response.json({ success: true });
}
