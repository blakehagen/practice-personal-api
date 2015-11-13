var express = require('express');
var bodyParser = require('body-parser');

var MiddlewareCtrl = require('./controllers/middleware.js');
var MainCtrl = require('./controllers/mainCtrl.js');



var app = express();

app.use(bodyParser.json());

app.use(MiddlewareCtrl.addHeaders);

