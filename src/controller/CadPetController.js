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
            peso_pet_id,
            usuarioId
        } = req.body

        try {

            const cadPet = await CadPet.create({
                nome_pet,
                apelido_pet,
                raca_pet_id,
                tipo_pet_id,
                datanasc_pet,
                idade_pet,
                genero_pet_id,
                pet_castrado_id,
                peso_pet_id,
                usuarioId
            })

            return res.json(cadPet)

        } catch (e) {
            res.status(400).json(
                {
                    errors: e.errors.map((err) => err.message)
                }
            )
        }
    },

    //Index
    async index(req, res) {
        try {
            const listarPets = await CadPet.findAll()
            return res.json(listarPets)
        } catch (error) {
            return res.json(null)
        }
    },

    //show
    async show(req, res) {
        try {
            const showPet = await CadPet.findByPk(req.params.id)
            return res.json(showPet)
        } catch (error) {
            return res.json(null)
        }
    },

    async update(req, res) {
        try {
            if (!req.params.id) {
                res.status(400).json({
                    errors: ['Id não enviado']
                })
            }

            const pet = await CadPet.findByPk(req.params.id)

            if (!pet) {
                return res.status(400).json({
                    errors: ['Usuário não encontrado']
                })
            }

            const updatedPet = await pet.update(req.body)

            return res.json(updatedPet)
        } catch (error) {
            res.status(400).json(
                {
                    errors: e.errors.map((err) => err.message)
                }
            )
        }
    },

    async delete(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({
                    errors: ['Id não enviado']
                })
            }

            const pet = await CadPet.findByPk(req.params.id)

            if (!pet) {
                return res.status(400).json({
                    errors: ['Pet não Cadastrado']
                })
            }

            await pet.destroy()

            return res.json(pet)
        } catch (error) {
            res.status(400).json(
                {
                    errors: e.errors.map((err) => err.message)
                }
            )
        }
    }
}

