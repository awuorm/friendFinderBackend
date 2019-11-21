
exports.seed = function(knex) {
  
  return knex('answeredquestions').insert([
    {id: 1,questionId:1, userId: 1,answerId:2},
    {id: 2,questionId:2, userId: 1,answerId:3},
    {id: 3, questionId:3, userId: 1,answerId:5},
    {id: 4, questionId:4, userId: 1,answerId:7},
    {id: 5, questionId:5, userId: 1,answerId:9},
    {id: 6, questionId:6, userId: 1,answerId:11},
    {id: 7, questionId:7, userId: 1,answerId:14},
    {id: 8, questionId:8, userId: 1,answerId:16},
    {id: 9, questionId:9, userId: 1,answerId:18},
    {id: 10, questionId:10, userId: 1,answerId:20},
    {id: 11, questionId:11, userId: 1,answerId:22},
    {id: 12,questionId:12, userId: 1,answerId:24},
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
