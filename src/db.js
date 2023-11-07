const { pool } = require("pg");

const db = new pool({
  user: "docker",
  password: "docker",
  database: "finances",
  host: "localhost",
  port: 5432,
});

module.exports = db;
