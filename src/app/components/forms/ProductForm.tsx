"use client";

import { FormInput, FormTextarea, FormSelect, SectionTitle } from "../FormField";

interface Props {
  data: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

const availabilityOptions = [
  { value: "InStock", label: "En stock" },
  { value: "OutOfStock", label: "Rupture de stock" },
  { value: "PreOrder", label: "Pré-commande" },
  { value: "BackOrder", label: "Sur commande" },
  { value: "Discontinued", label: "Discontinué" },
  { value: "LimitedAvailability", label: "Disponibilité limitée" },
];

const conditionOptions = [
  { value: "NewCondition", label: "Neuf" },
  { value: "UsedCondition", label: "Occasion" },
  { value: "RefurbishedCondition", label: "Reconditionné" },
];

const currencies = [
  { value: "EUR", label: "EUR (€)" },
  { value: "USD", label: "USD ($)" },
  { value: "GBP", label: "GBP (£)" },
  { value: "CHF", label: "CHF" },
  { value: "CAD", label: "CAD" },
];

export default function ProductForm({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <SectionTitle title="Informations produit" />
      <FormInput
        label="Nom du produit"
        name="name"
        value={data.name || ""}
        onChange={onChange}
        placeholder="iPhone 15 Pro 256Go"
        required
      />
      <FormTextarea
        label="Description"
        name="description"
        value={data.description || ""}
        onChange={onChange}
        placeholder="Description détaillée du produit..."
        rows={2}
        required
      />
      <FormInput
        label="Image du produit (URL)"
        name="image"
        value={data.image || ""}
        onChange={onChange}
        placeholder="https://monsite.fr/produits/image.jpg"
        type="url"
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Marque"
          name="brand"
          value={data.brand || ""}
          onChange={onChange}
          placeholder="Apple"
        />
        <FormInput
          label="SKU / Référence"
          name="sku"
          value={data.sku || ""}
          onChange={onChange}
          placeholder="IPHONE15PRO-256-NOIR"
        />
      </div>
      <FormInput
        label="GTIN (code-barres)"
        name="gtin"
        value={data.gtin || ""}
        onChange={onChange}
        placeholder="0194253082026"
        hint="EAN, UPC, ISBN selon le produit"
      />

      <SectionTitle title="Offre / Prix" />
      <FormInput
        label="URL de la page produit"
        name="url"
        value={data.url || ""}
        onChange={onChange}
        placeholder="https://monsite.fr/produits/..."
        type="url"
        required
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Prix"
          name="price"
          value={data.price || ""}
          onChange={onChange}
          placeholder="999.00"
          type="number"
          required
        />
        <FormSelect
          label="Devise"
          name="priceCurrency"
          value={data.priceCurrency || "EUR"}
          onChange={onChange}
          options={currencies}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <FormSelect
          label="Disponibilité"
          name="availability"
          value={data.availability || "InStock"}
          onChange={onChange}
          options={availabilityOptions}
        />
        <FormSelect
          label="État"
          name="condition"
          value={data.condition || "NewCondition"}
          onChange={onChange}
          options={conditionOptions}
        />
      </div>

      <SectionTitle title="Avis agrégés (optionnel)" />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Note moyenne"
          name="ratingValue"
          value={data.ratingValue || ""}
          onChange={onChange}
          placeholder="4.5"
          type="number"
        />
        <FormInput
          label="Nombre d'avis"
          name="reviewCount"
          value={data.reviewCount || ""}
          onChange={onChange}
          placeholder="256"
          type="number"
        />
      </div>
    </div>
  );
}
