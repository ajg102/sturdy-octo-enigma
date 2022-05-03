const path = require("path");

const knexConfig = {
  local: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "local_db.db"),
    },
    seeds: {
      directory: "./seeds",
    },
    useNullAsDefault: true,
    debug: false,
  },
};

module.exports = knexConfig;
