"use client";

import { useEffect, useState } from "react";
import { User, UserData } from "@/models/User";
import UserList from "@/components/UserList";
import SearchFilter from "@/components/SearchFilter";

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: UserData[]) => {
        const userInstances = data.map((item) => new User(item));
        setUsers(userInstances);
      });
  }, []);

  const filtered = users.filter((user) => user.matches(query));

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Користувачі</h1>
      <SearchFilter value={query} onChange={setQuery} />
      <UserList users={filtered} />
    </main>
  );
}
