const {DataTypes} = require('sequelize');
const db = require('../config/database');

const EmployeePosition = db.define('employee_positions', {
    position_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = EmployeePosition;