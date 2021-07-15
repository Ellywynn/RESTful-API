const {DataTypes} = require('sequelize');
const db = require('../config/database');

const Author = db.define('authors', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isAlpha: {msg: 'Name must contain only characters'}}
    },
});

module.exports = Author;