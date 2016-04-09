var express = require('express');
var router = express.Router();

// Models
var Listing = require('../models/listing');
var Clinic = require('../models/clinic')

// Listing Routes
Listing.methods(['get', 'post', 'put', 'delete']);
Listing.register(router, '/listing');

// Clinic Routes
Clinic.methods(['get', 'post', 'put', 'delete']);
Clinic.register(router, '/clinic');

module.exports = router;
