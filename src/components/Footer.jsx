import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, Heart, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { IslamicStarDeco } from './IslamicPattern';
import { foundationInfo } from '../data/foundationInfo';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Programs', path: '/programs' },
    { name: 'Teachers & Scholars', path: '/teachers' },
    { name: 'Why Al Kahf', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  const courseLinks = [
    { name: 'Islamic History & Ideological War', path: '/courses/islamic-history-and-ideological-war' },
    { name: 'Ramadan Course', path: '/courses/ramadan-course' },
    { name: 'Seerah Course', path: '/courses/seerah-course' },
    { name: 'Sirat-ul-Mustaqeem Course', path: '/courses/sirat-ul-mustaqeem-course' },
    { name: 'Hajj Course', path: '/courses/hajj-course' },
    { name: 'Umrah Course', path: '/courses/umrah-course' },
    { name: 'Namaz Course', path: '/courses/namaz-course' },
  ];

  return (
    <footer className="bg-emerald-980 text-emerald-100 relative overflow-hidden border-t-2 border-gold-500/30">
      
      {/* Background Geometric Watermark */}
      <div className="absolute inset-0 bg-islamic-stars-dark opacity-20 pointer-events-none" />
      
      {/* Small Islamic Geometric Header Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-900 via-gold-500 to-emerald-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/80">
          
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-900 border border-gold-500/50 flex items-center justify-center p-1.5">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <path d="M25 75V45C25 31.1929 36.1929 20 50 20C63.8071 20 75 31.1929 75 45V75" stroke="#d4af37" strokeWidth="6" strokeLinecap="round" />
                  <path d="M50 42C44 37 34 37 32 38V62C34 61 44 61 50 66C56 61 66 61 68 62V38C66 37 56 37 50 42Z" fill="#d4af37" fillOpacity="0.25" stroke="#d4af37" strokeWidth="6" />
                  <circle cx="50" cy="30" r="5" fill="#f5e098" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                  Al Kahf Foundation
                </span>
                <p className="text-[11px] text-emerald-300/80 tracking-widest uppercase font-medium">
                  {foundationInfo.tagline}
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed max-w-sm">
              An Islamic educational organization offering structured online courses and awareness programs for men and women, rooted in the authentic Quran and Sunnah.
            </p>

            {/* Micro Pattern Ornament */}
            <div className="flex items-center gap-2 pt-2 text-gold-400 text-xs">
              <IslamicStarDeco className="w-3.5 h-3.5" />
              <span className="font-arabic text-sm text-gold-300">مؤسسة الكهف للتعليم الإسلامي</span>
              <IslamicStarDeco className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Quick Links Column (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-emerald-200/80 hover:text-gold-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-emerald-600">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Column (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Our Islamic Courses
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {courseLinks.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.path}
                    className="text-emerald-200/80 hover:text-gold-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-emerald-600">›</span>
                    <span className="truncate">{course.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Official Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-emerald-200/90">
              <div>
                <span className="text-[11px] text-emerald-400 uppercase tracking-wider block font-bold">
                  WhatsApp (Direct Admissions):
                </span>
                <a
                  href={foundationInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold-300 font-semibold flex items-center gap-1.5 mt-0.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                  <span>{foundationInfo.whatsapp}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] text-emerald-400 uppercase tracking-wider block font-bold">
                  Email:
                </span>
                <a
                  href={foundationInfo.emailUrl}
                  className="text-white hover:text-gold-300 font-semibold flex items-center gap-1.5 mt-0.5 break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                  <span>{foundationInfo.email}</span>
                </a>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-3">
              <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={foundationInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-green-400 flex items-center justify-center border border-emerald-700/60 transition-colors"
                  title="WhatsApp Chat"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={foundationInfo.emailUrl}
                  className="w-8 h-8 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-gold-400 flex items-center justify-center border border-emerald-700/60 transition-colors"
                  title="Email Us"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <div
                  className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-600 flex items-center justify-center border border-emerald-900 cursor-not-allowed"
                  title="Instagram coming soon"
                >
                  <span className="text-[10px] font-bold">IG</span>
                </div>
                <div
                  className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-600 flex items-center justify-center border border-emerald-900 cursor-not-allowed"
                  title="TikTok coming soon"
                >
                  <span className="text-[10px] font-bold">TT</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Subtle Geometric Vector */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/80">
          <p>© 2026 Al Kahf Foundation. All Rights Reserved.</p>
          
          <div className="flex items-center gap-2 text-gold-500/60 text-[11px]">
            <IslamicStarDeco className="w-3 h-3" />
            <span>Dedicated to spreading authentic Islamic knowledge</span>
            <IslamicStarDeco className="w-3 h-3" />
          </div>
        </div>

      </div>
    </footer>
  );
}
