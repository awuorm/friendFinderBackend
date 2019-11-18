exports.seed = function(knex) {
  return knex("country").insert([
    { id: 1, countryName: "Kenya", countryCode: "+254" },
    { id: 2, countryName: "USA", countryCode: "+1" },
    { id: 3, countryName: "Tanzania", countryCode: "+255" }
  ]);
};
