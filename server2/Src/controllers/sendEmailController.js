require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmailController = async ({ to, subject, text }) => {
  // Configurar el transporter de nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Configurar los detalles del correo electrónico
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  // Enviar el correo electrónico
  return transporter.sendMail(mailOptions);
};

module.exports = sendEmailController;
