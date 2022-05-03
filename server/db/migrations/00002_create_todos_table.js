exports.up = (knex) => {
  return knex.schema.createTable("Todos", (table) => {
    table.uuid("id").primary();
    table
      .uuid("userId")
      .references("id")
      .inTable("Users")
      .notNullable()
      .onDelete("CASCADE");
    table.string("description");
    table.boolean("completed");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("Todos");
};
