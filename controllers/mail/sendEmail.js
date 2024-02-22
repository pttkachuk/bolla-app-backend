const RequestError = require('../../helpers/RequestError');
const sendMail = require('../../helpers/sendMail');
const { User } = require('../../models/user');

const sendEmail = async (req, res) => {
    const { email, name, code, file } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw RequestError(404, 'User not found')
    };

    const mail = {
        to: 'petro.tkachuk@techne.mobi',
        subject: 'Documento di trasporto',
        html: ` <p>Buongiorno,</p> <br/> <p>invio la bolla con numero di commessa:${code}</p> <br/> <p>Distinti saluti.</p> <br/> <p>${name}</p> <br/> <p>Techne S.p.A.</p>`
    };

    await sendMail(mail, file);

    res.json({
        message: 'Email send success'
    })

};

module.exports = sendEmail;