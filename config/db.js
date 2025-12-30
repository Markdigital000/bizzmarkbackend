const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 5,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000, // 🔥 increase timeout
});

pool.on("connect", () => {
  console.log("🔗 PostgreSQL pool connected");
});

pool.on("error", (err) => {
  console.error("❌ Unexpected PG error", err.message);
});

module.exports = pool;
