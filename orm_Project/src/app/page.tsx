import User from "../../models/users";

export default async function Home() {
  const user = new User();
  // const result = await user.insert({ name: "Lilit" });
  const result = await user.findAll();
  // const result = await user.delete({ age: 57 });
  // const result = await user.find({ name: "Ani" });
  return (
    <div className="min-h-screen flex flex-col items justify-start bg-gray-900 text-green-300 transition-colors duration-300 p-6">
      <h1 className="text-6xl font-bold mb-6 shadow-green-900/50">Users</h1>
      <div className="flex flex-wrap gap-4">
        {Array.isArray(result) &&
          result.map((user: any) => (
            <p
              key={user.id}
              className="text-2xl font-semibold py-2 px-4 bg-gray-800 text-green-300 rounded-lg shadow-green-900/50 transition-all duration-300"
            >
              {user.name}
            </p>
          ))}
      </div>
    </div>
  );
}
