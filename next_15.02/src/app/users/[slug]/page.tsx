import { getUserById } from "@/_helpers/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface IProps {
  params: Promise<{ slug: string }>;
}
export default async function UserDetails({ params }: IProps) {
  const id = (await params).slug;
  const user = await getUserById(+id);
  if (!user) {
    return notFound();
  }
  return (
    <div className="p-4">
      <h3 className="font-bold  text-lime-500 text-6xl">
        {user.name} {user.surname}
      </h3>
      <p className="text-sm w-[400px] text-justify">{user.shortBiography}</p>
      <Link
        href={`/users/${user.id}/edit`}
        className="block mt-4 text-blue-400 hover:underline"
      >
        edit
      </Link>
    </div>
  );
}
