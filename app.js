// Dependencies
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');
var methodOverride = require('method-override')
var morgan = require('morgan')
var restful = require('node-restful')
var mongoose = require('mongoose');
var helpers = require('express-helpers')
var app = express();
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
var secretValue = 'onions';
app.use('/admin', expressJWT({secret: secretValue}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
helpers(app);

var routes = require('./config/routes');
app.use(routes);

// Conventional Routes
app.get('/', function(req, res) {
res.render('index', { title: 'Ginger', googleapikey: process.env.GINGER_GOOGLEMAP_API_KEY });
});

// STATIC PAGES
// About Us Page Route
app.get('/about', function(req,res) {
  res.render('about', { title: 'About Ginger'});
});

// Connection
app.listen(3000);
mongoose.connect("mongodb://localhost/ginger");
console.log("App running on port 3000");

module.exports = app;
