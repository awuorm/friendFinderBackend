const db = require("../dbConfig");

module.exports = {
  find
};

function find() {
  return db("questions as q")
    .join("answers as a", "a.questionId", "q.id")
    .select("a.questionid", "q.questionsBody", "a.answersBody");
}

// function findBy(id) {
//   return db("answers as a").where({ questionId: id });
// }
