const {DataTypes} = require('sequelize');
const db = require('../config/database');

const BasketBook = db.define('basket_book', {
    count: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        validate: {isNumeric: {msg: 'Count must be a number'}}
    }
});

module.exports = BasketBook;