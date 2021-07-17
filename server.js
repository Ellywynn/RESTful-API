// Initialize environment variables
require('dotenv').config();

const express = require('express');
const session = require('express-session');

const db = require('./config/database');
const routers = require('./routes/routers');

const getUserById = require('./middleware/getUserById');

const app = express();

const SESSION_DURATION = 1000 * 60 * 60 * 24 * 2; // 2 days in ms

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: process.env.SESSION_KEY,
    cookie: {
        maxAge: SESSION_DURATION,
        sameSite: true,
        secure: process.env.NODE_ENV === 'prod'
    }
}));
app.use(getUserById);

// API routes
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

// Routes
app.use('/auth', routers.auth);

app.get('/', (req, res) => {
    const {user} = res.locals;
    res.send(`
    <h1>${user ? 'Authorized!<br>' + JSON.stringify(user, null, 2) : 'Not authorized'}</h1>
    `);
});

const start = async () => {
    try {
        // Application port
        const PORT = process.env.PORT || 5000;
        await db.authenticate();
        await db.sync({force: process.env.NODE_ENV === 'dev'}); // create tables for all models if don't exist
        console.log(`Successfully connected to the database ${process.env.DB_NAME}`);
        app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
        
        if(process.env.NODE_ENV === 'dev') {
            const test = require('./tests/insertData');
            await test();
        }
    } catch (error) {
        console.error(`An error occured while initializing server: ${error.message}`);
    }
}

// run server
start();