import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { getLocalizedSeoData } from '../data/seoData';
import { IslamicStarDeco, IslamicDivider } from '../components/IslamicPattern';
import { Home, BookOpen } from 'lucide-react';

export default function NotFoundPage() {
  const { t, i18n } = useTranslation();
  const seo = getLocalizedSeoData('notFound', i18n.language);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-sand-50 dark:bg-[#02180d] transition-colors duration-300">
      {/* 404 SEO: Strictly noindex, nofollow */}
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        noindex={true}
      />

      <div className="max-w-lg w-full text-center space-y-6 bg-white dark:bg-[#032012] p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-emerald-800/80 shadow-soft-card animate-fade-in transition-colors">
        
        {/* Islamic Ornament & 404 Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 text-xs font-semibold uppercase tracking-wider border border-emerald-200 dark:border-emerald-700/60">
          <IslamicStarDeco className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400 shrink-0" />
          <span>{t('notFound.badge')}</span>
        </div>

        <div className="space-y-2">
          <span className="text-6xl sm:text-7xl font-extrabold text-emerald-950/20 dark:text-emerald-400/20 font-serif block">
            404
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-serif">
            {t('notFound.title')}
          </h1>
        </div>

        <IslamicDivider showArabic={false} />

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm mx-auto">
          {t('notFound.description')}
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-900 hover:bg-emerald-850 dark:bg-emerald-800 dark:hover:bg-emerald-750 text-white font-semibold text-xs sm:text-sm shadow transition-all"
          >
            <Home className="w-4 h-4" />
            <span>{t('notFound.backHome')}</span>
          </Link>

          <Link
            to="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sand-100 hover:bg-sand-200 dark:bg-emerald-950/80 dark:hover:bg-emerald-900 dark:text-emerald-200 dark:border dark:border-emerald-800/70 text-slate-800 font-semibold text-xs sm:text-sm transition-all"
          >
            <BookOpen className="w-4 h-4" />
            <span>{t('notFound.exploreCourses')}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
