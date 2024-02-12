const express = require('express');
const validateBody = require('../../middlewares/validateBody');
const authenticate = require('../../middlewares/authenticate');
const ctrlWrapper = require('../../helpers/ctrlWrapper');
const { schemas } = require('../../schemas/authSchemas');
const router = express.Router();
const ctrl = require('../../controllers/auth');

//signup
router.post('/register', validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register));
//signin
router.post('/login', validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));
//signout
router.get('/logout', authenticate, ctrlWrapper(ctrl.logout));
//getcurrent
router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));
//resetpassword
router.patch('/resetpassword', validateBody(schemas.resetPasswordSchema), ctrlWrapper(ctrl.resetPassword));

module.exports = router;