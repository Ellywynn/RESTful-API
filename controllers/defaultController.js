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
        res.status(code).send({data, error});
    }
    getOne = async (req, res) => {
        const {error, data, code} = await BaseController.getOne(this.model, req);
        res.status(code).send({data, error});
    }
    create = async (req, res) => {
        const {error, data, code} = await BaseController.create(this.model, req);
        res.status(code).send({data, error});
    }
    update = async (req, res) => {
        const {error, data, code} = await BaseController.update(this.model, req);
        res.status(code).send({data, error});
    }
    delete = async (req, res) => {
        const {error, data, code} = await BaseController.delete(this.model, req);
        res.status(code).send({data, error});
    }
}

module.exports = CRUDController;