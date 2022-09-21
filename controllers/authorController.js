const db = require('../models/index')

const authorModel = db.authors;

async function getAllAuthors(req, res) {
    try {
        const authors = await authorModel.findAll()
        res.status(200).json(authors)
    } catch (e) {
        res.status(500).json(e)
        console.log(e);
    }
}

async function addAuthor(req, res) {
    const authorInfo = req.body;
    try {
        const author = await authorModel.create(authorInfo)
        res.status(200).json({
            message: 'author added successfully',
            data: author
        })
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

async function updateAuthor(req, res) {
    const authorInfo = req.body;
    const authorId = req.params.id;
    try {
        const author = await authorModel.update(authorInfo, {
            where: {
                id: authorId
            }
        })
        res.status(200).json({
            message: 'author updated successfully',
            data: author
        })
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

async function deleteAuthor(req, res) {
    const authorId = req.params.id;
    try {
        const author = await authorModel.destroy({
            where: {
                id: authorId
            }
        })
        res.status(200).json({
            message: 'author deleted successfully',
            data: author
        })
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

module.exports = {
    getAllAuthors,
    addAuthor,
    updateAuthor,
    deleteAuthor
}