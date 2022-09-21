const bookController = require('../controllers/bookController');
const express = require('express');


const bookRouter = express.Router()

bookRouter.get('/', bookController.getAllBooks)
bookRouter.post('/', bookController.addBook)
bookRouter.put('/:id', bookController.updateBook)
bookRouter.delete('/:id', bookController.deleteBook)


module.exports = bookRouter;