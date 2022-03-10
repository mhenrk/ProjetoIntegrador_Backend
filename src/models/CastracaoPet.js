const { Model, DataTypes } = require('sequelize')

class Tb_castracao extends Model {
    static init(sequelize) {
        super.init({
            situacao: DataTypes.STRING(3)
        },
        {
            sequelize,              //conexao com o banco de dados
            freezeTableName: true   //trava o nome da tabela
        })
    }
}

module.exports = Tb_castracao

/**
 * conforme configuração inicial do projeto
 * toda inserção na tabela sai no plural, com snake 
 * case, portanto, tabela CastracaoPet, deve estar 
 * cadastrado no banco como castracao_pets e foi criado
 * apartir do migration com tbcastracao 
 */