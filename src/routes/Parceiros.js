const express = require('express')
const routes = express.Router()

const parceiroController = require('../controller/ParceiroController')
const loginValidation = require('../middleware/loginValidation')

routes.get('/', parceiroController.index)
routes.get('/:id', parceiroController.show)
routes.post('/add', parceiroController.store)
routes.put('/upd/:id', parceiroController.update)
routes.delete('/del/:id', parceiroController.delete)

module.exports = routes