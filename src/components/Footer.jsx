import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Mail } from 'lucide-react';
import { IslamicStarDeco } from './IslamicPattern';
import { foundationInfo } from '../data/foundationInfo';
import { coursesData } from '../data/courses';
import { getLocalizedCourse } from '../utils/courseLocalization';

export default function Footer() {
  const { t, i18n } = useTranslation();

  const quickLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.courses'), path: '/courses' },
    { name: t('nav.programs'), path: '/programs' },
    { name: t('nav.teachers'), path: '/teachers' },
    { name: t('nav.whyUs'), path: '/why-us' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const featuredCourseSlugs = [
    'noorani-qaida',
    'quran-reading-with-tajweed',
    'quran-with-translation',
    'hifz-ul-quran',
    'islamic-history-ideological-war',
    'namaz',
    'ramadan',
    'hajj'
  ];

  const footerCourses = coursesData.filter((c) =>
    featuredCourseSlugs.includes(c.id) || featuredCourseSlugs.includes(c.slug)
  ).slice(0, 7);

  return (
    <footer className="bg-emerald-980 text-emerald-100 relative overflow-hidden border-t-2 border-gold-500/30 text-start">
      
      {/* Background Geometric Watermark */}
      <div className="absolute inset-0 bg-islamic-stars-dark opacity-20 pointer-events-none" />
      
      {/* Small Islamic Geometric Header Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-900 via-gold-500 to-emerald-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/80">
          
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-900 border border-gold-500/50 flex items-center justify-center p-1.5 shrink-0 shadow-md group-hover:border-gold-400 group-hover:scale-105 transition-all">
                <img
                  src="/images/logo-emblem.png"
                  alt="Al Kahf Foundation"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                  {t('brand.name')} <span className="text-gold-400">{t('brand.suffix')}</span>
                </span>
                <p className="text-[11px] text-emerald-300/80 uppercase font-medium">
                  {t('brand.tagline')}
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed max-w-sm">
              {t('footer.aboutText')}
            </p>

            {/* Micro Pattern Ornament */}
            <div className="flex items-center gap-2 pt-2 text-gold-400 text-xs">
              <IslamicStarDeco className="w-3.5 h-3.5 shrink-0" />
              <span className="font-arabic text-sm text-gold-300">{t('footer.arabicSubtitle')}</span>
              <IslamicStarDeco className="w-3.5 h-3.5 shrink-0" />
            </div>
          </div>

          {/* Quick Links Column (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              {t('footer.quickLinksTitle')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
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
              {t('footer.coursesTitle')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {footerCourses.map((c) => {
                const loc = getLocalizedCourse(c, i18n.language);
                return (
                  <li key={c.id}>
                    <Link
                      to={`/courses/${c.slug}`}
                      className="text-emerald-200/80 hover:text-gold-300 transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-emerald-600">›</span>
                      <span className="truncate">{loc.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Column (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              {t('footer.officialContact')}
            </h4>
            
            <div className="space-y-2.5 text-xs text-emerald-200/90">
              <div>
                <span className="text-[11px] text-emerald-400 uppercase tracking-wider block font-bold">
                  {t('footer.admissionsLabel')}
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
                  {t('footer.emailLabel')}
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
                {t('footer.connectLabel')}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={foundationInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-emerald-900 hover:bg-emerald-850 text-green-400 flex items-center justify-center border border-emerald-700/60 transition-colors"
                  title="WhatsApp Chat"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={foundationInfo.emailUrl}
                  className="w-8 h-8 rounded-lg bg-emerald-900 hover:bg-emerald-850 text-gold-400 flex items-center justify-center border border-emerald-700/60 transition-colors"
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
          <p>{t('footer.copyright')}</p>
          
          <div className="flex items-center gap-2 text-gold-500/60 text-[11px]">
            <IslamicStarDeco className="w-3 h-3" />
            <span>{t('footer.bottomMotto')}</span>
            <IslamicStarDeco className="w-3 h-3" />
          </div>
        </div>

      </div>
    </footer>
  );
}
