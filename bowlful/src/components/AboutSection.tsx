import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#EFEFE6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column Copy */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E36]/10 text-[#FF5E36] text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Hyderabad, Telangana
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] tracking-tight leading-[1.1]">
            Bowlful started with
            <br />
            <span className="font-cormorant italic font-normal text-[#1C1917]/80">
              a simple idea.
            </span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#1C1917]/75 font-normal leading-relaxed">
            <p className="font-semibold text-[#1C1917]">
              Make fresh fruit easier to enjoy.
            </p>
            <p>
              Bowlful is a new fresh-food brand created around the simple pleasure of colourful, fresh-cut fruit prepared and packed with care.
            </p>
            <p>
              Founded in Hyderabad, we recognized how hard it is to get fresh, hygienic, un-messy fruit while working or studying. We set out to change that by combining artisanal culinary prep with sleek, eco-safe packaging.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => scrollToSection('featured-bowls')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1C1917] text-white rounded-full font-medium text-xs tracking-widest uppercase hover:bg-[#FF5E36] transition-all duration-300 shadow-md group"
            >
              <span>MEET BOWLFUL</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Column Founder Image Placeholder Card */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/60 group bg-[#F5F2EC]">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80"
              alt="Bowlful founder preparing fresh fruit bowls in kitchen"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl text-left border border-white/80">
              <p className="font-serif text-lg font-bold text-[#1C1917]">Founder's Note</p>
              <p className="text-xs text-[#1C1917]/70 italic mt-1">
                "We take fruit seriously — so you can enjoy every single bite effortlessly."
              </p>
              <div className="mt-3 pt-3 border-t border-[#EFEFE6] flex items-center justify-between text-[11px] text-[#1C1917]/50 font-semibold uppercase tracking-wider">
                <span>Bowlful Founder Team</span>
                <span>Hyderabad • 2026</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
