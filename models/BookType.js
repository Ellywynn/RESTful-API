const {DataTypes} = require('sequelize');
const db = require('../config/database');
const isUnique = require('../lib/isUnique');

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
        unique: isUnique(),
        validate: {isAlpha: {msg: 'Book Type must contain only characters'}}
    },
});

module.exports = BookType;