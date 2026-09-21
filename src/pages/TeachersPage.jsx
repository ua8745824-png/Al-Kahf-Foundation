import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { staticSeoData, getBreadcrumbsSchema } from '../data/seoData';
import Teachers from '../components/Teachers';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';
import { IslamicStarDeco } from '../components/IslamicPattern';

export default function TeachersPage({ onOpenEnrollment }) {
  const breadcrumbItems = [
    { name: 'Teachers & Scholars', url: '/teachers' }
  ];

  const schemas = [
    getBreadcrumbsSchema(breadcrumbItems)
  ];

  return (
    <div className="animate-fade-in">
      <SEO
        title={staticSeoData.teachers.title}
        description={staticSeoData.teachers.description}
        canonical={staticSeoData.teachers.canonical}
        keywords={staticSeoData.teachers.keywords}
        ogImage={staticSeoData.teachers.ogImage}
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
            <IslamicStarDeco className="w-3.5 h-3.5" />
            <span>Academic Faculty & Instructors</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Our Teachers & Scholars
          </h1>

          <p className="text-emerald-200 text-sm sm:text-base max-w-2xl mx-auto">
            Learn from authentic, compassionate instructors dedicated to communicating Islamic sciences with scholarly precision and contemporary wisdom.
          </p>
        </div>
      </section>

      <Teachers />
      <WhyChooseUs />
      <CTA onOpenEnrollment={onOpenEnrollment} />
    </div>
  );
}
