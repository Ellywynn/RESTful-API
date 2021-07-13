const {Op} = require('sequelize');
const Store = require('../models/Store');

class StoreController {
    async getAllStores(req, res) {
        try {
            const stores = await Store.findAll();
            res.status(200).send({stores});
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
    async getOneStore(req, res) {
        const id = parseInt(req.params.id);
        if(!id) {
            return res.status(404).send('Invalid link');
        }
        try {
            const stores = await Store.findAll({
                where: {
                    store_id: id
                }
            });
            res.status(200).send({stores});
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
    async createStore(req, res) {
        const {address, city} = req.body;

        if(!address || !city) {
            return res.status(400).send('Invalid request body');
        }
        try {
            const store = await Store.create({
                address,
                city
            });
    
            res.status(201).send(store.toJSON());
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
    async updateStore(req, res) {
        const store_id = parseInt(req.params.id);
        const {address, city} = req.body;

        if(!req.body || (!store_id && !address && !city)) {
            return res.status(400).send('Invalid request');
        }

        try {
            const updated = await Store.update(req.body, {
                where: {store_id}
            });
    
            if(updated){
                res.status(200).send();
            } else {
                res.status(500).send({
                    message: `Cannot update of find store with id ${store_id}`
                });
            }
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
    async deleteStore(req, res) {
        const store_id = parseInt(req.params.id);

        if(!store_id) {
            return res.status(400).send('Invalid request');
        }

        try {
            const deleted = await Store.destroy({
                where: {store_id}
            });
    
            if(deleted) {
                res.status(200).send({
                    message: 'Store was successfully deleted'
                });
            } else {
                res.status(500).send({
                    message: `Cannot delete or find store with id ${store_id}`
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