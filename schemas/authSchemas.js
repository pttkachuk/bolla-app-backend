const Joi = require('joi');
const emailRegexp = require('../helpers/emailRegexp');
const errMsg = require('../helpers/errors');

const registerSchema = Joi.object({
    name: Joi.string()
        .required()
        .min(3)
        .max(35)
        .messages({
            'string.min': errMsg.errFieldMin('Name', 3),
            'string.max': errMsg.errFieldMax('Name', 35),
            'string.empty': errMsg.errFieldIsRequired('Name'),
            'any.required': errMsg.errFieldIsRequired('Name'),
        }),
    email: Joi.string()
        .required()
        .pattern(emailRegexp)
        .messages({
            'string.pattern.base': `{email} ${errMsg.errMsgEmailRegaxp}`,
            'string.empty': errMsg.errFieldIsRequired('Email'),
            'any.required': errMsg.errFieldIsRequired('Email'),
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
    email: Joi.string()
        .required()
        .pattern(emailRegexp)
        .messages({
            'string.pattern.base': `{email} ${errMsg.errMsgEmailRegaxp}`,
            'string.empty': errMsg.errFieldIsRequired('Email'),
            'any.required': errMsg.errFieldIsRequired('Email'),
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

const schemas = {
    registerSchema,
    loginSchema
};

module.exports = { schemas };