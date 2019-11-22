const express = require("express");
const db = require("./countryModel");

const router = express.Router();

router.get("/country",handleCountryGet);

function handleCountryGet(req,res) {
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