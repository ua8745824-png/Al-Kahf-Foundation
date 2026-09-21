import React from 'react';
import { teachersData } from '../data/teachers';
import { IslamicDivider, IslamicStarDeco } from './IslamicPattern';
import { GraduationCap, Award, BookOpen, User, Info, Sparkles } from 'lucide-react';

export default function Teachers() {
  return (
    <section className="py-20 bg-sand-50 relative overflow-hidden" id="teachers-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-gold-600" />
            <span>Meet Our Teachers</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Our Teachers & Scholars
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our courses are delivered by qualified, vetted instructors and scholars dedicated to transmitting authentic Islamic knowledge with academic sincerity and compassion.
          </p>
        </div>

        {/* Client Notice Regarding Official Faculty Profiles */}
        <div className="mt-8 max-w-2xl mx-auto p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs flex items-center gap-3">
          <Info className="w-5 h-5 text-amber-600 shrink-0" />
          <p>
            <strong>Faculty Directory Notice:</strong> Detailed academic biographies, Ijazahs, and verified scholar profiles are currently being updated by the administration.
          </p>
        </div>

        {/* Teacher Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teachersData.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft-card hover:shadow-card-hover hover:border-emerald-700/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Photo Placeholder with Islamic Monogram */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 text-gold-300 flex items-center justify-center font-bold text-xl border-2 border-gold-500/40 shadow-md group-hover:scale-105 transition-transform">
                  <User className="w-9 h-9 text-gold-400" />
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-800">
                    {teacher.role}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Qualification:
                    </span>
                    <p className="text-slate-700 font-medium">{teacher.qualification}</p>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Area of Expertise:
                    </span>
                    <p className="text-slate-700 font-medium">{teacher.expertise}</p>
                  </div>

                  <p className="text-[11px] text-slate-500 italic pt-1 leading-relaxed">
                    {teacher.bio}
                  </p>
                </div>

              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-center">
                <span className="text-[11px] font-bold text-gold-700 bg-gold-50 px-2.5 py-1 rounded-md border border-gold-200 inline-block">
                  Verified Instructor
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
