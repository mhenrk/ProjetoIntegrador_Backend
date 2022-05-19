const express = require('express')
const routes = express.Router()

const pesoPetController = require('../controller/PesoController')
const loginValidation = require('../middleware/loginValidation')

routes.get('/', pesoPetController.index)
routes.get('/:id', pesoPetController.show)
routes.post('/add', pesoPetController.store)
routes.put('/upd/:id', pesoPetController.update)
routes.delete('/del/:id', pesoPetController.delete)

module.exports = routes