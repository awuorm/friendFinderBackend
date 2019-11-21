
exports.seed = function(knex) {
  
  return knex('multichoice').insert([
    {id: 1, ans_a:"tea",ans_b:"coffee", questionId:1},
    {id: 2, ans_a:"Tesla",ans_b:"Lamborghini", questionId:2},
    {id: 3, ans_a:"Japan",ans_b:"Brazil", questionId:3},
    {id: 4, ans_a:"Archery",ans_b:"Cooking", questionId:4},
    {id: 5, ans_a:"Facebook",ans_b:"Twitter", questionId:5},
    {id: 6, ans_a:"Titanic",ans_b:"Hangover", questionId:6},
    {id: 7, ans_a:"Die young",ans_b:"Die at 100", questionId:7},
    {id: 8, ans_a:"Hiphop",ans_b:"pop",ans_c:"country", questionId:8},
    {id: 9, ans_a:"workout",ans_b:"get extra sleep", questionId:9},
    {id: 10, ans_a:"life of the party",ans_b:"wallflower", questionId:10},
    {id: 11, ans_a:"indoors",ans_b:"outdoors", questionId:11},
    {id: 12, ans_a:"early",ans_b:"late",questionId:12},
    


  ]);
};
