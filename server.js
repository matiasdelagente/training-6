var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://admin:admin@proximus.modulusmongo.net:27017/ubyJoh9y');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = require('./routes/ProductRoute.js');
app.use('/', router);

app.use(express.static('public'));

app.listen(3000);
