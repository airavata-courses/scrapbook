var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  var newUser = new User({
    name: 'Hrishikesh Paul',
    email: 'hrpaul@iu.edu',
    photo: 'https://i.picsum.photos/id/1020/200/300'
  })
  User.remove({email: 'hrpaul@iu.edu'})

  newUser.save((err)=>{
      if (err) console.log('error on save')
  })

  User.find({}).then(data => {
    res.send(data)
  })
});

module.exports = router;
