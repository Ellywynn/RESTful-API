const Author = require('../models/Author');
const BaseController = require('./baseController');

class AuthorController {
    async getAll(req, res) {
        const data = await BaseController.getAll(Author);
        const code = await BaseController.responseStatus(data);
        res.status(code).send(data);
    }
    async getOne(req, res) {
        const data = await BaseController.getOne(Author, req);
        const code = await BaseController.responseStatus(data);
        res.status(code).send(data);
    }
    async create(req, res) {
        const data = await BaseController.create(Author, req);
        const code = ('error' in data) ? 500 : 201;
        res.status(code).send(data);
    }
    async update(req, res) {
        const data = await BaseController.update(Author, req);
        const code = await BaseController.responseStatus(data);
        res.status(code).send(data);
    }
    async delete(req, res) {
        const data = await BaseController.delete(Author, req);
        const code = await BaseController.responseStatus(data);
        res.status(code).send(data);
    }
}

module.exports = new AuthorController;