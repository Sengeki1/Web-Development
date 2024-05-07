const config = require('./config.js')
const Sequelize = require("sequelize")

const conexaoBD = new Sequelize(
    DB, USER, PASSWORD, {
        dialect: 'postgres',
        host: HOST
    }
)

module.exports = conexaoBD