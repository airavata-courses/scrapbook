var expect  = require('chai').expect;
require('dotenv').config();
var start = require('../routes/start')

it('should connect to user service', function(done) {
  var didStart = start()
  expect(didStart).to.equal('User service connected!');
  done();
});