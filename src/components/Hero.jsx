import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, MessageCircle, ShieldCheck, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { IslamicDivider, IslamicStarDeco } from './IslamicPattern';
import { foundationInfo } from '../data/foundationInfo';

export default function Hero({ onOpenEnrollment }) {
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
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-center lg:text-left animate-slide-up">
            
            {/* Top Emblem Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-gold-500/40 text-gold-300 text-xs sm:text-sm font-medium shadow-lg shadow-black/20 backdrop-blur-md">
              <IslamicStarDeco className="w-4 h-4 text-gold-400" />
              <span>Dedicated Online Islamic Academy</span>
              <span className="text-emerald-500 hidden sm:inline">•</span>
              <span className="hidden sm:inline text-emerald-200">For Men & Women</span>
            </div>

            {/* Main Powerful Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Learn Islam.{' '}
                <span className="block mt-1 gold-gradient-text font-serif">
                  Strengthen Your Faith.
                </span>{' '}
                Transform Your Life.
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-emerald-100/90 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              {foundationInfo.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-gold-950/40 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all"
              >
                <BookOpen className="w-5 h-5 text-emerald-950" />
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 text-emerald-950 ml-1" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-900/70 hover:bg-emerald-850 text-emerald-100 hover:text-white font-semibold text-base border border-gold-500/30 hover:border-gold-400/60 backdrop-blur-sm transition-all"
              >
                <MessageCircle className="w-5 h-5 text-gold-400" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Key Trust Checkmarks Bar */}
            <div className="pt-4 border-t border-emerald-800/60 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Authentic Quran & Sunnah</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Classes for Men & Women</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-200 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Live & Interactive Online</span>
              </div>
            </div>

          </div>

          {/* Right Column: Serene Featured Glass Card / Spotlight */}
          <div className="lg:col-span-4 animate-fade-in hidden sm:block">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-emerald-900/80 to-emerald-950/90 border border-gold-500/30 backdrop-blur-xl shadow-2xl shadow-black/40">
              
              {/* Corner Arabesque Motif */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400/60 flex items-center justify-center">
                <IslamicStarDeco className="w-4 h-4 text-gold-400" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-3 py-1 rounded-md border border-gold-500/20">
                    Featured Curriculum
                  </span>
                  <span className="text-[11px] text-emerald-300">Cohort Open</span>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug">
                  Islamic History & Ideological War
                </h3>

                <p className="text-xs text-emerald-200/85 line-clamp-3 leading-relaxed">
                  Explore Islamic civilization, historical turning points, and ideological challenges faced by Muslims with scholarly discernment.
                </p>

                <div className="pt-2 space-y-2 text-xs text-emerald-300">
                  <div className="flex items-center justify-between py-1.5 border-b border-emerald-800/60">
                    <span className="text-emerald-400">Target:</span>
                    <span className="text-white font-medium">Seekers, Youth, Parents</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-emerald-800/60">
                    <span className="text-emerald-400">Format:</span>
                    <span className="text-white font-medium">Live Virtual Classrooms</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-emerald-400">Inquiry:</span>
                    <span className="text-gold-300 font-medium">WhatsApp Support Available</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/courses/islamic-history-and-ideological-war"
                    className="w-full block py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-750 text-white font-semibold text-center text-xs border border-emerald-700 hover:border-gold-500/50 transition-all shadow"
                  >
                    View Featured Syllabus →
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
