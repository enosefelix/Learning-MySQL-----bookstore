module.exports = (sequelize, DataTypes) => {
    // Book Model
    const authorModel = sequelize.define('Author', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        born: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'authors'
    })
    return authorModel
}