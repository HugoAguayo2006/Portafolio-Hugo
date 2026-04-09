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
        message: "Faltan campos obligatorios",
      });
    }

    const data = await resend.emails.send({
      from: "📩 Mensaje desde el portafolio <onboarding@resend.dev>",
      to: "hugoaguayo50@gmail.com",
      subject: "🚀 Nuevo mensaje desde tu portafolio",
      reply_to: email,
      html: `
        <h2>📩 Nuevo mensaje recibido</h2>
        <p>🌐 Alguien te contactó desde tu página web:</p>

        <div style="padding:16px; border-radius:10px; background:#f5f5f5; color:#111;">
          <p><strong>👤 Nombre:</strong> ${name}</p>
          <p><strong>📧 Correo:</strong> ${email}</p>
          ${subject ? `<p><strong>📝 Asunto:</strong> ${subject}</p>` : ""}
          <p><strong>💬 Mensaje:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>

        <br/>
        <p>⚡ Revisa tu bandeja para responder lo antes posible.</p>
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