/* eslint-disable @typescript-eslint/no-explicit-any */

export function generateArticle(data: any) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": data.schemaType || "Article",
    "headline": data.headline,
    "description": data.description,
    "image": data.image ? [data.image] : undefined,
    "datePublished": data.datePublished,
    "dateModified": data.dateModified || data.datePublished,
    "author": {
      "@type": "Person",
      "name": data.authorName,
      "url": data.authorUrl || undefined,
    },
    "publisher": {
      "@type": "Organization",
      "name": data.publisherName,
      "logo": data.publisherLogo
        ? { "@type": "ImageObject", "url": data.publisherLogo }
        : undefined,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": data.url,
    },
  };
  return cleanSchema(schema);
}

export function generateLocalBusiness(data: any) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": data.businessType || "LocalBusiness",
    "name": data.name,
    "description": data.description,
    "url": data.url,
    "telephone": data.telephone,
    "email": data.email,
    "image": data.image || undefined,
    "priceRange": data.priceRange || undefined,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.streetAddress,
      "addressLocality": data.city,
      "postalCode": data.postalCode,
      "addressCountry": data.country || "FR",
    },
    "geo": data.latitude && data.longitude ? {
      "@type": "GeoCoordinates",
      "latitude": data.latitude,
      "longitude": data.longitude,
    } : undefined,
    "openingHoursSpecification": data.openingHours
      ? parseOpeningHours(data.openingHours)
      : undefined,
    "aggregateRating": data.ratingValue ? {
      "@type": "AggregateRating",
      "ratingValue": data.ratingValue,
      "reviewCount": data.reviewCount,
    } : undefined,
  };
  return cleanSchema(schema);
}

export function generateProduct(data: any) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": data.name,
    "description": data.description,
    "image": data.image || undefined,
    "brand": data.brand ? {
      "@type": "Brand",
      "name": data.brand,
    } : undefined,
    "sku": data.sku || undefined,
    "gtin": data.gtin || undefined,
    "offers": {
      "@type": "Offer",
      "url": data.url,
      "priceCurrency": data.priceCurrency || "EUR",
      "price": data.price,
      "availability": `https://schema.org/${data.availability || "InStock"}`,
      "itemCondition": `https://schema.org/${data.condition || "NewCondition"}`,
    },
    "aggregateRating": data.ratingValue ? {
      "@type": "AggregateRating",
      "ratingValue": data.ratingValue,
      "reviewCount": data.reviewCount,
      "bestRating": "5",
    } : undefined,
  };
  return cleanSchema(schema);
}

export function generateFAQ(data: any) {
  const items = (data.faqItems || []).filter((item: any) => item.question && item.answer);
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item: any) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };
  return cleanSchema(schema);
}

export function generateBreadcrumb(data: any) {
  const items = (data.breadcrumbItems || []).filter((item: any) => item.name && item.url);
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
  return cleanSchema(schema);
}

export function generateOrganization(data: any) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": data.orgType || "Organization",
    "name": data.name,
    "url": data.url,
    "logo": data.logo || undefined,
    "description": data.description || undefined,
    "telephone": data.telephone || undefined,
    "email": data.email || undefined,
    "address": data.streetAddress ? {
      "@type": "PostalAddress",
      "streetAddress": data.streetAddress,
      "addressLocality": data.city,
      "postalCode": data.postalCode,
      "addressCountry": data.country || "FR",
    } : undefined,
    "sameAs": data.sameAs
      ? data.sameAs.split("\n").map((s: string) => s.trim()).filter(Boolean)
      : undefined,
  };
  return cleanSchema(schema);
}

export function generatePerson(data: any) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": data.name,
    "url": data.url || undefined,
    "image": data.image || undefined,
    "jobTitle": data.jobTitle || undefined,
    "worksFor": data.worksFor ? {
      "@type": "Organization",
      "name": data.worksFor,
    } : undefined,
    "description": data.description || undefined,
    "email": data.email || undefined,
    "telephone": data.telephone || undefined,
    "sameAs": data.sameAs
      ? data.sameAs.split("\n").map((s: string) => s.trim()).filter(Boolean)
      : undefined,
  };
  return cleanSchema(schema);
}

export function generateRecipe(data: any) {
  const ingredients = (data.ingredients || [])
    .map((i: any) => i.ingredient)
    .filter(Boolean);
  const steps = (data.steps || [])
    .map((s: any) => s.step)
    .filter(Boolean);

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": data.name,
    "description": data.description,
    "image": data.image || undefined,
    "author": {
      "@type": "Person",
      "name": data.authorName,
    },
    "datePublished": data.datePublished || undefined,
    "prepTime": data.prepTime ? `PT${data.prepTime}M` : undefined,
    "cookTime": data.cookTime ? `PT${data.cookTime}M` : undefined,
    "totalTime": data.totalTime ? `PT${data.totalTime}M` : undefined,
    "recipeYield": data.recipeYield || undefined,
    "recipeCategory": data.recipeCategory || undefined,
    "recipeCuisine": data.recipeCuisine || undefined,
    "recipeIngredient": ingredients.length ? ingredients : undefined,
    "recipeInstructions": steps.length
      ? steps.map((step: string, i: number) => ({
          "@type": "HowToStep",
          "name": `Étape ${i + 1}`,
          "text": step,
        }))
      : undefined,
    "aggregateRating": data.ratingValue ? {
      "@type": "AggregateRating",
      "ratingValue": data.ratingValue,
      "reviewCount": data.reviewCount,
    } : undefined,
  };
  return cleanSchema(schema);
}

