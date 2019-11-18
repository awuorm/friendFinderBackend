const express = require("express");
const db = require("./questionsModel");
const restricted = require("../auth/authenticate");

const router = express.Router();

router.get("/questions", restricted, handleQuestionsGet);

function handleQuestionsGet(req, res) {
  db.find()
    .then(data => {
    //   let answers = [];
    //   data.map((question, index) => {
    //     let i = index + 1;
    //     if (question.id === i) {
    //       answers = answers.concat(question.answersBody);
    //       console.log(answers);
    //       i--;
    //       return answers;
    //     }
    //     return question;
    //   });
      res.status(200).json(data);
      console.table(data);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: error.message });
      console.table(error);
    });
}

module.exports = router;
