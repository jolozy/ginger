var express = require('express');
    router = express.Router();
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

// Models
var listingsController = require('../controllers/listingsController');
var usersController = require('../controllers/usersController');

// QUOTES API
router.route('/api/listings')
  .get(listingsController.getAll)
  .post(listingsController.createListing);
router.route('/api/listings/:id')
  .get(listingsController.getListing)
  .put(listingsController.updateListing)
  .delete(listingsController.removeListing);
router.route('/api/food')
  .get(listingsController.getFood)
router.route('/api/services')
  .get(listingsController.getFood)
// User
router.route('/api/users')
  .get(usersController.getAllUser)
  .post(usersController.createUser);
router.route('/api/users/:id')
  .get(usersController.getUser)
  .put(usersController.updateUser)
  .delete(usersController.removeUser);


module.exports = router;
