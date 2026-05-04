"use client";

import { FormInput, FormTextarea, FormSelect, SectionTitle } from "../FormField";

interface Props {
  data: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

const employmentTypes = [
  { value: "FULL_TIME", label: "CDI / Plein temps" },
  { value: "PART_TIME", label: "Temps partiel" },
  { value: "CONTRACTOR", label: "Freelance / Prestataire" },
  { value: "TEMPORARY", label: "CDD / Intérim" },
  { value: "INTERN", label: "Stage / Apprentissage" },
  { value: "VOLUNTEER", label: "Bénévolat" },
  { value: "PER_DIEM", label: "Vacation" },
  { value: "OTHER", label: "Autre" },
];

const salaryUnits = [
  { value: "YEAR", label: "Par an" },
  { value: "MONTH", label: "Par mois" },
  { value: "WEEK", label: "Par semaine" },
  { value: "DAY", label: "Par jour" },
  { value: "HOUR", label: "Par heure" },
];

const currencies = [
  { value: "EUR", label: "EUR (€)" },
  { value: "USD", label: "USD ($)" },
  { value: "GBP", label: "GBP (£)" },
];

export default function JobPostingForm({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <SectionTitle title="L'offre" />
      <FormInput
        label="Intitulé du poste"
        name="title"
        value={data.title || ""}
        onChange={onChange}
        placeholder="Développeur Web Full Stack"
        required
      />
      <FormTextarea
        label="Description du poste"
        name="description"
        value={data.description || ""}
        onChange={onChange}
        placeholder="Nous recherchons un développeur web passionné..."
        rows={4}
        required
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Date de publication"
          name="datePosted"
          value={data.datePosted || ""}
          onChange={onChange}
          type="date"
          required
        />
        <FormInput
          label="Date d'expiration"
          name="validThrough"
          value={data.validThrough || ""}
          onChange={onChange}
          type="date"
        />
      </div>
      <FormSelect
        label="Type de contrat"
        name="employmentType"
        value={data.employmentType || "FULL_TIME"}
        onChange={onChange}
        options={employmentTypes}
      />

      <SectionTitle title="Entreprise recruteur" />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Nom de l'entreprise"
          name="organizationName"
          value={data.organizationName || ""}
          onChange={onChange}
          placeholder="Mon Entreprise"
          required
        />
        <FormInput
          label="Site de l'entreprise"
          name="organizationUrl"
          value={data.organizationUrl || ""}
          onChange={onChange}
          placeholder="https://monentreprise.fr"
          type="url"
        />
      </div>
      <FormInput
        label="Logo de l'entreprise (URL)"
        name="organizationLogo"
        value={data.organizationLogo || ""}
        onChange={onChange}
        placeholder="https://monentreprise.fr/logo.png"
        type="url"
      />

      <SectionTitle title="Localisation" />
      <FormInput
        label="Ville"
        name="locationCity"
        value={data.locationCity || ""}
        onChange={onChange}
        placeholder="Paris"
        required
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Rue"
          name="streetAddress"
          value={data.streetAddress || ""}
          onChange={onChange}
          placeholder="12 rue de la Paix"
        />
        <FormInput
          label="Code postal"
          name="postalCode"
          value={data.postalCode || ""}
          onChange={onChange}
          placeholder="75001"
        />
      </div>
      <FormInput
        label="Pays"
        name="country"
        value={data.country || "FR"}
        onChange={onChange}
        placeholder="FR"
      />

      <SectionTitle title="Salaire (optionnel)" />
      <div className="grid grid-cols-3 gap-3">
        <FormInput
          label="Valeur"
          name="salaryValue"
          value={data.salaryValue || ""}
          onChange={onChange}
          placeholder="45000"
          type="number"
        />
        <FormSelect
          label="Fréquence"
          name="salaryUnit"
          value={data.salaryUnit || "YEAR"}
          onChange={onChange}
          options={salaryUnits}
        />
        <FormSelect
          label="Devise"
          name="salaryCurrency"
          value={data.salaryCurrency || "EUR"}
          onChange={onChange}
          options={currencies}
        />
      </div>
    </div>
  );
}
