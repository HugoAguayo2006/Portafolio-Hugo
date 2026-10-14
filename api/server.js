import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Wrong method" });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Required fields are missing",
      });
    }

    const data = await resend.emails.send({
      from: "📩 Portfolio message <onboarding@resend.dev>",
      to: "hugoaguayo50@gmail.com",
      subject: "🚀 New message from your portfolio",
      reply_to: email,
      html: `
        <h2>📩 New message received</h2>
        <p>🌐 Someone contacted you through your website:</p>

        <div style="padding:16px; border-radius:10px; background:#f5f5f5; color:#111;">
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          ${subject ? `<p><strong>📝 Subject:</strong> ${subject}</p>` : ""}
          <p><strong>💬 Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>

        <br/>
        <p>⚡ Check your inbox to reply as soon as possible.</p>
      `,
    });

    return res.status(200).json({ ok: true, data });
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return res.status(502).json({
      ok: false,
      message: "Error sending email",
      error,
    });
  }
}