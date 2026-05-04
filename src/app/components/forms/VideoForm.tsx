"use client";

import { FormInput, FormTextarea, SectionTitle } from "../FormField";

interface Props {
  data: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

export default function VideoForm({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <SectionTitle title="Informations de la vidéo" />
      <FormInput
        label="Titre de la vidéo"
        name="name"
        value={data.name || ""}
        onChange={onChange}
        placeholder="Comment créer un site web en 2024"
        required
      />
      <FormTextarea
        label="Description"
        name="description"
        value={data.description || ""}
        onChange={onChange}
        placeholder="Dans cette vidéo, nous allons voir..."
        rows={2}
        required
      />
      <FormInput
        label="Image miniature (URL)"
        name="thumbnailUrl"
        value={data.thumbnailUrl || ""}
        onChange={onChange}
        placeholder="https://monsite.fr/videos/miniature.jpg"
        type="url"
        required
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Date de publication"
          name="uploadDate"
          value={data.uploadDate || ""}
          onChange={onChange}
          type="date"
          required
        />
        <FormInput
          label="Durée (ex: 5M30S)"
          name="duration"
          value={data.duration || ""}
          onChange={onChange}
          placeholder="5M30S"
          hint="Format ISO 8601 : 1H20M, 5M30S..."
        />
      </div>
      <FormInput
        label="URL directe de la vidéo"
        name="contentUrl"
        value={data.contentUrl || ""}
        onChange={onChange}
        placeholder="https://monsite.fr/videos/video.mp4"
        type="url"
      />
      <FormInput
        label="URL d'embed"
        name="embedUrl"
        value={data.embedUrl || ""}
        onChange={onChange}
        placeholder="https://www.youtube.com/embed/..."
        type="url"
      />

      <SectionTitle title="Éditeur" />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Nom de l'éditeur"
          name="publisherName"
          value={data.publisherName || ""}
          onChange={onChange}
          placeholder="Mon Site"
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
