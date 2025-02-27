import Model from "./model";
import { IUser } from "../_helpers/types";

export default class User extends Model {
  constructor() {
    super("users");
  }

  public async findAll() {
    return super.findAll();
  }

  public async find(data: Partial<IUser>) {
    return super.find(data);
  }

  public async delete(data: Partial<IUser>) {
    return super.delete(data);
  }

  public async insert(data: Partial<IUser>) {
    return super.insert(data);
  }
}
