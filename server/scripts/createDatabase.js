const fs = require("fs");
const path = require("path");

const createDatabase = () => {
  const filePath = path.join(__dirname, "../", "db", "local_db.db");
  fs.writeFileSync(filePath, "");
};

createDatabase();
