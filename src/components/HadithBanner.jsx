import React from 'react';
import { Mail, Sparkles, MessageCircle } from 'lucide-react';
import { foundationInfo } from '../data/foundationInfo';

export default function HadithBanner() {
  return (
    <div className="bg-emerald-950 text-emerald-100 text-xs border-b border-emerald-850/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
        
        {/* Spiritual Hadith Quote */}
        <div className="flex items-center gap-1.5 text-center sm:text-left truncate max-w-full">
          <Sparkles className="w-3 h-3 text-gold-400 animate-pulse shrink-0" />
          <p className="text-emerald-200/90 font-light truncate">
            &ldquo;Whoever seeks a path to knowledge, Allah eases for him the path to Paradise.&rdquo;
            <span className="text-gold-400/80 ml-1 text-[10px] hidden sm:inline">(Muslim)</span>
          </p>
        </div>

        {/* Quick Contact Header Links */}
        <div className="flex items-center gap-3 text-emerald-300 font-medium shrink-0">
          <a
            href={foundationInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gold-400 transition-colors py-0.5"
            title="Chat with Al Kahf Admissions on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-green-400" />
            <span className="text-[11px] font-semibold">{foundationInfo.whatsapp}</span>
          </a>
          <span className="text-emerald-700 hidden sm:inline">•</span>
          <a
            href={foundationInfo.emailUrl}
            className="hidden md:flex items-center gap-1 hover:text-gold-400 transition-colors py-0.5"
            title="Send Email to Al Kahf Foundation"
          >
            <Mail className="w-3.5 h-3.5 text-gold-400" />
            <span className="truncate max-w-[180px]">{foundationInfo.email}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
