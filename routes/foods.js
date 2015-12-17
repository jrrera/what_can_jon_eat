var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

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


router.route('/')
  .get(function(req, res) {
    client.hkeys('foods', function(error, names) {
      res.json(names);
    })
  })
  .post(bodyParser.urlencoded({ extended: false  }), function(req, res) {
    var newFood = req.body;
    if (!newFood.name || !newFood.eat) {
      res.sendStatus(400);
    }
    client.hset('foods', newFood.name, newFood.eat);
    res.status(201).json(newFood.name);
    });

router.route('/:name')
  .delete(function(req, res) {
    client.hdel('foods', req.params.name, function(error) {
      if (error) throw error;
      res.sendStatus(204);
    })
  })
  .get(function(req, res) {
    client.hget('foods', req.params.name, function(error, description) {
      res.json(description);
    });
  });

module.exports = router;
