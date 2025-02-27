import { pool } from "../_helpers/db";
import { IUser } from "../_helpers/types";

export default class Model {
  protected table: string;

  constructor(table: string) {
    if (new.target == Model) {
      throw new Error("Modal is an abstract class");
    }
    this.table = table;
  }

  public async findAll(): Promise<IUser[]> {
    const [rows] = await pool.query(`SELECT * FROM ${this.table}`);
    return rows as IUser[];
  }

  public async find(data: Partial<IUser>) {
    const hash = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(" AND ");

    const [rows] = await pool.query(
      `SELECT * FROM users WHERE ${hash}`,
      Object.values(data)
    );
    return rows;
  }

  public async delete(data: Partial<IUser>) {
    let hash = Object.keys(data)
      .map((key) => `${key}=?`)
      .join("AND");
    const [rows] = await pool.query(
      `DELETE FROM users WHERE ${hash}`,
      Object.values(data)
    );
    return rows;
  }

  public async insert(data: Partial<IUser>) {
    let keys = Object.keys(data);
    let values = Object.values(data);
    await pool.query(
      `INSERT INTO users(${keys.join(",")}) VALUES ('${values.join("','")}')`
    );
  }
}
const obj = new Model("hi");
