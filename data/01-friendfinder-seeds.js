exports.seed = function(knex) {
  return knex("country").insert([
    { id: 1, countryName: "Slovakia", countryCode: "+39" },
    { id: 2, countryName: "Japan", countryCode: "+115" },
    { id: 3, countryName: "South Korea", countryCode: "+120" }
  ]);
};
