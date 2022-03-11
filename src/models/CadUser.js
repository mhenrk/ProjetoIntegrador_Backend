const { Model, DataTypes } = require('sequelize')
//const bcryptjs = require(bcryptjs)

class Tb_cadastrausuario extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING(10),
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Obrigatório'
                    }
                }
            },
            sobrenome: {
                type: DataTypes.STRING(40),
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Obrigatório'
                    }
                }
            },
            email: {
                type: DataTypes.STRING(100),
                defaultValue: '',
                unique: {
                    msg: 'Email já cadastrado'
                },
                validate: {
                    notEmpty: {
                        msg: 'Campo Obrigatório'
                    }
                }
            },
            cpf: {
                type: DataTypes.STRING(11),
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Obrigatório'
                    }
                }
            },
            datanasc: {
                type: DataTypes.STRING(10),
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Obrigatório'
                    }
                }
            },
            senha: DataTypes.STRING(20),
            telefone: {
                type: DataTypes.STRING(11),
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Obrigatório'
                    }
                }
            },
            cep: DataTypes.STRING(10),
            rua: DataTypes.STRING(50),
            numero: DataTypes.STRING(5),
            bairro: DataTypes.STRING(30),
            cidade: DataTypes.STRING(30),
            estado: DataTypes.STRING(2),
            pet_id: DataTypes.INTEGER
        },
        {
            sequelize,              //conexao com o banco de dados
            freezeTableName: true   //trava o nome da tabela
        })

        // this.addHook('beforeSave', async (user) => {
        //     user.password = await bcryptjs.hash(user.passhash, 8)
        // })

    }
}

module.exports = Tb_cadastrausuario