module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define("Pet",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
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
        },
        {
            tableName: 'pet'
        }
    )

    Pet.associate = (models) => {
        Pet.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        })

        Pet.belongsTo(models.Raca, {
            as: 'raca',
            foreignKey: 'raca_pet_id'
        })
        Pet.belongsTo(models.Tipo, {
            as: 'tipo',
            foreignKey: 'tipo_pet_id'
        })
        Pet.belongsTo(models.Genero, {
            as: 'genero',
            foreignKey: 'genero_pet_id'
        })
        Pet.belongsTo(models.Castracao, {
            as: 'castracao',
            foreignKey: 'pet_castrado_id'
        })
        Pet.belongsTo(models.Peso, {
            as: 'peso',
            foreignKey: 'peso_pet_id'
        })
    }
    
    return Pet
}
