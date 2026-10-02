import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Users, UserCheck, Shield, Clock, BookOpen, ArrowRight, Heart } from 'lucide-react';
import { IslamicDivider } from './IslamicPattern';

export default function MenWomenSection({ onOpenEnrollment }) {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>{t('menWomen.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            {t('menWomen.heading')}
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t('menWomen.description')}
          </p>
        </div>

        {/* 2 Dedicated Visual Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: For Men */}
          <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-soft-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden text-start">
            <div className="absolute top-0 end-0 w-32 h-32 bg-emerald-900/5 rounded-bl-full pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-emerald-900 text-gold-300 flex items-center justify-center shadow-md shrink-0">
                  <UserCheck className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {t('menWomen.menBadge')}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                {t('menWomen.menTitle')}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t('menWomen.menDesc')}
              </p>

              <ul className="space-y-2.5 pt-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{t('menWomen.menF1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{t('menWomen.menF2')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{t('menWomen.menF3')}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100">
              <Link
                to="/courses"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-white font-semibold text-xs transition-all shadow"
              >
                <span>{t('menWomen.menBtn')}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 shrink-0" />
              </Link>
            </div>
          </div>

          {/* Card 2: For Women */}
          <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-soft-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden text-start">
            <div className="absolute top-0 end-0 w-32 h-32 bg-gold-500/5 rounded-bl-full pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-emerald-850 text-gold-400 flex items-center justify-center shadow-md shrink-0">
                  <Heart className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-800 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
                  {t('menWomen.womenBadge')}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                {t('menWomen.womenTitle')}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t('menWomen.womenDesc')}
              </p>

              <ul className="space-y-2.5 pt-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{t('menWomen.womenF1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{t('menWomen.womenF2')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{t('menWomen.womenF3')}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100">
              <Link
                to="/courses"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-xs transition-all shadow"
              >
                <span>{t('menWomen.womenBtn')}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 shrink-0" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
