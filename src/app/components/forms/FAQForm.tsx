"use client";

import { SectionTitle } from "../FormField";
import { FAQItem } from "../../types/schema";

interface Props {
  items: FAQItem[];
  onChange: (items: FAQItem[]) => void;
}

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
      <SectionTitle
        title="Questions fréquentes"
        subtitle="Ajoutez chaque question-réponse. Minimum 2 recommandé."
      />
      {items.map((item, index) => (
        <div key={index} className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
              Question {index + 1}
            </span>
            {items.length > 1 && (
              <button
                onClick={() => remove(index)}
                className="text-xs text-red-500 hover:text-red-700 dark:hover:text-red-400 font-medium transition-colors"
              >
                Supprimer
              </button>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Question <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={item.question}
              onChange={(e) => update(index, "question", e.target.value)}
              placeholder="Comment fonctionne votre service ?"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Réponse <span className="text-red-500">*</span>
            </label>
            <textarea
              value={item.answer}
              onChange={(e) => update(index, "answer", e.target.value)}
              placeholder="Notre service fonctionne de la manière suivante..."
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>
        </div>
      ))}
      <button
        onClick={add}
        className="w-full py-2.5 rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
      >
        + Ajouter une question
      </button>
    </div>
  );
}
