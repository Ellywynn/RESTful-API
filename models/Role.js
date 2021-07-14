const {DataTypes} = require('sequelize');
const db = require('../config/database');

const Role = db.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Role;