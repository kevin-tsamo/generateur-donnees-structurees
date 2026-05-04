"use client";

import { FormInput, FormTextarea, SectionTitle } from "../FormField";
import { RecipeIngredient, RecipeStep } from "../../types/schema";

interface Props {
  data: Record<string, string>;
  onChange: (name: string, value: string) => void;
  ingredients: RecipeIngredient[];
  onIngredientsChange: (items: RecipeIngredient[]) => void;
  steps: RecipeStep[];
  onStepsChange: (items: RecipeStep[]) => void;
}

const inputStyle = {
  flex: 1,
  padding: "10px 14px",
  borderRadius: "var(--kt-radius-sm)",
  border: "1.5px solid var(--kt-border)",
  background: "var(--kt-card)",
  color: "var(--kt-text)",
  fontSize: "14px",
  outline: "none",
};

const addBtnStyle = {
  borderRadius: "var(--kt-radius-sm)",
  border: "2px dashed var(--kt-blue-mid)",
  color: "var(--kt-blue)",
  background: "transparent",
  width: "100%",
  padding: "10px",
  fontSize: "14px",
  fontWeight: 700,
  cursor: "pointer",
};

export default function RecipeForm({ data, onChange, ingredients, onIngredientsChange, steps, onStepsChange }: Props) {
  const updateIngredient = (index: number, value: string) => {
    const updated = [...ingredients];
    updated[index] = { ingredient: value };
    onIngredientsChange(updated);
  };
  const addIngredient = () => onIngredientsChange([...ingredients, { ingredient: "" }]);
  const removeIngredient = (i: number) => onIngredientsChange(ingredients.filter((_, idx) => idx !== i));

  const updateStep = (index: number, value: string) => {
    const updated = [...steps];
    updated[index] = { step: value };
    onStepsChange(updated);
  };
  const addStep = () => onStepsChange([...steps, { step: "" }]);
  const removeStep = (i: number) => onStepsChange(steps.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-4">
      <SectionTitle title="Informations générales" />
      <FormInput label="Nom de la recette" name="name" value={data.name || ""} onChange={onChange} placeholder="Tarte aux pommes maison" required />
      <FormTextarea label="Description" name="description" value={data.description || ""} onChange={onChange} placeholder="Une délicieuse tarte aux pommes..." rows={2} required />
      <FormInput label="Image (URL)" name="image" value={data.image || ""} onChange={onChange} placeholder="https://monsite.fr/recettes/image.jpg" type="url" />
      <div className="grid grid-cols-2 gap-3">
        <FormInput label="Auteur" name="authorName" value={data.authorName || ""} onChange={onChange} placeholder="Kevin TSAMO" required />
        <FormInput label="Date de publication" name="datePublished" value={data.datePublished || ""} onChange={onChange} type="date" />
      </div>

      <SectionTitle title="Temps" />
      <div className="grid grid-cols-3 gap-3">
        <FormInput label="Préparation (min)" name="prepTime" value={data.prepTime || ""} onChange={onChange} placeholder="20" type="number" />
        <FormInput label="Cuisson (min)" name="cookTime" value={data.cookTime || ""} onChange={onChange} placeholder="40" type="number" />
        <FormInput label="Total (min)" name="totalTime" value={data.totalTime || ""} onChange={onChange} placeholder="60" type="number" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <FormInput label="Portions" name="recipeYield" value={data.recipeYield || ""} onChange={onChange} placeholder="6 parts" />
        <FormInput label="Catégorie" name="recipeCategory" value={data.recipeCategory || ""} onChange={onChange} placeholder="Dessert" />
        <FormInput label="Cuisine" name="recipeCuisine" value={data.recipeCuisine || ""} onChange={onChange} placeholder="Française" />
      </div>

      <SectionTitle title="Ingrédients" />
      <div className="space-y-2">
        {ingredients.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <input
              type="text"
              value={item.ingredient}
              onChange={(e) => updateIngredient(index, e.target.value)}
              placeholder={`Ingrédient ${index + 1} (ex: 200g farine)`}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--kt-blue)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--kt-border)")}
            />
            {ingredients.length > 1 && (
              <button onClick={() => removeIngredient(index)} style={{ color: "var(--kt-muted)", fontSize: "18px", fontWeight: "bold" }}>×</button>
            )}
          </div>
        ))}
        <button onClick={addIngredient} style={addBtnStyle}>+ Ajouter un ingrédient</button>
      </div>

      <SectionTitle title="Étapes" />
      <div className="space-y-2">
        {steps.map((item, index) => (
          <div key={index} className="flex gap-2 items-start">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-2.5"
              style={{ background: "var(--kt-blue-light)", color: "var(--kt-blue)" }}
            >
              {index + 1}
            </div>
            <textarea
              value={item.step}
              onChange={(e) => updateStep(index, e.target.value)}
              placeholder={`Étape ${index + 1}...`}
              rows={2}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--kt-blue)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--kt-border)")}
            />
            {steps.length > 1 && (
              <button onClick={() => removeStep(index)} style={{ color: "var(--kt-muted)", fontSize: "18px", fontWeight: "bold", marginTop: "8px" }}>×</button>
            )}
          </div>
        ))}
        <button onClick={addStep} style={addBtnStyle}>+ Ajouter une étape</button>
      </div>

      <SectionTitle title="Avis (optionnel)" />
      <div className="grid grid-cols-2 gap-3">
        <FormInput label="Note moyenne" name="ratingValue" value={data.ratingValue || ""} onChange={onChange} placeholder="4.8" type="number" />
        <FormInput label="Nombre d'avis" name="reviewCount" value={data.reviewCount || ""} onChange={onChange} placeholder="45" type="number" />
      </div>
    </div>
  );
}
