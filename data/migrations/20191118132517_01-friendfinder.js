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
    .createTable("userprofile", table => {
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
        .integer("questionid")
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
        .integer("loggedin")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users");
        table.integer("probability")
        .notNullable();
      table
        .integer("potentialmatches")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users");
      table
        .boolean("matched")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("answeredquestions", table => {
      table.increments();
      table
        .integer("userid")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users");
      table
        .integer("questionid")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("questions");
      table
        .integer("answerid")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("answers");
    })
    .createTable("multichoice", table => {
      table.increments();
      table
        .integer("questionid")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("questions");
      table.text("ans_a");
      table.text("ans_b");
      table.text("ans_c");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("matches")
    .dropTableIfExists("chat")
    .dropTableIfExists("userprofile")
    .dropTableIfExists("answeredquestions")
    .dropTableIfExists("multichoice")
    .dropTableIfExists("answers")
    .dropTableIfExists("questions")
    .dropTableIfExists("users")
    .dropTableIfExists("city")
    .dropTableIfExists("country");
};
