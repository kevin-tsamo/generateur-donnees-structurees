export type SchemaType =
  | "Article"
  | "BlogPosting"
  | "LocalBusiness"
  | "Product"
  | "FAQPage"
  | "BreadcrumbList"
  | "Organization"
  | "Person"
  | "Recipe"
  | "Event"
  | "VideoObject"
  | "WebSite"
  | "Service"
  | "Review"
  | "JobPosting";

export interface SchemaTypeOption {
  value: SchemaType;
  label: string;
  icon: string;
  description: string;
}

export const SCHEMA_TYPES: SchemaTypeOption[] = [
  { value: "Article", label: "Article", icon: "📰", description: "Article de blog, actualité ou contenu éditorial" },
  { value: "BlogPosting", label: "Article de Blog", icon: "✍️", description: "Publication de blog spécifique" },
  { value: "LocalBusiness", label: "Entreprise Locale", icon: "🏢", description: "Commerce ou service local avec adresse physique" },
  { value: "Product", label: "Produit", icon: "🛍️", description: "Produit avec prix, disponibilité et avis" },
  { value: "FAQPage", label: "FAQ", icon: "❓", description: "Page de questions fréquentes" },
  { value: "BreadcrumbList", label: "Fil d'Ariane", icon: "🧭", description: "Navigation hiérarchique du site" },
  { value: "Organization", label: "Organisation", icon: "🏛️", description: "Entreprise, association ou institution" },
  { value: "Person", label: "Personne", icon: "👤", description: "Profil d'une personne ou auteur" },
  { value: "Recipe", label: "Recette", icon: "🍳", description: "Recette culinaire avec ingrédients et étapes" },
  { value: "Event", label: "Événement", icon: "📅", description: "Événement avec date, lieu et organisateur" },
  { value: "VideoObject", label: "Vidéo", icon: "🎬", description: "Contenu vidéo avec métadonnées" },
  { value: "WebSite", label: "Site Web", icon: "🌐", description: "Métadonnées du site web avec recherche" },
  { value: "Service", label: "Service", icon: "⚙️", description: "Service proposé par une entreprise" },
  { value: "Review", label: "Avis", icon: "⭐", description: "Avis ou évaluation d'un produit ou service" },
  { value: "JobPosting", label: "Offre d'Emploi", icon: "💼", description: "Annonce de recrutement" },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface RecipeIngredient {
  ingredient: string;
}

export interface RecipeStep {
  step: string;
}
