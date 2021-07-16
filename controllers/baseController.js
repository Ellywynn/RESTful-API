const validateSchema = require('../lib/validateSchema');
const getError = require('../lib/getError');
const sendResponse = require('../lib/sendResponse');

/*
    This class uses CRUD operations based on the model.
    It really helps to simplify controller development. 
*/

class BaseController {
    constructor(model) {
        this.model = model;
    }
    // Create instance
    create = async (req, res) => {
        try {
            const valid = await validateSchema(this.model, req.body);
            if(!valid) return sendResponse(res, 400, getError('Invalid request body'));

            const data = await this.model.create(req.body);
            sendResponse(res, 201, data.toJSON());
        } catch (error) {
            sendResponse(res, 500, getError(`Internal error: ${error.message}`));
        }
    }
    // Get all instances
    getAll = async (req, res) => {
        try {
            const data = await this.model.findAll();
            if(!data.length) return sendResponse(res, 204, {data: []});;
            sendResponse(res, 200, data);
        } catch (error) {
            sendResponse(res, 500, getError(`Internal error: ${error.message}`));
        }
    }
    // Get one instance by id
    getOne = async (req, res) => {
        const id = parseInt(req.params.id);
        if(!id) return sendResponse(res, 400, getError('Invalid link'));

        try {
            const data = await this.model.findOne({where: {id}});

            // If there's no such instance, return an empty object
            if(data === null) return sendResponse(res, 204, {data: {}}); 

            sendResponse(res, 200, data);
        } catch (error) {
            sendStatus(res, 500, getError(`Internal error: ${error.message}`));
        }
    }
    // Update instance
    async update(model, req) {
        const id = parseInt(req.params.id);
        try {
            const valid = validateSchema(this.model, req.body);
            if(!valid) return sendResponse(res, 400, getError('Invalid request body'));

            const updated = await this.model.update(req.body, {where: {id}});
    
            updated 
             ? sendResponse(res, 200, {data: req.body})
             : sendResponse(res, 400, getError(`Cannot update item with id ${id}. Maybe there is no item with this id.`));
        } catch (error) {
            sendStatus(res, 500, getError(`Internal error: ${error.message}`));
        }
    }
    // Delete instance
    delete = async (req, res) => {
        const id = parseInt(req.params.id);
        if(!id) return sendResponse(res, 400, getError('Invalid link'));

        try {
            const deleted = await this.model.destroy({where: {id}});
            deleted
             ? sendResponse(res, 200, {data: req.body})
             : sendResponse(res, 400, getError(`Cannot delete item with id ${id}. Maybe there is no item with this id.`));
        } catch (error) {
            sendStatus(res, 500, getError(`Internal error: ${error.message}`));
        }
    }
}

module.exports = BaseController;