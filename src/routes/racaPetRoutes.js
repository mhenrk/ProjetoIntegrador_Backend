const express = require('express')
const routes = express.Router()

const racaPetController = require('../controller/RacaController')
const loginValidation = require('../middleware/loginValidation')

routes.get('/', racaPetController.index)
routes.get('/:id', racaPetController.show)
routes.post('/add', racaPetController.store)
routes.put('/upd/:id', racaPetController.update)
routes.delete('/del/:id', racaPetController.delete)

module.exports = routes