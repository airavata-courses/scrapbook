var express = require("express");
var router = express.Router();
var redis = require('../config/redis');

const redisClient = redis.client;

const TTL = 3600;

/**
 * Route to set the user session. Accepts the UserID and token in the request body
 */
router.post("/set", function (req, res, next) {
  const { userID, token } = req.body;
    try {
      redisClient.set(userID, token, 'ex', TTL, (error, done) => {
        if (error) throw error;
        if (done) res.status(200).send('Session Added');
      })
    } catch(err) {
        res.status(500).send(err);
    }
});

/**
 * Route to reset the session timestamp.
 * Accepts ID of the session in the URL
 */
router.put('/reset/:id', (req, res, next) => {
  const id = req.params.id;
  try {
    redisClient.expire(id, TTL, (err, done) => {
      if (err) throw err;
      if (done) {
        res.status(200).send('Session Updated')
      } else {
        res.status(401).send('User not in session');
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
    if (done) res.status(200).send('User Removed from session');
    else res.send(401).send('User not found')
  })
})


module.exports = router;
