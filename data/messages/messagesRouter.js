const express = require("express");
const db = require("./messagesModel");
const router = express.Router();

router.post("/", handleMsgPost);
router.get("/", handleMsgGet);

function handleMsgGet(req, res) {
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

function handleMsgPost(req, res) {
  const msg = req.body;
  db.add(msg)
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
