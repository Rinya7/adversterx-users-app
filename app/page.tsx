// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { User, UserData } from "../models/User";
import UserList from "../components/UserList";
import SearchFilter from "../components/SearchFilter";
import SortSelector, { SortOption } from "../components/SortSelector";

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("name");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: UserData[]) => {
        const userInstances = data.map((item) => new User(item));
        setUsers(userInstances);
      });
  }, []);

  const filtered = users
    .filter((user) => user.matches(query))
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "city") {
        return a.address.city.localeCompare(b.address.city);
      }
      return 0;
    });

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Користувачі</h1>
      <SearchFilter value={query} onChange={setQuery} />
      <SortSelector selected={sortBy} onChange={setSortBy} />
      <UserList users={filtered} />
    </main>
  );
}
