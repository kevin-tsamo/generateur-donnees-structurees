"use client";

import { FormInput, FormTextarea, FormSelect, SectionTitle } from "../FormField";

interface Props {
  data: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

const eventStatuses = [
  { value: "EventScheduled", label: "Programmé" },
  { value: "EventPostponed", label: "Reporté" },
  { value: "EventCancelled", label: "Annulé" },
  { value: "EventMovedOnline", label: "Déplacé en ligne" },
];

const attendanceModes = [
  { value: "OfflineEventAttendanceMode", label: "Présentiel" },
  { value: "OnlineEventAttendanceMode", label: "En ligne" },
  { value: "MixedEventAttendanceMode", label: "Mixte (hybride)" },
];

const currencies = [
  { value: "EUR", label: "EUR (€)" },
  { value: "USD", label: "USD ($)" },
  { value: "GBP", label: "GBP (£)" },
];

export default function EventForm({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <SectionTitle title="Informations de l'événement" />
      <FormInput
        label="Nom de l'événement"
        name="name"
        value={data.name || ""}
        onChange={onChange}
        placeholder="Conférence Web & SEO 2024"
        required
      />
      <FormTextarea
        label="Description"
        name="description"
        value={data.description || ""}
        onChange={onChange}
        placeholder="Description de l'événement..."
        rows={2}
      />
      <FormInput
        label="Image (URL)"
        name="image"
        value={data.image || ""}
        onChange={onChange}
        placeholder="https://monsite.fr/events/affiche.jpg"
        type="url"
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Date de début"
          name="startDate"
          value={data.startDate || ""}
          onChange={onChange}
          type="datetime-local"
          required
        />
        <FormInput
          label="Date de fin"
          name="endDate"
          value={data.endDate || ""}
          onChange={onChange}
          type="datetime-local"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <FormSelect
          label="Statut"
          name="eventStatus"
          value={data.eventStatus || "EventScheduled"}
          onChange={onChange}
          options={eventStatuses}
        />
        <FormSelect
          label="Mode de participation"
          name="eventAttendanceMode"
          value={data.eventAttendanceMode || "OfflineEventAttendanceMode"}
          onChange={onChange}
          options={attendanceModes}
        />
      </div>

      <SectionTitle title="Lieu" />
      <FormInput
        label="Nom du lieu"
        name="locationName"
        value={data.locationName || ""}
        onChange={onChange}
        placeholder="Palais des Congrès de Paris"
        required
      />
      {data.eventAttendanceMode !== "OnlineEventAttendanceMode" ? (
        <>
          <FormInput
            label="Adresse"
            name="locationAddress"
            value={data.locationAddress || ""}
            onChange={onChange}
            placeholder="2 Place de la Porte Maillot"
          />
          <div className="grid grid-cols-3 gap-3">
            <FormInput
              label="Ville"
              name="locationCity"
              value={data.locationCity || ""}
              onChange={onChange}
              placeholder="Paris"
            />
            <FormInput
              label="Code postal"
              name="locationPostalCode"
              value={data.locationPostalCode || ""}
              onChange={onChange}
              placeholder="75017"
            />
            <FormInput
              label="Pays"
              name="locationCountry"
              value={data.locationCountry || "FR"}
              onChange={onChange}
              placeholder="FR"
            />
          </div>
        </>
      ) : (
        <FormInput
          label="URL de l'événement en ligne"
          name="locationUrl"
          value={data.locationUrl || ""}
          onChange={onChange}
          placeholder="https://zoom.us/j/..."
          type="url"
        />
      )}

      <SectionTitle title="Organisateur" />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Nom de l'organisateur"
          name="organizerName"
          value={data.organizerName || ""}
          onChange={onChange}
          placeholder="Mon Organisation"
        />
        <FormInput
          label="Site de l'organisateur"
          name="organizerUrl"
          value={data.organizerUrl || ""}
          onChange={onChange}
          placeholder="https://monorganisation.fr"
          type="url"
        />
      </div>

      <SectionTitle title="Billetterie (optionnel)" />
      <div className="grid grid-cols-3 gap-3">
        <FormInput
          label="URL billetterie"
          name="ticketUrl"
          value={data.ticketUrl || ""}
          onChange={onChange}
          placeholder="https://..."
          type="url"
        />
        <FormInput
          label="Prix"
          name="ticketPrice"
          value={data.ticketPrice || ""}
          onChange={onChange}
          placeholder="0 = gratuit"
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
