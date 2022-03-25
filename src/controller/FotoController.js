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
    }
}