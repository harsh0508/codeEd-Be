import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.PGUSER || "postgres",
  host: process.env.PGHOST || "127.0.0.1",
  database: process.env.PGDATABASE || "postgres",
  password: process.env.PGPASSWORD || "tookipoo",
  port: Number(process.env.PGPORT) || 5431,

});

export async function connectDB() {
  try {
    await pool.query("SELECT NOW()");
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection failed:", (err as Error).message);
    process.exit(1); // Stop server if DB isn't available
  }
}

process.on("SIGINT", async()=>{
    console.log("closing db connection");
    await pool.end();
    process.exit(0);
})

export default pool;
