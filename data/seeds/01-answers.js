
exports.seed = function(knex) {
  
      return knex('answers').insert([
        {id: 1, answersBody: 'tea',questionid:1},
        {id: 2, answersBody: 'coffee',questionid:1},
        {id: 3, answersBody: 'Tesla',questionid:2},
        {id: 4, answersBody: 'Lamborghini',questionid:2},
        {id: 5, answersBody: 'Brazil',questionid:3},
        {id: 6, answersBody: 'Japan',questionid:3},
        {id: 7, answersBody: 'archery',questionid:4},
        {id: 8, answersBody: 'cooking',questionid:4},
        {id: 9, answersBody: 'facebook',questionid:5},
        {id: 10, answersBody: 'twitter',questionid:5},
        {id: 11, answersBody: 'Titanic',questionid:6},
        {id: 12, answersBody: 'Hangover',questionid:6},
        {id: 13, answersBody: 'die young',questionid:7},
        {id: 14, answersBody: 'die at 100',questionid:7},
        {id: 15, answersBody: 'hiphop',questionid:8}, 
         {id: 16, answersBody: 'pop',questionid:8},
        {id: 17, answersBody: 'country',questionid:8},
        {id: 18, answersBody: 'workout',questionid:9}, 
         {id: 19, answersBody: 'get extra sleep',questionid:9},
        {id: 20, answersBody: 'life of the party',questionid:10},
        {id: 21, answersBody: 'wallflower',questionid:10}, 
         {id: 22, answersBody: 'indoors',questionid:11},
        {id: 23, answersBody: 'outdoors',questionid:11},
        {id: 24, answersBody: 'early',questionid:12},
        {id: 25, answersBody: 'late',questionid:12},


      ]);
};
