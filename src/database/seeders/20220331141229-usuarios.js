'use strict';

const bcryptojs = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuario', 
    [
      {
        nome: 'Usuario',
        email: 'user@dhpetshop.com',
        password: await bcryptojs.hash('123456789', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      // {
      //   nome: 'Administrador',
      //   email: 'admin@dhpetshop.com',
      //   password: await bcryptojs.hash('123456789', 8),
      //   created_at: new Date(),
      //   updated_at: new Date()
      // }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
