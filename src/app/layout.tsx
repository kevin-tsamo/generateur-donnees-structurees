import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Générateur de Données Structurées Schema.org | Kevin TSAMO",
  description:
    "Générez gratuitement vos balises JSON-LD Schema.org pour le SEO : Article, FAQ, Produit, Entreprise locale, Événement, Recette et 9 autres types.",
  openGraph: {
    title: "Générateur Schema.org — Kevin TSAMO",
    description: "Créez vos données structurées JSON-LD gratuitement en quelques secondes.",
    url: "https://www.kevintsamo.com/generateur-donnees-structurees/",
    siteName: "Kevin TSAMO",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
