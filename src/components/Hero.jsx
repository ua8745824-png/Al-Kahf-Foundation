import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BookOpen, ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { IslamicStarDeco } from './IslamicPattern';

export default function Hero({ onOpenEnrollment }) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-emerald-950 text-white min-h-[75vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center">
      {/* Background Photography with Sophisticated Dark Emerald Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/al-kahf-foundation-islamic-education.jpg"
          alt="Al Kahf Foundation Islamic Education Background"
          className="w-full h-full object-cover object-center scale-105 opacity-30 mix-blend-luminosity filter brightness-75"
        />
        {/* Multilayered Gradients for Peaceful Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-980 via-emerald-950/95 to-emerald-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-980 via-transparent to-emerald-950/60" />
        <div className="absolute inset-0 bg-islamic-stars-dark opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Narrative & Dual Action Buttons */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-center lg:text-start animate-slide-up">
            
            {/* Top Emblem Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-gold-500/40 text-gold-300 text-xs sm:text-sm font-medium shadow-lg shadow-black/20 backdrop-blur-md">
              <IslamicStarDeco className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{t('hero.badge')}</span>
              <span className="text-emerald-500 hidden sm:inline">•</span>
              <span className="hidden sm:inline text-emerald-200">{t('hero.forMenWomen')}</span>
            </div>

            {/* Main Powerful Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.25]">
                {t('hero.titlePart1')}{' '}
                <span className="block mt-1 gold-gradient-text font-serif">
                  {t('hero.titlePart2')}
                </span>{' '}
                {t('hero.titlePart3')}
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-emerald-100/90 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              {t('hero.description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-gold-950/40 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all"
              >
                <BookOpen className="w-5 h-5 text-emerald-950 shrink-0" />
                <span>{t('hero.exploreCourses')}</span>
                <ArrowRight className="w-4 h-4 text-emerald-950 ms-1 rtl:rotate-180 shrink-0" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-900/70 hover:bg-emerald-850 text-emerald-100 hover:text-white font-semibold text-base border border-gold-500/30 hover:border-gold-400/60 backdrop-blur-sm transition-all"
              >
                <MessageCircle className="w-5 h-5 text-gold-400 shrink-0" />
                <span>{t('hero.contactUs')}</span>
              </Link>
            </div>

            {/* Key Trust Checkmarks Bar */}
            <div className="pt-4 border-t border-emerald-800/60 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0 text-start">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{t('hero.authenticQuran')}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{t('hero.classesMenWomen')}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-200 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{t('hero.liveOnline')}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Serene Featured Glass Card / Spotlight */}
          <div className="lg:col-span-4 animate-fade-in hidden sm:block">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-emerald-900/80 to-emerald-950/90 border border-gold-500/30 backdrop-blur-xl shadow-2xl shadow-black/40">
              
              {/* Corner Arabesque Motif */}
              <div className="absolute -top-3 ltr:-right-3 rtl:-left-3 w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400/60 flex items-center justify-center">
                <IslamicStarDeco className="w-4 h-4 text-gold-400" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-3 py-1 rounded-md border border-gold-500/20">
                    {t('hero.featuredCurriculum')}
                  </span>
                  <span className="text-[11px] text-emerald-300">{t('hero.cohortOpen')}</span>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug">
                  {t('hero.featuredTitle')}
                </h3>

                <p className="text-xs text-emerald-200/85 line-clamp-3 leading-relaxed">
                  {t('hero.featuredDesc')}
                </p>

                <div className="pt-2 space-y-2 text-xs text-emerald-300">
                  <div className="flex items-center justify-between py-1.5 border-b border-emerald-800/60">
                    <span className="text-emerald-400">{t('hero.targetLabel')}</span>
                    <span className="text-white font-medium">{t('hero.targetValue')}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-emerald-800/60">
                    <span className="text-emerald-400">{t('hero.formatLabel')}</span>
                    <span className="text-white font-medium">{t('hero.formatValue')}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-emerald-400">{t('hero.inquiryLabel')}</span>
                    <span className="text-gold-300 font-medium">{t('hero.inquiryValue')}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/courses/islamic-history-ideological-war"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-750 text-white font-semibold text-center text-xs border border-emerald-700 hover:border-gold-500/50 transition-all shadow"
                  >
                    <span>{t('hero.viewFeaturedSyllabus')}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
