const db = require("../dbConfig");

module.exports = {
    add,
    find,
}
function add(message) {
   return db("chat").insert(message);
}

function find() {
   return db("chat");
}