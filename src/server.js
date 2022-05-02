const express = require('express')
const app = express()
const cors = require('cors')

const castracaoRoutes = require('../src/routes/castracaoRoutes')
const pesoPetRoutes = require('../src/routes/pesoPetRoutes')
const racaPetRoutes = require('../src/routes/racaPetRoutes')
const tipoPetRoutes = require('../src/routes/tipoPetRoutes')
const generoPetRoutes = require('../src/routes/generoPetRoutes')
const cadastraPetRoutes = require('./routes/PetRoutes')
const cadastraUserRoutes = require('./routes/UserRoutes')
const tokenRoutes = require('../src/routes/tokenRoutes')
const fotoRoutes = require('../src/routes/fotoRoutes')
const servicosRoutes = require('../src/routes/servicosRoutes')
const parceiroRoutes = require('../src/routes/Parceiros')

require('dotenv').config()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: `${process.env.FRONT_URL}`
}))

//app.use('/', homeRoutes)
app.use('/petshop/castracao/', castracaoRoutes) //ok
app.use('/petshop/raca/', racaPetRoutes) //ok
app.use('/petshop/tipo/', tipoPetRoutes) //ok
app.use('/petshop/genero/', generoPetRoutes) //ok
app.use('/petshop/peso/', pesoPetRoutes) //ok
app.use('/petshop/pet/', cadastraPetRoutes)
app.use('/petshop/usuario/', cadastraUserRoutes)
app.use('/petshop/token/', tokenRoutes)
app.use('/petshop/foto/', fotoRoutes)
app.use('/petshop/servicos/', servicosRoutes)
app.use('/petshop/parceiros/', parceiroRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server Backend: http://localhost:${process.env.PORT}`)
})
