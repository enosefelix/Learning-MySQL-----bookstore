const authorController = require('../controllers/authorController');
const express = require('express');


const authorRouter = express.Router()

authorRouter.get('/', authorController.getAllAuthors)
authorRouter.post('/', authorController.addAuthor)
authorRouter.put('/:id', authorController.updateAuthor)
authorRouter.delete('/:id', authorController.deleteAuthor)


module.exports = authorRouter;