'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pet', 
    [
      {
        nome_pet: 'Mick',
        apelido_pet: 'Destruidor',
        raca_pet_id: 2,
        tipo_pet_id: 5,              //unique
        datanasc_pet: '12/02/2022',          //01/01/1901
        idade_pet: 1,
        genero_pet_id: 1,    //unique
        pet_castrado_id: 2,
        peso_pet_id: 1,
        usuario_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome_pet: 'Auau',
        apelido_pet: 'auauz',
        raca_pet_id: 4,
        tipo_pet_id: 5,              //unique
        datanasc_pet: '20/12/2021',          //01/01/1901
        idade_pet: 2,
        genero_pet_id: 2,    //unique
        pet_castrado_id: 1,
        peso_pet_id: 2,
        usuario_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome_pet: 'Jujuba',
        apelido_pet: 'Jujubinha',
        raca_pet_id: 5,
        tipo_pet_id: 2,              //unique
        datanasc_pet: '25/10/2020',          //01/01/1901
        idade_pet: 2,
        genero_pet_id: 2,    //unique
        pet_castrado_id: 1,
        peso_pet_id: 3,
        usuario_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome_pet: 'Flocos',
        apelido_pet: 'Terrorista',
        raca_pet_id: 1,
        tipo_pet_id: 1,              //unique
        datanasc_pet: '12/02/2021',          //01/01/1901
        idade_pet: 2,
        genero_pet_id: 1,    //unique
        pet_castrado_id: 2,
        peso_pet_id: 1,
        usuario_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome_pet: 'Mel',
        apelido_pet: 'Meo',
        raca_pet_id: 2,
        tipo_pet_id: 5,              //unique
        datanasc_pet: '12/02/2022',          //01/01/1901
        idade_pet: 1,
        genero_pet_id: 1,    //unique
        pet_castrado_id: 2,
        peso_pet_id: 1,
        usuario_id: 3,
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
