'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        username: 'dyah',
        email: 'dyah@gmail.com',
        password: 'satuduatiga123'
      }
    ]

    return queryInterface.bulkInsert('users', data, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {})
  }
};
