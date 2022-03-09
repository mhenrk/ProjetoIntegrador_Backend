'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbcadastrapet', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome_pet: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      apelido_pet: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      raca_pet: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tipo_pet: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      dataNascimento_pet: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      idade_pet: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      genero_pet_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pet_castrado_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      peso_pet_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('tbcadastrapet');
  }
};
