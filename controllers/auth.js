const jwt = require('jsonwebtoken');
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
            console.log(user);
            const match = await bcrypt.compare(password, user.password);

            // login and password are correct
            if(match) {
                const payload = {
                    id: user.id, email: user.email, username: user.username, role: user.role
                };
                const token = jwt.sign(
                    payload,
                    process.env.JWT_KEY
                );
                req.user = payload;
                return res.status(200).send({user: payload, token});
            } 

            sendResponse(res, 400, getError('Invalid email, username or password'));
        } catch (error) {
            sendResponse(res, 500, getError(`Internal server error: ${error.message}`));
        }
    }
    async register(req, res) {
        try {
            const valid = await validateSchema(User, req.body);
            if(!valid) return sendResponse(res, 400, getError('Invalid request body'));

            let {username, email, password, avatar, address} = req.body;
            email = email.toLowerCase();
            password = await bcrypt.hash(password, saltCount);

            const user = {
                username, email, password, avatar, address
            }

            const data = await User.create(user);
            sendResponse(res, 201, {data: data.toJSON()});
        } catch(error) {
            sendResponse(res, 500, getError(`Internal server error: ${error.message}`));
        }
    }
    async logout(req, res) {

    }
}

module.exports = new AuthController;