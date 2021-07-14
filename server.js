import express from 'express';
import dotenv from 'dotenv';
import db from './config/database';
const app = express();

dotenv.config();

import storeRouter from './routes/store';

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/store', storeRouter);

const start = async () => {
    try {
        await db.authenticate();
        await db.sync(); // create tables for all models if don't exist
        console.log(`Successfully connected to the database ${process.env.DB_NAME}`);
        app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
    } catch (error) {
        console.error(`An error occured while initializing server: ${error.message}`);
    }
}

// run server
start();