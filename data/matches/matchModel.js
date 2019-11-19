const db = require("../dbConfig");

module.exports = {
  findById,
  findMatch
};
function findMatch(id) {
   return db("answeredQuestions as a")
    .select("a.userId","a.answerId")
    .where({ answerId: id });
    // console.log("matches",matchedAns);
    // return matchedAns;
}

function findById(id) {
   let answerQuery = db("answeredQuestions as a")
        .where({ userId: id })
        .select("a.answerId");
        answerQuery = answerQuery.map( ans => findMatch(ans.answerId));
                    // let matches = db("answeredQuestions as a").where({answerId:ans.answerId}).select("a.userId");
                    // ansArray = ansArray.concat(matches);
                    // console.log("matches",ansArray);
                    // return ansArray;

        return answerQuery;

//   return db("answeredQuestions as a")
//     .where({ userId: id })
//     .select("a.answerId")
//     .then(answerQuery => answerQuery.map(ans => findMatch(ans.answerId)));


    //     // findMatch(answerQuery.answerId)
  //     console.log(answerQuery);
  // } );
  //   answerQuery = answerQuery.map(
  //     ans => findMatch(ans.answerId));
  //         let matches = db("answeredQuestions as a").where({answerId:ans.answerId}).select("a.userId");
  //         ansArray = ansArray.concat(matches);
  //         console.log("matches",ansArray);
  //         return ansArray;
  //     }
  //   console.log(answerQuery);
  //   return answerQuery;
}
