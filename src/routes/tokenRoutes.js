const express = require('express')
const routes = express.Router()

const tokenController = require('../controller/TokenController')

routes.post('/', tokenController.store)

module.exports = routes