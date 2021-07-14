const Store = require('../models/Store');

class StoreController {
    async getAll(req, res) {
        try {
            const items = await Store.findAll();
            res.status(200).send({items});
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
            const items = await Store.items({
                where: {id}
            });
            res.status(200).send({items});
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
    async create(req, res) {
        const {address, city} = req.body;

        if(!address || !city) {
            return res.status(400).send('Invalid request body');
        }
        try {
            const item = await Store.create({
                address,
                city
            });
    
            res.status(201).send(item.toJSON());
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
    async update(req, res) {
        const id = parseInt(req.params.id);
        const {address, city} = req.body;

        if(!req.body || (!id && !address && !city)) {
            return res.status(400).send('Invalid request');
        }

        try {
            const updated = await Store.update(req.body, {
                where: {id}
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
            const deleted = await Store.destroy({
                where: {id}
            });
    
            if(deleted) {
                res.status(200).send({
                    message: 'Item was successfully deleted'
                });
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

module.exports = new StoreController;