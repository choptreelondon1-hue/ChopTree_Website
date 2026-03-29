import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form API route.
 *
 * This is a placeholder — wire it up to your preferred email provider:
 *   - Resend (recommended): https://resend.com
 *   - Nodemailer with SMTP
 *   - Formspree (no backend needed)
 *
 * To use Resend:
 *   1. npm install resend
 *   2. Add RESEND_API_KEY to your Vercel environment variables
 *   3. Uncomment the Resend block below
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // --- Resend integration (uncomment when ready) ---
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@choptreelondon.com',
    //   to: 'choptreelondon1@gmail.com',
    //   subject: `New Quote Request from ${name}`,
    //   html: `
    //     <h2>New Quote Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Service:</strong> ${service || 'Not specified'}</p>
    //     <p><strong>Message:</strong><br/>${message}</p>
    //   `,
    // });

    // Log for now — replace with actual email send above
    console.log("Contact form submission:", { name, email, phone, service, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
