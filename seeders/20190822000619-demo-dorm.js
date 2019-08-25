'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        name: 'kost indah',
        address: "jalan elang 4 permata bintaro residence",
        city: 'Jakarta',
        latitude: '-6.175110',
        longitude: '106.865036',
        photo: 'https://www.sewakost.com/files/06-2018/ad19607/rumah-kost-griya-indah-2109744796_large.jpg',
        type: 'cewek',
        price: '1000000',
        owner_phone: '087968827923',
        created_by: 1
      }
    ]
    return queryInterface.bulkInsert('dorms', data, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('dorms', null, {})
  }
};
