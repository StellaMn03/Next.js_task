"use server";
import { readFile, writeFile } from "fs/promises";

export interface IUser {
  id: number;
  name: string;
  surname: string;
  age: number;
  profession: string;
  shortBiography: string;
  photo?: string;
}

export const getAllUsers = async (): Promise<IUser[]> => {
  const result = await readFile("data.json", "utf-8");
  if (!result) return [];

  return JSON.parse(result);
};

export const addUser = async (body: Partial<IUser>) => {
  const users = await getAllUsers();
  users.push({ ...body, id: Date.now() } as IUser);
  await writeFile("data.json", JSON.stringify(users));
};

export const getUserById = async (id: number): Promise<IUser | undefined> => {
  const users = await getAllUsers();
  return users.find((user) => user.id == id);
};
export const editUser = async (id: number, updatedData: Partial<IUser>) => {
  const users = await getAllUsers();
  const userInd = users.findIndex((user) => user.id == id);
  if (userInd == -1) {
    return false;
  }
  users[userInd] = { ...users[userInd], ...updatedData };
  await writeFile("data.json", JSON.stringify(users));
};
