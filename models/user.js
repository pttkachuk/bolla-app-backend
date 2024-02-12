const { Schema, model } = require('mongoose');
//const emailRegexp = require('../helpers/emailRegexp');
const handleSaveErrors = require('../helpers/handleSaveErrors');
const errMsg = require('../helpers/errors');

const userSchema = new Schema(
    {
        name: {
            type: String,
            minlenght: [3, errMsg.errFieldMinLength('User name', 3)],
            maxlenght: [50, errMsg.errFieldMaxLength('User name', 50)],
            required: [true, errMsg.errFieldIsRequired('User name')],
        },
        login: {
            type: String,
            minlenght: [3, errMsg.errFieldMinLength('Login', 3)],
            maxlenght: [50, errMsg.errFieldMaxLength('Login', 50)],
            unique: true,
            required: [true, errMsg.errFieldIsRequired('Login')],
        },
        password: {
            type: String,
            minlenght: [6, errMsg.errMsgMinPass],
            required: [true, errMsg.errFieldIsRequired('Password')],
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