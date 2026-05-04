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
    <div className="space-y-4">
      {/* Validation links */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--kt-muted)" }}>
          Valider :
        </span>
        <a
          href={`https://validator.schema.org/#url=data:application/ld+json,${encodeURIComponent(json)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1.5 font-semibold rounded-full transition-all"
          style={{
            background: "var(--kt-blue-light)",
            color: "var(--kt-blue)",
          }}
        >
          Schema.org ↗
        </a>
        <a
          href={`https://search.google.com/test/rich-results?code=${encodeURIComponent(scriptTag)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1.5 font-semibold rounded-full transition-all"
          style={{
            background: "var(--kt-blue-light)",
            color: "var(--kt-blue)",
          }}
        >
          Test Google ↗
        </a>
      </div>

      {/* JSON block */}
      <div className="relative">
        <pre
          className="text-xs p-4 overflow-auto font-mono leading-relaxed"
          style={{
            background: "#0F172A",
            color: "#7DD3FC",
            borderRadius: "var(--kt-radius-sm)",
            maxHeight: "320px",
            border: "1px solid #1E293B",
          }}
        >
          {json}
        </pre>
        <button
          onClick={() => copy(json, setCopied)}
          className="absolute top-3 right-3 text-xs px-3 py-1.5 font-semibold rounded-lg transition-all"
          style={{
            background: copied ? "#16A34A" : "rgba(255,255,255,0.1)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {copied ? "✓ Copié !" : "Copier JSON"}
        </button>
      </div>

      {/* Script tag block */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold" style={{ color: "var(--kt-muted)" }}>
            Balise à coller dans le{" "}
            <code
              className="px-1 py-0.5 rounded text-xs"
              style={{ background: "var(--kt-blue-light)", color: "var(--kt-blue)" }}
            >
              &lt;head&gt;
            </code>{" "}
            de votre page
          </p>
          <button
            onClick={() => copy(scriptTag, setScriptCopied)}
            className="text-xs px-4 py-1.5 font-bold rounded-lg transition-all text-white flex-shrink-0"
            style={{
              background: scriptCopied ? "#16A34A" : "var(--kt-blue)",
              borderRadius: "var(--kt-radius-btn)",
            }}
          >
            {scriptCopied ? "✓ Copié !" : "Copier la balise →"}
          </button>
        </div>
        <pre
          className="text-xs p-4 overflow-auto font-mono leading-relaxed"
          style={{
            background: "#0F172A",
            color: "#FCD34D",
            borderRadius: "var(--kt-radius-sm)",
            maxHeight: "160px",
            border: "1px solid #1E293B",
          }}
        >
          {scriptTag}
        </pre>
      </div>

      {/* Tip */}
      <div
        className="flex gap-3 p-3 rounded-xl"
        style={{
          background: "var(--kt-blue-light)",
          border: "1px solid var(--kt-blue-mid)",
        }}
      >
        <span className="text-base flex-shrink-0 mt-0.5">💡</span>
        <p className="text-xs leading-relaxed" style={{ color: "var(--kt-blue)" }}>
          <strong>WordPress / Divi :</strong> Collez la balise dans{" "}
          <em>Divi → Thème Options → Intégration → head</em>, ou dans un module Code sur la page concernée.
        </p>
      </div>
    </div>
  );
}
