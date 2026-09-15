import React from 'react';
import { HYGIENE_POINTS } from '../data/content';
import { ShieldCheck, Sparkles, Package, FileText } from 'lucide-react';

export const HygieneTrust: React.FC = () => {
  const icons = [Sparkles, ShieldCheck, Package, FileText];

  return (
    <section id="hygiene" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#EFEFE6]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#FF5E36]">
            HONEST QUALITY PROTOCOLS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1917] tracking-tight">
            Freshness you can see.
          </h2>
          <p className="text-base text-[#1C1917]/70 font-normal">
            No vague buzzwords. Just rigorous cleanliness, transparent ingredients, and pristine temperature handling.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {HYGIENE_POINTS.map((item, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#EFEFE6] shadow-sm hover:shadow-xl transition-all duration-300 text-left space-y-4 flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#EFEFE6] flex items-center justify-center text-[#FF5E36]">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#1C1917]/70 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
