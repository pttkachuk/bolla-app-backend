const { User } = require('../../models/user');
const RequestError = require('../../helpers/RequestError');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    const { login, password } = req.body;
    const user = await User.findOne({ login });
    if (!user) {
        throw RequestError(401, 'Login or password is wrong');
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw RequestError(401, 'Login or password is wrong')
    }
    const payload = {
        id: user._id
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '3d' });
    await User.findByIdAndUpdate(user._id, { token });

    res.json({ token });
};

module.exports = login;