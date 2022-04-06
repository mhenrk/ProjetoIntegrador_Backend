const express = require('express')
const routes = express.Router()

const servicoController = require('../controller/servicoController')
const loginValidation = require('../middleware/loginValidation')

//###############################################################
routes.get('/', servicoController.index)
// routes.get('/', servicoController.show)
routes.post('/', servicoController.store)
routes.put('/', servicoController.update)
routes.delete('/', servicoController.delete)

module.exports = routes