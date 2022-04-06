const express = require('express')
const routes = express.Router()

const generoPetController = require('../controller/GeneroController')
const loginValidation = require('../middleware/loginValidation')

//rotas para cadastramento, passando o controller que executa o cadastro
routes.get('/', generoPetController.index)
routes.get('/:id', generoPetController.show)
routes.post('/', generoPetController.store)
routes.put('/', generoPetController.update)
routes.delete('/', generoPetController.delete)

module.exports = routes