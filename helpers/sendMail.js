const nodemailer = require('nodemailer');

const { MAIL_PASS, MAIL_USER } = process.env;

const mailConfig = {
    service: 'gmail',
    secure: true,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
    },
};

const transport = nodemailer.createTransport(mailConfig);

const sendMail = async (data, file) => {
    const mail = {
        ...data,
        from: MAIL_USER,
        attachments: file ? [{ filename: 'Bolla.jpg', path: file }] : []
    }
    await transport.sendMail(mail);
    return true
};

module.exports = sendMail;