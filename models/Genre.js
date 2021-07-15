const {DataTypes} = require('sequelize');
const db = require('../config/database');
const isUnique = require('../lib/isUnique');

const Genre = db.define('genres', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: isUnique(),
        validate: {isAlpha: {msg: 'Genre must contain only characters'}}
    },
});

module.exports = Genre;