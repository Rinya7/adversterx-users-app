// app/page.tsx
import { User, UserData } from "../models/User";
import UserExplorer from "../components/UserExplorer";

export default async function HomePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 }, // кешування 60 сек
  });
  const data: UserData[] = await res.json();
  const users = data.map((item) => new User(item));

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Користувачі</h1>
      <UserExplorer users={users} />
    </main>
  );
}
