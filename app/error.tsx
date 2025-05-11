// app/error.tsx
"use client";

import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error("Помилка сторінки:", error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center">
      <h2 className="text-xl font-semibold text-red-600">
        Something went wrong 😥
      </h2>
      <p className="text-gray-500">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  );
}
