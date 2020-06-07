'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./controllers/routes');
const morgan = require('morgan')
const cors = require('cors')

const { GoogleSpreadsheet } = require('google-spreadsheet');



let app = express();

// Configure view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('x-powered-by', false);

// Configure middleware
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// Static file serving happens everywhere but in production
if (process.env.NODE_ENV !== 'production' || true) {
  let staticPath = path.join(__dirname, '..','..','public');
  app.use(express.static(staticPath));
}

// Add the "No Shenanigans" header to all responses under the "/todos" path
app.use('/todos', (request, response, next) => {
  response.set('X-Shenanigans', 'None');
  next();
});

// Mount application routes
routes(app);
//Not found response!
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
// Export Express webapp instance
module.exports = {app};
