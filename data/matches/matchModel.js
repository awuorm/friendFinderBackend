const db = require("../dbConfig");

module.exports = {
  findById,
  findMatch,
  potentialFriends,
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

function potentialFriends(id, match) {
  return db.raw(
    `SELECT ouA.user_id AS potentialFriend,
    u.username,
    count( * ) AS match_probability
FROM (
        SELECT ua.userId,
               ua.questionId,
               ua.answerId
          FROM usersAnswers AS ua
         WHERE ua.userId = ${id}
    )
    AS liA
    JOIN
    (
        SELECT ua.userId,
               ua.questionId,
               ua.answerId
          FROM answeredQuestions AS ua
         WHERE ua.user_id != ${id}
    )
    AS ouA ON liA.questionId = ouA.questionId AND 
              liA.answerId = ouA.answerId
              JOIN users as u on ouA.userId = u.id
GROUP BY liA.userId,
       ouA.userId
HAVING count( * ) > ${match}
ORDER BY count( * ) DESC;`
  );
}
