const {DataTypes} = require('sequelize');
const db = require('../config/database');

const BasketBook = db.define('basket_book', {
    count: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
});

module.exports = BasketBook;