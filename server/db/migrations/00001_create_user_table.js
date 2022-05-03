exports.up = (knex) => {
  return knex.schema.createTable("Users", (table) => {
    table.uuid("id").primary();
    table.string("email").unique().notNullable();
    table.string("firstName");
    table.string("lastName");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("Users");
};
