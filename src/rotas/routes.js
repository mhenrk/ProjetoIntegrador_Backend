const express = require('express')
const routes = express.Router()

//importando controller de castracao do pet
const CastracaoController = require('../controller/CastracaoController')
const GeneroController = require('../controller/GeneroController')

routes.post('/castracao', CastracaoController.store)
routes.post('/genero', GeneroController.store)

module.exports = routes