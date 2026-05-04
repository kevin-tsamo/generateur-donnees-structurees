"use client";

import { FormInput, FormTextarea, FormSelect, SectionTitle } from "../FormField";

interface Props {
  data: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

const businessTypes = [
  { value: "LocalBusiness", label: "Entreprise locale (générique)" },
  { value: "Restaurant", label: "Restaurant" },
  { value: "Store", label: "Magasin" },
  { value: "MedicalBusiness", label: "Établissement médical" },
  { value: "Dentist", label: "Dentiste" },
  { value: "LegalService", label: "Service juridique" },
  { value: "AccountingService", label: "Comptabilité" },
  { value: "AutoRepair", label: "Garage / Réparation auto" },
  { value: "Bakery", label: "Boulangerie" },
  { value: "BeautySalon", label: "Salon de beauté" },
  { value: "Hotel", label: "Hôtel" },
  { value: "Gym", label: "Salle de sport" },
  { value: "RealEstateAgent", label: "Agent immobilier" },
  { value: "TravelAgency", label: "Agence de voyage" },
  { value: "Plumber", label: "Plombier" },
  { value: "Electrician", label: "Électricien" },
];

export default function LocalBusinessForm({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <SectionTitle title="Type d'établissement" />
      <FormSelect
        label="Catégorie"
        name="businessType"
        value={data.businessType || "LocalBusiness"}
        onChange={onChange}
        options={businessTypes}
      />

      <SectionTitle title="Informations générales" />
      <FormInput
        label="Nom de l'entreprise"
        name="name"
        value={data.name || ""}
        onChange={onChange}
        placeholder="Mon Commerce"
        required
      />
      <FormTextarea
        label="Description"
        name="description"
        value={data.description || ""}
        onChange={onChange}
        placeholder="Décrivez votre activité..."
        rows={2}
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Site web"
          name="url"
          value={data.url || ""}
          onChange={onChange}
          placeholder="https://moncommerce.fr"
          type="url"
        />
        <FormInput
          label="Image (URL)"
          name="image"
          value={data.image || ""}
          onChange={onChange}
          placeholder="https://moncommerce.fr/photo.jpg"
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
          placeholder="contact@moncommerce.fr"
          type="email"
        />
      </div>
      <FormInput
        label="Fourchette de prix"
        name="priceRange"
        value={data.priceRange || ""}
        onChange={onChange}
        placeholder="€€ ou €10-€50"
      />

      <SectionTitle title="Adresse" />
      <FormInput
        label="Rue"
        name="streetAddress"
        value={data.streetAddress || ""}
        onChange={onChange}
        placeholder="12 rue de la Paix"
        required
      />
      <div className="grid grid-cols-3 gap-3">
        <FormInput
          label="Ville"
          name="city"
          value={data.city || ""}
          onChange={onChange}
          placeholder="Paris"
          required
        />
        <FormInput
          label="Code postal"
          name="postalCode"
          value={data.postalCode || ""}
          onChange={onChange}
          placeholder="75001"
          required
        />
        <FormInput
          label="Pays"
          name="country"
          value={data.country || "FR"}
          onChange={onChange}
          placeholder="FR"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Latitude"
          name="latitude"
          value={data.latitude || ""}
          onChange={onChange}
          placeholder="48.8566"
        />
        <FormInput
          label="Longitude"
          name="longitude"
          value={data.longitude || ""}
          onChange={onChange}
          placeholder="2.3522"
        />
      </div>

      <SectionTitle title="Horaires d'ouverture" subtitle="Format : Lundi 09:00 18:00 (un par ligne)" />
      <FormTextarea
        label="Horaires"
        name="openingHours"
        value={data.openingHours || ""}
        onChange={onChange}
        placeholder={"Monday 09:00 18:00\nTuesday 09:00 18:00\nSaturday 10:00 17:00"}
        rows={4}
        hint="Noms en anglais : Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
      />

      <SectionTitle title="Avis clients (optionnel)" />
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
          placeholder="128"
          type="number"
        />
      </div>
    </div>
  );
}
