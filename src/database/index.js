const Sequelize = require('sequelize') //classe
const dbConfig = require('../config/database')

//trazendo models para integração com o banco de dados
const CastracaoPet = require('../models/CastracaoPet')
const GeneroPet = require('../models/GeneroPet')
const PesoPet = require('../models/PesoPet')

const connection = new Sequelize(dbConfig)

//passando a conexão como parametro ao model
CastracaoPet.init(connection)
GeneroPet.init(connection)
PesoPet.init(connection)
/*CastracaoPet.init(connection)
CastracaoPet.init(connection)
CastracaoPet.init(connection)
CastracaoPet.init(connection)*/

module.exports = connection