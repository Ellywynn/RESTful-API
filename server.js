const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send({message:'hello world!'});
})

const start = async () => {
    try {
        app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
    } catch (error) {
        console.error(error);
    }
}

start();