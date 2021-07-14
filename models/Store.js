const {DataTypes} = require('sequelize');
const db = require('../config/database');

const Store = db.define('stores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Store;