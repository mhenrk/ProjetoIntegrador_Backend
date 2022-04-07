const express = require('express')
const routes = express.Router()

const servicoController = require('../controller/servicoController')
const loginValidation = require('../middleware/loginValidation')

//###############################################################
routes.get('/', servicoController.index)
// routes.get('/', servicoController.show)
routes.post('/', servicoController.store)
routes.put('/:id', servicoController.update)
routes.delete('/:id', servicoController.delete)

module.exports = routes