const bcrypt = require('bcrypt');
const validateSchema = require('../lib/validateSchema');
const getError = require("../lib/getError");
const sendResponse = require('../lib/sendResponse');
const User = require('../models/User');
const {Op} = require('sequelize');

const saltCount = 10; // used for bcrypt hash

/** This class does authentication and authorization operations */
class AuthController {
    async login(req, res) {
        try {
            if(!req.body) return sendResponse(res, 400, getError('Invalid request body'));

            const {login, password} = req.body;

            if(!login) return sendResponse(res, 400, getError('Enter email or username'));

            if(!password) return sendResponse(res, 400, getError('Enter password'));

            const user = await User.findOne({
                where: {
                    [Op.or]: {
                        email: login,
                        username: login
                    }
            }});
            if(!user) return sendResponse(res, 400, getError('Invalid email, username or password'));
            const match = await bcrypt.compare(password, user.password);

            // login and password are correct
            if(match) {
                req.session.userId = user.id;
                return res.redirect('/');
            } 

            sendResponse(res, 400, getError('Invalid email, username or password'));
        } catch (error) {
            sendResponse(res, 500, getError(`Internal server error: ${error.message}`));
        }
    }
    async register(req, res) {
        try {
            const valid = await validateSchema(User, req.body);
            if(!valid) {
                return sendResponse(res, 400, getError('Invalid request body'));
            }

            let {username, email, password, avatar, address} = req.body;
            email = email.toLowerCase();
            password = await bcrypt.hash(password, saltCount);

            const user = {
                username, email, password, avatar, address
            }

            const data = await User.create(user);
            // save user info in session storage
            req.session.userId = user.id;
            sendResponse(res, 201, {data: data.toJSON()});
        } catch(error) {
            sendResponse(res, 500, getError(`Internal server error: ${error.message}`));
        }
    }
    async logout(req, res) {
        req.session.destroy(error => {
            if(error) {
                return res.status(500).send(getError(`Internal server error: ${error.message}`));
            }
            res.clearCookie('sid');
            res.redirect('/');
        });
    }
    loginPage(req, res) {
        res.send(`<h1>Login page</h1>`);
    }
    registerPage(req, res) {
        res.send(`<h1>Register page</h1>`);
    }
}

module.exports = new AuthController;