import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { staticSeoData, getBreadcrumbsSchema } from '../data/seoData';
import Courses from '../components/Courses';
import FeaturedCourse from '../components/FeaturedCourse';
import { IslamicStarDeco } from '../components/IslamicPattern';

export default function CoursesPage({ onOpenEnrollment }) {
  const breadcrumbItems = [
    { name: 'Islamic Courses', url: '/courses' }
  ];

  const schemas = [
    getBreadcrumbsSchema(breadcrumbItems)
  ];

  return (
    <div className="animate-fade-in">
      <SEO
        title={staticSeoData.courses.title}
        description={staticSeoData.courses.description}
        canonical={staticSeoData.courses.canonical}
        keywords={staticSeoData.courses.keywords}
        ogImage={staticSeoData.courses.ogImage}
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
            <span>Structured Academic Catalog</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Islamic Courses Online
          </h1>
          
          <p className="text-emerald-200 text-sm sm:text-base max-w-2xl mx-auto">
            Browse our authentic Islamic courses designed for men and women. Select a course to view detailed syllabus, learning outcomes, and cohort schedules.
          </p>
        </div>
      </section>

      {/* Flagship Highlight */}
      <FeaturedCourse onOpenEnrollment={onOpenEnrollment} />

      {/* Full Filterable Courses Directory */}
      <Courses showFilters={true} onQuickEnroll={onOpenEnrollment} />
    </div>
  );
}
