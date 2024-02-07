//Errors request
const errBadReq = 'Bad Request';
const errNotAuth = 'Not authorized';
const errForbbiden = 'Forbbiden';
const errNotFound = 'Not found';
const errConflict = 'Conflict';

//Errors validations

const errMsgEmailRegaxp = 'is not a valid email';
const errMsgMinPass = 'Password must have a minimum of 9 characters';
const errMsgAuthInvalid = 'Emai or password invalid';

function errFieldIsRequired(filed) {
    return `${filed} is required`;
}

function errFieldMinLength(field, min) {
    return `${field} must have a minimum of ${min} characters`;
}

function errFieldMaxLength(field, max) {
    return `${field} must have a maximum of ${max} characters`;
}

function errFieldMin(field, min) {
    return `${field} must be at least ${min}`;
}

function errFieldMax(field, max) {
    return `${field} should be no more than ${max}`;
}

const errMsgEmailNotVerify = 'Your email address has not been verified';
const errMsgUserNotFound = 'User not found';

module.exports = {
    errBadReq,
    errNotAuth,
    errNotFound,
    errForbbiden,
    errConflict,
    errMsgEmailRegaxp,
    errMsgMinPass,
    errMsgAuthInvalid,
    errFieldIsRequired,
    errFieldMinLength,
    errFieldMaxLength,
    errFieldMin,
    errFieldMax,
    errMsgEmailNotVerify,
    errMsgUserNotFound
}