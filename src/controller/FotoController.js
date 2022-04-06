const multer = require('multer')
const multerConfig = require('../config/multer')

const uploadFoto = multer(multerConfig).single('foto')

module.exports = {
    async store(req, res) {
        return uploadFoto(req, res, (err) => {
            if(err){
                return res.status(400).json({
                    errors: [err.code]
                })
            }

            res.json(req.file)
        })
    },

    async index(req,res){
        try {
            const foto = await db.Foto.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(foto)
        } catch (error) {
            return res.status(404).json(null)
        }
    },

    async update(req, res) {
        try {
            if (!req.params.id) {
                res.status(404).json({
                    errors: ['Id não enviado']
                })
            }

            const fotoPk = await db.Foto.findByPk(req.params.id)

            if (!fotoPk) {
                return res.status(400).json({
                    errors: ['Foto não encontrada']
                })
            }

            const fotoUpdate = await Foto.update(req.body)

            return res.json(fotoUpdate)
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

            const fotoUpdate = await db.Foto.findByPk(req.params.id)

            if (!fotoUpdate) {
                return res.status(400).json({
                    errors: ['Foto não cadastrada ou não encontrada']
                })
            }

            await fotoUpdate.destroy()

            return res.json(fotoUpdate)
        } catch (error) {
            res.status(400).json({
                    errors: e.errors.map((err) => err.message)
                }
            )
        }
    }
}