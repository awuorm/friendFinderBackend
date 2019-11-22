
exports.seed = function(knex) {
  
  return knex('answeredquestions').insert([
    {id: 25,questionid:1, userid: 3,answerid:2},
    {id: 26,questionid:2, userid: 3,answerid:3},
    {id: 27, questionid:3, userid: 3,answerid:5},
    {id: 28, questionid:4, userid: 3,answerid:7},
    {id: 29, questionid:5, userid: 3,answerid:9},
    {id: 30, questionid:6, userid: 3,answerid:11},
    {id: 31, questionid:7, userid: 3,answerid:14},
    {id: 32, questionid:8, userid: 3,answerid:16},
    {id: 33, questionid:9, userid: 3,answerid:18},
    {id: 34, questionid:10, userid: 3,answerid:20},
    {id: 35, questionid:11, userid: 3,answerid:22},
    {id: 36,questionid:12, userid: 3,answerid:24},
    {id: 37,questionid:1, userid: 4,answerid:2},
    {id: 38,questionid:2, userid: 4,answerid:3},
    {id: 39, questionid:3, userid: 4,answerid:5},
    {id: 40, questionid:4, userid: 4,answerid:7},
    {id: 41, questionid:5, userid: 4,answerid:9},
    {id: 42, questionid:6, userid: 4,answerid:11},
    {id: 43, questionid:7, userid: 4,answerid:14},
    {id: 44, questionid:8, userid: 4,answerid:16},
    {id: 45, questionid:9, userid: 4,answerid:18},
    {id: 46, questionid:10, userid: 4,answerid:20},
    {id: 47, questionid:11, userid: 4,answerid:22},
    {id: 48,questionid:12, userid: 4,answerid:24},
    

  ]);
};
