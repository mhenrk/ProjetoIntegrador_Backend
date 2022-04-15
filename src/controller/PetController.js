const db = require('../models')

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
            usuario_id = req.id
        } = req.body

        try {

            const cadPet = await db.Pet.create({
                nome_pet,
                apelido_pet,
                raca_pet_id,
                tipo_pet_id,
                datanasc_pet,
                idade_pet,
                genero_pet_id,
                pet_castrado_id,
                peso_pet_id,
                usuario_id
            })

            return res.json(cadPet)

        } catch (e) {
            console.log(e)
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
            const listarPets = await db.Pet.findAll({
                include: [
                    {
                        model: db.Tipo,
                        as: 'tipo',
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.Raca,
                        as: 'raca',
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.Peso,
                        as: 'peso',
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.Genero,
                        as: 'genero',
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.Castracao,
                        as: 'castracao',
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt']
                        }
                    }
                ],
                attributes: {
                    exclude: ['raca_pet_id', 'tipo_pet_id', 'genero_pet_id', 'pet_castrado_id', 'peso_pet_id', 'usuario_id', 'createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(listarPets)
        } catch (error) {
            console.log(error)
            return res.status(404).json(error)
        }
    },

    //show
    async show(req, res) {
        try {
            const showPet = await db.Pet.findByPk(req.params.id, {
                include: [
                    {
                        model: db.Tipo,
                        as: 'tipo',
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.Raca,
                        as: 'raca',
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.Peso,
                        as: 'peso',
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.Genero,
                        as: 'genero',
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.Castracao,
                        as: 'castracao',
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt']
                        }
                    }
                ],
                attributes: {
                    exclude: ['raca_pet_id', 'tipo_pet_id', 'genero_pet_id', 'pet_castrado_id', 'peso_pet_id', 'usuario_id', 'createdAt', 'updatedAt']
                }
            })
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

            const pet = await db.Pet.findByPk(req.params.id)

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

            const pet = await db.Pet.findByPk(req.params.id)

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

