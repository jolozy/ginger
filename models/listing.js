var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var listingSchema = new mongoose.Schema({
  category: String,
  title:    String,
  location: String,
  latitude: Number,
  longitude: Number,
  url: String,
  type: String,
  type_icon: String
},
  { collection: 'listing' }
);

// Return Model
module.exports = restful.model('Listing', listingSchema);
