var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('OK')
});

app.get('/foods', function(req, res) {
  var foods = ['apples', 'pears', 'jalapenos'];
  res.json(foods);
});

module.exports = app;
