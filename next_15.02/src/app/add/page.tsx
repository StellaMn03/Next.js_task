"use client";

import { addUserAction } from "@/_helpers/actions";
import { useActionState } from "react";

export default function AddUser() {
  const [state, action] = useActionState(addUserAction, "");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-6">
      <div className="w-full max-w-md bg-gray-800 shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-center mb-4">Add User</h1>
        <form className="space-y-4" action={action}>
          {state && <p className="text-red-400">{state}</p>}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Photo
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              name="name"
              className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Surname
            </label>
            <input
              name="surname"
              className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Age
            </label>
            <input
              type="number"
              name="age"
              className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Profession
            </label>
            <input
              name="profession"
              className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Short Biography
            </label>
            <textarea
              name="shortBiography"
              className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-lg transition duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
