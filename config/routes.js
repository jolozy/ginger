var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
var helpers = require('express-helpers');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');

// Models
var listingsController = require('../controllers/listingsController');
var usersController = require('../controllers/usersController');

var jwtSecret = 'onion';

function authorizeUser () {
  return expressJWT({secret: jwtSecret});
}

// FOR MAP
router.route('/api/listings')
  .get(listingsController.getAll)

// FOR PUBLIC USERS: SUBMISSION
  router.route('/submit')
    .get(listingsController.submitForm)
    .post(listingsController.createListing);

// FOR ADMIN TO SEE ALL LISTINGS
router.route('/admin/listings/')
  .get(listingsController.getAllListings);
// FOR ADMIN: SUBMISSION
router.route('/admin/listings/new')
  .get(listingsController.adminSubmitForm)
  .post(authorizeUser(), listingsController.adminCreateListing);
// FOR ADMIN TO SEE ONE LISTING
router.route('/admin/listings/:id')
  .get(listingsController.getListing)
// FOR ADMIN TO EDIT & REMOVE
  .patch(listingsController.updateListing)
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
router.route('/authenticate')
  .post(usersController.authorize)


module.exports = router;
