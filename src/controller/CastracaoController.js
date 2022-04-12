const db = require("../models")

module.exports = {
    async store(req,res) {
        const { situacao } = req.body

        const castracaoPet = await db.Castracao.create({ situacao })

        return res.status(200).json(castracaoPet)
    },

    async index(req,res){
        try {
            const petsCastrados = await db.Castracao.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(petsCastrados)
        } catch (error) {
            console.log(error)
            return res.status(404).json(null)
        }
    },

    async show(req,res){
        try {
            const showPetCastrado = await db.Castracao.findByPk(req.params.id, {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(showPetCastrado)
        } catch (error) {
            return res.status(404).json(null)
        }
    },

    async update(req, res) {
        console.log(req.params.id)
        try {
            if (!req.params.id) {
                res.status(400).json({
                    errors: ['Id não enviado']
                })
            }

            const idCastracao = await db.Castracao.findByPk(req.params.id)

            if (!idCastracao) {
                return res.status(400).json({
                    errors: ['Registro não encontrado']
                })
            }

            const atualizaRegistro = await idCastracao.update(req.body)

            return res.json(atualizaRegistro)
        } catch (error) {
            res.status(500).json({
                errors: ['Foi encontrado um erro: ' + error]
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

            const castracaoPk = await db.Castracao.findByPk(req.params.id)

            if (!castracaoPk) {
                return res.status(400).json({
                    errors: ['Registro não encontrado']
                })
            }

            await castracaoPk.destroy()

            return res.json(castracaoPk)
        } catch (e) {
            res.status(500).json({
                    errors: ['Erro Inexperado']
                }
            )
        }
    }
}