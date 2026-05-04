"use client";

import { useState, useMemo } from "react";
import { SchemaType, FAQItem, BreadcrumbItem, RecipeIngredient, RecipeStep, SCHEMA_TYPES } from "../types/schema";
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
  generateArticle, generateLocalBusiness, generateProduct, generateFAQ,
  generateBreadcrumb, generateOrganization, generatePerson, generateRecipe,
  generateEvent, generateVideo, generateWebSite, generateService,
  generateReview, generateJobPosting,
} from "../lib/generators";

const cardStyle = {
  background: "var(--kt-card)",
  borderRadius: "var(--kt-radius)",
  border: "1px solid var(--kt-border)",
  boxShadow: "0 1px 4px rgba(61,71,232,0.06)",
};

const sectionHeadStyle = {
  fontSize: "11px",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
  color: "var(--kt-muted)",
  marginBottom: "14px",
};

export default function SchemaGenerator() {
  const [selectedType, setSelectedType] = useState<SchemaType>("Article");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [faqItems, setFaqItems] = useState<FAQItem[]>([{ question: "", answer: "" }, { question: "", answer: "" }]);
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([{ name: "", url: "" }, { name: "", url: "" }]);
  const [ingredients, setIngredients] = useState<RecipeIngredient[]>([{ ingredient: "" }, { ingredient: "" }]);
  const [steps, setSteps] = useState<RecipeStep[]>([{ step: "" }, { step: "" }]);

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
      case "BlogPosting": return generateArticle({ ...data, schemaType: data.schemaType || selectedType });
      case "LocalBusiness": return generateLocalBusiness(data);
      case "Product": return generateProduct(data);
      case "FAQPage": return generateFAQ({ faqItems });
      case "BreadcrumbList": return generateBreadcrumb({ breadcrumbItems });
      case "Organization": return generateOrganization(data);
      case "Person": return generatePerson(data);
      case "Recipe": return generateRecipe({ ...data, ingredients, steps });
      case "Event": return generateEvent(data);
      case "VideoObject": return generateVideo(data);
      case "WebSite": return generateWebSite(data);
      case "Service": return generateService(data);
      case "Review": return generateReview(data);
      case "JobPosting": return generateJobPosting(data);
      default: return null;
    }
  }, [selectedType, formData, faqItems, breadcrumbItems, ingredients, steps]);

  const currentTypeInfo = SCHEMA_TYPES.find((t) => t.value === selectedType);

  const renderForm = () => {
    switch (selectedType) {
      case "Article":
      case "BlogPosting": return <ArticleForm data={formData} onChange={handleFieldChange} schemaType={selectedType} />;
      case "LocalBusiness": return <LocalBusinessForm data={formData} onChange={handleFieldChange} />;
      case "Product": return <ProductForm data={formData} onChange={handleFieldChange} />;
      case "FAQPage": return <FAQForm items={faqItems} onChange={setFaqItems} />;
      case "BreadcrumbList": return <BreadcrumbForm items={breadcrumbItems} onChange={setBreadcrumbItems} />;
      case "Organization": return <OrganizationForm data={formData} onChange={handleFieldChange} />;
      case "Person": return <PersonForm data={formData} onChange={handleFieldChange} />;
      case "Recipe": return <RecipeForm data={formData} onChange={handleFieldChange} ingredients={ingredients} onIngredientsChange={setIngredients} steps={steps} onStepsChange={setSteps} />;
      case "Event": return <EventForm data={formData} onChange={handleFieldChange} />;
      case "VideoObject": return <VideoForm data={formData} onChange={handleFieldChange} />;
      case "WebSite": return <WebSiteForm data={formData} onChange={handleFieldChange} />;
      case "Service": return <ServiceForm data={formData} onChange={handleFieldChange} />;
      case "Review": return <ReviewForm data={formData} onChange={handleFieldChange} />;
      case "JobPosting": return <JobPostingForm data={formData} onChange={handleFieldChange} />;
      default: return null;
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-6">
      {/* LEFT — Form */}
      <div className="space-y-5">
        {/* Step 1 */}
        <div style={cardStyle} className="p-5">
          <p style={sectionHeadStyle}>
            <span style={{ color: "var(--kt-blue)" }}>01 —</span> Choisissez votre type de schéma
          </p>
          <SchemaSelector selected={selectedType} onChange={handleTypeChange} />
        </div>

        {/* Step 2 */}
        <div style={cardStyle} className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <p style={sectionHeadStyle} className="mb-0">
              <span style={{ color: "var(--kt-blue)" }}>02 —</span> Remplissez les champs
            </p>
            {currentTypeInfo && (
              <span
                className="ml-auto text-xs px-2.5 py-1 rounded-full font-semibold flex-shrink-0"
                style={{ background: "var(--kt-blue-light)", color: "var(--kt-blue)" }}
              >
                {currentTypeInfo.icon} {currentTypeInfo.label}
              </span>
            )}
          </div>
          {currentTypeInfo && (
            <p className="text-xs mb-4 pb-4" style={{ color: "var(--kt-muted)", borderBottom: "1px solid var(--kt-border)" }}>
              {currentTypeInfo.description}
            </p>
          )}
          <div className="space-y-4">
            {renderForm()}
          </div>
        </div>
      </div>

      {/* RIGHT — Output */}
      <div className="xl:sticky xl:top-20 xl:self-start">
        <div style={cardStyle} className="p-5">
          <p style={sectionHeadStyle}>
            <span style={{ color: "var(--kt-blue)" }}>03 —</span> Votre code JSON-LD
          </p>

          {generatedSchema ? (
            <JsonOutput schema={generatedSchema} />
          ) : (
            <div
              className="flex flex-col items-center justify-center py-16 text-center rounded-xl"
              style={{ background: "var(--kt-bg)", border: "2px dashed var(--kt-border)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "var(--kt-blue-light)" }}
              >
                <span className="text-2xl">⚡</span>
              </div>
              <p className="text-sm font-bold mb-1" style={{ color: "var(--kt-text)" }}>
                Le code apparaît en temps réel
              </p>
              <p className="text-xs" style={{ color: "var(--kt-muted)" }}>
                Remplissez les champs pour générer votre JSON-LD
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div
          className="mt-4 p-5 rounded-2xl text-center"
          style={{ background: "var(--kt-blue)", borderRadius: "var(--kt-radius)" }}
        >
          <p className="text-white font-bold text-sm mb-1">
            Besoin d&apos;un accompagnement SEO ?
          </p>
          <p className="text-white/75 text-xs mb-4">
            Audit technique, stratégie de contenu, netlinking — je vous aide à ranker.
          </p>
          <a
            href="https://www.kevintsamo.com/devis-seo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
            style={{
              background: "white",
              color: "var(--kt-blue)",
              borderRadius: "var(--kt-radius-btn)",
            }}
          >
            Demander un devis →
          </a>
        </div>
      </div>
    </div>
  );
}
