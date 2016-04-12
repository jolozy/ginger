var Listing = require('../models/Listing');

function getCategory (req, res) {
  var category = req.query.category
  Listing.find({"category": "Leisure"}).exec(function (error, listings) {

  })
}

// Get all listings
function getAll(request, response) {
  Listing.find({"verified": true}).exec(function (error, listings) {
    if(error) response.json({message: 'Could not find any listing'});

    response.json({data: listings});
  });
}

// Get Food Category
function getFood(request, response) {
  Listing.find({verified: true}).
  where("category").equals('food').
  exec(function (error, listings) {
    if(error) response.json({message: 'Could not find any listing'});

    response.json({data: listings});
  });
}

// Get Services Category
function getServices(request, response) {
  Listing.find({verified: true}).
  where("category").equals('services').
  exec(function (error, listings) {
    if(error) response.json({message: 'Could not find any listing'});

    response.json({data: listings});
  });
}

// Get Leisure Category
function getLeisure(request, response) {
  Listing.find({verified: true}).
  where("category").equals('leisure').
  exec(function (error, listings) {
    if(error) response.json({message: 'Could not find any listing'});

    response.json({data: listings});
  });
}

// Get Medical Category
function getMedical(request, response) {
  Listing.find({verified: true}).
  where("category").equals('medical').
  exec(function (error, listings) {
    if(error) response.json({message: 'Could not find any listing'});

    response.json({data: listings});
  });
}

// Get Groceries Category
function getGroceries(request, response) {
  Listing.find({verified: true}).
  where("category").equals('groceries').
  exec(function (error, listings) {
    if(error) response.json({message: 'Could not find any listing'});

    response.json({data: listings});
  });
}

// CREATE
// CREATE // FOR MAP
function createListing(request, response) {
  var listing = new Listing();
  listing.title = req.body.title;
  listing.location = req.body.location;
  listing.url = req.body.url;
  listing.verified = true;

  listing.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate listing because:' + error});
    console.log(listing);
    response.json({listings});
  });
}

// FOR PUBLIC USERS
function submitForm(request, response) {
  response.render('listing');
}

// FOR ADMIN
// SHOW ALL LISTING
function getAllListings(request, response) {
  Listing.find(function (error, listings) {
    if(error) response.json({message: 'Could not find any listing'});

    response.render('showall-admin', {listings: listings});
  });
}
// SHOW ONE CURRENT LISTING
function getListing(request, response) {
  var id = request.params.id;

  Listing.findById({_id: id}, function(error, listing) {
    if(error) response.json({message: 'Could not find listing b/c:' + error});

    // response.json({data: listing});
    response.render('show-admin', {listing: listing});
  });
}
// UPDATE
function updateListing(request, response) {
  var id = request.params.id;

  Listing.findById({_id: id}, function(error, listing) {
    if(error) response.json({message: 'Could not find listing b/c:' + error});

    if(request.body.category) listing.category = request.body.category;
    if(request.body.title) listing.title = request.body.title;
    if(request.body.location) listing.location = request.body.location;
    if(request.body.latitude) listing.latitude = request.body.latitude;
    if(request.body.longitude) listing.longitude = request.body.longitude;
    if(request.body.url) listing.url = request.body.url;
    if(request.body.type) listing.type = request.body.type;
    if(request.body.verified) listing.verified = request.body.verified;
    if(request.body.type_icon) listing.type_icon = request.body.type_icon;

    listing.save(function(error) {
      if(error) response.json({messsage: 'Could not update listing b/c:' + error});

      response.json({message: 'Listing successfully updated'});
    });
  });
}
// DELETE
function removeListing(request, response) {
  var id = request.params.id;

  Listing.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete listing b/c:' + error});

    response.json({message: 'Listing successfully deleted'});
  });
}

module.exports = {
  getFood: getFood,
  getAll: getAll,
  createListing: createListing,
  submitForm: submitForm,
  getAllListings: getAllListings,
  getListing: getListing,
  updateListing: updateListing,
  removeListing: removeListing
}
