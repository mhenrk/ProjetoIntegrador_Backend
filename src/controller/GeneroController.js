const GeneroPet = require("../models/GeneroPet")

module.exports = {
    async store(req,res) {
        const { nome } = req.body

        const generoPet = await GeneroPet.create({ nome })

        return res.json(generoPet)
    }
}