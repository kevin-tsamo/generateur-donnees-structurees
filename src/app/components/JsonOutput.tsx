"use client";

import { useState } from "react";

interface Props {
  schema: object | null;
}

export default function JsonOutput({ schema }: Props) {
  const [copied, setCopied] = useState(false);
  const [scriptCopied, setScriptCopied] = useState(false);

  if (!schema) return null;

  const json = JSON.stringify(schema, null, 2);
  const scriptTag = `<script type="application/ld+json">\n${json}\n</script>`;

  const copy = async (text: string, setter: (v: boolean) => void) => {
    await navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          JSON-LD généré
        </h3>
        <div className="flex gap-2">
          <a
            href={`https://validator.schema.org/#url=data:application/ld+json,${encodeURIComponent(json)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 font-medium transition-colors"
          >
            Valider ↗
          </a>
          <a
            href={`https://search.google.com/test/rich-results?code=${encodeURIComponent(scriptTag)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 font-medium transition-colors"
          >
            Test Google ↗
          </a>
        </div>
      </div>

      <div className="relative">
        <pre className="bg-gray-950 dark:bg-gray-900 text-green-400 text-xs p-4 rounded-xl overflow-auto max-h-80 font-mono leading-relaxed border border-gray-800">
          {json}
        </pre>
        <button
          onClick={() => copy(json, setCopied)}
          className={`absolute top-2 right-2 text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all ${
            copied
              ? "bg-green-500 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {copied ? "✓ Copié !" : "Copier JSON"}
        </button>
      </div>

      <div className="relative">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
            Balise à intégrer dans votre <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">&lt;head&gt;</code> ou avant <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">&lt;/body&gt;</code>
          </p>
          <button
            onClick={() => copy(scriptTag, setScriptCopied)}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
              scriptCopied
                ? "bg-green-500 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {scriptCopied ? "✓ Copié !" : "Copier la balise"}
          </button>
        </div>
        <pre className="bg-gray-950 dark:bg-gray-900 text-yellow-300 text-xs p-4 rounded-xl overflow-auto max-h-40 font-mono leading-relaxed border border-gray-800">
          {scriptTag}
        </pre>
      </div>

      <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <span className="text-blue-500 text-sm mt-0.5">ℹ️</span>
        <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
          Collez cette balise dans le <code className="font-mono bg-blue-100 dark:bg-blue-900/40 px-1 rounded">&lt;head&gt;</code> de votre page HTML.
          Testez ensuite avec l&apos;outil de test de résultats enrichis de Google pour valider l&apos;intégration.
        </p>
      </div>
    </div>
  );
}
