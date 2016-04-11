var mongoose = require('mongoose');

// Schema
var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: Number,
  type: String
});

// Return Model
module.exports = mongoose.model('User', userSchema);
