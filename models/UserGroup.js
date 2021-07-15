const {DataTypes} = require('sequelize');
const db = require('../config/database');

const UserGroup = db.define('groups', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    group: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});

module.exports = UserGroup;