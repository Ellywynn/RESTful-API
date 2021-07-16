const {DataTypes} = require('sequelize');
const db = require('../config/database');
const isUnique = require('../lib/isUnique');

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: isUnique('Username already taken'),
        validate: {isAlphanumeric: {msg: 'Username must contain characters or numbers'}}
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: isUnique('Email already in use'),
        validate: {isEmail: {msg: 'Wrong email format'}}
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    avatar: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    address: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    registered_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: db.literal('CURRENT_TIMESTAMP'),
        validate: {isDate: {msg: 'Registered date must be type of Date'}}
    },
});

module.exports = User;