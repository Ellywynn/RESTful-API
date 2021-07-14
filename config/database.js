import {Sequelize} from 'sequelize';

const DB_NAME = process.env.DB_NAME,
      DB_PASSWORD = process.env.DB_PASSWORD,
      DB_USER = process.env.DB_USER,
      DB_HOST = process.env.DB_HOST,
      DB_PORT = process.env.DB_PORT,
      DB_DIALECT = process.env.DB_DIALECT;

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    define: {
        freezeTableName: true,
        timestamps: false
    },
    logging: process.env.NODE_ENV == 'dev' ? console.log() : false
});

export default db;