var Listing = require('../models/Listing');

function getCategory (req, res) {
  var category = req.query.category
  Listing.find({"category": "Leisure"}).exec(function (error, listings) {

  })
}

//Hello World
// INDEX
function getAll(request, response) {
  Listing.find(function(error, listings) {
    if(error) response.json({message: 'Could not find any listing'});

    response.json({data: listings});
  });
}

// CREATE
function createListing(request, response) {
  console.log('in POST');
  console.log('body:',request.body);
  var listing = new Listing(request.body);

  listing.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate listing b/c:' + error});
    console.log(listing);
    response.json(listing);
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

    if(request.body.name) listing.name = request.body.name;
    if(request.body.color) listing.color = request.body.color;

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
