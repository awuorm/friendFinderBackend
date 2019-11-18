const db = require("../dbConfig");

module.exports = {
    find,
}

function find() {
   return db("questions as q")
    .join("answers as a","a.questionId","q.id")
    .select("q.id","q.questionBody","a.answersBody");
}