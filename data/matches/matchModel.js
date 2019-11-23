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

function findMatches(id) {
  let foundmatch = db("matches as m").where(
    { loggedin: id },
    "potenitialmatches"
  );
  return foundmatch;
  // console.log(foundmatch);
  //  .select(
  //    "m.potentialmatches",
  //    "m.id",
  //    "m.loggedin",
  //    "m.matched",
  //    "m.probability"
  //    )
  //    .where({loggedin:id});
  //    console.log(foundMatch);
  //    return foundMatch;
  // "u.username as potentialMatch",
  // .join("users as u", "u.id", "m.potentialmatches")
  // .groupBy(
  //   "m.potentialmatches",
  //   "m.id",
  //   "m.loggedin",
  //   "u.username",
  //   "m.matched",
  //   "m.probability"
  // );
}

function insertMatches(matchedUsers, id) {
  console.log(matchedUsers);
  let foundDbUsers = db("matches");
  console.log(foundDbUsers);
  return foundDbUsers.then(foundDbMatch => {
    if (foundDbMatch.length === 0) {
      let insertUsersIntoDb = db("matches").insert(matchedUsers);
      console.log(insertUsersIntoDb);
      return insertUsersIntoDb.then(matched => findMatches(id));
    } else {
      let insertNewUsersIntoDb = db("matches").truncate();
      console.log(insertNewUsersIntoDb);
      return insertNewUsersIntoDb.then(matched => {
        return db("matches")
          .insert(matchedUsers)
          .then(user => findMatches(id));
      });
    }
  });
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
        let matchedUsers = [];
        match.map(user => {
          let newUser = {
            potentialmatches: user.potentialmatches,
            probability: user.probability,
            loggedin: id,
            matched: 0
          };
          matchedUsers = matchedUsers.concat(newUser);
          return matchedUsers;
        });
        //       });
        return insertMatches(matchedUsers, id);
      }
    });
  //   if (process.env.DB_ENV === "production") {
  //     return insertMatches(match.rows, id);
  //   } else {
  //     match.map(user => {
  //       let newUser = {
  //         potentialmatches: user.potentialmatches,
  //         probability: user.probability,
  //         loggedin: id,
  //         matched: 0
  //       };
  //       console.log(newUser);
  //       let foundDbUsers = db("matches");
  //       console.log(foundDbUsers);
  //       return foundDbUsers.then(foundDbMatch => {
  //         if (foundDbMatch.length === 0) {
  //           let insertUsersIntoDb = db("matches").insert(newUser);
  //           console.log(insertUsersIntoDb);
  //           return insertUsersIntoDb;
  //         } else {
  //           console.log("from db ==>", foundDbMatch.length);
  //           foundDbMatch.map(found => {
  //             if (
  //               found.potentialmatches !== newUser.potentialmatches &&
  //               newUser.loggedin !== found.loggedin &&
  //               found.matched !== newUser.matched
  //             ) {
  //               let insertNewUsersIntoDb = db("matches").insert(newUser);
  //               console.log(insertNewUsersIntoDb);
  //               return insertNewUsersIntoDb.then(() => findMatches(id));
  //             } else if (
  //               newUser.potentialmatches === found.potentialmatches &&
  //               newUser.loggedin === found.loggedin &&
  //               newUser.matched === found.matched &&
  //               newUser.probability === found.probability
  //             ) {
  //               console.log(
  //                 "replaceUser ==>",
  //                 newUser,
  //                 "found user ==>",
  //                 found
  //               );
  //               // let updateUsersIntoDb = db("matches")
  //               //   .where({ id: found.id })
  //               //   .update({
  //               //     potentialmatches: replaceUser.potentialmatches,
  //               //     probability: replaceUser.probability,
  //               //     loggedin: replaceUser.loggedin,
  //               //     matched: replaceUser.matched
  //               //   });
  //               console.log("This match already exists in the database!");
  //               return findMatches(id);
  //               // return updateUsersIntoDb.then(() => findMatches(id));
  //             } else if (
  //               found.potentialmatches === newUser.potentialmatches &&
  //               newUser.loggedin === found.loggedin &&
  //               found.matched !== newUser.matched
  //             ) {
  //               console.log(newUser, "match has already been made!");
  //               return findMatches(id);
  //             }
  //             //                   // else if (found.potentialmatches !== newUser.potentialmatches &&
  //             //                   //   newUser.loggedin !== found.loggedin &&
  //             //                   //   found.matched !== newUser.matched) {
  //             //                   //   let insertNewUsersIntoDb = db("matches").insert(replaceUser);
  //             //                   //   console.log(insertNewUsersIntoDb);
  //             //                   //   return insertNewUsersIntoDb.then(() => findMatches(id));
  //             //                   // }
  //           });
  //         }
  //         //           });
  //         //           // matchedUsers = matchedUsers.concat(newUser);
  //         //           // return matchedUsers;
  //       });
  //       //         // return insertMatches(matchedUsers, id);
  //     });
  //   }
  // });
}
