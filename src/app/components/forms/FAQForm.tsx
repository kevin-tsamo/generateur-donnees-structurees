"use client";

import { SectionTitle } from "../FormField";
import { FAQItem } from "../../types/schema";

interface Props {
  items: FAQItem[];
  onChange: (items: FAQItem[]) => void;
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

export default function FAQForm({ items, onChange }: Props) {
  const update = (index: number, field: keyof FAQItem, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };
  const add = () => onChange([...items, { question: "", answer: "" }]);
  const remove = (index: number) => onChange(items.filter((_, i) => i !== index));

  return (
    <div className="space-y-4">
      <SectionTitle title="Questions fréquentes" subtitle="Minimum 2 questions recommandées" />
      {items.map((item, index) => (
        <div
          key={index}
          className="p-4 space-y-3"
          style={{
            background: "var(--kt-bg)",
            borderRadius: "var(--kt-radius-sm)",
            border: "1px solid var(--kt-border)",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--kt-blue)" }}>
              Question {index + 1}
            </span>
            {items.length > 1 && (
              <button
                onClick={() => remove(index)}
                className="text-xs font-semibold transition-colors"
                style={{ color: "var(--kt-muted)" }}
              >
                Supprimer ×
              </button>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--kt-text)" }}>
              Question <span style={{ color: "var(--kt-blue)" }}>*</span>
            </label>
            <input
              type="text"
              value={item.question}
              onChange={(e) => update(index, "question", e.target.value)}
              placeholder="Comment fonctionne votre service ?"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--kt-blue)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--kt-border)")}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--kt-text)" }}>
              Réponse <span style={{ color: "var(--kt-blue)" }}>*</span>
            </label>
            <textarea
              value={item.answer}
              onChange={(e) => update(index, "answer", e.target.value)}
              placeholder="Notre service fonctionne de la manière suivante..."
              rows={3}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--kt-blue)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--kt-border)")}
            />
          </div>
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
        + Ajouter une question
      </button>
    </div>
  );
}
