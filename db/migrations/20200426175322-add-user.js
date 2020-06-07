'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Todos', // name of table
      'user', // name of attribute
      Sequelize.STRING,
          );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'Todos', // name of table
      'user' //name of column
    );
  }
};
