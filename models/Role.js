const {DataTypes} = require('sequelize');
const db = require('../config/database');
const isUnique = require('../lib/isUnique');

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
        unique: isUnique(),
        validate: {isAlpha: {msg: 'Role must contain only characters'}}
    }
});

module.exports = Role;