'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('parceiro', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome:{
        type: Sequelize.STRING(50),
        allowNull: true
      },
      nome_fantasia:{
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email:{
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      cnpj:{
        type: Sequelize.STRING(14),
        allowNull: true,
        unique: true
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone:{
        type: Sequelize.STRING(11),
        allowNull: true,
        unique: true
      },
      cep:{
        type: Sequelize.STRING(10),
        allowNull: true
      },
      rua:{
        type: Sequelize.STRING(50),
        allowNull: true
      },
      numero:{
        type: Sequelize.STRING(5),
        allowNull: true
      },
      bairro:{
        type: Sequelize.STRING(30),
        allowNull: true
      },
      cidade:{
        type: Sequelize.STRING(30),
        allowNull: true
      },
      estado:{
        type: Sequelize.STRING(2),
        allowNull: true
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
    return await queryInterface.dropTable('parceiro');
  }
};
