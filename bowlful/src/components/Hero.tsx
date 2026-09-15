import React from 'react';
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';
import { getWhatsAppGeneralUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 px-6 md:px-12 overflow-hidden bg-[#FAF8F5]">
      {/* Background Decorative Blur & Daylight Accent */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF5E36]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#2E4A3B]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto z-10">
        
        {/* Left Column Text Content */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#1C1917]/10 text-xs font-semibold tracking-wider text-[#1C1917] shadow-sm uppercase">
            <img src="/assets/logo.jpg" alt="BOWLFUL Logo" className="w-6 h-6 rounded-full object-cover border border-[#1C1917]/10" />
            <span>Hyderabad's Premier Fresh-Cut Fruit Craft</span>
          </div>

          {/* Editorial Headline */}
          <div className="space-y-2">
            <span className="block text-xs font-semibold tracking-[0.3em] uppercase text-[#1C1917]/40">
              BOWLFUL
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-[#1C1917]">
              Freshness,
              <br />
              <span className="font-cormorant italic font-normal text-[#1C1917]/80">
                beautifully packed.
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#1C1917]/70 max-w-md leading-relaxed font-normal">
            Fresh-cut fruit bowls prepared with care and packed fresh for your day. Delivered cold across Hyderabad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white font-bold text-sm tracking-wider uppercase rounded-full hover:bg-[#20bd5a] transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>ORDER ON WHATSAPP</span>
            </a>

            <button
              onClick={() => scrollToSection('featured-bowls')}
              className="px-8 py-4 bg-transparent border border-[#1C1917]/20 text-[#1C1917] font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-[#1C1917]/5 hover:border-[#1C1917]/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>EXPLORE MENU</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Micro trust indicators */}
          <div className="pt-6 border-t border-[#1C1917]/10 grid grid-cols-3 gap-4 text-xs text-[#1C1917]/60">
            <div>
              <span className="font-bold text-[#1C1917] block">100% Fresh</span>
              Cut morning daily
            </div>
            <div>
              <span className="font-bold text-[#1C1917] block">Eco Sealed</span>
              Clean food-safe packaging
            </div>
            <div>
              <span className="font-bold text-[#1C1917] block">30 Min Delivery</span>
              Express Hyderabad dispatch
            </div>
          </div>
        </div>

        {/* Right Column Editorial Image Container */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-white/60 group">
            <img
              src="/assets/hero.jpg"
              alt="Bowlful Premium Fresh Cut Fruit Bowl with Watermelon, Pineapple, Papaya, Grapes, and Pomegranate"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            
            {/* Floating Luxury Tag */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 flex items-center justify-between shadow-lg">
              <div>
                <p className="text-xs font-semibold text-[#1C1917] tracking-wide">Signature Fruit Composition</p>
                <p className="text-[11px] text-[#1C1917]/60">Watermelon • Pineapple • Papaya • Grapes • Pomegranate</p>
              </div>
              <span className="text-xs font-bold text-[#FF5E36] bg-[#FF5E36]/10 px-3 py-1 rounded-full">
                ₹200 onwards
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="w-full flex justify-center items-center pt-8 z-10">
        <button
          onClick={() => scrollToSection('marquee')}
          className="flex flex-col items-center text-[11px] tracking-widest font-semibold uppercase text-[#1C1917]/50 hover:text-[#FF5E36] transition-colors group"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 mt-1 animate-bounce text-[#FF5E36]" />
        </button>
      </div>
    </section>
  );
};
