var Listing = require('../models/Listing');

function getCategory (req, res) {
  var category = req.query.category
  Listing.find({"category": "Leisure"}).exec(function (error, listings) {

  })
}
// hello world
// INDEX
function getAll(request, response) {
  Listing.find({"verified": true}).exec(function (error, listings) {
    if(error) response.json({message: 'Could not find any listing'});

    response.json({data: listings});
  });
}

// CREATE
function createListing(request, response) {
  var listing = new Listing(request.body);

  listing.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate listing b/c:' + error});
    console.log(listing);
    response.json({listings});
  });
}

// SHOW
function getListing(request, response) {
  var id = request.params.id;

  Listing.findById({_id: id}, function(error, listing) {
    if(error) response.json({message: 'Could not find listing b/c:' + error});

    response.json({data: listing});
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
  getAll: getAll,
  createListing: createListing,
  getListing: getListing,
  updateListing: updateListing,
  removeListing: removeListing
}
