const express = require('express')
const routes = express.Router()

const pesoPetController = require('../controller/PesoController')
const loginValidation = require('../middleware/loginValidation')

//rotas para cadastramento, passando o controller que executa o cadastro
routes.get('/', pesoPetController.index)
routes.get('/:id', pesoPetController.show)
routes.post('/', pesoPetController.store)

module.exports = routes