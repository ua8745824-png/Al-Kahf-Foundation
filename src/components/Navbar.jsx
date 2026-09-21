import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageCircle, BookOpen, Sparkles } from 'lucide-react';
import { foundationInfo } from '../data/foundationInfo';

export default function Navbar({ onOpenEnrollment }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-emerald-950/95 backdrop-blur-md shadow-lg shadow-emerald-950/20 border-b border-gold-500/20 py-3'
          : 'bg-emerald-900/90 backdrop-blur-sm border-b border-emerald-800/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-850 to-emerald-950 border border-gold-500/50 flex items-center justify-center p-1.5 shadow-md shadow-black/20 group-hover:border-gold-400 transition-all">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <path d="M25 75V45C25 31.1929 36.1929 20 50 20C63.8071 20 75 31.1929 75 45V75" stroke="#d4af37" strokeWidth="6" strokeLinecap="round" />
                <path d="M50 42C44 37 34 37 32 38V62C34 61 44 61 50 66C56 61 66 61 68 62V38C66 37 56 37 50 42Z" fill="#d4af37" fillOpacity="0.25" stroke="#d4af37" strokeWidth="6" />
                <circle cx="50" cy="30" r="5" fill="#f5e098" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                  Al Kahf <span className="text-gold-400 font-semibold">Foundation</span>
                </span>
              </div>
              <p className="text-[11px] text-emerald-200/80 tracking-widest uppercase font-medium flex items-center gap-1.5">
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
                      ? 'text-gold-300 bg-emerald-850/60 font-semibold shadow-inner'
                      : 'text-emerald-100/90 hover:text-white hover:bg-emerald-850/30'
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
              className="p-2.5 rounded-lg bg-emerald-850/70 text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors border border-emerald-700/50"
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

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEnrollment}
              className="px-3 py-1.5 rounded-md bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 font-bold text-xs shadow"
            >
              Enroll
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-emerald-950/98 backdrop-blur-xl border-b border-gold-500/20 shadow-2xl p-5 animate-slide-up max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-all ${
                    active
                      ? 'bg-emerald-850 text-gold-300 border-l-4 border-gold-400 font-semibold pl-3'
                      : 'text-emerald-100 hover:bg-emerald-900/60 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Drawer Action Buttons */}
          <div className="mt-6 pt-5 border-t border-emerald-800/80 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenEnrollment();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 font-bold text-center text-sm shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-950" />
              <span>Enroll in a Course</span>
            </button>
            <a
              href={foundationInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-850 hover:bg-emerald-800 text-emerald-100 font-medium text-center text-sm flex items-center justify-center gap-2 border border-emerald-700/60"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>Chat on WhatsApp: {foundationInfo.whatsapp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
