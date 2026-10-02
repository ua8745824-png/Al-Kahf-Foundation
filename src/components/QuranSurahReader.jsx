import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Play,
  Pause,
  Volume2,
  Bookmark,
  BookmarkCheck,
  Copy,
  Check,
  Share2,
  ZoomIn,
  ZoomOut,
  Sparkles,
  BookOpen,
  Search,
  RotateCcw,
  Languages,
  ChevronLeft,
  ChevronRight,
  Info
} from 'lucide-react';
import { surahsData, qarisList } from '../data/quranData';

export default function QuranSurahReader({ initialSurah = 18, onOpenEnrollment }) {
  const { t, i18n } = useTranslation();
  const [selectedSurahNumber, setSelectedSurahNumber] = useState(initialSurah); // Default to Surah Al-Kahf
  const [surahData, setSurahData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Reading options
  const [showEnglish, setShowEnglish] = useState(true);
  const [showUrdu, setShowUrdu] = useState(true);
  const [fontSize, setFontSize] = useState(28); // Arabic text px size
  const [selectedQari, setSelectedQari] = useState(qarisList[0]);
  
  // Audio playback state
  const [playingAyahIndex, setPlayingAyahIndex] = useState(null);
  const [isPlayingFullSurah, setIsPlayingFullSurah] = useState(false);
  const [copiedAyah, setCopiedAyah] = useState(null);
  const [bookmarkedAyahs, setBookmarkedAyahs] = useState(() => {
    try {
      const saved = localStorage.getItem('alkahf_quran_bookmarked_ayahs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [searchFilter, setSearchFilter] = useState('');

  const audioRef = useRef(null);
  const currentSurahMeta = surahsData.find(s => s.number === selectedSurahNumber) || surahsData[17];

  // Fetch Surah Arabic, English & Urdu translations
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError(null);
    setPlayingAyahIndex(null);
    setIsPlayingFullSurah(false);

    const fetchSurah = async () => {
      try {
        // Fetch Arabic (Uthmani), English (Saheeh Intl), and Urdu (Jalandhari) from AlQuran Cloud
        const [arabicRes, englishRes, urduRes] = await Promise.all([
          fetch(`https://api.alquran.cloud/v1/surah/${selectedSurahNumber}/quran-uthmani`),
          fetch(`https://api.alquran.cloud/v1/surah/${selectedSurahNumber}/en.sahih`),
          fetch(`https://api.alquran.cloud/v1/surah/${selectedSurahNumber}/ur.jalandhry`)
        ]);

        if (!arabicRes.ok) throw new Error("Failed to load Arabic text");

        const [arabicJson, englishJson, urduJson] = await Promise.all([
          arabicRes.json(),
          englishRes.json(),
          urduRes.json()
        ]);

        if (isMounted) {
          const combinedAyahs = arabicJson.data.ayahs.map((ayah, idx) => ({
            number: ayah.number,
            numberInSurah: ayah.numberInSurah,
            juz: ayah.juz,
            manzil: ayah.manzil,
            page: ayah.page,
            arabic: ayah.text,
            english: englishJson?.data?.ayahs?.[idx]?.text || '',
            urdu: urduJson?.data?.ayahs?.[idx]?.text || '',
            audio: `https://cdn.islamic.network/quran/audio/128/${selectedQari.apiIdentifier}/${ayah.number}.mp3`
          }));

          setSurahData({
            ...arabicJson.data,
            ayahs: combinedAyahs
          });
          setIsLoading(false);
        }
      } catch (err) {
        console.warn("Error fetching Quran API, using fallback:", err);
        if (isMounted) {
          // Fallback static data if API is blocked or offline
          setSurahData({
            number: currentSurahMeta.number,
            name: currentSurahMeta.arabicName,
            englishName: currentSurahMeta.name,
            englishNameTranslation: currentSurahMeta.englishName,
            revelationType: currentSurahMeta.revelationPlace,
            numberOfAyahs: currentSurahMeta.versesCount,
            ayahs: [
              {
                number: 1,
                numberInSurah: 1,
                juz: currentSurahMeta.juz,
                arabic: selectedSurahNumber === 1 ? "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" : "الْحَمْدُ لِلَّهِ الَّذِي أَنْزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَلْ لَهُ عِوَجًا",
                english: selectedSurahNumber === 1 ? "In the name of Allah, the Entirely Merciful, the Especially Merciful." : "[All] praise is due to Allah, who has sent down upon His Servant the Book and has not made therein any deviance.",
                urdu: selectedSurahNumber === 1 ? "اللہ کے نام سے جو رحمان و رحیم ہے۔" : "تمام تعریفیں اللہ ہی کے لیے ہیں جس نے اپنے بندے پر یہ کتاب نازل فرمائی اور اس میں کوئی کجی نہ رکھی۔",
                audio: `https://cdn.islamic.network/quran/audio/128/${selectedQari.apiIdentifier}/1.mp3`
              }
            ]
          });
          setIsLoading(false);
        }
      }
    };

    fetchSurah();

    return () => {
      isMounted = false;
    };
  }, [selectedSurahNumber, selectedQari]);

  // Handle Ayah Audio Playback
  const handlePlayAyah = (index) => {
    if (!audioRef.current || !surahData) return;

    if (playingAyahIndex === index) {
      audioRef.current.pause();
      setPlayingAyahIndex(null);
    } else {
      const ayah = surahData.ayahs[index];
      const audioUrl = `https://cdn.islamic.network/quran/audio/128/${selectedQari.apiIdentifier}/${ayah.number}.mp3`;
      audioRef.current.src = audioUrl;
      audioRef.current.play()
        .then(() => {
          setPlayingAyahIndex(index);
        })
        .catch(e => console.warn(e));
    }
  };

  const handleAudioEnded = () => {
    if (isPlayingFullSurah && surahData && playingAyahIndex !== null && playingAyahIndex < surahData.ayahs.length - 1) {
      // Play next ayah automatically
      handlePlayAyah(playingAyahIndex + 1);
    } else {
      setPlayingAyahIndex(null);
      setIsPlayingFullSurah(false);
    }
  };

  const handleToggleFullSurahAudio = () => {
    if (isPlayingFullSurah) {
      if (audioRef.current) audioRef.current.pause();
      setIsPlayingFullSurah(false);
      setPlayingAyahIndex(null);
    } else {
      setIsPlayingFullSurah(true);
      handlePlayAyah(0);
    }
  };

  const copyAyahToClipboard = (ayah) => {
    const textToCopy = `${ayah.arabic}\n\nEnglish: ${ayah.english}\nUrdu: ${ayah.urdu}\n— [Surah ${currentSurahMeta.name} (${currentSurahMeta.number}:${ayah.numberInSurah})]`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedAyah(ayah.numberInSurah);
    setTimeout(() => setCopiedAyah(null), 2500);
  };

  const toggleAyahBookmark = (surahNum, ayahNum) => {
    const key = `${surahNum}:${ayahNum}`;
    setBookmarkedAyahs(prev => {
      const updated = prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key];
      localStorage.setItem('alkahf_quran_bookmarked_ayahs', JSON.stringify(updated));
      return updated;
    });
  };

  const filteredAyahs = surahData?.ayahs.filter(ayah => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      ayah.arabic.includes(q) ||
      ayah.english.toLowerCase().includes(q) ||
      ayah.urdu.includes(q) ||
      String(ayah.numberInSurah) === q
    );
  }) || [];

  return (
    <div className="space-y-6">
      <audio ref={audioRef} onEnded={handleAudioEnded} />

      {/* Control Ribbon Header */}
      <div className="p-4 sm:p-6 rounded-3xl bg-white border border-emerald-900/10 shadow-soft-card flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Left: Surah Navigator */}
        <div className="flex items-center gap-2 flex-wrap w-full lg:w-auto">
          
          <button
            onClick={() => setSelectedSurahNumber(prev => Math.max(1, prev - 1))}
            disabled={selectedSurahNumber <= 1}
            className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 disabled:opacity-30 transition-colors"
            title="Previous Surah"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <select
            value={selectedSurahNumber}
            onChange={(e) => setSelectedSurahNumber(parseInt(e.target.value, 10))}
            className="px-3.5 py-2 rounded-xl bg-emerald-950 text-gold-300 font-bold text-xs shadow-md focus:outline-none focus:ring-2 focus:ring-gold-400 cursor-pointer flex-1 sm:flex-initial"
            aria-label="Select Surah"
          >
            {surahsData.map((s) => (
              <option key={s.number} value={s.number} className="bg-emerald-950 text-white">
                {s.number}. {s.name} - {s.arabicName} ({s.versesCount} ayahs)
              </option>
            ))}
          </select>

          <button
            onClick={() => setSelectedSurahNumber(prev => Math.min(114, prev + 1))}
            disabled={selectedSurahNumber >= 114}
            className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 disabled:opacity-30 transition-colors"
            title="Next Surah"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Reciter Selector */}
          <div className="relative">
            <select
              value={selectedQari.id}
              onChange={(e) => {
                const q = qarisList.find(item => item.id === e.target.value);
                if (q) setSelectedQari(q);
              }}
              className="px-3 py-2 rounded-xl bg-sand-50 border border-emerald-900/20 text-slate-800 text-xs font-semibold focus:outline-none"
              aria-label="Select Qari"
            >
              {qarisList.map(q => (
                <option key={q.id} value={q.id}>
                  🎙️ {q.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Center: Search Field */}
        <div className="relative w-full lg:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search within Surah..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-sand-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-400"
          />
        </div>

        {/* Right: Display Toggles & Font Size Controls */}
        <div className="flex items-center gap-2 flex-wrap ms-auto">
          
          {/* Continuous Audio Play Button */}
          <button
            onClick={handleToggleFullSurahAudio}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold shadow-md transition-all ${
              isPlayingFullSurah
                ? 'bg-amber-600 text-white animate-pulse'
                : 'bg-emerald-900 hover:bg-emerald-850 text-gold-300'
            }`}
          >
            {isPlayingFullSurah ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isPlayingFullSurah ? 'Playing Surah...' : 'Play Continuous'}</span>
          </button>

          {/* Translation Checkbox Toggles */}
          <div className="flex items-center p-1 rounded-xl bg-sand-50 border border-slate-200 text-xs font-semibold text-slate-700">
            <button
              onClick={() => setShowEnglish(!showEnglish)}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                showEnglish ? 'bg-emerald-900 text-gold-300 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setShowUrdu(!showUrdu)}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                showUrdu ? 'bg-emerald-900 text-gold-300 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              اردو
            </button>
          </div>

          {/* Arabic Font Size */}
          <div className="flex items-center gap-1 bg-sand-50 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setFontSize(prev => Math.max(20, prev - 2))}
              className="p-1 rounded-lg hover:bg-white text-slate-700 text-xs font-bold"
              title="Decrease Font Size"
            >
              A-
            </button>
            <span className="text-[11px] font-bold text-slate-600 px-1">{fontSize}px</span>
            <button
              onClick={() => setFontSize(prev => Math.min(46, prev + 2))}
              className="p-1 rounded-lg hover:bg-white text-slate-700 text-xs font-bold"
              title="Increase Font Size"
            >
              A+
            </button>
          </div>

        </div>

      </div>

      {/* Surah Header Card with Bismillah */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-980 text-white border border-gold-500/30 shadow-2xl relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40 text-xs font-bold">
            <span>Surah #{currentSurahMeta.number}</span>
            <span>•</span>
            <span>{currentSurahMeta.revelationPlace}</span>
            <span>•</span>
            <span>{currentSurahMeta.versesCount} Ayahs</span>
          </div>

          <h2 className="font-arabic text-4xl sm:text-5xl font-bold text-gold-300 tracking-wide drop-shadow">
            سُورَةُ {currentSurahMeta.arabicName}
          </h2>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            {currentSurahMeta.name} — <span className="text-gold-200">{currentSurahMeta.englishName}</span>
          </h3>

          {/* Bismillah Header (Except Surah At-Tawbah #9) */}
          {selectedSurahNumber !== 9 && (
            <div className="pt-4 border-t border-emerald-800/60 max-w-md mx-auto">
              <p className="font-arabic text-2xl sm:text-3xl font-bold text-gold-300/90 leading-relaxed">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <p className="text-xs text-emerald-200/80 italic mt-1">
                In the name of Allah, the Entirely Merciful, the Especially Merciful.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Ayahs Stream */}
      {isLoading ? (
        <div className="p-16 text-center rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full border-4 border-gold-500/30 border-t-gold-500 animate-spin" />
          <p className="text-sm font-semibold text-emerald-950 font-serif">
            Loading Surah {currentSurahMeta.name} with Translations...
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAyahs.map((ayah, index) => {
            const isPlayingThis = playingAyahIndex === index;
            const isBookmarked = bookmarkedAyahs.includes(`${selectedSurahNumber}:${ayah.numberInSurah}`);

            return (
              <div
                key={ayah.numberInSurah}
                id={`ayah-${ayah.numberInSurah}`}
                className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 border ${
                  isPlayingThis
                    ? 'bg-emerald-50/90 border-gold-500 shadow-lg ring-2 ring-gold-400/40'
                    : 'bg-white hover:bg-sand-50/70 border-emerald-900/10 shadow-soft-card'
                }`}
              >
                
                {/* Ayah Top Meta & Action Ribbon */}
                <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                  
                  {/* Ayah Number Badge */}
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-emerald-950 text-gold-300 font-bold text-xs flex items-center justify-center shadow">
                      {ayah.numberInSurah}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Surah {selectedSurahNumber}:{ayah.numberInSurah} • Page {ayah.page}
                    </span>
                  </div>

                  {/* Actions: Audio, Bookmark, Copy */}
                  <div className="flex items-center gap-1.5">
                    
                    {/* Play Ayah Audio */}
                    <button
                      onClick={() => handlePlayAyah(index)}
                      className={`p-2 rounded-xl text-xs font-bold transition-all ${
                        isPlayingThis
                          ? 'bg-amber-600 text-white shadow-md'
                          : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-950'
                      }`}
                      title={isPlayingThis ? "Pause Recitation" : "Listen to this Ayah"}
                    >
                      {isPlayingThis ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    </button>

                    {/* Bookmark Ayah */}
                    <button
                      onClick={() => toggleAyahBookmark(selectedSurahNumber, ayah.numberInSurah)}
                      className={`p-2 rounded-xl transition-all ${
                        isBookmarked
                          ? 'bg-gold-500 text-slate-950 shadow-sm'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                      }`}
                      title={isBookmarked ? "Ayah Bookmarked" : "Bookmark this Ayah"}
                    >
                      {isBookmarked ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                    </button>

                    {/* Copy Ayah */}
                    <button
                      onClick={() => copyAyahToClipboard(ayah)}
                      className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
                      title="Copy Ayah with Translations"
                    >
                      {copiedAyah === ayah.numberInSurah ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                  </div>
                </div>

                {/* Arabic Text */}
                <div
                  className="font-arabic font-bold text-slate-900 text-end leading-[2.2] tracking-wide my-4 select-text"
                  style={{ fontSize: `${fontSize}px` }}
                  dir="rtl"
                >
                  {ayah.arabic}
                </div>

                {/* English Translation */}
                {showEnglish && ayah.english && (
                  <div className="pt-3 border-t border-slate-100 text-start text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    <span className="font-bold text-emerald-900 text-[11px] uppercase tracking-wider block mb-0.5">
                      Saheeh International:
                    </span>
                    {ayah.english}
                  </div>
                )}

                {/* Urdu Translation */}
                {showUrdu && ayah.urdu && (
                  <div
                    className="pt-3 mt-2 border-t border-slate-100 text-end text-sm sm:text-base text-slate-800 leading-loose font-urdu select-text"
                    dir="rtl"
                  >
                    <span className="font-bold text-emerald-900 text-[11px] block mb-0.5 font-sans">
                      ترجمہ (فتح محمد جالندھری):
                    </span>
                    {ayah.urdu}
                  </div>
                )}

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
