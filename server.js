const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const db = require('./config/database');
const models = require('./models');

const app = express();

const storeRouter = require('./routes/store');
const cityRouter = require('./routes/city');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/store', storeRouter);
app.use('/api/city', cityRouter);

const start = async () => {
    try {
        await db.authenticate();
        await db.sync({alter: true}); // create tables for all models if don't exist
        console.log(`Successfully connected to the database ${process.env.DB_NAME}`);
        app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
    } catch (error) {
        console.error(`An error occured while initializing server: ${error.message}`);
    }
}

// testing dev branch

// run server
start();