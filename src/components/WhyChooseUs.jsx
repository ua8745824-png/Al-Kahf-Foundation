import React from 'react';
import { BookCheck, Layers, Award, Sparkles, Heart, Globe, CheckCircle } from 'lucide-react';
import { IslamicDivider, IslamicStarDeco } from './IslamicPattern';
import { foundationInfo } from '../data/foundationInfo';

export default function WhyChooseUs() {
  const iconMap = {
    BookCheck: BookCheck,
    Layers: Layers,
    Award: Award,
    Sparkles: Sparkles,
    Heart: Heart,
    Globe: Globe
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="why-us-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-gold-600" />
            <span>Why Al Kahf Foundation</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Why Choose Al Kahf Foundation
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We are committed to delivering authentic Islamic education with contemporary clarity, pedagogical excellence, and an unwavering commitment to the Quran and Sunnah.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {foundationInfo.whyChooseUs.map((benefit) => {
            const Icon = iconMap[benefit.icon] || BookCheck;
            return (
              <div
                key={benefit.number}
                className="group relative bg-sand-50/70 rounded-2xl p-7 border border-slate-200/90 hover:border-emerald-700/60 shadow-soft-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Icon & Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-900 text-gold-400 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-gold-500/40 transition-colors font-serif">
                      {benefit.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600" />
                  <span>Al Kahf Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
