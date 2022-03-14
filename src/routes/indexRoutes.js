const express = require('express')
const routes = express.Router()

//importando trava de login - middleware
const loginValidation = require('../middleware/loginValidation')

//importando controllers da aplicacao
const CastracaoController = require('../controller/CastracaoController')
const GeneroController = require('../controller/GeneroController')
const PesoController = require('../controller/PesoController')
const RacaController = require('../controller/RacaController')
const TipoController = require('../controller/TipoController')
const CadPetController = require('../controller/CadPetController')
const CadUSerController = require('../controller/CadUSerController')
const TokenController = require('../controller/TokenController')

//rotas para cadastramento, passando o controller que executa o cadastro
routes.post('/castracao', CastracaoController.store)
routes.get('/castracao', CastracaoController.index)
routes.get('/castracao/:id', CastracaoController.show)

routes.post('/genero', GeneroController.store)
routes.get('/genero', GeneroController.index)
routes.get('/genero/:id', GeneroController.show)

routes.post('/peso', PesoController.store)
routes.get('/peso', PesoController.index)
routes.get('/peso/:id', PesoController.show)

routes.post('/raca', RacaController.store)
routes.get('/raca', RacaController.index)
routes.get('/raca/:id', RacaController.show)

routes.post('/tipo', TipoController.store)
routes.get('/tipo', TipoController.index)
routes.get('/tipo/:id', TipoController.show)

//###############################################################
routes.get('/cadpet', CadPetController.index)       //CRUD APENAS
routes.get('/cadpet/:id', CadPetController.show)    //CRUD APENAS

routes.post('/cadpet', CadPetController.store)
routes.put('/cadpet/:id', CadPetController.update)
routes.delete('/cadpet/:id', CadPetController.delete)

//###############################################################
//metodo de validação de login do usuário: "loginValidation.requestLogin"
//sempre que for ser feito o bloqueio a algum recurso por usuario logado deverá ser usado o metodo acima
routes.get('/caduser', CadUSerController.index)     //CRUD APENAS
routes.get('/caduser/:id', CadUSerController.show)  //CRUD APENAS

routes.post('/caduser', CadUSerController.store)
routes.put('/caduser/', loginValidation.requestLogin, CadUSerController.update)
routes.delete('/caduser/', loginValidation.requestLogin, CadUSerController.delete)

/**
 * CRIAÇÃO DE USUÁRIO - FINALIZADO
 * GERAÇÃO DO TOKEN E CONTROLE DE LOGIN - FINALIZADO
 * CONTROLE DE ALTERAÇÃO DE DADOS - FINALIZADO
 * OBS: USUARIO PODE TROCAR "QUALQUER" INFORMAÇÃO DESDE QUE NÃO MUDE O EMAIL
 *      SE O USUARIO TROCAR O EMAIL É PRECISO UM NOVO TOKEN (LOGIN) PARA VALIDAÇÃO DO ACESSO 
 * 
 */

routes.post('/token', TokenController.store)
module.exports = routes