const express = require("express");
const db = require("./questionsModel");
const restricted = require("../auth/authenticate");

const router = express.Router();

router.get("/questions",restricted,handleQuestionsGet);

function handleQuestionsGet(req,res) {
    db.find().then(data => {
        res.status(200).json(data);
        console.table(data);
    })
    .catch(error => {
        res.status(500).json({errorMessage: error.message});
        console.table(error);
    })
}

module.exports = router;