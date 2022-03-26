const CadUser = require("../models/CadUser")
const jwt = require('jsonwebtoken')

module.exports = {

    async store(req, res) {
        try {
            //Do Formulário, eu capturo Email/Senha
            const { email, password } = req.body

            //Tentou logar sem passar um dos parametros
            if (!email || !password) {
                return res.status(401).json({
                    errors: ['Credenciais Inválidas']
                })
            }

            //Enviou Email/Senha, eu procuro o usuário na tabela pelo campo login, estruturado conforme o model
            const user = await CadUser.findOne({
                where: { email }
            })

            //Não encontrou o usuario ou email digitado incorreto
            if (!user) {
                return res.status(401).json({
                    errors: ['Usuario não cadastrado']
                })
            }

            //Encontrou o usuário, mas a senha está incorreta
            //metodo passwordValidado(password) é validado atraves do Model do Cadastro do usuário
            //o objeto do usuário já é retornado atraves do CadUser.findOne()
            if (!(await user.passwordValidado(password))) {
                return res.status(401).json({
                    errors: ['Senha Inválida']
                })
            }

            //Se digitado Email/Senha corretamente é gerado o token
            //o objeto do usuário já é retornado atraves do CadUser.findOne()
            const { id } = user
            const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
                expiresIn: process.env.TOKEN_EXPIRATION
                /**
                 * TOKEN_EXPIRATION possui um padrão em segundos,
                 * portanto tentar converter o tempo de expiração 
                 * do token para segundos no arquivo .env
                 * ou nos seguintes modelos: 7d | 2 days | 10h
                */

            })

            //retorno do objeto chave:valor com o token - momentaneo
            return res.json({ token })
        } catch (error) {
            return res.json("Ocorreu um erro: " + error.message)
        }
    }

}