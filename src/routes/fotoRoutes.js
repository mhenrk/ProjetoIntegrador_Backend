const routes = require('express').Router()

const fotoController = require('../controller/FotoController')
const loginValidation = require('../middleware/loginValidation')

routes.post('/add/', fotoController.store)
// routes.post('/add/:id', fotoController.store)
// routes.put('/:id', fotoController.update)
// routes.delete('/:id', fotoController.delete)

module.exports = routes