'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('tb_cadastrausuario', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome:{
        type: Sequelize.STRING(10),
        allowNull: false
      },
      sobrenome:{
        type: Sequelize.STRING(40),
        allowNull: false
      },
      email:{
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      cpf:{
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
      },
      datanasc:{
        type: Sequelize.STRING(10), //10/02/1995
        allowNull: false
      },
      senha:{
        type: Sequelize.STRING(20),
        allowNull: false
      },
      telefone:{
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
      },
      cep:{
        type: Sequelize.STRING(10), /*10/10/1900*/
        allowNull: false
      },
      rua:{
        type: Sequelize.STRING(50),
        allowNull: false
      },
      numero:{
        type: Sequelize.STRING(5), /* 00000 - 99999*/
        allowNull: false
      },
      bairro:{
        type: Sequelize.STRING(30), /*10/10/1900*/
        allowNull: false
      },
      cidade:{
        type: Sequelize.STRING(30),
        allowNull: false
      },
      estado:{
        type: Sequelize.STRING(2), /*AC DF SP RJ*/
        allowNull: false
      },
      pet_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_cadastrapet',
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
    return await queryInterface.dropTable('tb_cadastrausuario');
  }
};