import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, ArrowRight, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import { IslamicDivider, IslamicStarDeco } from './IslamicPattern';
import { foundationInfo } from '../data/foundationInfo';

export default function About() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Image with Islamic Frame & Accents */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-sand-100 group">
              <img
                src="/images/about-mosque.jpg"
                alt="Al Kahf Foundation Educational Sanctuary"
                className="w-full h-[260px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent" />
              
              {/* Bottom Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-emerald-950/85 backdrop-blur-md border border-gold-500/30 text-white space-y-1.5 shadow-lg">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                  <IslamicStarDeco className="w-3.5 h-3.5" />
                  <span>Our Guiding Principle</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100/95 italic">
                  &ldquo;Beneficial knowledge that transforms both the mind and the heart according to the Prophetic tradition.&rdquo;
                </p>
              </div>
            </div>

            {/* Subtle Floating Stat Badge */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Curriculum Quality</p>
                <p className="text-sm font-bold text-slate-900">100% Authentic</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Content & 9 Knowledge Pillars */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200/60">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>About Our Foundation</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
                About Al Kahf Foundation
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong className="text-slate-900 font-semibold">Al Kahf Foundation</strong> is dedicated to spreading authentic Islamic knowledge and helping Muslims understand Islam through structured, accessible educational programs. We bridge classical scholarship with contemporary clarity so that seekers worldwide can practice Islam with deep conviction and peace.
            </p>

            {/* 9 Knowledge Pillars Grid */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gold-600" />
                <span>Our Core Knowledge Disciplines:</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {foundationInfo.aboutPillars.map((pillar, idx) => (
                  <div
                    key={pillar.name}
                    className="p-3 rounded-xl bg-sand-50 border border-slate-200/80 hover:border-emerald-700 hover:bg-emerald-50/50 transition-all text-left"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="truncate">{pillar.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sand-100 hover:bg-sand-200 text-slate-800 font-semibold text-sm transition-all"
              >
                <span>Browse All Courses</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
