const Sequelize = require('sequelize') //classe
const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig)

module.exports = connection