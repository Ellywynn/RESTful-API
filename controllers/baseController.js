const validateSchema = require('../lib/validateSchema');
const getError = require('../lib/getError');

/*
    This class uses CRUD operations based on the model.
    It really helps to simplify controller development. 
*/

class BaseController {
    // Get all instances
    static async getAll(model) {
        try {
            const data = await model.findAll();
            if(!data.length) return {data: [], code: 204};
            return {data, code: 200};
        } catch (error) {
            return getError(error.message);
        }
    }
    // Get one instance by id
    static async getOne(model, req) {
        const id = parseInt(req.params.id);

        if(!id) return getError('Invalid link', 400);

        try {
            const data = await model.findOne({where: id});

            // If there's no such instance, return an empty object
            if(data === null) return {data: {}, code: 204}; 

            return {data, code: 200};
        } catch (error) {
            return getError(error.message);
        }
    }
    // Create instance
    static async create(model, req) {
        try {
            const valid = await validateSchema(model, req);
            if(!valid) return getError('Invalid request body', 400);

            const data = await model.create(req.body);
            return {data: data.toJSON(), code: 201};
        } catch (error) {
            return getError(error.message);
        }
    }
    // Delete instance
    static async delete(model, req) {
        const id = parseInt(req.params.id);

        if(!id) return {error: 'Invalid request'};

        try {
            const deleted = await model.destroy({where: {id}});

            return deleted ? {data: req.body, code: 200}
             : getError(`Cannot delete item with id ${id}`, 400);;
        } catch (error) {
            return getError(error.message);
        }
    }
    // Update instance
    static async update(model, req) {
        const id = parseInt(req.params.id);
        try {
            const valid = validateSchema(model, req);
            if(!valid) return getError('Invalid request body', 400);

            const updated = await model.update(req.body, {where: {id}});
    
            return updated 
             ? {data: req.body, code: 200}
             : getError(`Cannot update item with id ${id}`);
        } catch (error) {
            return getError(error.message);
        }
    }
}

module.exports = BaseController;