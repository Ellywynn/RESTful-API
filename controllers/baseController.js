class BaseController {
    static async getAll(model) {
        try {
            const data = await model.findAll();
            return {data};
        } catch (error) {
            return {error: error.message}
        }
    }
    static async getOne(model, req) {
        const id = parseInt(req.params.id);

        if(!id) return {error: 'Invalid link'};

        try {
            const data = await model.findOne({where: {id}});
            if(data === null) return {};
            return {data};
        } catch (error) {
            return {error: error.message};
        }
    }
    static async create(model, req) {
        const schema = await model.describe();
        Object.keys(schema).forEach(key => {
            if(!(key in req.body) && key !== 'id') return {error: 'Invalid request body'};
        });

        try {
            delete req.body.id;
            const data = await model.create(req.body);
            return {data: data.toJSON()};
        } catch (error) {
            return {error: error.message}
        }
    }
    static async delete(model, req) {
        const id = parseInt(req.params.id);

        if(!id) return {error: 'Invalid request'};

        try {
            const deleted = await model.destroy({where: {id}});

            return deleted ? req.body : {error: `Cannot delete or find item with id ${id}`};
        } catch (error) {
            return {error: error.message}
        }
    }
    static async update(model, req) {
        const id = parseInt(req.params.id);
        const schema = await model.describe();
        Object.keys(schema).forEach(key => {
            if(!(key in req.body) && key !== 'id') return {error: 'Invalid request body'};
        });

        try {
            const updated = await model.update(req.body, {where: {id}});
    
            return updated ? req.body : {error: `Cannot update item with id ${id}`};
        } catch (error) {
            return {error: error.message}
        }
    }
    static async responseStatus(data) {
        if('error' in data) return 500;
        return 200;
    }
}

module.exports = BaseController;