const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validateSchema = require('../lib/validateSchema');
const getError = require("../lib/getError");
const User = require('../models/User');

const saltCount = 10;

class AuthController {
    async login(req, res) {
        try {
            if(!req.body) {
                const {error, code} = getError('Invalid request body', 400);
                return res.status(code).send({error});
            }

            const {email, username, password} = req.body;

            if(!email && !username) {
                const {error, code} = getError('Enter email or username', 400);
                return res.status(code).send({error});
            }

            if(!password) {
                const {error, code} = getError('Enter password', 400);
                return res.status(code).send({error});
            }

            const user = User.findOne({where: {email, username}});

            const match = await bcrypt.compare(password, user.password);
            if(match) {
                // login
            } 

            res.status(400).send({error: 'Invalid email, username or password'});
        } catch (error) {
            
        }
    }
    async register(req, res) {
        try {
            const valid = await validateSchema(User, req.body);
            if(!valid) {
                const {error, code} = getError('Invalid request body', 400);
                return res.status(code).send({error});
            }

            let {username, email, password, avatar, address} = req.body;
            email = email.toLowerCase();
            password = await bcrypt.hash(password, saltCount);

            const user = {
                username, email, password, avatar, address
            }

            const data = await User.create(user);
            res.status(201).send({data: data.toJSON()});
        } catch(error) {
            res.status(500).send({error: `Internal server error: ${error.message}`});
        }
    }
}

module.exports = new AuthController;