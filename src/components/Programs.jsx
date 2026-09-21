import React from 'react';
import { Link } from 'react-router-dom';
import { specialPrograms } from '../data/programs';
import { IslamicDivider, IslamicStarDeco } from './IslamicPattern';
import { Moon, BookOpen, Compass, MapPin, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function Programs() {
  const iconMap = {
    Moon: Moon,
    BookOpen: BookOpen,
    Compass: Compass,
    MapPin: MapPin,
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="programs-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Targeted Learning Pathways</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Special Islamic Programs
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            In addition to our full courses, Al Kahf Foundation offers intensive spiritual workshops and seasonal preparation programs tailored for practical application.
          </p>
        </div>

        {/* 6 Programs Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specialPrograms.map((program) => {
            const Icon = iconMap[program.icon] || Sparkles;
            return (
              <div
                key={program.id}
                className="group relative bg-sand-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-emerald-700/60 shadow-soft-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top decoration */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-900 text-gold-400 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-slate-200 text-emerald-900">
                    {program.badge}
                  </span>
                </div>

                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                      {program.title}
                    </h3>
                  </div>

                  {program.arabicTitle && (
                    <p className="text-xs text-gold-700 font-arabic">
                      {program.arabicTitle}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {program.shortDescription}
                  </p>

                  <ul className="pt-2 space-y-1 text-xs text-slate-500">
                    {program.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <Link
                    to={`/courses/${program.targetSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 group-hover:text-gold-700 transition-colors"
                  >
                    <span>View Curriculum & Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
