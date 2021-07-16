const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validateSchema = require('../lib/validateSchema');
const getError = require("../lib/getError");
const User = require('../models/User');

const saltCount = 10;

class AuthController {
    async login(req, res) {

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