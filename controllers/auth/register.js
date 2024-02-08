const RequestError = require('../../helpers/RequestError');
const { User } = require('../../models/user');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { name, login, password } = req.body;
    const user = await User.findOne({ login });
    if (user) {
        throw RequestError(409, 'Email in use');
    };
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await User.create({ name, login, password: hashPassword });
    res.status(201).json({
        name: result.name,
        login: result.login
    });
};

module.exports = register;