const db = require("../models")
const bcryptjs = require("bcryptjs")

module.exports = {
    async store(req, res) {
        const {
            nome,
            email,
            password
        } = req.body

        const passwordHash = bcryptjs.hashSync(password, 8)

        try {
            //faço teste para tentar criar um novo usuário, caso não consiga, ele me mostra o erro informado na chave message do objeto errors
            const cadUser = await db.Usuario.create({
                nome,
                email,
                password: passwordHash
            })
            return res.status(200).json({ nome, email, password })
    } catch(e) {
        console.log(e)
        return res.status(400).json(
            {
                errors: e.errors.map((err) => err.message)
                //mapeando todo conjunto de erros que podem aparecer na aplicação
            }
        )
    }
},

    //Index
    async index(req, res) {
    try {
        const usuarios = await db.Usuario.findAll({
            include: [
                {
                    model: db.Pet,
                    as: 'pet',
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
                }
            ],
            attributes: {
                exclude: ['is_admin', 'cpf', 'password', 'cep', 'rua', 'numero', 'bairro', 'createdAt', 'updatedAt']
            }
        })
        return res.status(200).json(usuarios)
    } catch (error) {
        return res.status(404).json({
            errors: ['Usuários não encontrados']
        })
    }
},

    //show
    async show(req, res) {
    try {
        const showUser = await db.Usuario.findByPk(req.params.id, {
            include: [
                {
                    model: db.Pet,
                    as: 'pet',
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
                }
            ],
            attributes: {
                exclude: ['is_admin', 'cpf', 'password', 'cep', 'rua', 'numero', 'bairro', 'createdAt', 'updatedAt']
            }
        })

        // const { id, nome, email, telefone } = showUser

        return res.status(200).json(showUser)
    } catch (error) {
        return res.status(404).json("Ocorreu um erro: " + error.message)

    }
},

    async update(req, res) {
    try {
        const userID = await db.Usuario.findByPk(req.id)

        if (!userID) {
            return res.status(400).json({
                errors: ['Usuário não encontrado']
            })
        }

        const updatedUser = await userID.update(req.body)

        return res.json(updatedUser)
    } catch (error) {
        res.status(400).json(
            {
                errors: e.errors.map((err) => err.message)
            }
        )
    }
},

    async delete (req, res) {
    try {
        const userID = await db.Usuario.findByPk(req.id)

        if (!userID) {
            return res.status(400).json({
                errors: ['Usuário não encontrado']
            })
        }

        await userID.destroy()

        return res.json(userID)
    } catch (error) {
        res.status(400).json(
            {
                errors: e.errors.map((err) => err.message)
            }
        )
    }
}
}

