const GeneroPet = require("../models/GeneroPet")

module.exports = {
    async store(req,res) {
        const { nome } = req.body

        const generoPet = await GeneroPet.create({ nome })

        return res.json(generoPet)
    },

    async index(req,res){
        try {
            const petGenero = await GeneroPet.findAll()
            return res.json(petGenero)
        } catch (error) {
            return res.json(null)
        }
    },

    async show(req,res){
        try {
            const showGenero = await GeneroPet.findByPk(req.params.id)
            return res.json(showGenero)
        } catch (error) {
            return res.json(null)
        }
    }

    
}