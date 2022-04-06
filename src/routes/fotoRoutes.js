const routes = require('express').Router()

const fotoController = require('../controller/FotoController')
const loginValidation = require('../middleware/loginValidation')

routes.post('/', fotoController.store)
routes.get('/', fotoController.index)
routes.put('/', fotoController.update)
routes.delete('/', fotoController.delete)

module.exports = routes