require('dotenv').config()

module.exports = {
    "development": {
        host: process.env.DB_HOST,
        port: process.env.DB_LOCAL_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        dialect: process.env.DB_DIALECT,
        define: {
            timestamp: true,
            underscored: true
        }
    }
}