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

function find(id) {
  return db("chat as c")
         .join("users as u","u.id","c.recepient")
         .select("c.id","u.username as recipient","c.sender","c.message")
         .groupBy("c.recepient");
}
