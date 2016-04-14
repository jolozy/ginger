// Dependencies
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');
var methodOverride = require('method-override')
var morgan = require('morgan')
var restful = require('node-restful')
var mongoose = require('mongoose');
var helpers = require('express-helpers')
// Authentication
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

mongoose.connect("mongodb://localhost/ginger");

// Models
// var Listing = require('./models/listing');

// Express
var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// app.use(helpers('ginger'))

helpers(app);

var routes = require('./config/routes');
app.use(routes);

// Listing Routes
// Listing.methods(['get', 'post', 'put', 'delete']);
// Listing.register(router, '/listing');
// Routes for API
app.use('/api', require('./config/routes'));

// Conventional Routes
app.get('/', function(req, res) {
res.render('index', { title: 'Ginger', googleapikey: process.env.GINGER_GOOGLEMAP_API_KEY });
});

// Create User Page Route
app.get('/user', function(req,res) {
  res.render('user', { title: 'New User Creation'});
});

// Listing Form Page Route
app.get('/listing', function(req,res) {
  res.render('listing-form', { title: 'Update Listing'});
});

// About Us Page Route
app.get('/about', function(req,res) {
  res.render('about', { title: 'About Ginger'});
});

//Login Page Route
app.get('/login', function(req, res) {
  res.render('login', { title: 'Login Page'});
});


// Connection
app.listen(3000);
console.log("App running on port 3000");

module.exports = app;
