const  Pool  = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "haha123",
  host: "localhost",
  port: 5432,
  database: "plant"
});

module.exports = pool;
