require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmailHandler = async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurar los detalles del correo electrónico (Remitente)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: text,
    };

    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Correo electrónico enviado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al enviar el correo electrónico' });
  }
};

module.exports = sendEmailHandler;
