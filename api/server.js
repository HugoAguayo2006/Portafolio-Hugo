import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Wrong method' });
  }

  try {
    const { name, message, email } = req.body;

const data = await resend.emails.send({
  from: '📩 Mensaje desde el portafolio <onboarding@resend.dev>',
  to: 'hugoaguayo50@gmail.com',
  subject: '🚀 Nuevo mensaje desde tu portafolio',
  html: `
    <h2>📩 Nuevo mensaje recibido</h2>
    <p>🌐 Alguien te contactó desde tu página web:</p>
    
    <div style="padding:12px; border-radius:10px; background:#f5f5f5;">
      <strong>💬 ${message}</strong>
    </div>

    <br/>
    <p>⚡ Revisa tu bandeja para responder lo antes posible.</p>
  `,
});

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(502).json({ error });
  }
};

export default handler;