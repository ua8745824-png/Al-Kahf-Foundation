import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ArrowRight, MessageCircle, Sparkles, Globe, ChevronDown, Check } from 'lucide-react';
import { foundationInfo } from '../data/foundationInfo';
import { IslamicStarDeco } from './IslamicPattern';

const languages = [
  { code: 'en', label: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'ur', label: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', dir: 'rtl' },
  { code: 'ar', label: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' }
];

export default function Navbar({ onOpenEnrollment }) {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef(null);
  const location = useLocation();

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.courses'), path: '/courses' },
    { name: t('nav.programs'), path: '/programs' },
    { name: t('nav.teachers'), path: '/teachers' },
    { name: t('nav.whyUs'), path: '/why-us' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-emerald-950 shadow-lg shadow-emerald-950/30 border-b border-gold-500/20 py-2.5 sm:py-3'
            : 'bg-emerald-950/95 backdrop-blur-md border-b border-emerald-850/60 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Brand */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-850 to-emerald-950 border border-gold-500/50 flex items-center justify-center p-1 shadow-md shadow-black/30 group-hover:border-gold-400 group-hover:scale-105 transition-all shrink-0">
                <img
                  src="/images/logo-emblem.png"
                  alt="Al Kahf Foundation"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                    {t('brand.name')} <span className="text-gold-400 font-semibold">{t('brand.suffix')}</span>
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-emerald-200/80 tracking-wider font-medium flex items-center gap-1">
                  <span>{t('brand.tagline')}</span>
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all relative whitespace-nowrap ${
                      active
                        ? 'text-gold-300 bg-emerald-850/80 font-semibold shadow-inner'
                        : 'text-emerald-100/90 hover:text-white hover:bg-emerald-850/40'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-gold-400 to-amber-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Controls (Language Selector + Enrollment CTA) */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-3">
              
              {/* Language Switcher Dropdown */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  aria-expanded={isLangOpen}
                  aria-haspopup="true"
                  aria-label="Select Language"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-900/80 hover:bg-emerald-850 text-emerald-100 hover:text-white border border-gold-500/30 text-xs font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400/50"
                >
                  <Globe className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>{currentLang.nativeName}</span>
                  <ChevronDown className={`w-3 h-3 text-emerald-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLangOpen && (
                  <div className="absolute top-full mt-2 w-44 rounded-xl bg-emerald-950 border border-gold-500/40 shadow-2xl shadow-black/60 py-1.5 z-50 animate-fade-in ltr:right-0 rtl:left-0">
                    <div className="px-3 py-1.5 text-[10px] font-bold text-gold-400 uppercase tracking-wider border-b border-emerald-850">
                      {t('nav.language')}
                    </div>
                    {languages.map((lang) => {
                      const isSelected = lang.code === i18n.language;
                      return (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full text-start px-3 py-2.5 text-xs font-medium flex items-center justify-between transition-colors ${
                            isSelected
                              ? 'bg-emerald-850 text-gold-300 font-bold'
                              : 'text-emerald-100 hover:bg-emerald-900 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{lang.flag}</span>
                            <span>{lang.nativeName}</span>
                            <span className="text-[10px] text-emerald-400/80">({lang.code.toUpperCase()})</span>
                          </div>
                          {isSelected && <Check className="w-3.5 h-3.5 text-gold-400" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* WhatsApp Direct Link */}
              <a
                href={foundationInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-850/80 text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors border border-emerald-700/60"
                title="Quick WhatsApp Inquiry"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
              </a>

              {/* Enroll Button */}
              <button
                onClick={onOpenEnrollment}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-gold-900/20 hover:shadow-gold-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-950" />
                <span>{t('nav.enrollNow')}</span>
              </button>
            </div>

            {/* Mobile Actions (Language Icon, Quick Enroll, Menu Button) */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => {
                  // Cycle languages quickly on mobile topbar or open drawer
                  const nextIdx = (languages.findIndex(l => l.code === i18n.language) + 1) % languages.length;
                  handleLanguageChange(languages[nextIdx].code);
                }}
                className="px-2.5 py-1.5 rounded-lg bg-emerald-900/90 text-gold-300 border border-gold-500/30 text-xs font-bold flex items-center gap-1"
                aria-label="Switch Language"
                title="Switch Language"
              >
                <Globe className="w-3 h-3 text-gold-400" />
                <span>{currentLang.code.toUpperCase()}</span>
              </button>

              <button
                onClick={onOpenEnrollment}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 font-bold text-xs shadow hover:scale-105 active:scale-95 transition-transform"
              >
                {t('nav.enrollNow')}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-emerald-900 text-gold-400 hover:text-white hover:bg-emerald-850 transition-colors border border-emerald-700/60 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-5 h-5 text-gold-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 100% Solid, Fully Opaque Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] w-full h-full bg-[#022412] text-white flex flex-col justify-between overflow-y-auto animate-fade-in">
          
          {/* Mobile Drawer Top Bar */}
          <div className="p-4 bg-emerald-950 border-b border-gold-500/20 flex items-center justify-between shrink-0 shadow-md">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-900 border border-gold-500/50 flex items-center justify-center p-1 shadow-md">
                <img
                  src="/images/logo-emblem.png"
                  alt="Al Kahf Foundation"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <div>
                <span className="text-base font-bold text-white">
                  {t('brand.name')} <span className="text-gold-400">{t('brand.suffix')}</span>
                </span>
                <p className="text-[10px] text-emerald-300/80 font-medium">
                  {t('brand.tagline')}
                </p>
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-xl bg-emerald-900 text-gold-400 hover:text-white border border-gold-500/40"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-5 flex-1 space-y-2 overflow-y-auto bg-[#022412]">
            
            {/* Language Selector in Mobile Drawer */}
            <div className="mb-5 p-3.5 rounded-2xl bg-emerald-950/90 border border-gold-500/30">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 mb-2.5">
                <Globe className="w-3.5 h-3.5" />
                <span>{t('nav.language')}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => {
                  const isSelected = lang.code === i18n.language;
                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                        isSelected
                          ? 'bg-gold-500 text-slate-950 shadow-md scale-[1.02]'
                          : 'bg-emerald-900/80 text-emerald-100 hover:bg-emerald-800'
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.nativeName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="text-[11px] font-bold uppercase tracking-widest text-gold-500/80 mb-3 px-2">
              {t('nav.menu')}
            </p>

            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`w-full p-3.5 rounded-xl text-base font-medium flex items-center justify-between transition-all ${
                    active
                      ? 'bg-emerald-900 text-gold-300 font-bold border-s-4 border-gold-400 shadow-md ps-4'
                      : 'text-emerald-100/90 hover:bg-emerald-900/60 hover:text-white'
                  }`}
                >
                  <span className="text-sm font-semibold">{link.name}</span>
                  <ArrowRight className={`w-4 h-4 rtl:rotate-180 ${active ? 'text-gold-400' : 'text-emerald-500'}`} />
                </Link>
              );
            })}
          </div>

          {/* Mobile Drawer Bottom Actions */}
          <div className="p-5 bg-emerald-950 border-t border-emerald-850 space-y-3 shrink-0">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenEnrollment();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-950" />
              <span>{t('nav.enrollNow')}</span>
            </button>

            <a
              href={foundationInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-green-700 hover:bg-green-600 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-green-500/40 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{foundationInfo.whatsapp}</span>
            </a>
          </div>

        </div>
      )}
    </>
  );
}
