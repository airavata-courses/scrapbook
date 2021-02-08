var express = require('express');
var router = express.Router();
var User = require('../models/users.js')


/** 
 * POST requests
 * @param req - body contains name, email, photo
 * 
 * Find an user from the database.
 * If the user is found, return the user and 200 status.
 * If the user is not found, then add the user and return a 201 status and the user.
 */
router.post('/login', (req, res) => {
  const {name, email, photo} = req.body

  User.findOne({email: email}, (err, foundUser) => {
    if(err) {
      console.log(err)
      res.status(500).send(err);
    }

    if(!foundUser) {
      new User({
        name: name,
        email: email,
        photo: photo
      }).save((err, newUser) => {
        if(err) {
          console.log(err.message)
          res.status(400).send(err.message);
        } else {
          res.status(201).send(newUser);
        }
      })
    } else {
      res.status(200).send(foundUser);
    }

  })
});

module.exports = router;
