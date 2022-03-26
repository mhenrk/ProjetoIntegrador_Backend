const routes = require('express').Router()

const fotoController = require('../controller/FotoController')
const loginValidation = require('../middleware/loginValidation')

routes.post('/', fotoController.store)

module.exports = routes