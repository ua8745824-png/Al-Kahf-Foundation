import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Download,
  BookOpen,
  Eye,
  FileText,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Layers,
  Filter,
  Search,
  X,
  Maximize2,
  HelpCircle
} from 'lucide-react';
import { quranPdfEditions, paraPdfs } from '../data/quranData';

export default function QuranPdfLibrary({ onOpenEnrollment }) {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePdfModal, setActivePdfModal] = useState(null);
  const [showParasAccordion, setShowParasAccordion] = useState(false);

  const categories = [
    { id: 'all', label: 'All Editions' },
    { id: 'madani', label: 'Madinah 15-Line (Uthmani)' },
    { id: 'tajweed', label: 'Color-Coded Tajweed' },
    { id: 'indopak', label: 'Indo-Pak / South Asian' },
    { id: 'translation', label: 'With Translations' },
    { id: 'paras', label: '30 Individual Paras / Juz' }
  ];

  const filteredPdfs = quranPdfEditions.filter((pdf) => {
    const matchesCategory = selectedCategory === 'all' || pdf.category === selectedCategory;
    const matchesSearch =
      pdf.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pdf.arabicTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pdf.script.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pdf.publisher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      
      {/* Category Filter & Search Bar */}
      <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#032012] border border-emerald-900/10 dark:border-emerald-800/80 shadow-soft-card flex flex-col md:flex-row items-center justify-between gap-4 transition-colors">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 md:pb-0 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-950 dark:bg-emerald-900 text-gold-300 shadow-md scale-[1.02]'
                  : 'bg-emerald-50/70 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-950 dark:text-emerald-200 border border-emerald-900/10 dark:border-emerald-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-emerald-700/60 dark:text-emerald-400/60 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search PDF by script, publisher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-sand-50 dark:bg-emerald-950/80 border border-emerald-900/15 dark:border-emerald-800/80 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white dark:focus:bg-emerald-950"
          />
        </div>
      </div>

      {/* Special Category: 30 Individual Paras Accordion */}
      {(selectedCategory === 'paras' || selectedCategory === 'all') && (
        <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-980 text-white border border-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 relative z-10">
            <div>
              <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40 text-[11px] font-bold uppercase tracking-wider">
                Hifz & Daily Revision Pack
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
                30 Individual Para (Juz) HD PDFs
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/80 mt-1 max-w-xl">
                Download individual Juz PDFs for focused daily recitation, Taraweeh preparation, or Hifz memorization.
              </p>
            </div>

            <button
              onClick={() => setShowParasAccordion(!showParasAccordion)}
              className="px-4 py-2 rounded-xl bg-gold-500 text-slate-950 hover:bg-gold-400 text-xs font-bold transition-all shadow-md shrink-0"
            >
              {showParasAccordion ? 'Hide 30 Paras' : 'View All 30 Paras (1-30)'}
            </button>
          </div>

          {showParasAccordion && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2.5 pt-4 border-t border-emerald-800/80 animate-fade-in relative z-10">
              {paraPdfs.map((para) => (
                <a
                  key={para.juzNumber}
                  href={para.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-900/80 hover:bg-emerald-850 border border-emerald-700/60 hover:border-gold-400/50 flex flex-col items-center text-center group transition-all hover:scale-105"
                >
                  <span className="text-[10px] font-bold text-gold-400 uppercase">
                    Para {para.juzNumber}
                  </span>
                  <span className="font-arabic text-sm font-bold text-white mt-0.5 group-hover:text-gold-200">
                    {para.nameArabic}
                  </span>
                  <span className="text-[10px] text-emerald-300/80 mt-1 flex items-center gap-1">
                    <Download className="w-2.5 h-2.5 text-gold-400" />
                    Download PDF
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Main Grid: Curated World-Class Full Quran PDFs */}
      {selectedCategory !== 'paras' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPdfs.map((pdf) => (
            <div
              key={pdf.id}
              className="rounded-3xl bg-white dark:bg-[#032012] border border-emerald-900/10 dark:border-emerald-850 shadow-soft-card hover:shadow-card-hover hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              
              {/* Card Header & Badge */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/80 text-emerald-950 dark:text-emerald-200 text-[10px] font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-700/60">
                    {pdf.script}
                  </span>
                  {pdf.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-gold-500/15 text-amber-900 dark:text-gold-300 text-[10px] font-bold border border-gold-500/30">
                      ★ {pdf.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-serif leading-snug group-hover:text-emerald-900 dark:group-hover:text-gold-300 transition-colors">
                  {pdf.title}
                </h3>
                <p className="font-arabic text-base font-bold text-emerald-900 dark:text-gold-300 mt-1">
                  {pdf.arabicTitle}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                  {pdf.description}
                </p>

                {/* Key Features Pill List */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-emerald-900/60 space-y-1.5">
                  {pdf.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer & Actions */}
              <div className="p-5 bg-sand-50/80 dark:bg-emerald-950/70 border-t border-slate-100 dark:border-emerald-900/60 mt-auto">
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium mb-3">
                  <span>📄 {pdf.pages}</span>
                  <span>📦 {pdf.size}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActivePdfModal(pdf)}
                    className="w-full py-2 px-3 rounded-xl bg-white dark:bg-emerald-900/60 hover:bg-emerald-50 dark:hover:bg-emerald-850 text-emerald-950 dark:text-emerald-200 border border-emerald-900/20 dark:border-emerald-700/60 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                    <span>Read Online</span>
                  </button>

                  <a
                    href={pdf.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-emerald-900 hover:bg-emerald-850 dark:bg-emerald-800 dark:hover:bg-emerald-750 text-gold-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5 text-gold-400" />
                    <span>Free Download</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Informational Guidance Box: How to choose the best Quran PDF */}
      <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50 dark:bg-[#032012] border border-emerald-900/10 dark:border-emerald-800/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-colors">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-emerald-900 dark:text-gold-300">
            <HelpCircle className="w-5 h-5 text-gold-600 dark:text-gold-400" />
            <h4 className="text-base font-bold font-serif">
              Which Quran PDF format should you choose?
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
            • <strong>Madani 15-Line Mushaf:</strong> Recommended worldwide for memorization (Hifz) and standard daily Tilawat.<br />
            • <strong>Color-Coded Tajweed Mushaf:</strong> Best for students wanting to master proper pronunciation and stopping rules.<br />
            • <strong>Indo-Pak 16-Line & 15-Line:</strong> Ideal for learners accustomed to South Asian Nastaliq script.
          </p>
        </div>

        <button
          onClick={onOpenEnrollment}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 font-bold text-xs shadow-md hover:scale-105 transition-transform whitespace-nowrap shrink-0"
        >
          Learn with Live Tajweed Teacher
        </button>
      </div>

      {/* Interactive PDF Reader Modal */}
      {activePdfModal && (
        <div className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex flex-col justify-between p-2 sm:p-6 animate-fade-in">
          
          {/* Modal Header */}
          <div className="bg-emerald-950 border border-gold-500/30 rounded-2xl p-3.5 px-5 text-white flex items-center justify-between shadow-2xl shrink-0 mb-2">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white font-serif">
                {activePdfModal.title}
              </h4>
              <p className="text-[11px] text-emerald-300/80">
                {activePdfModal.publisher} • {activePdfModal.pages}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={activePdfModal.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gold-500 text-slate-950 hover:bg-gold-400 text-xs font-bold flex items-center gap-1 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download File</span>
              </a>

              <button
                onClick={() => setActivePdfModal(null)}
                className="p-2 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-gold-300 border border-gold-500/30 transition-colors"
                aria-label="Close PDF Viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Embedded Viewer Canvas */}
          <div className="flex-1 bg-slate-900 rounded-2xl overflow-hidden border border-emerald-800/40 relative shadow-2xl">
            <iframe
              src={`https://archive.org/stream/${activePdfModal.id.replace(/-/g, '_')}?ui=embed`}
              title={activePdfModal.title}
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>

          {/* Modal Footer Tip */}
          <div className="text-center text-[11px] text-slate-400 pt-2 shrink-0">
            Use the embedded controls above to zoom, rotate, switch page modes, or download the full PDF document.
          </div>
        </div>
      )}

    </div>
  );
}
