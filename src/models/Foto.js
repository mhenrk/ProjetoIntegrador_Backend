module.exports = (sequelize, DataTypes) => {
    const Foto = sequelize.define("Foto",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            originalname: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo OriginalName Obrigatório'
                    }
                }
            },
            filename: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo FileName Obrigatório'
                    }
                }
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: "",
                validate: {
                    notEmpty: {
                        msg: 'Campo UsuarioID Obrigatório'
                    }
                }
            }
        },
        {
            tableName: 'foto'
        }
    )

    Foto.associate = (models) => {
        Foto.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        })
    }

    return Foto
}