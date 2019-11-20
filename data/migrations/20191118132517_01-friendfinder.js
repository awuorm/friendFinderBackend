exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
      table.increments();
      table
        .string("username")
        .notNullable()
        .unique();
      table.string("password").notNullable();
    })
    .createTable("userProfile", table => {
      table.increments();
      table.string("firstName");
      table.string("LastName");
      table.string("Age");
      table.text("bio");
      table.text("avatar");
      table.string("country");
      table.string("city");
      table
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users");
    })

    .createTable("country", table => {
      table.increments();
      table.string("countryName").notNullable();
      table.string("countryCode").notNullable();
    })
    .createTable("city", table => {
      table.increments();
      table.string("city").notNullable();
      table
        .integer("countryId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("country");
    })
    .createTable("questions", table => {
      table.increments();
      table
        .text("questionsBody")
        .notNullable()
        .unique();
    })
    .createTable("answers", table => {
      table.increments();
      table.text("answersBody").notNullable();
      table
        .integer("questionId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("questions");
    })
    .createTable("chat", table => {
      table.increments();
      table
        .integer("sender")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users");
      table
        .integer("recepient")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users");
      table.text("message").notNullable();
    })
    .createTable("matches", table => {
      table.increments();
      table
        .integer("loggedIn")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users");
      table
        .integer("potentialMatches")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users");
      table
        .boolean("matched")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("answeredQuestions",table => {
        table.increments();
        table
        .integer("userId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users")
        table
        .integer("questionId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("questions")
        table
        .integer("answerId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("answers")

    })
    .createTable("multiChoice",table => {
      table.increments();
      table
      .integer("questionId")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("questions")
      table
      .integer("ans_a")
      .unsigned()
      .references("id")
      .inTable("answers")
      table
      .integer("ans_b")
      .unsigned()
      .references("id")
      .inTable("answers")
      table
      .integer("ans_c")
      .unsigned()
      .references("id")
      .inTable("answers")

  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("matches")
    .dropTableIfExists("chat")
    .dropTableIfExists("userProfile")
    .dropTableIfExists("answeredQuestions")
    .dropTableIfExists("multiChoice")
    .dropTableIfExists("answers")
    .dropTableIfExists("questions")
    .dropTableIfExists("users")
    .dropTableIfExists("city")
    .dropTableIfExists("country");
};
