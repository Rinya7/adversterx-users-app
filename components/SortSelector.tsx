// components/SortSelector.tsx
"use client";

import React from "react";

export type SortOption = "name" | "city";

interface Props {
  selected: SortOption;
  onChange: (option: SortOption) => void;
}

const SortSelector: React.FC<Props> = ({ selected, onChange }) => {
  return (
    <div className="mb-6">
      <label className="mr-2 text-sm font-medium text-gray-700  ">
        Сортувати за:
      </label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="border border-gray-300 rounded-md p-2 text-sm bg-background "
      >
        <option value="name" className="hover:bg-gray-700">
          Ім’я
        </option>
        <option value="city">Місто</option>
      </select>
    </div>
  );
};

export default SortSelector;
