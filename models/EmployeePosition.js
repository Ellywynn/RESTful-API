const {DataTypes} = require('sequelize');
const db = require('../config/database');
const isUnique = require('../lib/isUnique');

const EmployeePosition = db.define('employee_positions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: isUnique(),
        validate: {isAlpha: {msg: 'Genre must contain only characters'}}
    },
});

module.exports = EmployeePosition;