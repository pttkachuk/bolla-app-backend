const Joi = require('joi');
//const emailRegexp = require('../helpers/emailRegexp');
const errMsg = require('../helpers/errors');

const registerSchema = Joi.object({
    name: Joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'string.min': errMsg.errFieldMin('Name', 3),
            'string.max': errMsg.errFieldMax('Name', 50),
            'string.empty': errMsg.errFieldIsRequired('Name'),
            'any.required': errMsg.errFieldIsRequired('Name'),
        }),
    login: Joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'string.min': errMsg.errFieldMin('Login', 3),
            'string.max': errMsg.errFieldMax('Login', 50),
            'string.empty': errMsg.errFieldIsRequired('Login'),
            'any.required': errMsg.errFieldIsRequired('Login'),
        }),
    password: Joi.string()
        .required()
        .min(9)
        .messages({
            'string.min': errMsg.errMsgMinPass,
            'string.empty': errMsg.errFieldIsRequired('Password'),
            'any.required': errMsg.errFieldIsRequired('Password'),
        }),
})

const loginSchema = Joi.object({
    login: Joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'string.min': errMsg.errFieldMin('Login', 3),
            'string.max': errMsg.errFieldMax('Login', 50),
            'string.empty': errMsg.errFieldIsRequired('Login'),
            'any.required': errMsg.errFieldIsRequired('Login'),

        }),
    password: Joi.string()
        .required()
        .min(9)
        .messages({
            'string.min': errMsg.errMsgMinPass,
            'string.empty': errMsg.errFieldIsRequired('Password'),
            'any.required': errMsg.errFieldIsRequired('Password'),
        }),
});

const resetPasswordSchema = Joi.object({
    login: Joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'string.min': errMsg.errFieldMin('Login', 3),
            'string.max': errMsg.errFieldMax('Login', 50),
            'string.empty': errMsg.errFieldIsRequired('Login'),
            'any.required': errMsg.errFieldIsRequired('Login'),

        }),
    password: Joi.string()
        .required()
        .min(9)
        .messages({
            'string.min': errMsg.errMsgMinPass,
            'string.empty': errMsg.errFieldIsRequired('New Password'),
            'any.required': errMsg.errFieldIsRequired('New Password'),
        }),
});

const schemas = {
    registerSchema,
    loginSchema,
    resetPasswordSchema
};

module.exports = { schemas };