var Listing = require('../models/Listing');

function getCategory (req, res) {
  var category = req.query.category
  Listing.find({"category": "Leisure"}).exec(function (error, listings) {

  })
}

// GET ALL LISTINGS FOR MAP
function getAll(request, response) {
  Listing.find({"verified": true}).exec(function (error, listings) {
    if(error) response.json({message: 'Could not find any listing'});

    response.json({data: listings});
  });
}

// ==================================================================================================================
// Get Food Category
function getFood(request, response) {
  Listing.find({verified: true}).
  where("category").in(['food']).
  exec(function (error, listings) {
    if(error) response.json({message: 'Could not find any listing'});

    response.json({data: listings});
  });
}

// Get Custom Category
function getCustom(request, response) {
console.log("HELLLLLO");
console.log(request.param('mainCategory').split(','));
console.log(request.param('categoryType').split(','));
  Listing.find({verified: true}).
  where("category").in(request.param('mainCategory').split(',')).
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
// ==================================================================================================================

// FOR PUBLIC USERS //
// SUBMIT NEW LISTING
function submitForm(request, response) {
  response.render('listing');
}
// CREATE NEW LISTING
function createListing(request, response) {
  var listing = new Listing();
  listing.title = request.body.title;
  listing.location = request.body.location;
  listing.url = request.body.url;
  listing.verified = false;

  listing.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate listing because:' + error});
    console.log(listing);
    // response.json({listings});
    response.render('users/thankyou');
  });
}

// FOR ADMIN //
// SHOW ALL LISTING
function getAllListings(request, response) {
  Listing.find(function (error, listings) {
    if(error) response.json({message: 'Could not find any listing'});

    response.render('admin/showall-admin', {listings: listings});
  });
}
// SUBMIT NEW LISTING
function adminSubmitForm(request, response) {
  response.render('admin/newlisting-admin');
}
// CREATE NEW LISTING
function adminCreateListing(request, response) {
  var listing = new Listing();
  listing.title = request.body.title;
  listing.location = request.body.location;
  listing.url = request.body.url;
  listing.category = request.body.category;
  listing.latitude = request.body.latitude;
  listing.longitude = request.body.longitude;
  listing.type = request.body.type;
  listing.type_icon = request.body.type_icon;
  listing.verified = request.body.verified;

  listing.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate listing because:' + error});
    console.log(listing);
    response.redirect('/admin/listings/');
  });
}
// SHOW ONE CURRENT LISTING
function getListing(request, response) {
  var id = request.params.id;

  Listing.findById({_id: id}, function(error, listing) {
    if(error) response.json({message: 'Could not find listing because:' + error});

    // response.json({data: listing});
    response.render('admin/show-admin', {listing: listing});
  });
}
// UPDATE
function updateListing(request, response) {
  var id = request.params.id;

  Listing.findById({_id: id}, function(error, listing) {
    if(error) response.json({message: 'Could not find listing because:' + error});

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
      if(error) response.json({messsage: 'Could not update listing because:' + error});

      // response.redirect('/admin/listings/:id');
      // response.json({message: 'Listing successfully updated'});
      response.redirect('/admin/listings');
    });
  });
}
// DELETE
function removeListing(request, response) {
  var id = request.params.id;

  Listing.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete listing because:' + error});

    // response.json({message: 'Listing successfully deleted'});
    response.redirect('/admin/listings');
  });
}

module.exports = {
  getCustom: getCustom,
  getFood: getFood,
  getAll: getAll,
  submitForm: submitForm,
  createListing: createListing,
  getAllListings: getAllListings,
  adminSubmitForm: adminSubmitForm,
  adminCreateListing: adminCreateListing,
  getListing: getListing,
  updateListing: updateListing,
  removeListing: removeListing
}
