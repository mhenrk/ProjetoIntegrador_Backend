const express = require('express')
const routes = express.Router()

// removido ../controller/ServicoController
const servicoController = require('../controller/ServicoController')
const loginValidation = require('../middleware/loginValidation')

routes.get('/', servicoController.index)
routes.post('/add', servicoController.store)
routes.put('/upd/:id', servicoController.update)
routes.delete('/del/:id', servicoController.delete)

module.exports = routes