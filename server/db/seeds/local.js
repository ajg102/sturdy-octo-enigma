/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const mockUsers = require("../mock_data/mock_users");
const mockTodos = require("../mock_data/mock_todos");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Users").del();
  await knex("Todos").del();
  await knex("Users").insert(mockUsers);
  await knex("Todos").insert(mockTodos);
};
