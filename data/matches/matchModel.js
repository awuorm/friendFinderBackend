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
    .where({ id: user.id })
    .update({
      potentialmatches: user.potentialmatches,
      probability: user.probability,
      loggedin: id,
      matched: user.matched
    });
}

function findMatches() {
  return db("matches as m")
    .join("users as u", "u.id", "m.potentialmatches")
    .select(
      "m.potentialmatches",
      "m.loggedin",
      "u.username as potentialMatch",
      "m.matched",
      "m.probability"
    ).where({matched:false})
    .groupBy("m.potentialmatches",
    "m.loggedin",
    "u.username",
    "m.matched",
    "m.probability");
}

function insertMatches(match, id) {
  console.log(match, id);
  let matchedUsers = [];
  match.map(user => {
    matchedUsers = matchedUsers.concat({
      potentialmatches: user.potentialmatches,
      probability: user.probability,
      loggedin: id
    });
    return matchedUsers;
  });
  return db("matches")
    .insert(matchedUsers)
    .then(() => findMatches(id));
}
function findMatch(id) {
  return db("answeredquestions as a")
    .select("a.userid", "a.answerid")
    .where({ answerid: id });
}

function findById(id) {
  let answerQuery = db("answeredquestions as a")
    .where({ userid: id })
    .select("a.answerid");
  answerQuery = answerQuery.map(ans => findMatch(ans.answerid));

  return answerQuery;
}

function potentialFriends(id) {
  return db
    .raw(
      `SELECT ouA.userid AS potentialmatches,
    count( * ) AS probability
FROM (
        SELECT ua.userid,
               ua.questionid,
               ua.answerid
          FROM answeredquestions AS ua
         WHERE ua.userid = ${id}
    )
    AS liA
    JOIN
    (
        SELECT ua.userid,
               ua.questionid,
               ua.answerid
          FROM answeredquestions AS ua
         WHERE ua.userid != ${id}
    )
    AS ouA ON liA.questionid = ouA.questionid AND 
              liA.answerid = ouA.answerid
              JOIN users as u on ouA.userid = u.id 
GROUP BY liA.userid,
       ouA.userid
HAVING count( * ) > 0
ORDER BY count( * ) DESC;`
    )
    .then(match => {
      if (process.env.DB_ENV === "production") {
         return insertMatches(match.rows, id);
      } else {
       return insertMatches(match, id);
      }
    });
}
