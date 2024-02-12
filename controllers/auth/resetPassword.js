const { User } = require('../../models/user');
const RequestError = require('../../helpers/RequestError');
const bcrypt = require('bcryptjs');

const resetPassword = async (req, res) => {
    const { login, password } = req.body;

    const user = await User.findOne({ login });
    if (!user) {
        throw RequestError(404, 'User not found');
    };

    const hashPassword = await bcrypt.hash(password, 10);

    await User.findByIdAndUpdate(user._id, { password: hashPassword });

    res.status(200).json({ message: 'Password reset with success' })
};

module.exports = resetPassword;