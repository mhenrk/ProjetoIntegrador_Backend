'use strict';

const bcryptojs = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tb_cadastrausuario', 
    [
      {
        nome: 'Marcio',
        sobrenome: 'H.',
        email: 'marcio.h@gmail.com',  //unique
        cpf: '12345678900',           //unique
        datanasc: '12/04/1986',       //01/01/1901
        password_hash: await bcryptojs.hash('123456789', 8),
        telefone: '11988775678',      //unique
        cep: '060204060',
        rua: 'Rua da Lonjura',
        numero: '12345',
        bairro: 'A perder de Vista',
        cidade: 'Onde Judas Perdeu as Botas',
        estado: 'SP',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Victor',
        sobrenome: 'C.',
        email: 'victor.c@gmail.com',  //unique
        cpf: '12345678901',           //unique
        datanasc: '29/12/1992',       //01/01/1901
        password_hash: await bcryptojs.hash('123456789', 8),
        telefone: '11991234567',      //unique
        cep: '09000123',
        rua: 'Rua dos Alfeneiros',
        numero: '65401',
        bairro: 'Jd Paraisopolis',
        cidade: 'Onde Judas Perdeu as Botas',
        estado: 'RJ',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Guilherme',
        sobrenome: 'N.',
        email: 'guilherme.c@gmail.com',  //unique
        cpf: '12345678902',              //unique
        datanasc: '09/07/1970',          //01/01/1901
        password_hash: await bcryptojs.hash('123456789', 8),
        telefone: '11995312564',    //unique
        cep: '01205501',
        rua: 'Rua da Mizericordia',
        numero: '02589',
        bairro: 'Regionopolis',
        cidade: 'Jd Maracanã',
        estado: 'PI',
        created_at: new Date(),
        updated_at: new Date()
      }
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
