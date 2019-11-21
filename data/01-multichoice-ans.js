
exports.seed = function(knex) {
  
  return knex('multichoice').insert([
    {id: 1, ans_a:"tea",ans_b:"coffee", questionid:1},
    {id: 2, ans_a:"Tesla",ans_b:"Lamborghini", questionid:2},
    {id: 3, ans_a:"Japan",ans_b:"Brazil", questionid:3},
    {id: 4, ans_a:"Archery",ans_b:"Cooking", questionid:4},
    {id: 5, ans_a:"Facebook",ans_b:"Twitter", questionid:5},
    {id: 6, ans_a:"Titanic",ans_b:"Hangover", questionid:6},
    {id: 7, ans_a:"Die young",ans_b:"Die at 100", questionid:7},
    {id: 8, ans_a:"Hiphop",ans_b:"pop",ans_c:"country", questionid:8},
    {id: 9, ans_a:"workout",ans_b:"get extra sleep", questionid:9},
    {id: 10, ans_a:"life of the party",ans_b:"wallflower", questionid:10},
    {id: 11, ans_a:"indoors",ans_b:"outdoors", questionid:11},
    {id: 12, ans_a:"early",ans_b:"late",questionid:12},
    


  ]);
};
