
exports.seed = function(knex) {
  
  return knex('answeredquestions').insert([
    {id: 13,questionId:1, userId: 2,answerId:2},
    {id: 14,questionId:2, userId: 2,answerId:3},
    {id: 15, questionId:3, userId: 2,answerId:5},
    {id: 16, questionId:4, userId: 2,answerId:7},
    {id: 17, questionId:5, userId: 2,answerId:9},
    {id: 18, questionId:6, userId: 2,answerId:11},
    {id: 19, questionId:7, userId: 2,answerId:14},
    {id: 20, questionId:8, userId: 2,answerId:16},
    {id: 21, questionId:9, userId: 2,answerId:18},
    {id: 22, questionId:10, userId: 2,answerId:20},
    {id: 23, questionId:11, userId: 2,answerId:22},
    {id: 24,questionId:12, userId: 2,answerId:24},
    

  ]);
};
