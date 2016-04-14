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

function authorizeUser () {
  return expressJWT({secret: 'onions'});
}

// FOR MAP
router.route('/api/listings')
  .get(listingsController.getAll)
// GET SELECTED CATEGORY ON MAPS
router.route('/api/custom')
  .get(listingsController.getCustom);
// FOR PUBLIC USERS: SUBMISSION
router.route('/submit')
  .get(listingsController.submitForm)
  .post(listingsController.createListing);
// FOR ADMIN TO SEE ALL LISTINGS
router.route('/admin/listings/')
  .get(authorizeUser(), listingsController.getAllListings);
// FOR ADMIN: SUBMISSION
router.route('/admin/listings/new')
  .get(listingsController.adminSubmitForm)
  .post(listingsController.adminCreateListing);
// FOR ADMIN TO SEE ONE LISTING
router.route('/admin/listings/:id')
  .get(listingsController.getListing)
// FOR ADMIN TO EDIT & REMOVE
  .patch(listingsController.updateListing)
  .delete(listingsController.removeListing);
// FOR USERS
router.route('/user')
  .get(usersController.newUserForm)
  .post(usersController.createUser);
router.route('/api/users')
  .get(usersController.getAllUser)
  // .post(usersController.createUser);
// AUTHENTICATION
router.route('/authenticate')
  .post(usersController.authorize)

router.route('/generateToken')
  .get(usersController.newUserLogIn)

module.exports = router;
