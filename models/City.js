const {DataTypes} = require('sequelize');
const db = require('../config/database');

const City = db.define('cities', {
    city_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = City;