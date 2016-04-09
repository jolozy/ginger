var express = require('express');
    router = express.Router();
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

// Models

var listingsController = require('../controllers/listingsController');

// QUOTES API
router.route('/api/listings')
  .get(listingsController.getAll)
  .post(listingsController.createListing);
router.route('/api/listings/:id')
  .get(listingsController.getListing)
  .put(listingsController.updateListing)
  .delete(listingsController.removeListing);

module.exports = router;
