const express = require('express')
const routes = express.Router()

const tokenController = require('../controller/TokenController')
const loginValidation = require('../middleware/loginValidation')

routes.post('/', tokenController.store)

module.exports = routes