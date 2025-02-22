"use server";
import { writeFile } from "fs/promises";
import { redirect } from "next/navigation";
import { addUser, editUser } from "./db";

export const addUserAction = async (state: string, form: FormData) => {
  if (!form.get("name") || !form.get("surname")) {
    return "Please fill all the fields";
  }

  let photoUrl = "";
  const photo = form.get("photo") as File;

  if (photo) {
    const photoName = `${Date.now()}_${photo.name}`;

    const bytes = await photo.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(`public/${photoName}`, buffer);
    photoUrl = photoName;
  }

  await addUser({
    name: form.get("name") as string,
    surname: form.get("surname") as string,
    age: +(form.get("age") as string),
    profession: form.get("profession") as string,
    shortBiography: form.get("shortBiography") as string,
    photo: photoUrl,
  });

  return redirect("/users");
};
export const editUserAction = async (state: string, form: FormData) => {
  const id = +(form.get("id") as string);
  if (!form.get("name") || !form.get("surname")) {
    return "Please fill all the fields";
  }
  await editUser(id, {
    name: form.get("name") as string,
    surname: form.get("surname") as string,
    age: +(form.get("age") as string),
    profession: form.get("profession") as string,
    shortBiography: form.get("shortBiography") as string,
  });
  return redirect("/users");
};
