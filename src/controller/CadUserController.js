const CadUser = require("../models/CadUser")

module.exports = {
    async store(req, res) {
        const {
            nome,
            sobrenome,
            email,
            cpf,
            datanasc,
            senha,
            telefone,
            cep,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            pet_id
        } = req.body

        try {
            //faço teste para tentar criar um novo usuário, caso não consiga, ele me mostra o erro informado na chave message do objeto errors
            const cadUser = await CadUser.create({
                nome,
                sobrenome,
                email,
                cpf,
                datanasc,
                senha,
                telefone,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                estado,
                pet_id
            })

            return res.json(cadUser)
        } catch (e) {
            res.status(400).json(
                {
                    errors: e.errors.map((err) => err.message)
                    //mapeando todo conjunto de erros que podem aparecer na aplicação
                }
            )
        }
    }
}

