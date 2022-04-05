const express = require('express')
const routes = express.Router()

const castracaoPetController = require('../controller/CastracaoController')
const loginValidation = require('../middleware/loginValidation')

//rotas para cadastramento, passando o controller que executa o cadastro
routes.get('/', castracaoPetController.index)
routes.get('/:id', castracaoPetController.show)
routes.post('/', castracaoPetController.store)

module.exports = routes