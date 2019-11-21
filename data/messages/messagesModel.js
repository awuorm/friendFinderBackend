const db = require("../dbConfig");

module.exports = {
    add,
    find,
    findById,
}

function findById(id) {
   return db("chat").where({id},"message");
   
}
function add(message) {
   return db("chat").insert(message).then(ids =>findById(ids[0]));
}

function find() {
   return db("chat");
}