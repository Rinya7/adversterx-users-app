// components/UserCard.tsx
import React from "react";
import { User } from "../models/User";

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-gray-200 p-4 shadow-sm bg-white hover:shadow-md transition-shadow duration-300 animate-fadeIn">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>

      <div className="text-sm text-gray-700 space-y-1">
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>City:</strong> {user.address.city}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          {user.website}
        </a>
      </div>
    </div>
  );
};

export default UserCard;
