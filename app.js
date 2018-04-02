var express = require('express');
var app = express();
var controller = require('./controllers/htmlcontroller');
var apiController = require('./controllers/apicontroller');
var seedData = require('./controllers/seedData');
var mongoose = require('mongoose');
var config = require('./config/index');
app.listen(3000);

app.set('view engine', 'ejs');

controller(app);
seedData(app);
apiController(app);

app.use('/assets', express.static(__dirname+'/public'))

mongoose.connect(config.getDbConnectionString());