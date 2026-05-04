"use client";

import { FormInput, FormTextarea, SectionTitle } from "../FormField";

interface Props {
  data: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

export default function WebSiteForm({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <SectionTitle title="Informations du site" />
      <FormInput
        label="Nom du site"
        name="name"
        value={data.name || ""}
        onChange={onChange}
        placeholder="Mon Site Web"
        required
      />
      <FormInput
        label="URL du site"
        name="url"
        value={data.url || ""}
        onChange={onChange}
        placeholder="https://monsite.fr"
        type="url"
        required
      />
      <FormTextarea
        label="Description"
        name="description"
        value={data.description || ""}
        onChange={onChange}
        placeholder="Description du site..."
        rows={2}
      />

      <SectionTitle title="Recherche interne (optionnel)" subtitle="Active le Rich Result SearchBox dans Google" />
      <FormInput
        label="URL de recherche"
        name="searchUrl"
        value={data.searchUrl || ""}
        onChange={onChange}
        placeholder="https://monsite.fr/recherche?q={search_term_string}"
        type="url"
        hint="Utilisez {search_term_string} comme paramètre de recherche"
      />
    </div>
  );
}
