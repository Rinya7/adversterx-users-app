"use client";

import React, { useEffect, useRef, useState } from "react";
import { User } from "@/models/User";

interface Props {
  user: User;
  onClose: () => void;
}

const UserModal: React.FC<Props> = ({ user, onClose }) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Escape handler
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // викликається через 200мс після анімації
    }, 200);
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div
        className={`bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative transition-all duration-200 ${
          isClosing ? "animate-fadeOutModal" : "animate-fadeInModal"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <h2 className="text-xl text-black font-semibold mb-2">{user.name}</h2>
        <p className="text-sm text-gray-500 mb-4">{user.email}</p>

        <div className="text-sm text-gray-700 space-y-1">
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`http://${user.website}`}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              {user.website}
            </a>
          </p>
          <p>
            <strong>Address:</strong>{" "}
            {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
          </p>
          <p>
            <strong>Company:</strong> {user.company.name}
          </p>
          <p>
            <strong>Catchphrase:</strong> {user.company.catchPhrase}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
