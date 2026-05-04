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
      <FormInput
        label="Nom de la recette"
        name="name"
        value={data.name || ""}
        onChange={onChange}
        placeholder="Tarte aux pommes maison"
        required
      />
      <FormTextarea
        label="Description"
        name="description"
        value={data.description || ""}
        onChange={onChange}
        placeholder="Une délicieuse tarte aux pommes..."
        rows={2}
        required
      />
      <FormInput
        label="Image (URL)"
        name="image"
        value={data.image || ""}
        onChange={onChange}
        placeholder="https://monsite.fr/recettes/tarte-pommes.jpg"
        type="url"
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Auteur"
          name="authorName"
          value={data.authorName || ""}
          onChange={onChange}
          placeholder="Kevin TSAMO"
          required
        />
        <FormInput
          label="Date de publication"
          name="datePublished"
          value={data.datePublished || ""}
          onChange={onChange}
          type="date"
        />
      </div>

      <SectionTitle title="Temps de préparation" />
      <div className="grid grid-cols-3 gap-3">
        <FormInput
          label="Préparation (min)"
          name="prepTime"
          value={data.prepTime || ""}
          onChange={onChange}
          placeholder="20"
          type="number"
        />
        <FormInput
          label="Cuisson (min)"
          name="cookTime"
          value={data.cookTime || ""}
          onChange={onChange}
          placeholder="40"
          type="number"
        />
        <FormInput
          label="Total (min)"
          name="totalTime"
          value={data.totalTime || ""}
          onChange={onChange}
          placeholder="60"
          type="number"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <FormInput
          label="Portions"
          name="recipeYield"
          value={data.recipeYield || ""}
          onChange={onChange}
          placeholder="6 parts"
        />
        <FormInput
          label="Catégorie"
          name="recipeCategory"
          value={data.recipeCategory || ""}
          onChange={onChange}
          placeholder="Dessert"
        />
        <FormInput
          label="Cuisine"
          name="recipeCuisine"
          value={data.recipeCuisine || ""}
          onChange={onChange}
          placeholder="Française"
        />
      </div>

      <SectionTitle title="Ingrédients" />
      <div className="space-y-2">
        {ingredients.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={item.ingredient}
              onChange={(e) => updateIngredient(index, e.target.value)}
              placeholder={`Ingrédient ${index + 1} (ex: 200g farine)`}
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {ingredients.length > 1 && (
              <button onClick={() => removeIngredient(index)} className="text-red-400 hover:text-red-600 text-lg px-1">×</button>
            )}
          </div>
        ))}
        <button
          onClick={addIngredient}
          className="w-full py-2 rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
        >
          + Ajouter un ingrédient
        </button>
      </div>

      <SectionTitle title="Étapes de préparation" />
      <div className="space-y-2">
        {steps.map((item, index) => (
          <div key={index} className="flex gap-2 items-start">
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold mt-2">
              {index + 1}
            </div>
            <textarea
              value={item.step}
              onChange={(e) => updateStep(index, e.target.value)}
              placeholder={`Décrivez l'étape ${index + 1}...`}
              rows={2}
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            {steps.length > 1 && (
              <button onClick={() => removeStep(index)} className="text-red-400 hover:text-red-600 text-lg mt-2">×</button>
            )}
          </div>
        ))}
        <button
          onClick={addStep}
          className="w-full py-2 rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
        >
          + Ajouter une étape
        </button>
      </div>

      <SectionTitle title="Avis (optionnel)" />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Note moyenne"
          name="ratingValue"
          value={data.ratingValue || ""}
          onChange={onChange}
          placeholder="4.8"
          type="number"
        />
        <FormInput
          label="Nombre d'avis"
          name="reviewCount"
          value={data.reviewCount || ""}
          onChange={onChange}
          placeholder="45"
          type="number"
        />
      </div>
    </div>
  );
}
