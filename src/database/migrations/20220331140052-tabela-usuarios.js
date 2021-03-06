'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('usuario', {
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
        allowNull: true
      },
      email:{
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      is_admin:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      cpf:{
        type: Sequelize.STRING(11),
        allowNull: true,
        unique: true
      },
      datanasc:{
        type: Sequelize.STRING(10), //10/02/1995
        allowNull: true
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
        type: Sequelize.STRING(10), /*00000000*/
        allowNull: true
      },
      rua:{
        type: Sequelize.STRING(50),
        allowNull: true
      },
      numero:{
        type: Sequelize.STRING(5), /* 00000 - 99999*/
        allowNull: true
      },
      bairro:{
        type: Sequelize.STRING(30), /*10/10/1900*/
        allowNull: true
      },
      cidade:{
        type: Sequelize.STRING(30),
        allowNull: true
      },
      estado:{
        type: Sequelize.STRING(2), /*AC DF SP RJ*/
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
    return await queryInterface.dropTable('usuario');
  }
};
