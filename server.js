// initialize environment variables
require('dotenv').config();

const express = require('express');
const db = require('./config/database');
const routers = require('./routes/routers');

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/api/store', routers.store);
app.use('/api/city', routers.city);
app.use('/api/author', routers.author);
app.use('/api/user/group', routers.userGroup);
app.use('/api/user/role', routers.role);
app.use('/api/user', routers.user);
app.use('/api/genre', routers.genre);
app.use('/api/language', routers.language);
app.use('/api/order', routers.order);
app.use('/api/promotion', routers.promotion);
app.use('/api/employee/position', routers.employeePos);
app.use('/api/employee', routers.employee);
app.use('/api/book/type', routers.bookType);
app.use('/api/book', routers.book);
app.use('/api/basket/books', routers.basketBook);
app.use('/api/basket', routers.basket);

const start = async () => {
    try {
        await db.authenticate();
        await db.sync(/* {force: process.env.NODE_ENV === 'dev'} */); // create tables for all models if don't exist
        console.log(`Successfully connected to the database ${process.env.DB_NAME}`);
        app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
    } catch (error) {
        console.error(`An error occured while initializing server: ${error.message}`);
    }
}

// run server
start();