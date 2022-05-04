const express = require("express");
const { initDb, destroyDb } = require("./db/index");
const {v4: uuidv4} = require('uuid')

const app = express();

app.use(express.json());

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Good luck on the interview!!!");
});

app.get("/users", async (req, res) => {
  const db = await initDb();
  const users = await db.select("*").from("Users");
  res.json(users);
  await destroyDb();
});

app.get("/users/:userId", (req, res) => {
  const db = initDb();
  const params = req.params
  const user = db.first("*").from("Users");
  res.json(user);
  destroyDb();
});

app.post("todos", (req, res) => {
  const db = await initDb();
  const requestBody = req.body
  // TODO: construct todo
  const newTodo = {}
  // TODO: add record to database
  res.json(newTodo)
  await destroyDb();
})

app.listen(PORT, () => {
  console.log(`App is ready on port ${PORT}`);
});
