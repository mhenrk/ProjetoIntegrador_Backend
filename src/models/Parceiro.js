module.exports = (sequelize, DataTypes) => {
    const Parceiro = sequelize.define("Parceiro",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(50),
                defaultValue: null,
                validate: {
                    notEmpty: {
                        msg: 'Campo Nome Obrigatório'
                    }
                }
            },
            nome_fantasia: {
                type: DataTypes.STRING(50),
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Nome Fantasia Obrigatório'
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
                        msg: 'Campo Email Obrigatório'
                    }
                }
            },            
            cnpj: {
                type: DataTypes.STRING(14),
                defaultValue: null,
                validate: {
                    notEmpty: {
                        msg: 'Campo CNPJ Obrigatório'
                    }
                }
            },
            password: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Senha não pode ficar em branco'
                    }
                }
            },
            telefone: {
                type: DataTypes.STRING(11),
                defaultValue: null,
                validate: {
                    notEmpty: {
                        msg: 'Campo Telefone Obrigatório'
                    }
                }
            },
            cep: DataTypes.STRING(10),
            rua: DataTypes.STRING(50),
            numero: DataTypes.STRING(5),
            bairro: DataTypes.STRING(30),
            cidade: DataTypes.STRING(30),
            estado: DataTypes.STRING(2)
        },
        {
            tableName: 'parceiro',
        }
    )

    Parceiro.associate = (models) => {
        Parceiro.hasMany(models.Servico, {
            as: 'servico',
            foreignKey: 'parceiro_id'
        })
    }

    return Parceiro
}