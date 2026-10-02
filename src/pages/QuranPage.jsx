import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  FileText,
  Download,
  Headphones,
  Search,
  Sparkles,
  Bookmark,
  ArrowRight,
  Layers,
  HeartHandshake,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import SEO from '../components/SEO';
import { getLocalizedSeoData, getOrganizationSchema, getBreadcrumbsSchema } from '../data/seoData';
import { IslamicStarDeco } from '../components/IslamicPattern';
import QuranMushafViewer from '../components/QuranMushafViewer';
import QuranPdfLibrary from '../components/QuranPdfLibrary';
import QuranSurahReader from '../components/QuranSurahReader';
import { surahsData, juzData, quranVirtues } from '../data/quranData';

export default function QuranPage({ onOpenEnrollment }) {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('mushaf'); // 'mushaf' | 'surahs' | 'pdf' | 'directory'
  const [surahSearch, setSurahSearch] = useState('');
  const [lastReadPage, setLastReadPage] = useState(1);
  const [selectedSurahForReader, setSelectedSurahForReader] = useState(18); // Default Surah Al-Kahf
  const [selectedPageForMushaf, setSelectedPageForMushaf] = useState(1);

  const seo = getLocalizedSeoData('quran', i18n.language);

  // Load last read page
  useEffect(() => {
    const saved = localStorage.getItem('alkahf_quran_last_page');
    if (saved) {
      setLastReadPage(parseInt(saved, 10));
    }
  }, []);

  const handleOpenSurahInMushaf = (startPage) => {
    setSelectedPageForMushaf(startPage);
    setActiveTab('mushaf');
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleOpenSurahInReader = (surahNumber) => {
    setSelectedSurahForReader(surahNumber);
    setActiveTab('surahs');
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const filteredSurahs = surahsData.filter((s) => {
    const q = surahSearch.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.englishName.toLowerCase().includes(q) ||
      s.arabicName.includes(q) ||
      s.urduName.includes(q) ||
      String(s.number) === q
    );
  });

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Quran Kareem', url: '/quran' }
  ];

  const schemas = [
    getOrganizationSchema(),
    getBreadcrumbsSchema(breadcrumbs)
  ];

  return (
    <div className="min-h-screen bg-sand-50/50 dark:bg-[#02180d] pb-20 transition-colors duration-300">
      
      {/* SEO Tags */}
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        schemas={schemas}
      />

      {/* Hero Spiritual Header */}
      <section className="relative bg-gradient-to-b from-emerald-980 via-emerald-950 to-emerald-900 text-white pt-14 pb-16 px-4 sm:px-6 lg:px-8 border-b-2 border-gold-500/30 overflow-hidden text-center">
        
        {/* Background Islamic Watermark Pattern */}
        <div className="absolute inset-0 bg-islamic-stars-dark opacity-30 pointer-events-none" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-gold-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto space-y-5">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/90 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-widest shadow-md">
            <IslamicStarDeco className="w-4 h-4 text-gold-400" />
            <span>Al-Kahf Digital Quran Hub</span>
          </div>

          {/* Arabic Calligraphy Title */}
          <h1 className="font-arabic text-4xl sm:text-6xl lg:text-7xl font-bold text-gold-300 drop-shadow-md tracking-wider">
            الْقُرْآنُ الْكَرِيمُ
          </h1>

          <p className="text-xl sm:text-2xl font-serif font-bold text-white max-w-2xl mx-auto">
            The Holy Quran al-Kareem
          </p>

          <p className="text-xs sm:text-sm text-emerald-200/90 max-w-2xl mx-auto leading-relaxed">
            Read the standard 15-line Madani Mushaf, listen to world-renowned Qaris, explore Urdu & English translations, and download the finest high-resolution Quran PDFs.
          </p>

          {/* Quick Stats Bar & Last Read Button */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-900/60 border border-gold-500/20 text-xs text-emerald-100 font-semibold backdrop-blur-sm">
              <span>📖 114 Surahs</span>
              <span>•</span>
              <span>📜 30 Juz</span>
              <span>•</span>
              <span>📄 604 HD Pages</span>
              <span>•</span>
              <span>🎙️ 7 World Qaris</span>
            </div>

            {lastReadPage > 1 && (
              <button
                onClick={() => {
                  setSelectedPageForMushaf(lastReadPage);
                  setActiveTab('mushaf');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gold-500 text-slate-950 hover:bg-gold-400 text-xs font-bold shadow-lg transition-all hover:scale-105"
              >
                <Bookmark className="w-3.5 h-3.5 fill-current" />
                <span>Resume Reading (Page {lastReadPage})</span>
              </button>
            )}
          </div>

          {/* Daily Quranic Hadith Banner */}
          <div className="pt-4 max-w-2xl mx-auto">
            <div className="p-3.5 rounded-2xl bg-emerald-900/40 border border-gold-500/30 text-xs text-gold-200 backdrop-blur-sm">
              <p className="font-arabic text-base font-bold text-gold-300">
                "{quranVirtues[0].arabic}"
              </p>
              <p className="text-[11px] text-emerald-200/90 mt-1">
                "{quranVirtues[0].english}" — <span className="font-semibold text-gold-300">{quranVirtues[0].source}</span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 max-w-full">
          
          <button
            onClick={() => setActiveTab('mushaf')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shadow-sm ${
              activeTab === 'mushaf'
                ? 'bg-emerald-950 dark:bg-emerald-900 text-gold-300 shadow-emerald-950/20 shadow-md border-2 border-gold-500/50 scale-[1.02]'
                : 'bg-white dark:bg-emerald-950/60 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 text-emerald-950 dark:text-emerald-200 border border-emerald-900/15 dark:border-emerald-800/60'
            }`}
          >
            <BookOpen className="w-4 h-4 text-gold-500" />
            <span>📖 Interactive Madani Mushaf</span>
          </button>

          <button
            onClick={() => setActiveTab('surahs')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shadow-sm ${
              activeTab === 'surahs'
                ? 'bg-emerald-950 dark:bg-emerald-900 text-gold-300 shadow-emerald-950/20 shadow-md border-2 border-gold-500/50 scale-[1.02]'
                : 'bg-white dark:bg-emerald-950/60 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 text-emerald-950 dark:text-emerald-200 border border-emerald-900/15 dark:border-emerald-800/60'
            }`}
          >
            <Headphones className="w-4 h-4 text-gold-500" />
            <span>📜 Surah Translations & Audio</span>
          </button>

          <button
            onClick={() => setActiveTab('pdf')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shadow-sm ${
              activeTab === 'pdf'
                ? 'bg-emerald-950 dark:bg-emerald-900 text-gold-300 shadow-emerald-950/20 shadow-md border-2 border-gold-500/50 scale-[1.02]'
                : 'bg-white dark:bg-emerald-950/60 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 text-emerald-950 dark:text-emerald-200 border border-emerald-900/15 dark:border-emerald-800/60'
            }`}
          >
            <Download className="w-4 h-4 text-gold-500" />
            <span>📥 PDF Download Center</span>
          </button>

          <button
            onClick={() => setActiveTab('directory')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shadow-sm ${
              activeTab === 'directory'
                ? 'bg-emerald-950 dark:bg-emerald-900 text-gold-300 shadow-emerald-950/20 shadow-md border-2 border-gold-500/50 scale-[1.02]'
                : 'bg-white dark:bg-emerald-950/60 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 text-emerald-950 dark:text-emerald-200 border border-emerald-900/15 dark:border-emerald-800/60'
            }`}
          >
            <Layers className="w-4 h-4 text-gold-500" />
            <span>📑 114 Surahs Index</span>
          </button>

        </div>

        {/* Tab 1: Interactive Madani Mushaf Viewer */}
        {activeTab === 'mushaf' && (
          <div className="space-y-6">
            <QuranMushafViewer
              initialPage={selectedPageForMushaf}
              onOpenEnrollment={onOpenEnrollment}
            />
          </div>
        )}

        {/* Tab 2: Surah Reader & Multi-Translation Audio */}
        {activeTab === 'surahs' && (
          <div className="space-y-6">
            <QuranSurahReader
              initialSurah={selectedSurahForReader}
              onOpenEnrollment={onOpenEnrollment}
            />
          </div>
        )}

        {/* Tab 3: Curated World-Class PDF Center */}
        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <QuranPdfLibrary onOpenEnrollment={onOpenEnrollment} />
          </div>
        )}

        {/* Tab 4: 114 Surahs Directory Grid */}
        {activeTab === 'directory' && (
          <div className="space-y-6">
            
            {/* Search Box */}
            <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-[#032012] border border-emerald-900/10 dark:border-emerald-800/80 shadow-soft-card flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 dark:text-white">
                  Index of All 114 Holy Surahs
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Click any Surah to open directly in the Madani Mushaf or read with translations and audio.
                </p>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Surah by name or #..."
                  value={surahSearch}
                  onChange={(e) => setSurahSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-sand-50 dark:bg-emerald-950/80 border border-slate-200 dark:border-emerald-800/80 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
              </div>
            </div>

            {/* Surahs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredSurahs.map((surah) => (
                <div
                  key={surah.number}
                  className="p-4 rounded-2xl bg-white dark:bg-[#032012] border border-emerald-900/10 dark:border-emerald-850 hover:border-gold-500/40 shadow-soft-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-xl bg-emerald-950 text-gold-300 font-bold text-xs flex items-center justify-center shrink-0 shadow">
                        {surah.number}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-900 dark:group-hover:text-gold-300 transition-colors">
                          {surah.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          {surah.englishName}
                        </p>
                      </div>
                    </div>

                    <span className="font-arabic font-bold text-lg text-emerald-900 dark:text-gold-300">
                      {surah.arabicName}
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-900/70 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span>{surah.revelationPlace} • {surah.versesCount} Ayahs</span>
                    <span>Page {surah.startPage}</span>
                  </div>

                  {/* 1-Click Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-3 pt-2">
                    <button
                      onClick={() => handleOpenSurahInMushaf(surah.startPage)}
                      className="py-1.5 px-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/60 hover:bg-emerald-100 dark:hover:bg-emerald-850 text-emerald-950 dark:text-emerald-200 text-[11px] font-bold text-center transition-colors"
                    >
                      📖 Mushaf Page
                    </button>
                    <button
                      onClick={() => handleOpenSurahInReader(surah.number)}
                      className="py-1.5 px-2 rounded-lg bg-emerald-900 dark:bg-emerald-800 hover:bg-emerald-850 dark:hover:bg-emerald-700 text-gold-300 text-[11px] font-bold text-center transition-colors"
                    >
                      📜 Translation & Audio
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Foundation Academic Tajweed Banner CTA */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-980 text-white border border-gold-500/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3 text-center md:text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40 text-xs font-bold">
              <GraduationCap className="w-4 h-4 text-gold-400" />
              <span>Certified Quran & Tajweed Academy</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Learn Quran with Certified Male & Female Tutors
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/90 max-w-2xl leading-relaxed">
              Master proper Makharij, Tajweed rules, and Quran memorization (Hifz) through 1-on-1 personalized live online sessions at Al-Kahf Foundation.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 relative z-10">
            <Link
              to="/courses/quran-reading-with-tajweed"
              className="px-5 py-3 rounded-xl bg-emerald-850 hover:bg-emerald-800 text-gold-200 border border-gold-500/40 text-xs font-bold transition-all"
            >
              View Course Syllabus
            </Link>
            <button
              onClick={onOpenEnrollment}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              Enroll Free Trial
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
