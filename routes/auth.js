const express = require('express');
const router = new express.Router();
const AuthController = require('../controllers/auth');
const isAlreadyAuthorized = require('../middleware/isAlreadyAuthorized');

router.route('/register')
    .get(isAlreadyAuthorized, AuthController.registerPage)
    .post(isAlreadyAuthorized, AuthController.register);

router.route('/login')
    .get(isAlreadyAuthorized, AuthController.loginPage)
    .post(isAlreadyAuthorized, AuthController.login);

router.get('/logout', AuthController.logout);

module.exports = router;