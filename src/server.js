const express = require('express')
const routes = require('./routes/indexRoutes')

//chamando o arquivo index da base de dados
require('./database')

//Chamando arquivo de configuração global
require('dotenv').config()

const app = express()

app.use(express.json())

//rotas da aplicação
app.use(routes)

app.listen(process.env.PORT)
