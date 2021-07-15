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
        validate: {
            isAlphanumeric: {msg: 'Password must contain characters or numbers'},
            len: {
                args: [8, 20],
                msg: 'Password must be 8 to 20 characters long'
            }
        }
    },
    avatar: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    address: {
        type: DataTypes.STRING
    },
    registered_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        validate: {isDate: {msg: 'Register date must be type of Date'}}
    },
});

module.exports = User;