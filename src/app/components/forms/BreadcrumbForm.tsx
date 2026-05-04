"use client";

import { SectionTitle } from "../FormField";
import { BreadcrumbItem } from "../../types/schema";

interface Props {
  items: BreadcrumbItem[];
  onChange: (items: BreadcrumbItem[]) => void;
}

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
      <SectionTitle
        title="Fil d'Ariane"
        subtitle="Listez les niveaux de navigation dans l'ordre (Accueil → Catégorie → Page)"
      />
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-2">
          <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold mt-1.5">
            {index + 1}
          </div>
          <div className="flex-1 grid grid-cols-2 gap-2">
            <input
              type="text"
              value={item.name}
              onChange={(e) => update(index, "name", e.target.value)}
              placeholder="Nom (ex: Accueil)"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="url"
              value={item.url}
              onChange={(e) => update(index, "url", e.target.value)}
              placeholder="URL (ex: https://site.fr)"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {items.length > 2 && (
            <button
              onClick={() => remove(index)}
              className="flex-shrink-0 mt-2 text-red-400 hover:text-red-600 dark:hover:text-red-300 text-lg leading-none"
              title="Supprimer"
            >
              ×
            </button>
          )}
        </div>
      ))}
      <button
        onClick={add}
        className="w-full py-2.5 rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
      >
        + Ajouter un niveau
      </button>
    </div>
  );
}
