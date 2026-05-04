"use client";

import { FormInput, FormTextarea, FormSelect, SectionTitle } from "../FormField";

interface Props {
  data: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

const itemTypes = [
  { value: "Thing", label: "Générique" },
  { value: "Product", label: "Produit" },
  { value: "LocalBusiness", label: "Entreprise locale" },
  { value: "Book", label: "Livre" },
  { value: "Movie", label: "Film" },
  { value: "SoftwareApplication", label: "Logiciel / App" },
  { value: "Service", label: "Service" },
];

export default function ReviewForm({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <SectionTitle title="L'avis" />
      <FormInput
        label="Titre de l'avis"
        name="name"
        value={data.name || ""}
        onChange={onChange}
        placeholder="Excellent produit !"
      />
      <FormTextarea
        label="Corps de l'avis"
        name="reviewBody"
        value={data.reviewBody || ""}
        onChange={onChange}
        placeholder="J'ai utilisé ce produit pendant 3 mois et..."
        rows={4}
        required
      />
      <div className="grid grid-cols-3 gap-3">
        <FormInput
          label="Note"
          name="ratingValue"
          value={data.ratingValue || ""}
          onChange={onChange}
          placeholder="4.5"
          type="number"
          required
        />
        <FormInput
          label="Note max"
          name="bestRating"
          value={data.bestRating || "5"}
          onChange={onChange}
          placeholder="5"
          type="number"
        />
        <FormInput
          label="Note min"
          name="worstRating"
          value={data.worstRating || "1"}
          onChange={onChange}
          placeholder="1"
          type="number"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Auteur de l'avis"
          name="authorName"
          value={data.authorName || ""}
          onChange={onChange}
          placeholder="Marie Dupont"
          required
        />
        <FormInput
          label="Date de l'avis"
          name="datePublished"
          value={data.datePublished || ""}
          onChange={onChange}
          type="date"
        />
      </div>

      <SectionTitle title="Élément évalué" />
      <FormSelect
        label="Type"
        name="itemType"
        value={data.itemType || "Thing"}
        onChange={onChange}
        options={itemTypes}
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Nom"
          name="itemName"
          value={data.itemName || ""}
          onChange={onChange}
          placeholder="Nom du produit/service évalué"
        />
        <FormInput
          label="URL"
          name="itemUrl"
          value={data.itemUrl || ""}
          onChange={onChange}
          placeholder="https://..."
          type="url"
        />
      </div>
    </div>
  );
}
