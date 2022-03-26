const { Model, DataTypes } = require('sequelize')

class Tb_cadastrapet extends Model {
    static init(sequelize) {
        super.init({
            nome_pet: {
                type: DataTypes.STRING(20),
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Obrigatório'
                    }
                }
            },
            apelido_pet: {
                type: DataTypes.STRING(20),
            },
            raca_pet_id: {
                type: DataTypes.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Obrigatório'
                    }
                }
            },
            tipo_pet_id: {
                type: DataTypes.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Obrigatório'
                    }
                }
            },
            datanasc_pet: {
                type: DataTypes.STRING(10),
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Informe uma data válida'
                    }
                }
            },
            idade_pet: {
                type: DataTypes.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Obrigatório'
                    }
                }
            },
            genero_pet_id: {
                type: DataTypes.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Obrigatório'
                    }
                }
            },
            pet_castrado_id: {
                type: DataTypes.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Obrigatório'
                    }
                }
            },
            peso_pet_id: {
                type: DataTypes.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Obrigatório'
                    }
                }
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Nenhum Dono Cadastrado'
                    }
                }
            },
        },
        {
            sequelize,              //conexao com o banco de dados
            freezeTableName: true   //trava o nome da tabela
        })
    }
    static associate(models){
        this.belongsTo(models.CadUser, {
            foreignKey: 'id'
        })
    }
}

module.exports = Tb_cadastrapet