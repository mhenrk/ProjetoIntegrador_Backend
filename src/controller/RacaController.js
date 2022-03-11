const RacaPet = require("../models/RacaPet")

module.exports = {
    async store(req,res) {
        const { nome } = req.body

        const racaPet = await RacaPet.create({ nome })

        return res.json(racaPet)
    },

    async index(req,res){
        try {
            const petRaca = await RacaPet.findAll()
            return res.json(petRaca)
        } catch (error) {
            return res.json(null)
        }
    },

    async show(req,res){
        try {
            const showRaca = await RacaPet.findByPk(req.params.id)
            return res.json(showRaca)
        } catch (error) {
            return res.json(null)
        }
    }
}