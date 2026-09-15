import React from 'react';
import { MessageCircle, MapPin, Phone, ArrowUp } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-20 pb-24 md:pb-12 px-6 md:px-12 border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo.jpg"
                  alt="BOWLFUL Logo"
                  className="h-12 w-12 object-cover rounded-full border border-white/20 shadow-md"
                />
                <div>
                  <span className="font-serif text-3xl font-bold tracking-[0.2em] block text-white leading-none">BOWLFUL</span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#FF5E36] uppercase">Fresh Bowls • Happier Days</span>
                </div>
              </div>
              <p className="font-cormorant italic text-lg text-white/70 pt-1">
                “Freshness, beautifully packed.”
              </p>
            </div>

            <p className="text-xs text-white/60 max-w-sm leading-relaxed">
              Hyderabad's premier fresh-cut fruit kitchen. Prepared fresh to order and delivered in cold-sealed eco packaging.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF5E36] hover:border-[#FF5E36] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919347506301"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold tracking-widest uppercase text-[#FF5E36]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <button onClick={() => scrollToSection('featured-bowls')} className="hover:text-white transition-colors">
                  Shop Bowls
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('story')} className="hover:text-white transition-colors">
                  Our Story
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors">
                  Freshness Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('hygiene')} className="hover:text-white transition-colors">
                  Hygiene & Quality
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                  Journal / FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold tracking-widest uppercase text-[#FF5E36]">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Delivery Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund & Return Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Subscriptions</a></li>
            </ul>
          </div>

          {/* Contact Location */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold tracking-widest uppercase text-[#FF5E36]">
              Hyderabad Studio
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF5E36] shrink-0 mt-0.5" />
                <span>G4 YYN Apartment, Yamjal, Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href="https://wa.me/919347506301" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +91 9347506301 (WhatsApp Orders)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Bowlful. All rights reserved. Freshness, beautifully packed.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors text-[11px] font-semibold tracking-wider uppercase"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
