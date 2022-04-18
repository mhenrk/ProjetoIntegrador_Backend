const express = require('express')
const routes = express.Router()

const tipoPetController = require('../controller/TipoController')
const loginValidation = require('../middleware/loginValidation')

//###############################################################
routes.get('/', tipoPetController.index)       
routes.get('/:id', tipoPetController.show)    
routes.post('/add', tipoPetController.store)
routes.put('//upd/:id', tipoPetController.update)
routes.delete('/del/:id', tipoPetController.delete)


module.exports = routes