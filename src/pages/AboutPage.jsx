import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { staticSeoData, getOrganizationSchema, getBreadcrumbsSchema } from '../data/seoData';
import { BookOpen, ShieldCheck, Heart, Users, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { IslamicDivider, IslamicStarDeco } from '../components/IslamicPattern';
import { foundationInfo } from '../data/foundationInfo';
import CTA from '../components/CTA';

export default function AboutPage({ onOpenEnrollment }) {
  const breadcrumbItems = [
    { name: 'About Us', url: '/about' }
  ];

  const schemas = [
    getOrganizationSchema(),
    getBreadcrumbsSchema(breadcrumbItems)
  ];

  return (
    <div className="bg-sand-50 animate-fade-in">
      <SEO
        title={staticSeoData.about.title}
        description={staticSeoData.about.description}
        canonical={staticSeoData.about.canonical}
        keywords={staticSeoData.about.keywords}
        ogImage={staticSeoData.about.ogImage}
        schemas={schemas}
      />

      {/* Page Header Banner */}
      <section className="relative py-20 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-islamic-stars-dark opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <IslamicStarDeco className="w-3.5 h-3.5" />
            <span>Our Heritage & Mission</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            About Al Kahf Foundation
          </h1>

          <p className="text-emerald-200 text-sm sm:text-base max-w-2xl mx-auto">
            Dedicated to spreading authentic Islamic knowledge and nurturing a deep, grounded understanding of Islam for men and women worldwide.
          </p>
        </div>
      </section>

      {/* Main Narrative & Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-semibold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Our Foundation</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif">
                Illuminating Hearts With Authentic Islamic Knowledge
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Named after the sacred Surah Al-Kahf—the sanctuary of faith, discernment, and steadfastness against the trials of time—<strong>Al Kahf Foundation</strong> was established to provide Muslims with an intellectual and spiritual haven.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                In an age of ideological confusion, rapid cultural shifts, and superficial soundbites, we provide structured, academically sound, and deeply transformative Islamic learning. Our courses are grounded in orthodox Sunni scholarship, delivered with modern teaching methodologies.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong>Authenticity First:</strong> Uncompromising adherence to the Holy Quran, authentic Sunnah, and classical consensus.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong>Respectful & Inclusive:</strong> Dedicated cohorts for men and women respecting modesty, privacy, and tailored schedules.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong>Practical Spiritual Impact:</strong> Transforming theory into daily character (Akhlaq), sincere worship, and family harmony.
                  </p>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-sand-100">
                <img
                  src="/images/about-mosque.jpg"
                  alt="Islamic foundation and classical academy courtyard for authentic knowledge"
                  loading="lazy"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-emerald-950/90 backdrop-blur-md text-white border border-gold-500/30 text-xs sm:text-sm italic">
                  &ldquo;Knowledge is not merely memorizing narrations; true knowledge is the fear of Allah and clarity of truth.&rdquo;
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9 Core Knowledge Pillars */}
      <section className="py-16 sm:py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif">
              Our Core Educational Disciplines
            </h2>
            <IslamicDivider showArabic={false} />
            <p className="text-sm sm:text-base text-slate-600">
              Al Kahf Foundation provides structured learning pathways across the essential domains of Islamic sciences.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundationInfo.aboutPillars.map((pillar, idx) => (
              <div
                key={pillar.name}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft-card hover:border-emerald-700 hover:shadow-card-hover transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-850 font-bold flex items-center justify-center text-xs">
                    0{idx + 1}
                  </span>
                  <IslamicStarDeco className="w-4 h-4 text-gold-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-4">
                  {pillar.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTA onOpenEnrollment={onOpenEnrollment} />
    </div>
  );
}
