var express = require("express");
var router = express.Router();
var Session = require("../models/session.js");
var redis = require('../config/redis');

const redisClient = redis.client;

/**
 * Route to set the user session. Accepts the UserID and token in the request body
 */
router.post("/set", function (req, res, next) {
  const { userID, token } = req.body;
  addUserToSession(res, userID, token);
});

/**
 * Route to reset the session timestamp.
 * Accepts ID of the session in the URL
 */
router.put('/reset/:id', (req, res, next) => {
  const id = req.params.id;
  Session.findOneAndUpdate({_id: id}, {createdAt: new Date()}, (err, updatedSession) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(203).send(updatedSession)
    }
  })
})

/**
 * Route to remove the user from session
 */
router.delete('/remove/:id', (req, res, next) => {
  const id = req.params.id;
  Session.remove({_id: id}, (err, removed) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  })
})

/** 
 * Function to create a session based on the emailID and the token
 */
function addUserToSession(res, userID, token) {
  new Session({
    userID: userID,
    token: token
  }).save((err, newSession) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(newSession);
    }
  })
}

module.exports = router;
