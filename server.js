require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/database');

const storeRouter = require('./routes/store');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/store', storeRouter);

const start = async () => {
    try {
        app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
        await db.authenticate();
        await db.sync(); // create tables for all models if don't exist
        console.log(`Successfully connected to the database ${process.env.DB_NAME}`);
    } catch (error) {
        console.error(`An error occured while initializing server: ${error.message}`);
    }
}

// run server
start();