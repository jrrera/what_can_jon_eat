/* jshint node: true*/
'use strict';

var express = require('express');
var foodsRoute = require('./routes/foods');

var app = express();

app.use(express.static('public'));
app.use('/foods', foodsRoute);

app.get('/', function(req, res) {
  res.send('OK');
});

module.exports = app;
