var express = require("express");
var router = express.Router();
var Session = require("../models/session.js");

router.post("/set", function (req, res, next) {
  const { userID, token } = req.body;
  addUserToSession(res, userID, token);
});

router.put('/reset', (req, res, next) => {
  const { userID, token } = req.body;
  Session.remove({userID: userID}, (err, removed) => {
    if (err) {
      res.status(500).send(err);
    } else {
      addUserToSession(res, userID, token);
    }
  })
})

router.delete('/remove', (req, res, next) => {
  const { userID } = req.body;
  Session.remove({userID: userID}, (err, removed) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  })
})

function addUserToSession(res, userID, token) {
  new Session({
    userID: userID,
    token: token
  }).save((err, newSession) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send('User successfully added in session');
    }
  })
}

module.exports = router;
