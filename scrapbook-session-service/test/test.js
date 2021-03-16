var expect  = require('chai').expect;
require('dotenv').config();
var start = require('../routes/start')

it('should connect to session service', function(done) {
  var didStart = start()
  expect(didStart).to.equal('Session Service Started');
  done();
});
