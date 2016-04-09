var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var clinicSchema = new mongoose.Schema({
  category: String,
  title:    String,
  location: String,
  latitude: Number,
  longitude: Number,
  url: String,
  type: String,
  type_icon: String
});

// Return Model
module.exports = restful.model('Clinic', clinicSchema);
