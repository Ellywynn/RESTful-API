const City = require('../models/City');

class CityController {
    async getAll(req, res) {
        try {
            const data = await City.findAll();
            res.status(200).send({data});
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
    async getOne(req, res) {
        const id = parseInt(req.params.id);
        if(!id) {
            return res.status(404).send('Invalid link');
        }
        try {
            const data = await City.findOne({
                where: {
                    store_id: id
                }
            });
            res.status(200).send({data});
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
    async create(req, res) {
        const {city} = req.body;

        if(!city) {
            return res.status(400).send('Invalid request body');
        }
        try {
            const data = await City.create({city});
    
            res.status(201).send(data.toJSON());
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
    async update(req, res) {
        const id = parseInt(req.params.id);
        const {city} = req.body;

        if(!req.body || (!id && !city)) {
            return res.status(400).send('Invalid request');
        }

        try {
            const updated = await City.update(req.body, {
                where: {city_id: id}
            });
    
            if(updated){
                res.status(200).send();
            } else {
                res.status(500).send({
                    message: `Cannot update of find item with id ${id}`
                });
            }
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
    async delete(req, res) {
        const id = parseInt(req.params.id);

        if(!id) {
            return res.status(400).send('Invalid request');
        }

        try {
            const deleted = await City.destroy({
                where: {city_id: id}
            });
    
            if(deleted) {
                res.status(200).send();
            } else {
                res.status(500).send({
                    message: `Cannot delete or find item with id ${id}`
                });
            }
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
}

module.exports = new CityController;