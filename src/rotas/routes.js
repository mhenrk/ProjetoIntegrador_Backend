const express = require('express')
const routes = express.Router()

//importando controllers da aplicacao
const CastracaoController = require('../controller/CastracaoController')
const GeneroController = require('../controller/GeneroController')
const PesoController = require('../controller/PesoController')
const RacaController = require('../controller/RacaController')
const TipoController = require('../controller/TipoController')
const CadPetController = require('../controller/CadPetController')
const CadUSerController = require('../controller/CadUSerController')

//rotas para cadastramento, passando o controller que executa o cadastro
routes.post('/castracao', CastracaoController.store)
routes.post('/genero', GeneroController.store)
routes.post('/peso', PesoController.store)
routes.post('/raca', RacaController.store)
routes.post('/tipo', TipoController.store)
routes.post('/cadpet', CadPetController.store)
routes.post('/caduser', CadUSerController.store)

module.exports = routes