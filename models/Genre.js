const {DataTypes} = require('sequelize');
const db = require('../config/database');

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
        unique: true
    },
});

module.exports = Genre;