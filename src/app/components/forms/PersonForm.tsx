"use client";

import { FormInput, FormTextarea, SectionTitle } from "../FormField";

interface Props {
  data: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

export default function PersonForm({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <SectionTitle title="Identité" />
      <FormInput
        label="Nom complet"
        name="name"
        value={data.name || ""}
        onChange={onChange}
        placeholder="Kevin TSAMO"
        required
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="URL du profil"
          name="url"
          value={data.url || ""}
          onChange={onChange}
          placeholder="https://kevintsamo.fr"
          type="url"
        />
        <FormInput
          label="Photo (URL)"
          name="image"
          value={data.image || ""}
          onChange={onChange}
          placeholder="https://kevintsamo.fr/photo.jpg"
          type="url"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Titre / Métier"
          name="jobTitle"
          value={data.jobTitle || ""}
          onChange={onChange}
          placeholder="Développeur Web & SEO"
        />
        <FormInput
          label="Employeur / Entreprise"
          name="worksFor"
          value={data.worksFor || ""}
          onChange={onChange}
          placeholder="Mon Agence"
        />
      </div>
      <FormTextarea
        label="Description / Bio"
        name="description"
        value={data.description || ""}
        onChange={onChange}
        placeholder="Expert en développement web et référencement naturel..."
        rows={2}
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Email"
          name="email"
          value={data.email || ""}
          onChange={onChange}
          placeholder="kevin@tsamo.fr"
          type="email"
        />
        <FormInput
          label="Téléphone"
          name="telephone"
          value={data.telephone || ""}
          onChange={onChange}
          placeholder="+33 6 12 34 56 78"
        />
      </div>

      <SectionTitle title="Présence web (sameAs)" subtitle="Un lien par ligne" />
      <FormTextarea
        label="Profils en ligne"
        name="sameAs"
        value={data.sameAs || ""}
        onChange={onChange}
        placeholder={"https://www.linkedin.com/in/...\nhttps://twitter.com/...\nhttps://github.com/..."}
        rows={4}
      />
    </div>
  );
}
