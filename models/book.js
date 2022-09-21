module.exports = (Sequelize, DataTypes) => {
    // Book Model
    const bookModel = Sequelize.define('Book', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ISBN: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'books'
    })
    return bookModel
}