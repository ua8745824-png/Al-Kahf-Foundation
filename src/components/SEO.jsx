import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '../data/seoData';

export default function SEO({
  title,
  description,
  canonical,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  schemas = []
}) {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const isRtl = lang === 'ur' || lang === 'ar';

  const fullCanonical = canonical || SITE_URL;
  const fullImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  const localeMap = {
    en: 'en_US',
    ur: 'ur_PK',
    ar: 'ar_SA'
  };

  const localizedSiteName = lang === 'ar' 
    ? 'مؤسسة الكهف للتعليم الإسلامي'
    : lang === 'ur'
    ? 'الکہف فاؤنڈیشن'
    : SITE_NAME;

  return (
    <Helmet>
      {/* HTML Attributes */}
      <html lang={lang} dir={isRtl ? 'rtl' : 'ltr'} />

      {/* Primary Page Title & Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Multilingual SEO Alternates / Hreflang Tags */}
      <link rel="alternate" hrefLang="en" href={fullCanonical} />
      <link rel="alternate" hrefLang="ur" href={fullCanonical} />
      <link rel="alternate" hrefLang="ar" href={fullCanonical} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonical} />

      {/* Search Engine Robots Directive */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook Metadata */}
      <meta property="og:site_name" content={localizedSiteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content={localeMap[lang] || 'en_US'} />

      {/* Twitter / X Card Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data (JSON-LD) Injections */}
      {schemas.map((schemaObj, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaObj)}
        </script>
      ))}
    </Helmet>
  );
}
