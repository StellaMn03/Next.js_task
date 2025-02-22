import { getAllUsers } from "@/_helpers/db";
import Link from "next/link";
import Image from "next/image";

export default async function Users() {
  const users = await getAllUsers();
  return (
    <div className="py-2">
      <h1 className="text-4xl text-center">Users</h1>
      <div className="flex justify-center flex-wrap gap-5">
        {users.map((user) => (
          <div
            className="w-[150px] p-2 min-h-[100px] rounded-md bg-indigo-600"
            key={user.id}
          >
            {user.photo && (
              <Image
                src={`/${user.photo}`}
                alt={`${user.name} ${user.surname}`}
                width={150}
                height={100}
                className="rounded-md"
              />
            )}
            <p className="text-xl">
              {user.name} {user.surname}
            </p>
            <small>
              {user.age} years old,
              <strong className="block">{user.profession}</strong>
            </small>
            <Link
              className="block my-2 text-sm hover:underline"
              href={"/users/" + user.id}
            >
              see more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
