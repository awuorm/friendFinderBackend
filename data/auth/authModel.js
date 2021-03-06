const db = require("../dbConfig");

module.exports = {
  add,
  findBy,
  find
};

function find() {
  return db("users as u").select("u.id","u.username");
}

function add(user) {
  return db("users").insert(user);
}

function findBy(username) {
  return db("users")
    .where({ username })
    .first();
}
