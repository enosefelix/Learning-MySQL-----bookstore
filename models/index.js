const { Sequelize, DataTypes } = require('sequelize');
const CONFIG = require('../config/dbConfig');
// console.log({CONFIG})

const bookModel = require('./book')
const authorModel = require('./author')

const sequelize = new Sequelize(CONFIG.DB_NAME, CONFIG.DB_USER, CONFIG.DB_PASSWORD, {
    host: CONFIG.DB_HOST,
    dialect: CONFIG.DB_DIALECT
})

sequelize.authenticate()
    .then(() => {
        console.log('Connection Successsful')
    }).catch((e) => {
    console.log('Error', e)
    })

const db = {}
    
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Add Model
db.books = bookModel(sequelize, DataTypes);
db.authors = authorModel(sequelize, DataTypes);


// force: false - means that your data won't reset when restarting the server
db.sequelize.sync({ force: false })
    .then(() => {
    console.log('Table Synced Successfully')
    }).catch((err) => {
    console.log(err)
    })

    module.exports = db