
exports.seed = function(knex) {
  
  return knex('answeredquestions').insert([
    {id: 1,questionid:1, userid: 1,answerid:2},
    {id: 2,questionid:2, userid: 1,answerid:3},
    {id: 3, questionid:3, userid: 1,answerid:5},
    {id: 4, questionid:4, userid: 1,answerid:7},
    {id: 5, questionid:5, userid: 1,answerid:9},
    {id: 6, questionid:6, userid: 1,answerid:11},
    {id: 7, questionid:7, userid: 1,answerid:14},
    {id: 8, questionid:8, userid: 1,answerid:16},
    {id: 9, questionid:9, userid: 1,answerid:18},
    {id: 10, questionid:10, userid: 1,answerid:20},
    {id: 11, questionid:11, userid: 1,answerid:22},
    {id: 12,questionid:12, userid: 1,answerid:24},
    {id: 13,questionid:1, userid: 2,answerid:2},
    {id: 14,questionid:2, userid: 2,answerid:3},
    {id: 15, questionid:3, userid: 2,answerid:5},
    {id: 16, questionid:4, userid: 2,answerid:7},
    {id: 17, questionid:5, userid: 2,answerid:9},
    {id: 18, questionid:6, userid: 2,answerid:11},
    {id: 19, questionid:7, userid: 2,answerid:14},
    {id: 20, questionid:8, userid: 2,answerid:16},
    {id: 21, questionid:9, userid: 2,answerid:18},
    {id: 22, questionid:10, userid: 2,answerid:20},
    {id: 23, questionid:11, userid: 2,answerid:22},
    {id: 24,questionid:12, userid: 2,answerid:24},
    

  ]);
};
