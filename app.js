// Dependencies
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');
var methodOverride = require('method-override')
var morgan = require('morgan')
var restful = require('node-restful')
var mongoose = restful.mongoose;

// Models
var Listing = require('./models/listing');
var Clinic = require('./models/clinic');

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


// Routes for API
app.use('/api', require('./config/routes'));

// Conventional Routes
app.get('/', function(req, res) {
    // res.send("homepage")
    res.render('index', { title: 'WDI-2 App' });
});


// Connection
mongoose.connect("mongodb://localhost/ginger");
app.listen(3000);
console.log("App running on port 3000");

module.exports = app;
