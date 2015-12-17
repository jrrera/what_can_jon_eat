var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

var foods = { 'apples': true, 'pears': true, 'jalapenos': false };


app.get('/', function(req, res) {
  res.send('OK')
});

app.get('/foods', function(req, res) {
  res.json(Object.keys(foods));
});

app.post('/foods', bodyParser.urlencoded({ extended: false }), function(req, res) {
  var newFood = req.body;
  foods[newFood.name] = newFood.eat;
  res.status(201).json(newFood.name);
});

module.exports = app;
