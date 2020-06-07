'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'clients', // name of table
      'createdAt', // name of attribute
      Sequelize.DATE
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'Todos', // name of table
      'completed' //name of column
    );
  }
};