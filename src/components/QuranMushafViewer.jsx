import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Bookmark,
  BookmarkCheck,
  Search,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Sun,
  Moon,
  BookOpen,
  Sparkles,
  Download,
  Info,
  Check,
  Layers,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { quranMeta, surahsData, juzData, qarisList } from '../data/quranData';

export default function QuranMushafViewer({ initialPage = 1, onOpenEnrollment }) {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem('alkahf_quran_last_page');
    return saved ? parseInt(saved, 10) : initialPage;
  });
  const [isDoublePage, setIsDoublePage] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [readingTheme, setReadingTheme] = useState('parchment'); // 'parchment' | 'dark' | 'white' | 'sepia'
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [bookmarkedPages, setBookmarkedPages] = useState(() => {
    try {
      const saved = localStorage.getItem('alkahf_quran_bookmarks');
      return saved ? JSON.parse(saved) : [1, 293]; // Default to Al-Fatihah and Al-Kahf
    } catch {
      return [1, 293];
    }
  });
  const [jumpPageInput, setJumpPageInput] = useState('');
  const [selectedQari, setSelectedQari] = useState(qarisList[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioLoading, setAudioLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const containerRef = useRef(null);
  const audioRef = useRef(null);

  // Find Surah and Juz for current page
  const currentSurah = surahsData.slice().reverse().find(s => s.startPage <= currentPage) || surahsData[0];
  const currentJuz = juzData.slice().reverse().find(j => j.startPage <= currentPage) || juzData[0];

  // Persist last read page to localStorage
  useEffect(() => {
    localStorage.setItem('alkahf_quran_last_page', currentPage.toString());
  }, [currentPage]);

  // Handle Fullscreen change
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Keyboard navigation for page flip
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't interfere if user is typing in an input
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowLeft') {
        // In Arabic Mushaf, turning left advances page forward
        handleNextPage();
      } else if (e.key === 'ArrowRight') {
        handlePrevPage();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isDoublePage]);

  // Reset image load state on page change
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [currentPage]);

  const handleNextPage = () => {
    const increment = isDoublePage ? 2 : 1;
    setCurrentPage(prev => Math.min(quranMeta.totalPages, prev + increment));
  };

  const handlePrevPage = () => {
    const decrement = isDoublePage ? 2 : 1;
    setCurrentPage(prev => Math.max(1, prev - decrement));
  };

  const handleJumpToPage = (targetPage) => {
    const pageNum = parseInt(targetPage, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= quranMeta.totalPages) {
      setCurrentPage(pageNum);
      setJumpPageInput('');
    }
  };

  const handleSurahSelect = (surahNumber) => {
    const surah = surahsData.find(s => s.number === parseInt(surahNumber, 10));
    if (surah) {
      setCurrentPage(surah.startPage);
    }
  };

  const handleJuzSelect = (juzNumber) => {
    const juz = juzData.find(j => j.juz === parseInt(juzNumber, 10));
    if (juz) {
      setCurrentPage(juz.startPage);
    }
  };

  const toggleBookmark = (pageToToggle) => {
    setBookmarkedPages(prev => {
      let updated;
      if (prev.includes(pageToToggle)) {
        updated = prev.filter(p => p !== pageToToggle);
      } else {
        updated = [...prev, pageToToggle].sort((a, b) => a - b);
      }
      localStorage.setItem('alkahf_quran_bookmarks', JSON.stringify(updated));
      return updated;
    });
  };

  const isCurrentBookmarked = bookmarkedPages.includes(currentPage);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch(err => console.error(err));
    }
  };

  // Audio Playback for current Surah
  const toggleSurahAudio = () => {
    if (!audioRef.current) return;

    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      setAudioLoading(true);
      // Format 3-digit Surah number, e.g., 018 for Surah Al-Kahf
      const surahPadded = String(currentSurah.number).padStart(3, '0');
      // Use high-definition audio CDN from EveryAyah / Quran.com
      const audioUrl = `${selectedQari.server}/${surahPadded}.mp3`;
      audioRef.current.src = audioUrl;
      audioRef.current.play()
        .then(() => {
          setIsPlayingAudio(true);
          setAudioLoading(false);
        })
        .catch(err => {
          console.warn("Audio play blocked or unavailable:", err);
          setAudioLoading(false);
          setIsPlayingAudio(false);
        });
    }
  };

  // Theme styling definitions
  const themeStyles = {
    parchment: {
      bg: 'bg-[#faf6eb]',
      cardBg: 'bg-[#f4ebd0]',
      border: 'border-[#d8c29d]',
      text: 'text-[#3d2e1e]',
      headerBg: 'bg-[#ede0c2]'
    },
    dark: {
      bg: 'bg-[#0a1f14]',
      cardBg: 'bg-[#0f2d1d]',
      border: 'border-emerald-800/60',
      text: 'text-emerald-100',
      headerBg: 'bg-[#05170d]'
    },
    white: {
      bg: 'bg-white',
      cardBg: 'bg-slate-50',
      border: 'border-slate-200',
      text: 'text-slate-800',
      headerBg: 'bg-slate-100'
    },
    sepia: {
      bg: 'bg-[#f8f1e5]',
      cardBg: 'bg-[#ece0cc]',
      border: 'border-[#cbbda3]',
      text: 'text-[#44382c]',
      headerBg: 'bg-[#e4d4bc]'
    }
  };

  const currentThemeStyle = themeStyles[readingTheme];

  const getPageImageUrl = (pageNumber) => {
    return imageError ? quranMeta.madinahMushafFallbackUrl(pageNumber) : quranMeta.madinahMushafPageUrl(pageNumber);
  };

  return (
    <div
      ref={containerRef}
      className={`rounded-2xl transition-colors duration-300 border shadow-2xl relative overflow-hidden ${currentThemeStyle.bg} ${currentThemeStyle.border} ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none h-screen flex flex-col justify-between' : 'my-4'
      }`}
    >
      <audio
        ref={audioRef}
        onEnded={() => setIsPlayingAudio(false)}
        onError={() => {
          setIsPlayingAudio(false);
          setAudioLoading(false);
        }}
      />

      {/* Top Controls Bar */}
      <div className={`p-3 sm:p-4 border-b transition-colors flex flex-wrap items-center justify-between gap-3 ${currentThemeStyle.headerBg} ${currentThemeStyle.border}`}>
        
        {/* Left: Quick Surah & Juz Dropdowns */}
        <div className="flex items-center flex-wrap gap-2">
          
          {/* Surah Dropdown */}
          <div className="relative">
            <select
              value={currentSurah.number}
              onChange={(e) => handleSurahSelect(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-white/90 text-slate-800 border border-gold-500/40 text-xs font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-400 cursor-pointer"
              aria-label="Select Surah"
            >
              {surahsData.map((s) => (
                <option key={s.number} value={s.number}>
                  {s.number}. {s.name} ({s.arabicName})
                </option>
              ))}
            </select>
          </div>

          {/* Juz Dropdown */}
          <div className="relative">
            <select
              value={currentJuz.juz}
              onChange={(e) => handleJuzSelect(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-white/90 text-slate-800 border border-gold-500/40 text-xs font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-400 cursor-pointer"
              aria-label="Select Juz"
            >
              {juzData.map((j) => (
                <option key={j.juz} value={j.juz}>
                  Juz {j.juz} - {j.nameArabic} ({j.nameEnglish})
                </option>
              ))}
            </select>
          </div>

          {/* Page Direct Jump Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleJumpToPage(jumpPageInput);
            }}
            className="flex items-center gap-1"
          >
            <input
              type="number"
              min="1"
              max="604"
              placeholder={`Page (1-604)`}
              value={jumpPageInput}
              onChange={(e) => setJumpPageInput(e.target.value)}
              className="w-20 sm:w-24 px-2.5 py-1.5 rounded-xl bg-white/90 text-slate-800 border border-gold-500/30 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-gold-500 text-center"
            />
            <button
              type="submit"
              className="px-2.5 py-1.5 rounded-xl bg-emerald-900 text-gold-300 hover:bg-emerald-800 text-xs font-semibold shadow-sm transition-all"
            >
              Go
            </button>
          </form>
        </div>

        {/* Center: Surah Title Banner */}
        <div className="hidden md:flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="font-arabic text-xl font-bold text-emerald-950">
              {currentSurah.arabicName}
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gold-500/20 text-emerald-900 border border-gold-500/40">
              Surah {currentSurah.number}
            </span>
          </div>
          <span className="text-[11px] text-slate-600 font-medium">
            {currentSurah.englishName} • {currentSurah.versesCount} Ayahs • {currentSurah.revelationPlace} • Juz {currentJuz.juz}
          </span>
        </div>

        {/* Right Controls: Audio, View Mode, Theme, Bookmark, Zoom & Fullscreen */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap ms-auto">
          
          {/* Audio Recitation Button */}
          <button
            onClick={toggleSurahAudio}
            disabled={audioLoading}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm transition-all ${
              isPlayingAudio
                ? 'bg-emerald-700 text-white animate-pulse'
                : 'bg-emerald-900 text-gold-300 hover:bg-emerald-800'
            }`}
            title="Listen to Surah Tilawat"
          >
            {isPlayingAudio ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">Play Surah</span>
              </>
            )}
          </button>

          {/* Bookmark Button */}
          <button
            onClick={() => toggleBookmark(currentPage)}
            className={`p-1.5 sm:p-2 rounded-xl border text-xs font-semibold transition-all ${
              isCurrentBookmarked
                ? 'bg-gold-500 text-slate-950 border-gold-600 shadow-sm'
                : 'bg-white/80 hover:bg-white text-slate-700 border-slate-300'
            }`}
            title={isCurrentBookmarked ? "Page Bookmarked" : "Bookmark this Page"}
          >
            {isCurrentBookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-emerald-950 fill-current" />
            ) : (
              <Bookmark className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* Theme Selector */}
          <div className="flex items-center p-0.5 rounded-xl bg-black/5 border border-black/10">
            <button
              onClick={() => setReadingTheme('parchment')}
              className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                readingTheme === 'parchment' ? 'bg-[#f4ebd0] text-[#3d2e1e] shadow-sm' : 'text-slate-600 hover:text-slate-950'
              }`}
              title="Madinah Parchment Paper"
            >
              📜
            </button>
            <button
              onClick={() => setReadingTheme('dark')}
              className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                readingTheme === 'dark' ? 'bg-emerald-950 text-gold-300 shadow-sm' : 'text-slate-600 hover:text-slate-950'
              }`}
              title="Night Emerald Theme"
            >
              🌙
            </button>
            <button
              onClick={() => setReadingTheme('white')}
              className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                readingTheme === 'white' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-950'
              }`}
              title="Pristine Clean White"
            >
              ☀️
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="hidden sm:flex items-center gap-1">
            <button
              onClick={() => setZoomLevel(prev => Math.max(80, prev - 15))}
              className="p-1.5 rounded-xl bg-white/80 hover:bg-white text-slate-700 border border-slate-300"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(100)}
              className="px-2 py-1 rounded-xl bg-white/80 hover:bg-white text-slate-700 border border-slate-300 text-[10px] font-bold"
              title="Reset Zoom"
            >
              {zoomLevel}%
            </button>
            <button
              onClick={() => setZoomLevel(prev => Math.min(160, prev + 15))}
              className="p-1.5 rounded-xl bg-white/80 hover:bg-white text-slate-700 border border-slate-300"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 sm:p-2 rounded-xl bg-white/80 hover:bg-white text-slate-700 border border-slate-300 transition-all"
            title={isFullscreen ? "Exit Fullscreen (Esc)" : "Fullscreen Mode"}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Page Viewer Canvas */}
      <div className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-x-auto min-h-[550px] sm:min-h-[750px]">
        
        {/* Navigation Arrow Left (Next Page in RTL Mushaf) */}
        <button
          onClick={handleNextPage}
          disabled={currentPage >= quranMeta.totalPages}
          className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3.5 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900 text-gold-300 border border-gold-500/40 shadow-xl backdrop-blur-sm transition-all hover:scale-110 active:scale-95 disabled:opacity-30 disabled:pointer-events-none group"
          aria-label="Next Page"
          title="Next Page (Left Arrow Key)"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Mushaf Page Container */}
        <div
          className="relative transition-transform duration-200 flex items-center justify-center"
          style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'center center' }}
        >
          {/* Skeleton Loader during page transition */}
          {!imageLoaded && (
            <div className="w-[320px] sm:w-[480px] md:w-[560px] lg:w-[620px] aspect-[1/1.55] rounded-2xl bg-black/5 animate-pulse flex flex-col items-center justify-center space-y-4 border border-black/10 p-6">
              <div className="w-12 h-12 rounded-full border-4 border-gold-500/30 border-t-gold-500 animate-spin" />
              <p className="text-xs font-semibold text-slate-600 font-serif tracking-wider">
                Loading Madani Page {currentPage}...
              </p>
            </div>
          )}

          {/* High Resolution Mushaf Page Image */}
          <div
            className={`relative rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 border-2 ${
              readingTheme === 'dark' ? 'border-emerald-800/80 shadow-emerald-950/80' : 'border-gold-600/30 shadow-black/20'
            } ${!imageLoaded ? 'hidden' : 'block'}`}
          >
            {/* Page Top Decorative Header */}
            <div className={`px-4 py-2 text-xs font-serif flex items-center justify-between border-b ${
              readingTheme === 'dark' ? 'bg-emerald-950 text-gold-300 border-emerald-900' : 'bg-[#ede0c2]/90 text-emerald-950 border-[#d8c29d]'
            }`}>
              <div className="flex items-center gap-1.5 font-bold">
                <span>Juz {currentJuz.juz}</span>
                <span>•</span>
                <span className="font-arabic text-sm">{currentJuz.nameArabic}</span>
              </div>
              <div className="font-arabic font-bold text-sm">
                سورة {currentSurah.arabicName}
              </div>
            </div>

            {/* Render Page Image */}
            <img
              src={getPageImageUrl(currentPage)}
              alt={`Holy Quran Page ${currentPage} - Surah ${currentSurah.name}`}
              className={`w-[320px] sm:w-[480px] md:w-[560px] lg:w-[620px] h-auto object-contain transition-all ${
                readingTheme === 'dark' ? 'filter invert hue-rotate-180 brightness-90 contrast-125' : ''
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                if (!imageError) {
                  setImageError(true);
                } else {
                  setImageLoaded(true);
                }
              }}
              loading="eager"
            />

            {/* Page Bottom Footer with Page Number */}
            <div className={`px-4 py-1.5 text-center text-xs font-bold border-t ${
              readingTheme === 'dark' ? 'bg-emerald-950 text-gold-400 border-emerald-900' : 'bg-[#ede0c2]/90 text-emerald-900 border-[#d8c29d]'
            }`}>
              <span>— {currentPage} —</span>
            </div>
          </div>
        </div>

        {/* Navigation Arrow Right (Prev Page in RTL Mushaf) */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage <= 1}
          className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3.5 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900 text-gold-300 border border-gold-500/40 shadow-xl backdrop-blur-sm transition-all hover:scale-110 active:scale-95 disabled:opacity-30 disabled:pointer-events-none group"
          aria-label="Previous Page"
          title="Previous Page (Right Arrow Key)"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

      </div>

      {/* Bottom Status and Navigation Bar */}
      <div className={`p-3 sm:p-4 border-t transition-colors flex flex-col sm:flex-row items-center justify-between gap-3 ${currentThemeStyle.headerBg} ${currentThemeStyle.border}`}>
        
        {/* Left: Quick Bookmarks list */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 shrink-0 flex items-center gap-1">
            <Bookmark className="w-3 h-3 text-gold-600" />
            Bookmarks:
          </span>
          {bookmarkedPages.length === 0 ? (
            <span className="text-[11px] text-slate-500 italic">No bookmarks yet</span>
          ) : (
            bookmarkedPages.map(p => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`px-2 py-0.5 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                  p === currentPage
                    ? 'bg-gold-500 text-slate-950 font-bold shadow'
                    : 'bg-white/80 hover:bg-white text-slate-800 border border-slate-300'
                }`}
              >
                P. {p}
              </button>
            ))
          )}
        </div>

        {/* Center: Interactive Page Slider */}
        <div className="w-full sm:w-72 flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700">1</span>
          <input
            type="range"
            min="1"
            max="604"
            value={currentPage}
            onChange={(e) => setCurrentPage(parseInt(e.target.value, 10))}
            className="w-full accent-emerald-800 h-1.5 bg-slate-300 rounded-lg cursor-pointer"
            aria-label="Seek Page"
          />
          <span className="text-xs font-bold text-slate-700">604</span>
        </div>

        {/* Right: Quick Reciter Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium text-slate-600 hidden md:inline">Qari:</span>
          <select
            value={selectedQari.id}
            onChange={(e) => {
              const qari = qarisList.find(q => q.id === e.target.value);
              if (qari) {
                setSelectedQari(qari);
                if (isPlayingAudio) {
                  // Restart audio with new qari
                  setIsPlayingAudio(false);
                }
              }
            }}
            className="px-2.5 py-1 rounded-xl bg-white/90 text-slate-800 border border-slate-300 text-xs font-semibold focus:outline-none"
            aria-label="Select Reciter"
          >
            {qarisList.map(q => (
              <option key={q.id} value={q.id}>
                {q.name}
              </option>
            ))}
          </select>
        </div>

      </div>

    </div>
  );
}
