const express = require('express')
const routes = express.Router()

const castracaoPetController = require('../controller/CastracaoController')
const loginValidation = require('../middleware/loginValidation')

routes.get('/', castracaoPetController.index)
routes.get('/:id', castracaoPetController.show)
routes.post('/add', castracaoPetController.store)
routes.put('/upd/:id', castracaoPetController.update)
routes.delete('/del/:id', castracaoPetController.delete)

module.exports = routes