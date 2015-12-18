/* jshint node: true*/
'use strict';

var express = require('express');
var app = express();

app.use(express.static('public'));

var foods = require('./routes/foods');
app.use('/foods', foods);

app.get('/', function(req, res) {
  res.send('OK');
});

module.exports = app;
