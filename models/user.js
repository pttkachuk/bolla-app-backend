const { Schema, model } = require('mongoose');
//const emailRegexp = require('../helpers/emailRegexp');
const handleSaveErrors = require('../helpers/handleSaveErrors');
const errMsg = require('../helpers/errors');

const userSchema = new Schema(
    {
        name: {
            type: String,
            minlenght: [3, errMsg.errFieldMinLength('User name', 3)],
            maxlenght: [35, errMsg.errFieldMaxLength('User name', 35)],
            required: [true, errMsg.errFieldIsRequired('User name')],
        },
        password: {
            type: String,
            minlenght: [6, errMsg.errMsgMinPass],
            required: [true, errMsg.errFieldIsRequired('Password')],
        },
        login: {
            type: String,
            unique: true,
            required: [true, errMsg.errFieldIsRequired('Login')],
        },
        token: {
            type: String,
            default: '',
        },
    },
    { versionKey: false, timestamps: true }
);

userSchema.post('save', handleSaveErrors);

const User = model('user', userSchema);

module.exports = { User };