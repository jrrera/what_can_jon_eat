/* jshint node: true*/
'use strict';

var express = require('express');
var foodsRoute = require('./routes/foods');

var app = express();

// Set static dirs.
app.use(express.static('public'));
app.use('/scripts', express.static('node_modules'));

// Set routes.
app.use('/foods', foodsRoute);

app.get('/', function(req, res) {
  res.send('OK');
});

module.exports = app;
