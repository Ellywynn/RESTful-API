const validateSchema = require('../lib/validateSchema');

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
            return {error: error.message, code: 500}
        }
    }
    // Get one instance by ID
    static async getOne(model, req) {
        const id = parseInt(req.params.id);

        if(!id) return {error: 'Invalid link', code: 400};

        try {
            const data = await model.findOne({where: id});

            // If there's no such instance, return an empty object
            if(data === null) return {data: {}, code: 204}; 

            return {data, code: 200};
        } catch (error) {
            return {error: error.message, code: 500};
        }
    }
    // Create instance
    static async create(model, req) {
        try {
            const valid = await validateSchema(model, req);
            if(!valid) return {error: 'Invalid request body', code: 400};

            const data = await model.create(req.body);
            return {data: data.toJSON(), code: 201};
        } catch (error) {
            return {error: error.message, code: 500}
        }
    }
    // Delete instance
    static async delete(model, req) {
        const id = parseInt(req.params.id);

        if(!id) return {error: 'Invalid request'};

        try {
            const deleted = await model.destroy({where: {id}});

            return deleted ? {data: req.body, code: 200} : {error: `Cannot delete or find item with id ${id}`, code: 400};
        } catch (error) {
            return {error: error.message, code: 500}
        }
    }
    // Update instance
    static async update(model, req) {
        const id = parseInt(req.params.id);
        try {
            const valid = validateSchema(model, req);
            if(!valid) return {error: 'Invalid request body', code: 400};

            const updated = await model.update(req.body, {where: {id}});
    
            return updated 
             ? {data: req.body, code: 200}
             : {error: `Cannot update item with id ${id}`, code: 500};
        } catch (error) {
            return {error: error.message, code: 500}
        }
    }
}

module.exports = BaseController;