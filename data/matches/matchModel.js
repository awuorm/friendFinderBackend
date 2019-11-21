const db = require("../dbConfig");

module.exports = {
  findById,
  findMatch,
  potentialFriends,
  insertMatches,
  findMatches,
  updateMatches
};

function updateMatches(user, id) {
 return db("matches")
    .where({ id: user.id})
    .update({
      potentialMatches: user.potentialMatches,
      probability: user.probability,
      loggedIn: id,
      matched: user.matched
    });
}

function findMatches() {
  return db("matches as m")
    .join("users as u", "u.id", "m.potentialMatches")
    .select(
      "m.id",
      "m.loggedIn",
      "u.username as potentialMatch",
      "m.matched",
      "m.probability"
    )
    .groupBy("m.potentialMatches");
}

function insertMatches(match,id) {
  console.log(match, id);
  let matchedUsers = [];
  match.map(user => {
    matchedUsers = matchedUsers.concat({
      potentialMatches: user.potentialMatches,
      probability: user.probability,
      loggedIn: id
    });
    return matchedUsers;
  });
  return db("matches")
    .insert(matchedUsers)
    .then(() => findMatches(id));
}
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

function potentialFriends(id) {
  let probable = db.raw(
    `SELECT ouA.userId AS potentialMatches,
    count( * ) AS probability
FROM (
        SELECT ua.userId,
               ua.questionId,
               ua.answerId
          FROM answeredQuestions AS ua
         WHERE ua.userId = ${id}
    )
    AS liA
    JOIN
    (
        SELECT ua.userId,
               ua.questionId,
               ua.answerId
          FROM answeredQuestions AS ua
         WHERE ua.userId != ${id}
    )
    AS ouA ON liA.questionId = ouA.questionId AND 
              liA.answerId = ouA.answerId
              JOIN users as u on ouA.userId = u.id 
GROUP BY liA.userId,
       ouA.userId
HAVING count( * ) > 0
ORDER BY count( * ) DESC;`
  );
  return probable.then(match => insertMatches(match, id));

  // return probable;
}
