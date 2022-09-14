const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'pass1234',
    database: 'checkInOut',
    port: 5432,
    logging: false
})

module.exports = { db, DataTypes }