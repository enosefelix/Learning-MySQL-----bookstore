const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./routes/books');
const authorRouter = require('./routes/authors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json())

app.use('/books', bookRouter);
app.use('/authors', authorRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the book and author API....go to /books to get books, and /authors to get authors')
})

app.use((e, req, res, next) => {
    console.log(e)
    res.status(500).json({
        e: e.message
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})