const express = require('express')
const routes = express.Router()

const servicoController = require('../controller/servicoController')
const loginValidation = require('../middleware/loginValidation')

//###############################################################
routes.get('/', servicoController.index)
// routes.get('/', servicoController.show)
routes.post('/add', servicoController.store)
routes.put('/upd/:id', servicoController.update)
routes.delete('/del/:id', servicoController.delete)

module.exports = routes