const express = require('express')
const routes = express.Router()

const cadPetController = require('../controller/PetController')
const loginValidation = require('../middleware/loginValidation')

//###############################################################
routes.get('/', cadPetController.index)       
routes.get('/:id', cadPetController.show)    

routes.post('/', loginValidation.requestLogin, cadPetController.store)
routes.put('/:id', cadPetController.update)
routes.delete('/:id', cadPetController.delete)

module.exports = routes