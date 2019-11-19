const db = require("../dbConfig");
const matches = require("../matches/matchModel");

module.exports = {
  find,
  add
};

function add(answers,id) {
  return db("answeredQuestions")
    .insert(answers).then(answers => matches.findById(id));
}

function find() {
  return db("questions as q")
    .join("answers as a", "a.questionId", "q.id")
    .select("a.questionId", "q.questionsBody", "a.answersBody");
}
