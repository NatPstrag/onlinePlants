const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "haha123",
  host: "localhost",
  port: 5432,
  database: "plant"
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
