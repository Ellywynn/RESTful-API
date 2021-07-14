const {DataTypes} = require('sequelize');
const db = require('../config/database');

const BookType = db.define('book_types', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});

module.exports = BookType;