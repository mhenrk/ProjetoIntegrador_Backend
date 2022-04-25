const db = require("../models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

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

            //validar a consulta dos parceiros aqui

            const user = await db.Usuario.findOne({
                where: { email },
                raw: true
            })
            
            if (!user || user == null) {
                return res.status(401).json({
                    errors: ['Usuario não cadastrado']
                })
            }
            const { id: user_id, email: user_email, nome, is_admin } = user

            //Não encontrou o usuario ou email digitado incorreto

            const validaPassword = bcrypt.compareSync(password, user.password)

            //Encontrou o usuário, mas a senha está incorreta
            //metodo passwordValidado(password) é validado atraves do Model do Cadastro do usuário
            //o objeto do usuário já é retornado atraves do CadUser.findOne()
            if (!validaPassword) {
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
            return res.status(200).send({
                message: 'Usuário Logado',
                id: user_id,
                email: user_email,
                nome,
                is_admin,
                token
            })
        } catch (e) {
            return res.json("Ocorreu um erro: " + e.message)
        }
    }

}

/**
* TOKEN_EXPIRATION possui um padrão em segundos,
* portanto tentar converter o tempo de expiração 
* do token para segundos no arquivo .env
* ou nos seguintes modelos: 7d | 2 days | 10h
*/