
exports.seed = function(knex) {
  
  return knex('multiChoice').insert([
    {id: 1, ans_a:1,ans_b:2, questionId:1},
    {id: 2, ans_a:3,ans_b:4, questionId:2},
    {id: 3, ans_a:5,ans_b:6, questionId:3},
    {id: 4, ans_a:7,ans_b:8, questionId:4},
    {id: 5, ans_a:9,ans_b:10, questionId:5},
    {id: 6, ans_a:11,ans_b:12, questionId:6},
    {id: 7, ans_a:13,ans_b:14, questionId:7},
    {id: 8, ans_a:15,ans_b:16,ans_c:17, questionId:8},
    {id: 9, ans_a:18,ans_b:19, questionId:9},
    {id: 10, ans_a:20,ans_b:21, questionId:10},
    {id: 11, ans_a:22,ans_b:23, questionId:11},
    {id: 12, ans_a:24,ans_b:25,questionId:12},
    


  ]);
};
