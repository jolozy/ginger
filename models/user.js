var mongoose = require('mongoose');

// Schema
var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  type: String
});

// Return Model
module.exports = mongoose.model('User', userSchema);
