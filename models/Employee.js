const {DataTypes} = require('sequelize');
const db = require('../config/database');

const Employee = db.define('employees', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isAlpha: {msg: 'Name must contain only characters'}}
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isAlpha: {msg: 'Surname must contain only characters'}}
    },
    patronymic: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isAlpha: {msg: 'Patronymic must contain only characters'}}
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {isNumeric: {msg: 'Age must contain only numbers'}}
    },
    hired_at: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {isDate: {msg: 'Order time must be type of Date'}}
    },
    telephone: {
        type: DataTypes.CHAR(10),
        allowNull: false,
        validate: {isNumeric: {msg: 'Telephone must contain only numbers'}}
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isEmail: {msg: 'Wrong email format'}}
    },
});

module.exports = Employee;