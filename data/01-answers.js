
exports.seed = function(knex) {
  
      return knex('answers').insert([
        {id: 1, answersBody: 'tea',questionId:1},
        {id: 2, answersBody: 'coffee',questionId:1},
        {id: 3, answersBody: 'Tesla',questionId:2},
        {id: 4, answersBody: 'Lamborghini',questionId:2},
        {id: 5, answersBody: 'Brazil',questionId:3},
        {id: 6, answersBody: 'Japan',questionId:3},
        {id: 7, answersBody: 'archery',questionId:4},
        {id: 8, answersBody: 'cooking',questionId:4},
        {id: 9, answersBody: 'facebook',questionId:5},
        {id: 10, answersBody: 'twitter',questionId:5},
        {id: 11, answersBody: 'Titanic',questionId:6},
        {id: 12, answersBody: 'Hangover',questionId:6},
        {id: 13, answersBody: 'die young',questionId:7},
        {id: 14, answersBody: 'die at 100',questionId:7},
        {id: 15, answersBody: 'hiphop',questionId:8}, 
         {id: 16, answersBody: 'pop',questionId:8},
        {id: 17, answersBody: 'country',questionId:8},
        {id: 18, answersBody: 'workout',questionId:9}, 
         {id: 19, answersBody: 'get extra sleep',questionId:9},
        {id: 20, answersBody: 'life of the party',questionId:10},
        {id: 21, answersBody: 'wallflower',questionId:10}, 
         {id: 22, answersBody: 'indoors',questionId:11},
        {id: 23, answersBody: 'outdoors',questionId:11},
        {id: 24, answersBody: 'early',questionId:12},
        {id: 25, answersBody: 'late',questionId:12},


      ]);
};
