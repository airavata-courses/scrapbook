var express = require('express');
var router = express.Router();
var User = require('../models/user.js')


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
      console.log('find error', err)
      res.status(500).send(err);
      return;
    }

    if(!foundUser) {
      new User({
        name: name,
        email: email,
        photo: photo,
      }).save((err, newUser) => {
        if(err) {
          console.log('save error', err)
          res.status(400).send(err.message);
          return;
        } else {
          console.log('new user sent')
          res.status(201).send(newUser);
          return;
        }
      })
    } else {
      console.log('old user found')
      res.status(200).send(foundUser);
      return;
    }

  })
});

/** 
 * GET Request
 * @param req - body contains userid
 * 
 * Find an user from the database.
 */
router.get('/:id', (req, res) => {
  const userid = req.params.id

  User.findOne({_id: userid}, (err, user) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(user)
    }
  })
});

/** 
 * GET All Users
 * @param req - body contains userid
 * 
 * Find all users from the database.
 */
router.get('/', (req, res) => {
  const userid = req.params.id

  User.find({}, (err, user) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(user)
    }
  })
});

/** 
 * GET users by prefix
 * @param req - body contains userid
 * 
 * Find all users from the database.
 */
router.get('/search/:sub', (req, res) => {
  const substring = req.params.sub
  User.find(
    { "name": { "$regex": substring, "$options": "i" } },
    function(err, docs) { 
      if (err) {
        res.status(404).send(err)
      } else {
        res.status(200).send(docs)
      }
    } 
  );
});

module.exports = router;
