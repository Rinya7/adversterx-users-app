import { UserData } from "../models/User";
import UserExplorer from "../components/UserExplorer";

export default async function HomePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 },
  });

  const data: UserData[] = await res.json();

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <UserExplorer usersData={data} />
    </main>
  );
}
