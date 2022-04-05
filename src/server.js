const express = require('express')
const app = express()

const castracaoRoutes = require('./routes/castracaoRoutes')
const pesoPetRoutes = require('./routes/pesoPetRoutes')
const racaPetRoutes = require('./routes/racaPetRoutes')
const tipoPetRoutes = require('./routes/tipoPetRoutes')
const generoPetRoutes = require('./routes/generoPetRoutes')
const cadastraPetRoutes = require('./routes/cadastraPetRoutes')
const cadastraUserRoutes = require('./routes/cadastraUserRoutes')
const tokenRoutes = require('./routes/tokenRoutes')

//chamando o arquivo index da base de dados
require('./database')

//Chamando arquivo de configuração global
require('dotenv').config()

//rotas da aplicação - remover se estiver tudo ok
app.use(express.json())

//tratamento de requisições de formulários - body
//realiza o tratamento de requisições passadas pelo body
//isso evita que o body recebido por formulário venha undefined
app.use(express.urlencoded({extended: true}))

//app.use('/', homeRoutes)
app.use('/petshop/castracao-pet/', castracaoRoutes)
app.use('/petshop/raca-pet/', racaPetRoutes)
app.use('/petshop/tipo-pet/', tipoPetRoutes)
app.use('/petshop/genero-pet/', generoPetRoutes)
app.use('/petshop/peso-pet/', pesoPetRoutes)
app.use('/petshop/cadastra-pet/', cadastraPetRoutes)
app.use('/petshop/cadastra-user/', cadastraUserRoutes)
app.use('/petshop/token/', tokenRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server Rodando em https://localhost:${process.env.PORT}`)
})
