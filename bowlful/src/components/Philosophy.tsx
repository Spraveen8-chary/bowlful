import React from 'react';
import { Sparkles, Shield, Compass } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-28 px-6 md:px-12 bg-[#1C1917] text-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF5E36]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Huge Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#FF5E36]">
            THE BOWLFUL CREED
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]">
            Cut fresh.
            <br />
            <span className="font-cormorant italic font-normal text-white/80">
              Pack beautifully.
            </span>
            <br />
            Enjoy simply.
          </h2>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8 border-t border-white/10">
          
          {/* Column 01 */}
          <div className="space-y-6 text-left p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF5E36]/40 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="font-serif text-3xl font-bold text-[#FF5E36]">01</span>
              <Sparkles className="w-5 h-5 text-white/40 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold tracking-wide">
              FRESH
            </h3>
            <p className="text-sm text-white/70 leading-relaxed font-normal">
              Prepared with fresh fruits sourced daily at dawn. Sliced to order to retain natural crispness and vibrant moisture.
            </p>
          </div>

          {/* Column 02 */}
          <div className="space-y-6 text-left p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF5E36]/40 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="font-serif text-3xl font-bold text-[#FF5E36]">02</span>
              <Shield className="w-5 h-5 text-white/40 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold tracking-wide">
              CAREFUL
            </h3>
            <p className="text-sm text-white/70 leading-relaxed font-normal">
              Thoughtfully prepared and packed in food-grade eco containers. Handled under stringent hygienic protocols.
            </p>
          </div>

          {/* Column 03 */}
          <div className="space-y-6 text-left p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF5E36]/40 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="font-serif text-3xl font-bold text-[#FF5E36]">03</span>
              <Compass className="w-5 h-5 text-white/40 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold tracking-wide">
              CONVENIENT
            </h3>
            <p className="text-sm text-white/70 leading-relaxed font-normal">
              Ready to enjoy wherever your day takes you — at home, office desk, gym, or on the move across Hyderabad.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
