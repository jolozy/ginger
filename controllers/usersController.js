const bcrypt = require('bcrypt');
var User = require('../models/user');

const salt = bcrypt.genSaltSync(8)

function authorize (req, res) {
  const userParams = {
    email: req.body.email,
    password: req.body.password
  }
  // console.log(userParams)
  if (!userParams.email || !userParams.password) return res.status(422).json({message: "Invalid Data"});
  User.find({email: userParams.email}, function (err, users) {
    if (users) {
      users.forEach(function (user) {
        user.authenticate(userParams.password, function (err, isMatch) {
          if (err) throw err;
          if (!isMatch) return res.status(401).json( {message: "Authorization Failed."});
          res.status(200).json( { user: user, token: user.generateToken(req.body.email) });

        })
      })
    }
  })
}

// GO TO LOG IN PAGE
function newUserLogIn(request, response) {
  response.render('generateToken', {title: 'Generate Token'})
};

// GET
function getAllUser(request, response) {
  User.find( (error, user) => {
    if (error) {
      var res = {
        message: 'User Not Found'
      }
      response.json(res)
      return
    }
    response.json('user', {user: user})
  })
}
// CREATE
function newUserForm(request, response) {
  response.render('user', {title: 'New User Creation'})
};

function createUser(request, response){
  bcrypt.hash(request.body.password, salt, function (err, encrypted) {
    var user = new User();
    user.name = request.body.name
    user.email = request.body.email
    user.password = encrypted
    user.type = "admin";
    user.save( error => {
      if (error) {
        return res.json({message: 'Could Not Create User'});
      }
      response.send("Your token is " + user.generateToken(request.body.email));
    });
  })
}

module.exports = {
  newUserForm: newUserForm,
  newUserLogIn: newUserLogIn,
  getAllUser: getAllUser,
  createUser: createUser,
  authorize: authorize
}
