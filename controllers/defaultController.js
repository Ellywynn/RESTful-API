const BaseController = require('./baseController');

class DefaultController {
    constructor(model) {
        this.model = model;
    }
    getAll = async(req, res) => {
        const {data, code} = await BaseController.getAll(this.model);
        res.status(code).send(data);
    }
    getOne = async (req, res) => {
        const {data, code} = await BaseController.getOne(this.model, req);
        res.status(code).send(data);
    }
    create = async (req, res) => {
        const {data, code} = await BaseController.create(this.model, req);
        res.status(code).send(data);
    }
    update = async (req, res) => {
        const {data, code} = await BaseController.update(this.model, req);
        res.status(code).send(data);
    }
    delete = async (req, res) => {
        const {error, data, code} = await BaseController.delete(this.model, req);
        res.status(code).send(error ? error : data);
    }
}

module.exports = DefaultController;