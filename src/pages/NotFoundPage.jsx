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
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-sand-50">
      {/* 404 SEO: Strictly noindex, nofollow */}
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        noindex={true}
      />

      <div className="max-w-lg w-full text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-soft-card animate-fade-in">
        
        {/* Islamic Ornament & 404 Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
          <IslamicStarDeco className="w-3.5 h-3.5 text-gold-600 shrink-0" />
          <span>{t('notFound.badge')}</span>
        </div>

        <div className="space-y-2">
          <span className="text-6xl sm:text-7xl font-extrabold text-emerald-950/20 font-serif block">
            404
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
            {t('notFound.title')}
          </h1>
        </div>

        <IslamicDivider showArabic={false} />

        <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
          {t('notFound.description')}
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-white font-semibold text-xs sm:text-sm shadow transition-all"
          >
            <Home className="w-4 h-4" />
            <span>{t('notFound.backHome')}</span>
          </Link>

          <Link
            to="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sand-100 hover:bg-sand-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all"
          >
            <BookOpen className="w-4 h-4" />
            <span>{t('notFound.exploreCourses')}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
