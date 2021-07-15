const {DataTypes} = require('sequelize');
const db = require('../config/database');

const Book = db.define('books', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isAlphanumeric: {msg: 'Title must contain only characters or numbers'}}
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {isDecimal: {msg: 'Price must contain only decimal numbers'}}
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isAlphanumeric: {msg: 'Description must contain only characters or numbers'},
            len: {
                args: [15, 400],
                msg: 'Description length must be 15 to 400 characters long'
            }
        }
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            isNumeric: {msg: 'Year must be a number'},
            max: {
                args: 2100,
                msg: 'Year cannot be greater than 2100'
            },
            min: {
                args: 0,
                msg: 'Year cannot be less than 0'
            }
        }
    },
});

module.exports = Book;