"use client";

import { FormInput, FormTextarea, FormSelect, SectionTitle } from "../FormField";

interface Props {
  data: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

const orgTypes = [
  { value: "Organization", label: "Organisation (générique)" },
  { value: "Corporation", label: "Société / Corporation" },
  { value: "NGO", label: "ONG / Association" },
  { value: "EducationalOrganization", label: "Établissement éducatif" },
  { value: "GovernmentOrganization", label: "Organisation gouvernementale" },
  { value: "MedicalOrganization", label: "Organisation médicale" },
  { value: "NewsMediaOrganization", label: "Média / Presse" },
  { value: "SportsOrganization", label: "Organisation sportive" },
];

export default function OrganizationForm({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <SectionTitle title="Type d'organisation" />
      <FormSelect
        label="Catégorie"
        name="orgType"
        value={data.orgType || "Organization"}
        onChange={onChange}
        options={orgTypes}
      />

      <SectionTitle title="Informations" />
      <FormInput
        label="Nom de l'organisation"
        name="name"
        value={data.name || ""}
        onChange={onChange}
        placeholder="Mon Entreprise SAS"
        required
      />
      <FormTextarea
        label="Description"
        name="description"
        value={data.description || ""}
        onChange={onChange}
        placeholder="Décrivez votre organisation..."
        rows={2}
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Site web"
          name="url"
          value={data.url || ""}
          onChange={onChange}
          placeholder="https://monentreprise.fr"
          type="url"
          required
        />
        <FormInput
          label="Logo (URL)"
          name="logo"
          value={data.logo || ""}
          onChange={onChange}
          placeholder="https://monentreprise.fr/logo.png"
          type="url"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Téléphone"
          name="telephone"
          value={data.telephone || ""}
          onChange={onChange}
          placeholder="+33 1 23 45 67 89"
        />
        <FormInput
          label="Email"
          name="email"
          value={data.email || ""}
          onChange={onChange}
          placeholder="contact@monentreprise.fr"
          type="email"
        />
      </div>

      <SectionTitle title="Adresse (optionnel)" />
      <FormInput
        label="Rue"
        name="streetAddress"
        value={data.streetAddress || ""}
        onChange={onChange}
        placeholder="12 rue de la Paix"
      />
      <div className="grid grid-cols-3 gap-3">
        <FormInput
          label="Ville"
          name="city"
          value={data.city || ""}
          onChange={onChange}
          placeholder="Paris"
        />
        <FormInput
          label="Code postal"
          name="postalCode"
          value={data.postalCode || ""}
          onChange={onChange}
          placeholder="75001"
        />
        <FormInput
          label="Pays"
          name="country"
          value={data.country || "FR"}
          onChange={onChange}
          placeholder="FR"
        />
      </div>

      <SectionTitle title="Réseaux sociaux (sameAs)" subtitle="Un profil par ligne" />
      <FormTextarea
        label="Liens de présence web"
        name="sameAs"
        value={data.sameAs || ""}
        onChange={onChange}
        placeholder={"https://www.linkedin.com/company/...\nhttps://twitter.com/...\nhttps://www.facebook.com/..."}
        rows={4}
      />
    </div>
  );
}
