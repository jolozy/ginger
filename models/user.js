var mongoose = require('mongoose');

// Schema
var userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: Number,
  type: String
});

// Return Model
module.exports = mongoose.model('User', userSchema);
