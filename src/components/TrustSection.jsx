import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, GraduationCap, Users, Laptop, Sparkles } from 'lucide-react';
import { IslamicDivider } from './IslamicPattern';

export default function TrustSection() {
  const { t } = useTranslation();

  const trustPoints = [
    {
      id: 'authentic',
      icon: ShieldCheck,
      title: t('trust.p1Title'),
      description: t('trust.p1Desc')
    },
    {
      id: 'qualified',
      icon: GraduationCap,
      title: t('trust.p2Title'),
      description: t('trust.p2Desc')
    },
    {
      id: 'men-women',
      icon: Users,
      title: t('trust.p3Title'),
      description: t('trust.p3Desc')
    },
    {
      id: 'accessible',
      icon: Laptop,
      title: t('trust.p4Title'),
      description: t('trust.p4Desc')
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-sand-50 relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-islamic-grid-light opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>{t('trust.visionBadge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            {t('trust.heading')}
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t('trust.description')}
          </p>
        </div>

        {/* 4 Trust Points Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.id}
                className="group relative bg-white rounded-2xl p-7 shadow-soft-card border border-slate-100 hover:border-gold-400/50 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 inset-x-6 h-[3px] bg-gradient-to-r from-emerald-800 via-gold-500 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-850 group-hover:text-gold-300 transition-colors shadow-sm">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-800 font-semibold">
                  <span>{t('trust.pillarLabel')} 0{index + 1}</span>
                  <span className="text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity">✦ {t('trust.verifiedLabel')}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
