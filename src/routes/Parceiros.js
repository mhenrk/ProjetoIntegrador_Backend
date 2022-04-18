const express = require('express')
const routes = express.Router()

const parceiroController = require('../controller/ParceiroController')
const loginValidation = require('../middleware/loginValidation')

//###############################################################
//metodo de validação de login do usuário: "loginValidation.requestLogin"
//sempre que for ser feito o bloqueio a algum recurso por usuario logado deverá ser usado o metodo acima

routes.get('/', parceiroController.index)     //CRUD APENAS
routes.get('/:id', parceiroController.show)  //CRUD APENAS

routes.post('/add', parceiroController.store)
routes.put('/upd/:id', parceiroController.update)
routes.delete('/del/:id', parceiroController.delete)

/**
 * CRIAÇÃO DE USUÁRIO - FINALIZADO
 * GERAÇÃO DO TOKEN E CONTROLE DE LOGIN - FINALIZADO
 * CONTROLE DE ALTERAÇÃO DE DADOS - FINALIZADO
 * OBS: USUARIO PODE TROCAR "QUALQUER" INFORMAÇÃO DESDE QUE NÃO MUDE O EMAIL
 *      SE O USUARIO TROCAR O EMAIL É PRECISO UM NOVO TOKEN (LOGIN) PARA VALIDAÇÃO DO ACESSO 
 * 
 */


module.exports = routes