const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findById
};

function findById(id) {
  return db("chat").where({ id });
}
function add(message) {
  return db("chat")
    .insert(message, "id");
}

function find() {
  return db("chat");
}
