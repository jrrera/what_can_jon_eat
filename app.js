var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

// Redis
var redis = require('redis');
var client, rtg;

if (process.env.REDISTOGO_URL) {
  rtg = require("url").parse(process.env.REDISTOGO_URL);
  client = redis.createClient(rtg.port, rtg.hostname);
  client.auth(rtg.auth.split(":")[1]);
} else {
  client = redis.createClient();
  // 'dev' vs 'test' vs 'production' all have different
  // integer values for using different databases.
  client.select((process.env.NODE_ENV || 'development').length);
}
// end Redis


// Starter values
//client.hset('foods', 'apples', true);
//client.hset('foods', 'pears', true);
//client.hset('foods', 'jalapenos', false);

app.get('/', function(req, res) {
  res.send('OK');
});

app.get('/foods', function(req, res) {
  client.hkeys('foods', function(error, names) {
    res.json(names);
  });
});

app.post('/foods', bodyParser.urlencoded({ extended: false }), function(req, res) {
  var newFood = req.body;
  client.hset('foods', newFood.name, newFood.eat);
  res.status(201).json(newFood.name);
});

app.delete('/foods/:name', function(req, res) {
  client.hdel('foods', req.params.name, function(error) {
    if (error) throw error;
    res.sendStatus(204);
  });
});

module.exports = app;
