const {DataTypes} = require('sequelize');
const db = require('../config/database');
const isUnique = require('../lib/isUnique');

const City = db.define('cities', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: isUnique(),
        validate: {isAlpha: {msg: 'City must contain only characters'}}
    },
});

module.exports = City;