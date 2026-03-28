import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Wrong method' });
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ message: 'Missing RESEND_API_KEY' });
    }

    const { name, message, email } = req.body ?? {};
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'hugoaguayo50@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,
      html: `
        <h2>Nuevo contacto desde tu portafolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(502).json({ message: 'Error sending email', error });
  }
};

export default handler;
