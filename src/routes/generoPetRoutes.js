const express = require('express')
const routes = express.Router()

const generoPetController = require('../controller/GeneroController')
const loginValidation = require('../middleware/loginValidation')

routes.get('/', generoPetController.index)
routes.get('/:id', generoPetController.show)
routes.post('/add', generoPetController.store)
routes.put('/upd/:id', generoPetController.update)
routes.delete('/del/:id', generoPetController.delete)

module.exports = routes