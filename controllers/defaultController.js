const BaseController = require('./baseController');

/*
    This controller uses basic CRUD operations.
    It just accepts the model for operations on appropriate data.
*/

class CRUDController {
    constructor(model) {
        this.model = model;
    }
    getAll = async(req, res) => {
        const {error, data, code} = await BaseController.getAll(this.model);
        const msg = error ? {error} : {data};
        res.status(code).send(msg);
    }
    getOne = async (req, res) => {
        const {error, data, code} = await BaseController.getOne(this.model, req);
        const msg = error ? {error} : {data};
        res.status(code).send(msg);
    }
    create = async (req, res) => {
        const {error, data, code} = await BaseController.create(this.model, req);
        const msg = error ? {error} : {data};
        res.status(code).send(msg);
    }
    update = async (req, res) => {
        const {error, data, code} = await BaseController.update(this.model, req);
        const msg = error ? {error} : {data};
        res.status(code).send(msg);
    }
    delete = async (req, res) => {
        const {error, data, code} = await BaseController.delete(this.model, req);
        const msg = error ? {error} : {data};
        res.status(code).send(msg);
    }
}

module.exports = CRUDController;