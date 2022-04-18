const express = require('express')
const routes = express.Router()

const cadPetController = require('../controller/PetController')
const loginValidation = require('../middleware/loginValidation')

//###############################################################
routes.get('/', cadPetController.index)       
routes.get('/:id', cadPetController.show)    

routes.post('/add', loginValidation.requestLogin, cadPetController.store)
routes.put('/upd/:id', cadPetController.update)
routes.delete('/del/:id', cadPetController.delete)

module.exports = routes