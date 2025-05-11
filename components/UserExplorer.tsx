"use client";

import { useState, useMemo } from "react";
import { User, UserData } from "@/models/User";
import UserList from "@/components/UserList";
import SearchFilter from "@/components/SearchFilter";
import SortSelector, { SortOption } from "@/components/SortSelector";

interface Props {
  usersData: UserData[];
}

export default function UserExplorer({ usersData }: Props) {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("name");

  const users = useMemo(() => usersData.map((d) => new User(d)), [usersData]);

  const filtered = users
    .filter((user) => user.matches(query))
    .sort((a, b) =>
      sortBy === "name"
        ? a.name.localeCompare(b.name)
        : a.address.city.localeCompare(b.address.city)
    );

  return (
    <div>
      <SearchFilter value={query} onChange={setQuery} />
      <SortSelector selected={sortBy} onChange={setSortBy} />
      <UserList users={filtered} />
    </div>
  );
}
