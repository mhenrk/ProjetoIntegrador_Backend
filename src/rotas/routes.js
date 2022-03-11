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
routes.get('/castracao', CastracaoController.index)
routes.get('/castracao/:id', CastracaoController.show)

routes.post('/genero', GeneroController.store)
routes.get('/genero', GeneroController.index)
routes.get('/genero/:id', GeneroController.show)

routes.post('/peso', PesoController.store)
routes.get('/peso', PesoController.index)
routes.get('/peso/:id', PesoController.show)

routes.post('/raca', RacaController.store)
routes.get('/raca', RacaController.index)
routes.get('/raca/:id', RacaController.show)

routes.post('/tipo', TipoController.store)
routes.get('/tipo', TipoController.index)
routes.get('/tipo/:id', TipoController.show)

routes.post('/cadpet', CadPetController.store)
routes.get('/cadpet', CadPetController.index)
routes.get('/cadpet/:id', CadPetController.show)
routes.put('/cadpet/:id', CadPetController.update)

routes.post('/caduser', CadUSerController.store)
routes.get('/caduser', CadUSerController.index)
routes.get('/caduser/:id', CadUSerController.show)
routes.put('/caduser/:id', CadUSerController.update)
routes.delete('/caduser/:id', CadUSerController.delete)

module.exports = routes