const {DataTypes} = require('sequelize');
const db = require('../config/database');

const Basket = db.define('baskets', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});

module.exports = Basket;