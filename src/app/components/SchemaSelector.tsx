"use client";

import { SchemaType, SCHEMA_TYPES } from "../types/schema";

interface Props {
  selected: SchemaType;
  onChange: (type: SchemaType) => void;
}

export default function SchemaSelector({ selected, onChange }: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
      {SCHEMA_TYPES.map((type) => {
        const isActive = selected === type.value;
        return (
          <button
            key={type.value}
            onClick={() => onChange(type.value)}
            title={type.description}
            style={{
              background: isActive ? "var(--kt-blue-light)" : "var(--kt-bg)",
              border: `2px solid ${isActive ? "var(--kt-blue)" : "var(--kt-border)"}`,
              borderRadius: "var(--kt-radius-sm)",
              color: isActive ? "var(--kt-blue)" : "var(--kt-muted)",
            }}
            className="flex flex-col items-center gap-1.5 p-2.5 text-center transition-all duration-150 hover:scale-[1.03] cursor-pointer"
          >
            <span className="text-xl leading-none">{type.icon}</span>
            <span
              className="text-xs font-semibold leading-tight"
              style={{ color: isActive ? "var(--kt-blue)" : "var(--kt-text)" }}
            >
              {type.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
