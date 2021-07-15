const {DataTypes} = require('sequelize');
const db = require('../config/database');

const Promotion = db.define('promotions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    promotion: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {isFloat: {msg: 'Promotion must contain only floating numbers'}}
    },
});

module.exports = Promotion;