"use client";

import { FormInput, FormTextarea, FormSelect, SectionTitle } from "../FormField";

interface Props {
  data: Record<string, string>;
  onChange: (name: string, value: string) => void;
  schemaType?: string;
}

const articleTypes = [
  { value: "Article", label: "Article" },
  { value: "BlogPosting", label: "Article de Blog" },
  { value: "NewsArticle", label: "Article de Presse" },
  { value: "TechArticle", label: "Article Technique" },
];

export default function ArticleForm({ data, onChange, schemaType }: Props) {
  return (
    <div className="space-y-4">
      {schemaType === "Article" && (
        <>
          <SectionTitle title="Type d'article" />
          <FormSelect
            label="Sous-type"
            name="schemaType"
            value={data.schemaType || "Article"}
            onChange={onChange}
            options={articleTypes}
          />
        </>
      )}
      <SectionTitle title="Informations de l'article" />
      <FormInput
        label="Titre de l'article"
        name="headline"
        value={data.headline || ""}
        onChange={onChange}
        placeholder="Ex: Les 10 meilleures pratiques SEO en 2024"
        required
      />
      <FormTextarea
        label="Description"
        name="description"
        value={data.description || ""}
        onChange={onChange}
        placeholder="Résumé de l'article en 160 caractères max"
        rows={2}
        required
      />
      <FormInput
        label="URL de la page"
        name="url"
        value={data.url || ""}
        onChange={onChange}
        placeholder="https://monsite.fr/article/..."
        type="url"
        required
      />
      <FormInput
        label="Image principale (URL)"
        name="image"
        value={data.image || ""}
        onChange={onChange}
        placeholder="https://monsite.fr/images/article.jpg"
        type="url"
        hint="Recommandé : 1200x630px minimum"
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Date de publication"
          name="datePublished"
          value={data.datePublished || ""}
          onChange={onChange}
          type="datetime-local"
          required
        />
        <FormInput
          label="Date de modification"
          name="dateModified"
          value={data.dateModified || ""}
          onChange={onChange}
          type="datetime-local"
        />
      </div>

      <SectionTitle title="Auteur" />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Nom de l'auteur"
          name="authorName"
          value={data.authorName || ""}
          onChange={onChange}
          placeholder="Kevin TSAMO"
          required
        />
        <FormInput
          label="URL du profil auteur"
          name="authorUrl"
          value={data.authorUrl || ""}
          onChange={onChange}
          placeholder="https://monsite.fr/a-propos"
          type="url"
        />
      </div>

      <SectionTitle title="Éditeur" />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Nom de l'éditeur"
          name="publisherName"
          value={data.publisherName || ""}
          onChange={onChange}
          placeholder="Mon Site"
          required
        />
        <FormInput
          label="Logo de l'éditeur (URL)"
          name="publisherLogo"
          value={data.publisherLogo || ""}
          onChange={onChange}
          placeholder="https://monsite.fr/logo.png"
          type="url"
        />
      </div>
    </div>
  );
}
