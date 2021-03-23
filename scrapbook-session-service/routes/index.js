var express = require("express");
var router = express.Router();
var redis = require('../config/redis');
var start = require('./start');
var Session = require('../models/session')

const redisClient = redis.client;

const TTL = 3600;

router.get('/', (req, res, next) => {
  res.send(start())
})

/**
 * Route to set the user session. Accepts the UserID and token in the request body
 */
router.post("/set", function (req, res, next) {
  const { userID, token } = req.body;
    try {
      redisClient.set(userID, token, 'ex', TTL, (error, done) => {
        if (error) throw error;
        if (done) {
            new Session({
              user: userID,
              event: 'Login'
            }).save((err, done) => {if(err) console.log(err)});

          res.status(200).send({message: 'Session Added'})
        }
      })
    } catch(err) {
        res.status(500).send({message: JSON.stringify(err)})
    }
});

/**
 * Route to reset the session timestamp.
 * Accepts ID of the session in the URL
 */
router.post('/reset/:id', (req, res, next) => {
  const id = req.params.id;
  const { event } = req.body;
  console.log(event, id)
  try {
    redisClient.expire(id, TTL, (err, done) => {
      if (err) throw err;
      if (done) {
        new Session({
          user: id,
          event: event
        }).save((err, done) => {if(err) console.log(err)});
        res.status(200).send({message: 'Session Updated'})
      } else {
        res.status(401).send({message: 'User not in session'})
      }
     
    })
  } catch (err) {
    res.status(401).send(err);
  }
})

/**
 * Route to remove the user from session
 */
router.delete('/remove/:id', (req, res, next) => {
  const id = req.params.id;
  redisClient.del(id, (err, done) => {
    if (err) res.status(500).send(err)
    if (done) {
      new Session({
        user: id,
        event: 'Logout'
      }).save((err, done) => {if(err) console.log(err)});
      res.status(200).send({message: 'User Removed from session'});
    }
    else res.send(401).send({message: 'User not in session'})
  })
})

/**
 * Get all the session events for a user
 */
router.get('/all/:id', (req, res, next) => {
  console.log('Find all for', req.params.id);
  Session.find({user: req.params.id}, (err, data) => {
    if(err) res.status(500).send(err)
    else if(data) res.status(200).send(data);
  })
})


module.exports = router;
