const client = require('./client');

// Define handlers for application routes
module.exports = (app) => {
  app.get('/', client.index);
  app.post('/client', client.create);
};
