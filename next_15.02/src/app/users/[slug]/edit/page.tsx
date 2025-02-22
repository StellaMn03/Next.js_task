"use client";
import { editUserAction } from "@/_helpers/actions";
import { useActionState, useEffect, useState } from "react";
import { getUserById, IUser } from "@/_helpers/db";

interface IProps {
  params: Promise<{ slug: string }>;
}

export default function EditUser({ params }: IProps) {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [state, action] = useActionState(editUserAction, "");

  useEffect(() => {
    params.then((resolvedParams) => {
      getUserById(+resolvedParams.slug).then(setUser);
    });
  }, [params]);

  if (user === undefined) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-6">
      <div className="w-full max-w-md bg-gray-800 shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-center mb-4">Edit User</h1>
        <form className="space-y-4" action={action}>
          {state && <p className="text-red-400">{state}</p>}
          <input type="hidden" name="id" value={user.id} />

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              name="name"
              defaultValue={user.name}
              className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Surname
            </label>
            <input
              name="surname"
              defaultValue={user.surname}
              className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Age
            </label>
            <input
              type="number"
              name="age"
              defaultValue={user.age}
              className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Profession
            </label>
            <input
              name="profession"
              defaultValue={user.profession}
              className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Short Biography
            </label>
            <textarea
              name="shortBiography"
              defaultValue={user.shortBiography}
              className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg"
            />
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-lg">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
