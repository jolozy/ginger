var express = require('express');
    router = express.Router();
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST
    helpers = require('express-helpers');

// Models
var listingsController = require('../controllers/listingsController');
var usersController = require('../controllers/usersController');

// FOR MAP
router.route('/api/listings')
  .get(listingsController.getAll)
  .post(listingsController.createListing);

// FOR PUBLIC USERS: SUBMISSION
  router.route('/submit')
    .get(listingsController.submitForm)
    .post(listingsController.createListing);

// FOR ADMIN TO SEE ALL LISTINGS
router.route('/admin/listings/')
  .get(listingsController.getAllListings);
// FOR ADMIN TO SEE ONE LISTING
router.route('/admin/listings/:id')
  .get(listingsController.getListing);

// FOR ADMIN TO EDIT & REMOVE
router.route('/api/listings/:id')
  .put(listingsController.updateListing)
  .delete(listingsController.removeListing);

router.route('/api/custom')
  .get(listingsController.getCustom);

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
