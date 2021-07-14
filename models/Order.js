const {DataTypes} = require('sequelize');
const db = require('../config/database');

const Order = db.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    order_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    items: {
        type: DataTypes.JSON,
        allowNull: false
    }
});

module.exports = Order;