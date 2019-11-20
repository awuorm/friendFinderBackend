const db = require("../dbConfig");

module.exports = {
  findById,
  findMatch
};
function findMatch(id) {
  return db("answeredQuestions as a")
    .select("a.userId", "a.answerId")
    .where({ answerId: id });
}

function findById(id) {
  let answerQuery = db("answeredQuestions as a")
    .where({ userId: id })
    .select("a.answerId");
  answerQuery = answerQuery.map(ans => findMatch(ans.answerId));

  return answerQuery;
}
