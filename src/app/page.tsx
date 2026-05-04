import SchemaGenerator from "./components/SchemaGenerator";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--kt-bg)" }}>
      {/* Header */}
      <header
        style={{
          background: "var(--kt-card)",
          borderBottom: "1px solid var(--kt-border)",
        }}
        className="sticky top-0 z-20"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--kt-blue)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm leading-none" style={{ color: "var(--kt-text)" }}>
                  Générateur Schema.org
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--kt-muted)" }}>
                  kevintsamo.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span
                className="text-xs px-3 py-1 rounded-full font-semibold hidden sm:inline-flex"
                style={{
                  background: "var(--kt-blue-light)",
                  color: "var(--kt-blue)",
                }}
              >
                Gratuit
              </span>
              <a
                href="https://www.kevintsamo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold transition-colors hidden sm:inline-flex items-center gap-1"
                style={{ color: "var(--kt-muted)" }}
              >
                kevintsamo.com ↗
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
          style={{ background: "var(--kt-blue-light)", color: "var(--kt-blue)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--kt-blue)" }} />
          Outil SEO gratuit
        </div>

        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight"
          style={{ color: "var(--kt-text)", fontFamily: "var(--font-jakarta)" }}
        >
          Générateur de{" "}
          <span style={{ color: "var(--kt-blue)" }}>Données Structurées</span>
          <br className="hidden sm:block" /> Schema.org
        </h1>

        <p
          className="text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ color: "var(--kt-muted)" }}
        >
          Créez vos balises <strong style={{ color: "var(--kt-text)" }}>JSON-LD</strong> en quelques
          secondes pour décrocher des{" "}
          <strong style={{ color: "var(--kt-text)" }}>Rich Snippets</strong> dans Google et booster
          votre SEO.
        </p>

        {/* Schema type badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {["Article", "FAQ", "Produit", "Événement", "Recette", "Entreprise locale", "Vidéo", "Offre d'emploi"].map(
            (tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  background: "var(--kt-card)",
                  color: "var(--kt-muted)",
                  border: "1px solid var(--kt-border)",
                }}
              >
                {tag}
              </span>
            )
          )}
          <span
            className="text-xs px-3 py-1.5 rounded-full font-medium"
            style={{
              background: "var(--kt-card)",
              color: "var(--kt-blue)",
              border: "1px solid var(--kt-border)",
            }}
          >
            +7 autres
          </span>
        </div>
      </section>

      {/* Generator */}
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SchemaGenerator />
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "var(--kt-card)",
          borderTop: "1px solid var(--kt-border)",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: "var(--kt-muted)" }}>
              Outil conçu par{" "}
              <a
                href="https://www.kevintsamo.com"
                className="font-semibold transition-colors"
                style={{ color: "var(--kt-blue)" }}
              >
                Kevin TSAMO
              </a>{" "}
              — Consultant SEO & Développeur Web
            </p>
            <div className="flex gap-5 text-sm" style={{ color: "var(--kt-muted)" }}>
              <a
                href="https://schema.org"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:underline"
                style={{ color: "var(--kt-muted)" }}
              >
                Schema.org ↗
              </a>
              <a
                href="https://search.google.com/test/rich-results"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:underline"
                style={{ color: "var(--kt-muted)" }}
              >
                Test Rich Results ↗
              </a>
              <a
                href="https://www.kevintsamo.com/devis-seo/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold transition-colors"
                style={{ color: "var(--kt-blue)" }}
              >
                Besoin d&apos;un audit SEO ? →
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
