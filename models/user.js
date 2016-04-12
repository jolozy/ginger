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


//Authenticate Login
passport.use(new LocalStrategy(function(username, password, done) {
  process.nextTick(function() {
    UserDetails.findOne({
      'username': username,
    }, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (user.password != password) {
        return done(null, false);
      }

      return done(null, user);
    });
  });
}));
