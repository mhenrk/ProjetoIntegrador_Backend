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
    }
}