export function generateEvent(data: any) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": data.name,
    "description": data.description || undefined,
    "image": data.image || undefined,
    "startDate": data.startDate,
    "endDate": data.endDate || undefined,
    "eventStatus": `https://schema.org/${data.eventStatus || "EventScheduled"}`,
    "eventAttendanceMode": `https://schema.org/${data.eventAttendanceMode || "OfflineEventAttendanceMode"}`,
    "location": data.locationName ? {
      "@type": data.eventAttendanceMode === "OnlineEventAttendanceMode" ? "VirtualLocation" : "Place",
      "name": data.locationName,
      "address": data.locationAddress ? {
        "@type": "PostalAddress",
        "streetAddress": data.locationAddress,
        "addressLocality": data.locationCity,
        "postalCode": data.locationPostalCode,
        "addressCountry": data.locationCountry || "FR",
      } : undefined,
      "url": data.locationUrl || undefined,
    } : undefined,
    "organizer": data.organizerName ? {
      "@type": "Organization",
      "name": data.organizerName,
      "url": data.organizerUrl || undefined,
    } : undefined,
    "offers": data.ticketUrl ? {
      "@type": "Offer",
      "url": data.ticketUrl,
      "price": data.ticketPrice || "0",
      "priceCurrency": data.priceCurrency || "EUR",
      "availability": "https://schema.org/InStock",
    } : undefined,
  };
  return cleanSchema(schema);
}

export function generateVideo(data: any) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": data.name,
    "description": data.description,
    "thumbnailUrl": data.thumbnailUrl,
    "uploadDate": data.uploadDate,
    "duration": data.duration ? `PT${data.duration}` : undefined,
    "contentUrl": data.contentUrl || undefined,
    "embedUrl": data.embedUrl || undefined,
    "publisher": data.publisherName ? {
      "@type": "Organization",
      "name": data.publisherName,
      "logo": data.publisherLogo ? {
        "@type": "ImageObject",
        "url": data.publisherLogo,
      } : undefined,
    } : undefined,
  };
  return cleanSchema(schema);
}

export function generateWebSite(data: any) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": data.name,
    "url": data.url,
    "description": data.description || undefined,
    "potentialAction": data.searchUrl ? {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": data.searchUrl,
      },
      "query-input": "required name=search_term_string",
    } : undefined,
  };
  return cleanSchema(schema);
}

export function generateService(data: any) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.name,
    "description": data.description,
    "url": data.url || undefined,
    "image": data.image || undefined,
    "provider": data.providerName ? {
      "@type": "Organization",
      "name": data.providerName,
      "url": data.providerUrl || undefined,
    } : undefined,
    "areaServed": data.areaServed || undefined,
    "serviceType": data.serviceType || undefined,
    "offers": data.price ? {
      "@type": "Offer",
      "price": data.price,
      "priceCurrency": data.priceCurrency || "EUR",
    } : undefined,
  };
  return cleanSchema(schema);
}

export function generateReview(data: any) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Review",
    "name": data.name || undefined,
    "reviewBody": data.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": data.ratingValue,
      "bestRating": data.bestRating || "5",
      "worstRating": data.worstRating || "1",
    },
    "author": {
      "@type": "Person",
      "name": data.authorName,
    },
    "datePublished": data.datePublished || undefined,
    "itemReviewed": data.itemName ? {
      "@type": data.itemType || "Thing",
      "name": data.itemName,
      "url": data.itemUrl || undefined,
    } : undefined,
  };
  return cleanSchema(schema);
}

export function generateJobPosting(data: any) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": data.title,
    "description": data.description,
    "datePosted": data.datePosted,
    "validThrough": data.validThrough || undefined,
    "employmentType": data.employmentType || undefined,
    "hiringOrganization": {
      "@type": "Organization",
      "name": data.organizationName,
      "sameAs": data.organizationUrl || undefined,
      "logo": data.organizationLogo || undefined,
    },
    "jobLocation": data.locationCity ? {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": data.streetAddress || undefined,
        "addressLocality": data.locationCity,
        "postalCode": data.postalCode || undefined,
        "addressCountry": data.country || "FR",
      },
    } : undefined,
    "baseSalary": data.salaryValue ? {
      "@type": "MonetaryAmount",
      "currency": data.salaryCurrency || "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "value": data.salaryValue,
        "unitText": data.salaryUnit || "YEAR",
      },
    } : undefined,
  };
  return cleanSchema(schema);
}

function parseOpeningHours(raw: string) {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(" ");
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": parts[0] ? `https://schema.org/${parts[0]}` : undefined,
        "opens": parts[1] || undefined,
        "closes": parts[2] || undefined,
      };
    });
}

function cleanSchema(obj: any): any {
  if (Array.isArray(obj)) {
    const cleaned = obj.map(cleanSchema).filter((v) => v !== undefined && v !== null && v !== "");
    return cleaned.length ? cleaned : undefined;
  }
  if (obj !== null && typeof obj === "object") {
    const cleaned: any = {};
    for (const key of Object.keys(obj)) {
      const val = cleanSchema(obj[key]);
      if (val !== undefined && val !== null && val !== "") {
        cleaned[key] = val;
      }
    }
    return Object.keys(cleaned).length ? cleaned : undefined;
  }
  return obj;
}
