'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.createTable('servico', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      tempo: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      parceiro_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'parceiro',
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

  async down(queryInterface, Sequelize) {

    return await queryInterface.dropTable('servico');

  }
};
