const {DataTypes} = require('sequelize');
const db = require('../config/database');

const Employee = db.define('employees', {
    employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    patronymic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hired_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    telephone: {
        type: DataTypes.CHAR(10),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Employee;