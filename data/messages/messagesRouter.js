const express = require("express");
const db = require("./messagesModel");
const router = express.Router();
const restricted = require("../auth/authenticate");

router.post("/", restricted, handleMsgPost);
router.get("/", restricted, handleMsgGet);

function handleMsgGet(req, res) {
  const id  = req.decodedToken.subject;
  db.find(id)
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
      res.status(201).json({ success: "Message sent successfully" });
      console.table(data);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: error.message });
      console.log(error);
    });
}

module.exports = router;
