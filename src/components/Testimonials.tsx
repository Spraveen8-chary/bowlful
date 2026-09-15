import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#EFEFE6]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#FF5E36]">
            EARLY FEEDBACK
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1917] tracking-tight">
            Loved by bowl people.
          </h2>
          <p className="text-base text-[#1C1917]/70 font-normal">
            Real reactions from our initial tasting focus groups in Hyderabad.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-white border border-[#EFEFE6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left space-y-6 relative"
            >
              <Quote className="w-8 h-8 text-[#FF5E36]/30 stroke-[1.5]" />
              
              <p className="font-serif text-lg text-[#1C1917] leading-relaxed italic">
                "{t.quote}"
              </p>

              <div className="pt-4 border-t border-[#EFEFE6] flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm text-[#1C1917]">{t.author}</p>
                  <p className="text-xs text-[#1C1917]/50">{t.location}</p>
                </div>

                {/* Explicit Placeholder Badge */}
                <span className="text-[9px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#EFEFE6] text-[#1C1917]/60">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
