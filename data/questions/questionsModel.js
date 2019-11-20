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
  return db("multiChoice as m")
    .join("questions as q", "m.questionId", "q.id")
    .join("answers as a", "a.id", "m.ans_a","m.ans_b")
    .select("m.id", "q.questionsBody", "a.answersBody");
}
