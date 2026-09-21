import React from 'react';
import { Phone, Mail, Sparkles, MessageCircle } from 'lucide-react';
import { foundationInfo } from '../data/foundationInfo';

export default function HadithBanner() {
  return (
    <div className="bg-emerald-950 text-emerald-100 text-xs border-b border-emerald-850/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Spiritual Hadith Quote */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 text-gold-400 font-medium shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
            <span className="hidden sm:inline">Prophetic Wisdom:</span>
          </span>
          <p className="text-emerald-200/90 font-light truncate max-w-xs sm:max-w-md lg:max-w-xl">
            &ldquo;Whoever takes a path upon which he seeks knowledge, Allah makes the path to Paradise easy for him.&rdquo;
            <span className="text-gold-400/80 ml-1.5 text-[11px]">(Sahih Muslim)</span>
          </p>
        </div>

        {/* Quick Contact Header Links */}
        <div className="flex items-center gap-4 text-emerald-300 font-medium shrink-0">
          <a
            href={foundationInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gold-400 transition-colors py-0.5"
            title="Chat with Al Kahf Admissions on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-green-400" />
            <span className="hidden md:inline text-[11px] text-emerald-200/80">WhatsApp:</span>
            <span>{foundationInfo.whatsapp}</span>
          </a>
          <span className="text-emerald-700 hidden sm:inline">•</span>
          <a
            href={foundationInfo.emailUrl}
            className="hidden sm:flex items-center gap-1.5 hover:text-gold-400 transition-colors py-0.5"
            title="Send Email to Al Kahf Foundation"
          >
            <Mail className="w-3.5 h-3.5 text-gold-400" />
            <span className="truncate max-w-[200px]">{foundationInfo.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
