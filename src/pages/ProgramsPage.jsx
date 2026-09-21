import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getLocalizedSeoData, getBreadcrumbsSchema } from '../data/seoData';
import Programs from '../components/Programs';
import MenWomenSection from '../components/MenWomenSection';
import CTA from '../components/CTA';
import { IslamicStarDeco } from '../components/IslamicPattern';

export default function ProgramsPage({ onOpenEnrollment }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const seo = getLocalizedSeoData('programs', lang);

  const breadcrumbItems = [
    { name: t('nav.programs'), url: '/programs' }
  ];

  const schemas = [
    getBreadcrumbsSchema(breadcrumbItems)
  ];

  return (
    <div className="animate-fade-in text-start">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        schemas={schemas}
      />

      {/* Page Header */}
      <section className="relative py-20 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-islamic-stars-dark opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <IslamicStarDeco className="w-3.5 h-3.5 shrink-0" />
            <span>{t('programs.badge')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            {t('programs.heading')}
          </h1>

          <p className="text-emerald-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t('programs.description')}
          </p>
        </div>
      </section>

      <Programs />
      <MenWomenSection onOpenEnrollment={onOpenEnrollment} />
      <CTA onOpenEnrollment={onOpenEnrollment} />
    </div>
  );
}
