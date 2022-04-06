'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('pet', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome_pet:{
        type: Sequelize.STRING(20),
        allowNull: false
      },
      apelido_pet:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      raca_pet_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'raca',    //nome da tabela no banco
          key: 'id'
        }
      },
      tipo_pet_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tipo',
          key: 'id'
        }
      },
      datanasc_pet:{
        type: Sequelize.STRING(10), //10/02/1995
        allowNull: false
      },
      idade_pet:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      genero_pet_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'genero',
          key: 'id'
        }
      },
      pet_castrado_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'castracao',
          key: 'id'
        }
      },
      peso_pet_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'peso',
          key: 'id'
        }
      },
      usuario_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
  });
},
  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('pet');
  }
};
