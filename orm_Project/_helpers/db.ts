import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.HOST as string,
  user: process.env.DataB as string,
  password: process.env.PASSWORD as string,
  database: process.env.DATABASE as string,
});
