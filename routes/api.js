var express = require('express');
var router = express.Router();

// Models
var Listing = require('../models/listing');

// Listing Routes
Listing.methods(['get', 'post', 'put', 'delete']);
Listing.register(router, '/listing');


module.exports = router;
