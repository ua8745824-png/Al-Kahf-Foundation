import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageCircle, BookOpen, Sparkles, Phone, Mail } from 'lucide-react';
import { foundationInfo } from '../data/foundationInfo';
import { IslamicStarDeco } from './IslamicPattern';

export default function Navbar({ onOpenEnrollment }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background bleed & scrolling
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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Programs', path: '/programs' },
    { name: 'Teachers', path: '/teachers' },
    { name: 'Why Al Kahf', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
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
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-850 to-emerald-950 border border-gold-500/50 flex items-center justify-center p-1.5 shadow-md shadow-black/20 group-hover:border-gold-400 transition-all shrink-0">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <path d="M25 75V45C25 31.1929 36.1929 20 50 20C63.8071 20 75 31.1929 75 45V75" stroke="#d4af37" strokeWidth="6" strokeLinecap="round" />
                  <path d="M50 42C44 37 34 37 32 38V62C34 61 44 61 50 66C56 61 66 61 68 62V38C66 37 56 37 50 42Z" fill="#d4af37" fillOpacity="0.25" stroke="#d4af37" strokeWidth="6" />
                  <circle cx="50" cy="30" r="5" fill="#f5e098" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                    Al Kahf <span className="text-gold-400 font-semibold">Foundation</span>
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-emerald-200/80 tracking-wider uppercase font-medium flex items-center gap-1">
                  <span>Knowledge</span> • <span>Guidance</span> • <span>Faith</span>
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all relative ${
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

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={foundationInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-emerald-850/80 text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors border border-emerald-700/60"
                title="Quick WhatsApp Inquiry"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
              </a>
              <button
                onClick={onOpenEnrollment}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-md shadow-gold-900/20 hover:shadow-gold-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Sparkles className="w-4 h-4 text-emerald-950" />
                <span>Enroll Now</span>
              </button>
            </div>

            {/* Mobile Menu Action Buttons */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenEnrollment}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 font-bold text-xs shadow hover:scale-105 active:scale-95 transition-transform"
              >
                Enroll
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

      {/* 100% Solid, Fully Opaque Mobile Drawer Overlay (Zero bleeding of underlying text) */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] w-full h-full bg-[#022412] text-white flex flex-col justify-between overflow-y-auto animate-fade-in">
          
          {/* Mobile Drawer Top Bar */}
          <div className="p-4 bg-emerald-950 border-b border-gold-500/20 flex items-center justify-between shrink-0 shadow-md">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-900 border border-gold-500/50 flex items-center justify-center p-1.5">
                <IslamicStarDeco className="w-4 h-4 text-gold-400" />
              </div>
              <div>
                <span className="text-base font-bold text-white">
                  Al Kahf <span className="text-gold-400">Foundation</span>
                </span>
                <p className="text-[10px] text-emerald-300/80 uppercase tracking-wider">
                  Knowledge • Guidance • Faith
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

          {/* Navigation Links (Spacious, Tap-Friendly, Solid Background) */}
          <div className="p-5 flex-1 space-y-2 overflow-y-auto bg-[#022412]">
            <p className="text-[11px] font-bold uppercase tracking-widest text-gold-500/80 mb-3 px-2">
              Menu Navigation
            </p>

            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`w-full p-3.5 rounded-xl text-base font-medium flex items-center justify-between transition-all ${
                    active
                      ? 'bg-emerald-900 text-gold-300 font-bold border-l-4 border-gold-400 shadow-md pl-4'
                      : 'text-emerald-100/90 hover:bg-emerald-900/60 hover:text-white'
                  }`}
                >
                  <span className="text-sm font-semibold">{link.name}</span>
                  <ArrowRight className={`w-4 h-4 ${active ? 'text-gold-400' : 'text-emerald-500'}`} />
                </Link>
              );
            })}
          </div>

          {/* Mobile Drawer Bottom Actions & Verified Contact Info */}
          <div className="p-5 bg-emerald-950 border-t border-emerald-850 space-y-3 shrink-0">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenEnrollment();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-950" />
              <span>Enroll in a Course</span>
            </button>

            <a
              href={foundationInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-green-700 hover:bg-green-600 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-green-500/40 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp: {foundationInfo.whatsapp}</span>
            </a>

            <div className="pt-1 text-center">
              <a
                href={foundationInfo.emailUrl}
                className="text-[11px] text-emerald-300 hover:text-gold-300 transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3 h-3 text-gold-400" />
                <span>{foundationInfo.email}</span>
              </a>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
