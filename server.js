const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const db = require('./config/database');
const controllers = require('./controllers/index');
const defaultRouter = require('./routes/router');

const app = express();

const storeRouter = defaultRouter(controllers.storeController);
const cityRouter = defaultRouter(controllers.cityController);
const authorRouter = defaultRouter(controllers.authorController);

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/store', storeRouter);
app.use('/api/city', cityRouter);
app.use('/api/author', authorRouter);

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

// run server
start();