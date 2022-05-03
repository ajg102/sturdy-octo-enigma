const { knex } = require("knex");
const knexConfig = require("./knexfile");

exports.initDb = async () => {
  const config = knexConfig.local;
  return knex(config);
};

exports.destroyDb = async (db) => {
  await db.destroy();
};
