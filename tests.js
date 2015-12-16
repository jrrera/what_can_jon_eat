var request = require('supertest');
var app = require('./app');

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

  it('returns initial foods', function(done) {
     request(app)
      .get('/foods')
      .expect(JSON.stringify(['apples', 'pears', 'jalapenos']), done);
  });
});

