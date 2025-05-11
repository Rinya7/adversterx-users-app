// components/SearchFilter.tsx
"use client";

import React, { useRef } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onReset?: () => void;
}

const SearchFilter: React.FC<Props> = ({ value, onChange, onReset }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleReset = () => {
    onChange("");
    onReset?.();
    inputRef.current?.focus();
  };

  return (
    <div className="flex items-center gap-2 mb-6">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search by name, email, city or company..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {value && (
        <button
          onClick={handleReset}
          className="px-3 py-2 text-sm rounded-md  shadow-sm bg-background  border-1 hover:bg-gray-700"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchFilter;
