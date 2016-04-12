var mongoose = require('mongoose');

// Schema
var listingSchema = mongoose.Schema({
  category: String,
  title:    String,
  location: String,
  latitude: Number,
  longitude: Number,
  url: String,
  type: String,
  verified: Boolean,
  type_icon: String,
  gallery: [String]
});

// Return Model
module.exports = mongoose.model('Listing', listingSchema);
