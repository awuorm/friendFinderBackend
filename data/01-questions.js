exports.seed = function(knex) {
  return knex("questions").insert([
    { id: 1, questionsBody: "What's your favorite drink tea or coffee?" },

    { id: 2, questionsBody: "What's your dream car, Tesla or Lamborghini?" },

    { id: 3, questionsBody: "Where would you rather be from Japan or Brazil?" },

    {
      id: 4,
      questionsBody: "What skill would you like to master, archery or cooking?"
    },

    {
      id: 5,
      questionsBody:
        "What website do you visit most often, facebook or twitter?"
    },

    {
      id: 6,
      questionsBody:
        "What movie title best describes your life, Titatic or Hangover ?"
    },

    { id: 7, questionsBody: "Die young or live until 100?" },

    { id: 8, questionsBody: "Hiphop, pop or country music?" },

    {
      id: 9,
      questionsBody:
        "What's the best way to start the day, workout or get extra sleep?"
    },

    { id: 10, questionsBody: " Life of the party or a wallflower?" },

    { id: 11, questionsBody: "Indoors or Outdoors?" },

    { id: 12, questionsBody: " Are you usually early or late?" }
  ]);
};
