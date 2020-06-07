'use strict';

const Sequelize = require('sequelize');
const db = require('./db');

let Todo = db.define('clients', {
    destinataire: Sequelize.TEXT,
  ville:Sequelize.STRING,
  adresse:Sequelize.STRING,
  telephone:Sequelize.STRING

},{
  timestamps:false
});

module.exports = Todo;
