const express = require('express')
const routes = express.Router()

const cadUserController = require('../controller/UsuarioController')
const loginValidation = require('../middleware/loginValidation')

//###############################################################
//metodo de validação de login do usuário: "loginValidation.requestLogin"
//sempre que for ser feito o bloqueio a algum recurso por usuario logado deverá ser usado o metodo acima

routes.get('/', cadUserController.index)     //CRUD APENAS
routes.get('/:id', cadUserController.show)  //CRUD APENAS

routes.post('/', cadUserController.store)
routes.put('/', loginValidation.requestLogin, cadUserController.update)
routes.delete('/', loginValidation.requestLogin, cadUserController.delete)

/**
 * CRIAÇÃO DE USUÁRIO - FINALIZADO
 * GERAÇÃO DO TOKEN E CONTROLE DE LOGIN - FINALIZADO
 * CONTROLE DE ALTERAÇÃO DE DADOS - FINALIZADO
 * OBS: USUARIO PODE TROCAR "QUALQUER" INFORMAÇÃO DESDE QUE NÃO MUDE O EMAIL
 *      SE O USUARIO TROCAR O EMAIL É PRECISO UM NOVO TOKEN (LOGIN) PARA VALIDAÇÃO DO ACESSO 
 * 
 */


module.exports = routes