var request = require('supertest');
var app = require('./app');

var redis = require('redis');
var client = redis.createClient();
client.select('test'.length);
client.flushdb();

describe('Requests to the root path', function() {

  it('Returns a 200 status code', function(done) {

    request(app)
      .get('/')
      .expect(200, done);

  });

  it('Returns an HTML format', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done);
  });

  it('Returns an index file with Foods', function(done) {
     request(app)
       .get('/')
       .expect(/foods/i, done);
  });
});

describe('Listing foods I can eat on /foods', function() {
  it('returns 200 status code', function(done) {
    request(app)
      .get('/foods')
      .expect(200, done);
  });

  it('returns JSON format', function(done) {
    request(app)
      .get('/foods')
      .expect('Content-Type', /json/, done)
  });


  it('returns no foods on initial GET', function(done) {
     request(app)
      .get('/foods')
      .expect(JSON.stringify([]), done);
  });
});

describe('Adding new foods', function() {
  it('returns a 201 status code', function(done) {
    request(app)
      .post('/foods')
      .send('name=Pear&eat=true')
      .expect(201, done);
  });

  it('returns the food name', function(done) {
     request(app)
     .post('/foods')
       .send('name=pear&eat=true')
       .expect(/pear/i, done);
  });

  it('validates food name and eat status', function(done) {
    request(app)
      .post('/foods')
      .send('name=&eat=')
      .expect(400, done); // Bad request.
  });
});

describe('Deleting foods', function() {
  before(function() {
    client.hset('foods', 'banana', true);
  });

  after(function() {
    client.flushdb();
  });

  it('returns a 204 status code', function(done) {
    request(app)
      .delete('/foods/banana')
      .expect(204, done);
  });

  it('returns the food name', function(done) {
     request(app)
     .post('/foods')
       .send('name=pear&eat=true')
       .expect(/pear/i, done);
  });
});

