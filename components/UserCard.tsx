"use client";

import React, { useState } from "react";
import { User } from "../models/User";
import UserModal from "./UserModal";

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer flex flex-col justify-between rounded-xl border border-gray-200 p-4 shadow-sm bg-white hover:shadow-lg hover:scale-[1.015] transition-all duration-300 active:scale-100"
      >
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
        <div className="text-sm text-gray-700 space-y-1">
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
          <p>
            <strong>Company:</strong> {user.company.name}
          </p>
          <p className="text-blue-600 hover:underline text-sm">
            Click for details
          </p>
        </div>
      </div>

      {isModalOpen && (
        <UserModal user={user} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default UserCard;
