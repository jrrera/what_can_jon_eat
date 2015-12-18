/* jshint node: true*/
'use strict';

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

client.on('error', function (err) {
  console.log('Error ' + err);
});

module.exports = client;
