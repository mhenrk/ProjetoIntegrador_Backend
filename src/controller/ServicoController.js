const db = require('../models')
const { Op } = require('sequelize')

module.exports = {
    async store(req, res) {
        try {
            const { nome, tempo, preco } = req.body

            const servico = await db.Servico.create({ nome, tempo, preco })

            return res.status(200).json(servico)
        } catch (error) {
            return res.status(400).json(
                {
                    errors: ['Dados Inválidos']
                }
            )
        }
    },

    async index(req, res) {
        try {
            const pesq = req.query.pesq

            if (!pesq) {
                const buscaServico = await db.Servico.findAll()
                return res.status(200).json(buscaServico)
            }

            const buscaServico = await db.Servico.findAll({
                where: {
                    nome: {
                        [Op.like]: `${pesq}`
                    }
                }

            })
            return res.status(200).json(buscaServico)
        
        } catch (error) {
            return res.status(404).json(null)
        }
    },

    async update(req, res) {
        try {
            if (!req.params.id) {
                res.status(400).json({
                    errors: ['Id não enviado']
                })
            }

            const servicoPk = await db.Servico.findByPk(req.params.id)

            if (!servicoPk) {
                return res.status(400).json({
                    errors: ['Serviço não encontrado']
                })
            }

            const servicoUpdate = await servicoPk.update(req.body)

            return res.json(servicoUpdate)
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

            const servicoPk = await db.Servico.findByPk(req.params.id)

            if (!servicoPk) {
                return res.status(400).json({
                    errors: ['Serviço não cadastrado ou não encontrado']
                })
            }

            await servicoPk.destroy()

            return res.json(servicoPk)
        } catch (error) {
            res.status(400).json(
                {
                    errors: e.errors.map((err) => err.message)
                }
            )
        }
    }
}