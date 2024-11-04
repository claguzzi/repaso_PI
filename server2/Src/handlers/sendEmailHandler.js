const sendEmailController = require('./sendEmailController');

const sendEmailHandler = async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    await sendEmailController({ to, subject, text });

    res.status(200).json({ message: 'Correo electrónico enviado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al enviar el correo electrónico' });
  }
};

module.exports = sendEmailHandler;
