var express = require('express');
var router = express.Router();
var start = require('./start');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(start())
});

module.exports = router;
