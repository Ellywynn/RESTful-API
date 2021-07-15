const Controller = require('./defaultController');
const models = require('../models/index');

module.exports = {
    authorController: new Controller(models.Author),
    storeController: new Controller(models.Store),
    cityController: new Controller(models.City),
}