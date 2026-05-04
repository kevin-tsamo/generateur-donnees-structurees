"use client";

import { useState, useMemo } from "react";
import { SchemaType, FAQItem, BreadcrumbItem, RecipeIngredient, RecipeStep } from "../types/schema";
import SchemaSelector from "./SchemaSelector";
import JsonOutput from "./JsonOutput";
import ArticleForm from "./forms/ArticleForm";
import LocalBusinessForm from "./forms/LocalBusinessForm";
import ProductForm from "./forms/ProductForm";
import FAQForm from "./forms/FAQForm";
import BreadcrumbForm from "./forms/BreadcrumbForm";
import OrganizationForm from "./forms/OrganizationForm";
import PersonForm from "./forms/PersonForm";
import RecipeForm from "./forms/RecipeForm";
import EventForm from "./forms/EventForm";
import VideoForm from "./forms/VideoForm";
import WebSiteForm from "./forms/WebSiteForm";
import ServiceForm from "./forms/ServiceForm";
import ReviewForm from "./forms/ReviewForm";
import JobPostingForm from "./forms/JobPostingForm";
import {
  generateArticle,
  generateLocalBusiness,
  generateProduct,
  generateFAQ,
  generateBreadcrumb,
  generateOrganization,
  generatePerson,
  generateRecipe,
  generateEvent,
  generateVideo,
  generateWebSite,
  generateService,
  generateReview,
  generateJobPosting,
} from "../lib/generators";

export default function SchemaGenerator() {
  const [selectedType, setSelectedType] = useState<SchemaType>("Article");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    { question: "", answer: "" },
    { question: "", answer: "" },
  ]);
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([
    { name: "", url: "" },
    { name: "", url: "" },
  ]);
  const [ingredients, setIngredients] = useState<RecipeIngredient[]>([
    { ingredient: "" },
    { ingredient: "" },
  ]);
  const [steps, setSteps] = useState<RecipeStep[]>([
    { step: "" },
    { step: "" },
  ]);

  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (type: SchemaType) => {
    setSelectedType(type);
    setFormData({});
  };

  const generatedSchema = useMemo(() => {
    const data = { ...formData };
    switch (selectedType) {
      case "Article":
      case "BlogPosting":
        return generateArticle({ ...data, schemaType: data.schemaType || selectedType });
      case "LocalBusiness":
        return generateLocalBusiness(data);
      case "Product":
        return generateProduct(data);
      case "FAQPage":
        return generateFAQ({ faqItems });
      case "BreadcrumbList":
        return generateBreadcrumb({ breadcrumbItems });
      case "Organization":
        return generateOrganization(data);
      case "Person":
        return generatePerson(data);
      case "Recipe":
        return generateRecipe({ ...data, ingredients, steps });
      case "Event":
        return generateEvent(data);
      case "VideoObject":
        return generateVideo(data);
      case "WebSite":
        return generateWebSite(data);
      case "Service":
        return generateService(data);
      case "Review":
        return generateReview(data);
      case "JobPosting":
        return generateJobPosting(data);
      default:
        return null;
    }
  }, [selectedType, formData, faqItems, breadcrumbItems, ingredients, steps]);

  const renderForm = () => {
    switch (selectedType) {
      case "Article":
      case "BlogPosting":
        return <ArticleForm data={formData} onChange={handleFieldChange} schemaType={selectedType} />;
      case "LocalBusiness":
        return <LocalBusinessForm data={formData} onChange={handleFieldChange} />;
      case "Product":
        return <ProductForm data={formData} onChange={handleFieldChange} />;
      case "FAQPage":
        return <FAQForm items={faqItems} onChange={setFaqItems} />;
      case "BreadcrumbList":
        return <BreadcrumbForm items={breadcrumbItems} onChange={setBreadcrumbItems} />;
      case "Organization":
        return <OrganizationForm data={formData} onChange={handleFieldChange} />;
      case "Person":
        return <PersonForm data={formData} onChange={handleFieldChange} />;
      case "Recipe":
        return (
          <RecipeForm
            data={formData}
            onChange={handleFieldChange}
            ingredients={ingredients}
            onIngredientsChange={setIngredients}
            steps={steps}
            onStepsChange={setSteps}
          />
        );
      case "Event":
        return <EventForm data={formData} onChange={handleFieldChange} />;
      case "VideoObject":
        return <VideoForm data={formData} onChange={handleFieldChange} />;
      case "WebSite":
        return <WebSiteForm data={formData} onChange={handleFieldChange} />;
      case "Service":
        return <ServiceForm data={formData} onChange={handleFieldChange} />;
      case "Review":
        return <ReviewForm data={formData} onChange={handleFieldChange} />;
      case "JobPosting":
        return <JobPostingForm data={formData} onChange={handleFieldChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide mb-4">
            1. Choisissez le type de données structurées
          </h2>
          <SchemaSelector selected={selectedType} onChange={handleTypeChange} />
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide mb-4">
            2. Remplissez les informations
          </h2>
          {renderForm()}
        </div>
      </div>

      <div className="xl:sticky xl:top-6 xl:self-start">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide mb-4">
            3. Votre code Schema.org
          </h2>
          {generatedSchema ? (
            <JsonOutput schema={generatedSchema} />
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center text-gray-400 dark:text-gray-600">
              <span className="text-5xl mb-3">⚡</span>
              <p className="text-sm font-medium">Le code apparaît en temps réel</p>
              <p className="text-xs mt-1">Remplissez les champs pour générer votre JSON-LD</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
