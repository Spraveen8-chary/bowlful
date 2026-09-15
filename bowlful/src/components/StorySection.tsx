import React from 'react';
import { ArrowRight } from 'lucide-react';

export const StorySection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="story" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#EFEFE6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Large Editorial Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-xl border border-white/60 group">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
              alt="Artisan hands carefully slicing fresh watermelon and tropical fruits on wooden board"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10" />

            {/* Subtle Overlay Label */}
            <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md max-w-xs text-left shadow-lg">
              <p className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">Kitchen Craft</p>
              <p className="text-[11px] text-[#1C1917]/70">Fresh preparation every morning in Hyderabad.</p>
            </div>
          </div>
        </div>

        {/* Right Editorial Copy */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#FF5E36]">
            OUR FOUNDING PURPOSE
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] tracking-tight leading-[1.1]">
            Nothing complicated.
            <br />
            <span className="font-cormorant italic font-normal text-[#1C1917]/80">
              Just good fruit.
            </span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#1C1917]/75 font-normal leading-relaxed">
            <p>
              At Bowlful, we believe enjoying fresh fruit should be simple.
            </p>
            <p>
              We prepare colourful fruit bowls designed to make fresh fruit convenient for everyday life. No artificial syrups, no unnecessary fluff — just prime, hand-sliced fruits packed clean and delivered cold when you need them.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1C1917] text-white rounded-full font-medium text-xs tracking-widest uppercase hover:bg-[#FF5E36] transition-all duration-300 shadow-md group"
            >
              <span>OUR STORY</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
