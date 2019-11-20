const express = require("express");
const router = express.Router();
const db = require("./matchModel");
const restricted = require("../auth/authenticate");


router.get("/",restricted, handleMatches);

function handleMatches(req, res) {
    const id  = req.decodedToken.subject;
    db.potentialFriends(id)
      .then(data => {
        res.status(200).json(data);
        console.table(data);
      })
      .catch(error => {
        res.status(500).json({ errorMessage: error.message });
        console.log(error);
      });
  }

  module.exports = router;