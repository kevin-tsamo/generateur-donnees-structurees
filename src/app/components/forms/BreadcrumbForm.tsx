"use client";

import { SectionTitle } from "../FormField";
import { BreadcrumbItem } from "../../types/schema";

interface Props {
  items: BreadcrumbItem[];
  onChange: (items: BreadcrumbItem[]) => void;
}

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: "var(--kt-radius-sm)",
  border: "1.5px solid var(--kt-border)",
  background: "var(--kt-card)",
  color: "var(--kt-text)",
  fontSize: "14px",
  outline: "none",
};

export default function BreadcrumbForm({ items, onChange }: Props) {
  const update = (index: number, field: keyof BreadcrumbItem, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };
  const add = () => onChange([...items, { name: "", url: "" }]);
  const remove = (index: number) => onChange(items.filter((_, i) => i !== index));

  return (
    <div className="space-y-4">
      <SectionTitle title="Fil d'Ariane" subtitle="Ordre : Accueil → Catégorie → Page actuelle" />
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{ background: "var(--kt-blue-light)", color: "var(--kt-blue)" }}
          >
            {index + 1}
          </div>
          <input
            type="text"
            value={item.name}
            onChange={(e) => update(index, "name", e.target.value)}
            placeholder="Nom (ex: Accueil)"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--kt-blue)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--kt-border)")}
          />
          <input
            type="url"
            value={item.url}
            onChange={(e) => update(index, "url", e.target.value)}
            placeholder="URL"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--kt-blue)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--kt-border)")}
          />
          {items.length > 2 && (
            <button
              onClick={() => remove(index)}
              className="flex-shrink-0 text-lg font-bold transition-colors"
              style={{ color: "var(--kt-muted)" }}
            >
              ×
            </button>
          )}
        </div>
      ))}
      <button
        onClick={add}
        className="w-full py-3 text-sm font-bold transition-all"
        style={{
          borderRadius: "var(--kt-radius-sm)",
          border: "2px dashed var(--kt-blue-mid)",
          color: "var(--kt-blue)",
          background: "transparent",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--kt-blue-light)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
      >
        + Ajouter un niveau
      </button>
    </div>
  );
}
