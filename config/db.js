import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  ssl: { rejectUnauthorized: false },
});

pool.on("connect", () => {
  console.log("✅ PostgreSQL pool connected");
  console.log("✅ Neon Database connected successfully");
});

pool.on("error", (err) => {
  console.error("❌ Unexpected DB error:", err);
  process.exit(1);
});

export default pool;
