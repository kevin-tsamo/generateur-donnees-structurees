"use client";

import { FormInput, FormTextarea, FormSelect, SectionTitle } from "../FormField";

interface Props {
  data: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

const currencies = [
  { value: "EUR", label: "EUR (€)" },
  { value: "USD", label: "USD ($)" },
  { value: "GBP", label: "GBP (£)" },
];

export default function ServiceForm({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <SectionTitle title="Informations du service" />
      <FormInput
        label="Nom du service"
        name="name"
        value={data.name || ""}
        onChange={onChange}
        placeholder="Création de site web"
        required
      />
      <FormTextarea
        label="Description"
        name="description"
        value={data.description || ""}
        onChange={onChange}
        placeholder="Description détaillée du service..."
        rows={3}
        required
      />
      <FormInput
        label="URL de la page service"
        name="url"
        value={data.url || ""}
        onChange={onChange}
        placeholder="https://monsite.fr/services/creation-web"
        type="url"
      />
      <FormInput
        label="Image (URL)"
        name="image"
        value={data.image || ""}
        onChange={onChange}
        placeholder="https://monsite.fr/services/image.jpg"
        type="url"
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Type de service"
          name="serviceType"
          value={data.serviceType || ""}
          onChange={onChange}
          placeholder="Développement web"
        />
        <FormInput
          label="Zone desservie"
          name="areaServed"
          value={data.areaServed || ""}
          onChange={onChange}
          placeholder="France, Belgique, Suisse"
        />
      </div>

      <SectionTitle title="Prestataire" />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Nom du prestataire"
          name="providerName"
          value={data.providerName || ""}
          onChange={onChange}
          placeholder="Mon Agence"
        />
        <FormInput
          label="Site du prestataire"
          name="providerUrl"
          value={data.providerUrl || ""}
          onChange={onChange}
          placeholder="https://monagence.fr"
          type="url"
        />
      </div>

      <SectionTitle title="Tarif (optionnel)" />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Prix"
          name="price"
          value={data.price || ""}
          onChange={onChange}
          placeholder="500"
          type="number"
        />
        <FormSelect
          label="Devise"
          name="priceCurrency"
          value={data.priceCurrency || "EUR"}
          onChange={onChange}
          options={currencies}
        />
      </div>
    </div>
  );
}
