const db = require("../dbConfig");

const {
    find,
}

function find() {
    db("questions");
}