const db = require('../models/index')

const bookModel = db.books;

async function getAllBooks(req, res) {
    try {
        const books = await bookModel.findAll()
        res.status(200).json(books)
    } catch (e) {
        res.status(500).json(e)
        console.log(e);
    }
}

async function addBook(req, res) {
    const bookInfo = req.body;
    try {
        const book = await bookModel.create(bookInfo)
        res.status(200).json({
            message: 'book added successfully',
            data: book
        })
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

async function updateBook(req, res) {
    const bookInfo = req.body;
    const bookId = req.params.id;
    try {
        const book = await bookModel.update(bookInfo, {
            where: {
                id: bookId
            }
        })
        res.status(200).json({
            message: 'book updated successfully',
            data: book
        })
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

async function deleteBook(req, res) {
    const bookId = req.params.id;
    try {
        const book = await bookModel.destroy({
            where: {
                id: bookId
            }
        })
        res.status(200).json({
            message: 'book deleted successfully',
            data: book
        })
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
}