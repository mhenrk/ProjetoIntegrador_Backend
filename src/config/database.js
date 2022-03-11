require('dotenv').config()

module.exports = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    define: {
        timestamp: true,
        underscored: true //pet_shop
    }
}

//Chamando os dados da aplicação por arquivo de ambiente
/*module.exports = {
    dialect: process.env.DB_DIALECT,
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    define: {
        timestamp: true,
        underscored: true
        //As tabelas serão geradas no modelo <tb_nome_tabela>
    }
}*/