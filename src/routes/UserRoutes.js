const express = require('express')
const routes = express.Router()

const cadUserController = require('../controller/UsuarioController')
const loginValidation = require('../middleware/loginValidation')

routes.get('/', cadUserController.index)
routes.get('/:id', cadUserController.show)

routes.post('/add', cadUserController.store)
routes.put('/upd', loginValidation.requestLogin, cadUserController.update)
routes.delete('/del', cadUserController.delete)

routes.post('/finduser', cadUserController.findUser)

module.exports = routes