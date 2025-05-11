// components/UserList.tsx
import React from "react";
import { User } from "../models/User";
import UserCard from "./UserCard";

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
