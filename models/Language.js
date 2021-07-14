const {DataTypes} = require('sequelize');
const db = require('../config/database');

const Language = db.define('languages', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});

module.exports = Language;