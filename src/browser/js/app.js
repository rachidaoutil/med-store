'use strict';

const Vue = require('vue');
const router = require('./util/routes');
const productView = require('./views/product_form')

// Create main Vue app
let app = new Vue(productView);

// Configure router
router(app);
