// components/SearchFilter.tsx
import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchFilter: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Пошук за ім’ям, email, містом або компанією..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default SearchFilter;
