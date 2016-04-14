const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'onions';

// Schema
var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  type: String
});

userSchema.methods.authenticate = function (password, callback) {
  const user = this;
  bcrypt.compare(password, user.password, function (err, isMatch) {
    callback(err, isMatch)
  })
}

userSchema.methods.generateToken = function (email) {
  const token = {
    email: email
}
  return jwt.sign(token, secret)
}

// Return Model
module.exports = mongoose.model('User', userSchema);
