import React from 'react';
import { ArrowRight } from 'lucide-react';

export const OrderCTA: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-28 px-6 md:px-12 bg-[#1C1917] text-white relative overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF5E36]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#FF5E36]">
          HYDERABAD EXPRESS DISPATCH
        </span>

        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[1.05]">
          Your next
          <br />
          <span className="font-cormorant italic font-normal text-white/80">
            fresh moment
          </span>
          <br />
          starts here.
        </h2>

        <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto font-normal leading-relaxed">
          Order your fresh-cut fruit bowl today. Prepared to order, packed cold, and delivered directly to your doorstep in Hyderabad.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => scrollToSection('featured-bowls')}
            className="w-full sm:w-auto px-10 py-5 bg-[#FF5E36] text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#E84D25] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group"
          >
            <span>ORDER YOUR BOWL</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollToSection('featured-bowls')}
            className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
          >
            EXPLORE MENU
          </button>
        </div>

      </div>
    </section>
  );
};
