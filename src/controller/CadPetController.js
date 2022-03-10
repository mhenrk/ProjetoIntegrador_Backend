const CadPet = require("../models/CadPet")

module.exports = {
    async store(req, res) {
        const {
            nome_pet,
            apelido_pet,
            raca_pet_id,
            tipo_pet_id,
            datanasc_pet,
            idade_pet,
            genero_pet_id,
            pet_castrado_id,
            peso_pet_id
        } = req.body

        const cadPet = await CadPet.create({
            nome_pet,
            apelido_pet,
            raca_pet_id,
            tipo_pet_id,
            datanasc_pet,
            idade_pet,
            genero_pet_id,
            pet_castrado_id,
            peso_pet_id
        })

        return res.json(cadPet)
    }
}