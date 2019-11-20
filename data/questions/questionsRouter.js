const express = require("express");
const db = require("./questionsModel");
const restricted = require("../auth/authenticate");
const db2 = require("../matches/matchModel");

const router = express.Router();

router.get("/questions", restricted, handleQuestionsGet);
router.post("/answers", restricted, handleAnswersPost);

function handleAnswersPost(req, res) {
  const answers = req.body;
  const id = req.decodedToken.subject;
  db.add(answers, id)
    .then(data => {
      let matchesArray = [];
      let matchesArr = [];
      data.map(match => {
        match.map(user => {
          matchesArray = matchesArray.concat(user);
          return matchesArray;
        });
      });
      matchesArray.map(match => {
        if (id !== match.userId) {
          matchesArr = matchesArr.concat(match);
          return matchesArr;
        } else {
          return { info: "No match" };
        }
      });
      res.status(200).json(matchesArr);
      console.table(matchesArr);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: error.message });
      console.log(error);
    });
}

function handleQuestionsGet(req, res) {
  db.find()
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
