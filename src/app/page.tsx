import SchemaGenerator from "./components/SchemaGenerator";

export const metadata = {
  title: "Générateur de Données Structurées Schema.org",
  description: "Créez facilement vos balises JSON-LD Schema.org pour améliorer votre référencement SEO : Article, LocalBusiness, Produit, FAQ, Événement et bien plus.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white text-lg">⚡</span>
              </div>
              <div>
                <h1 className="text-base font-bold text-gray-900 dark:text-white leading-none">
                  Générateur Schema.org
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Données structurées JSON-LD pour le SEO
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-medium">
                ✓ Gratuit
              </span>
              <span className="text-xs px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full font-medium">
                15 types de schémas
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Générateur de Données Structurées Schema.org
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Créez vos balises <strong>JSON-LD</strong> en quelques secondes pour améliorer votre référencement
            et obtenir des <strong>Rich Snippets</strong> dans les résultats Google.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["Article", "FAQ", "Produit", "Événement", "Recette", "Entreprise locale"].map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                {tag}
              </span>
            ))}
            <span className="text-xs px-2.5 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
              +9 autres...
            </span>
          </div>
        </div>

        <SchemaGenerator />
      </main>

      <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
            <p>
              Outil créé par{" "}
              <a href="https://kevintsamo.fr" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Kevin TSAMO
              </a>{" "}
              — Générateur de données structurées Schema.org
            </p>
            <div className="flex gap-4">
              <a
                href="https://schema.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Schema.org ↗
              </a>
              <a
                href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Guide Google ↗
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
