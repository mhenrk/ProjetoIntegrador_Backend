const multer = require('multer')
const { resolve, extname } = require('path')
const data = new Date()

module.exports = {

    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
          return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPEG.'));
        }
    
        return cb(null, true);
      },
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, resolve(__dirname, '..', '..', 'uploads'))
        },
        filename: (req, file, callback) => {
            callback(null, `${data.getFullYear()}_${data.getMonth()}_${Date.now()}${extname(file.originalname)}`)
        }
    })

}