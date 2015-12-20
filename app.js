/* jshint node: true*/
'use strict';

var express = require('express');
var app = express();

var sequelize = require('./lib/postgres');

app.use(express.static('public'));

var foodsRoute = require('./routes/foods');
app.use('/foods', foodsRoute);

app.get('/', function(req, res) {
  res.send('OK');
});

module.exports = app;
