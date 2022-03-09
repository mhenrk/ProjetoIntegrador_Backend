const RacaPet = require("../models/RacaPet")

module.exports = {
    async store(req,res) {
        const { nome } = req.body

        const racaPet = await RacaPet.create({ nome })

        return res.json(racaPet)
    }
}