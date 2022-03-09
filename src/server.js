const express = require('express')
const routes = require('./rotas/routes')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333)
