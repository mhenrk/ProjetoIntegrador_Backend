module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(10),
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo Nome Obrigatorio'
                    }
                }
            },
            sobrenome: {
                type: DataTypes.STRING(40),
                defaultValue: null,
                validate: {
                    notEmpty: {
                        msg: 'Campo Sobrenome Obrigatório'
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
            is_admin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            cpf: {
                type: DataTypes.STRING(11),
                defaultValue: null,
                validate: {
                    notEmpty: {
                        msg: 'Campo CPF Obrigatório'
                    }
                }
            },
            datanasc: {
                type: DataTypes.STRING(10),
                defaultValue: null,
                validate: {
                    notEmpty: {
                        msg: 'Campo Data Nascimento Obrigatório'
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
            tableName: 'usuario',
        }
    )

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Pet, {
            as: 'pet',
            foreignKey: 'usuario_id'
        })

        Usuario.hasMany(models.Foto, {
            as: 'foto',
            foreignKey: 'usuario_id'
        })
    }

    return Usuario
}