"use client";

import { SchemaType, SCHEMA_TYPES } from "../types/schema";

interface Props {
  selected: SchemaType;
  onChange: (type: SchemaType) => void;
}

export default function SchemaSelector({ selected, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
      {SCHEMA_TYPES.map((type) => (
        <button
          key={type.value}
          onClick={() => onChange(type.value)}
          title={type.description}
          className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 text-center transition-all duration-200 hover:scale-105 cursor-pointer ${
            selected === type.value
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-md"
              : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300"
          }`}
        >
          <span className="text-2xl">{type.icon}</span>
          <span className={`text-xs font-medium leading-tight ${
            selected === type.value ? "text-blue-700 dark:text-blue-300" : "text-gray-700 dark:text-gray-300"
          }`}>
            {type.label}
          </span>
        </button>
      ))}
    </div>
  );
}
