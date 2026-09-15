import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppGeneralUrl } from '../utils/whatsapp';

export const StickyMobileBar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-[#FAF8F5]/90 backdrop-blur-md border-t border-[#EFEFE6] shadow-lg flex items-center justify-between gap-3">
      <button
        onClick={() => scrollToSection('featured-bowls')}
        className="flex-1 py-3 px-4 bg-[#1C1917] text-white rounded-full font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-sm"
      >
        <span>MENU</span>
        <ArrowRight className="w-3.5 h-3.5 text-[#FF5E36]" />
      </button>

      <a
        href={getWhatsAppGeneralUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-4 bg-[#25D366] text-white rounded-full font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-sm relative text-center"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>WHATSAPP</span>
      </a>
    </div>
  );
};
