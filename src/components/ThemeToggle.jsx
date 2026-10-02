import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Laptop, ChevronDown, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ variant = 'dropdown', className = '' }) {
  const { t } = useTranslation();
  const { theme, resolvedTheme, setTheme, toggleTheme, isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeOptions = [
    { value: 'light', label: t('nav.themeLight') || 'Light', icon: Sun },
    { value: 'dark', label: t('nav.themeDark') || 'Dark', icon: Moon },
    { value: 'system', label: t('nav.themeSystem') || 'System', icon: Laptop }
  ];

  // Quick single-click toggle button (Compact for mobile topbar or minimal UI)
  if (variant === 'button') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`p-2 rounded-lg bg-emerald-900/80 hover:bg-emerald-850 text-gold-300 hover:text-gold-200 border border-gold-500/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400/50 shadow-sm flex items-center justify-center ${className}`}
        aria-label={isDark ? (t('nav.themeLight') || 'Switch to Light Mode') : (t('nav.themeDark') || 'Switch to Dark Mode')}
        title={isDark ? (t('nav.themeLight') || 'Light Mode') : (t('nav.themeDark') || 'Dark Mode')}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-gold-300 transition-transform duration-300 rotate-0 hover:-rotate-12" />
        )}
      </button>
    );
  }

  // Segmented 3-button control (Ideal for mobile menu drawer)
  if (variant === 'segmented') {
    return (
      <div className={`grid grid-cols-3 gap-2 ${className}`}>
        {themeOptions.map((opt) => {
          const Icon = opt.icon;
          const isSelected = theme === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setTheme(opt.value)}
              className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1.5 ${
                isSelected
                  ? 'bg-gold-500 text-slate-950 shadow-md scale-[1.02]'
                  : 'bg-emerald-900/80 text-emerald-100 hover:bg-emerald-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[11px] truncate max-w-full">{opt.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Default: Elegant Dropdown selector (Ideal for Desktop Navbar)
  const CurrentIcon = resolvedTheme === 'dark' ? Moon : Sun;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t('nav.toggleTheme') || 'Select Theme'}
        title={t('nav.toggleTheme') || 'Select Theme'}
        className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-emerald-900/80 hover:bg-emerald-850 text-emerald-100 hover:text-white border border-gold-500/30 text-xs font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400/50"
      >
        <CurrentIcon className={`w-3.5 h-3.5 ${resolvedTheme === 'dark' ? 'text-amber-300' : 'text-gold-400'} shrink-0`} />
        <span className="hidden xl:inline capitalize">
          {theme === 'system' ? (t('nav.themeSystem') || 'Auto') : isDark ? (t('nav.themeDark') || 'Dark') : (t('nav.themeLight') || 'Light')}
        </span>
        <ChevronDown className={`w-3 h-3 text-emerald-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-36 rounded-xl bg-emerald-950 border border-gold-500/40 shadow-2xl shadow-black/60 py-1.5 z-50 animate-fade-in ltr:right-0 rtl:left-0">
          <div className="px-3 py-1.5 text-[10px] font-bold text-gold-400 uppercase tracking-wider border-b border-emerald-850">
            {t('nav.theme') || 'Theme'}
          </div>
          {themeOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = theme === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  setTheme(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full text-start px-3 py-2 text-xs font-medium flex items-center justify-between transition-colors ${
                  isSelected
                    ? 'bg-emerald-850 text-gold-300 font-bold'
                    : 'text-emerald-100 hover:bg-emerald-900 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-gold-400" />
                  <span>{opt.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-gold-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
