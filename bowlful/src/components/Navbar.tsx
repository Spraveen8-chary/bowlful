import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getWhatsAppGeneralUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItemCount, setIsCartOpen, activeOrder, setIsTrackerOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav shadow-sm py-4 border-b border-[#EFEFE6]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/logo.jpg"
              alt="BOWLFUL Logo"
              className="h-10 md:h-12 w-10 md:w-12 object-cover rounded-full shadow-md border-2 border-white/80 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl md:text-2xl tracking-[0.16em] font-bold text-[#1C1917] leading-none">
                BOWLFUL
              </span>
              <span className="text-[9px] font-extrabold tracking-[0.22em] text-[#FF5E36] uppercase mt-1">
                Fresh Bowls
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('featured-bowls')}
              className="text-sm font-medium tracking-wide text-[#1C1917]/80 hover:text-[#FF5E36] transition-colors"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium tracking-wide text-[#1C1917]/80 hover:text-[#FF5E36] transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-sm font-medium tracking-wide text-[#1C1917]/80 hover:text-[#FF5E36] transition-colors"
            >
              Freshness
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className="text-sm font-medium tracking-wide text-[#1C1917]/80 hover:text-[#FF5E36] transition-colors"
            >
              Journal
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {activeOrder && (
              <button
                onClick={() => setIsTrackerOpen(true)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#2E4A3B]/10 text-[#2E4A3B] border border-[#2E4A3B]/20 hover:bg-[#2E4A3B]/20 transition-all flex items-center gap-1.5 animate-pulse"
              >
                <span className="w-2 h-2 rounded-full bg-[#2E4A3B]"></span>
                Track Order ({activeOrder.id})
              </button>
            )}

            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-[#1C1917]/80 hover:text-[#1C1917] transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="p-2 text-[#1C1917]/80 hover:text-[#1C1917] transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5 stroke-[1.5]" />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#1C1917]/80 hover:text-[#1C1917] transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {totalItemCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#FF5E36] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItemCount}
                </span>
              )}
            </button>

            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest font-bold uppercase px-6 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#20bd5a] transition-all duration-300 shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>ORDER ON WHATSAPP</span>
            </a>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex md:hidden items-center space-x-3">
            {activeOrder && (
              <button
                onClick={() => setIsTrackerOpen(true)}
                className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#2E4A3B] text-white"
              >
                Track
              </button>
            )}

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#1C1917]"
              aria-label="Cart"
            >
              <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
              {totalItemCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#FF5E36] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#1C1917]"
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col justify-between p-8 animate-in fade-in duration-300">
          <div>
            <div className="flex items-center justify-between pb-8 border-b border-[#EFEFE6]">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo.jpg"
                  alt="BOWLFUL Logo"
                  className="h-10 w-10 object-cover rounded-full shadow-sm border border-[#EFEFE6]"
                />
                <span className="font-serif text-2xl tracking-widest font-bold">BOWLFUL</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#1C1917]"
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 mt-10">
              <button
                onClick={() => scrollToSection('featured-bowls')}
                className="text-left font-serif text-3xl hover:text-[#FF5E36] transition-colors"
              >
                Shop Bowls
              </button>
              <button
                onClick={() => scrollToSection('story')}
                className="text-left font-serif text-3xl hover:text-[#FF5E36] transition-colors"
              >
                Our Story
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-left font-serif text-3xl hover:text-[#FF5E36] transition-colors"
              >
                Freshness Process
              </button>
              <button
                onClick={() => scrollToSection('hygiene')}
                className="text-left font-serif text-3xl hover:text-[#FF5E36] transition-colors"
              >
                Hygiene & Quality
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left font-serif text-3xl hover:text-[#FF5E36] transition-colors"
              >
                About Founder
              </button>
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#EFEFE6]">
            <p className="text-xs text-[#1C1917]/60 tracking-wider uppercase">Hyderabad, Telangana</p>
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#25D366] text-white rounded-full font-bold flex items-center justify-center gap-2 tracking-wider uppercase text-xs shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>ORDER ON WHATSAPP</span>
            </a>
          </div>
        </div>
      )}

      {/* Quick Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-[#1C1917]/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-[#FAF8F5] w-full max-w-xl rounded-2xl p-6 shadow-2xl space-y-4 border border-[#EFEFE6]">
            <div className="flex items-center justify-between pb-3 border-b border-[#EFEFE6]">
              <span className="font-serif text-lg font-semibold">Search Fresh Fruits</span>
              <button onClick={() => setSearchOpen(false)} className="p-1 hover:text-[#FF5E36]">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-3.5 text-[#1C1917]/40" />
              <input
                type="text"
                placeholder="Search watermelon, mango, berries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#EFEFE6] rounded-xl text-sm focus:outline-none focus:border-[#FF5E36]"
                autoFocus
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-[#1C1917]/60">
              <span>Popular:</span>
              <button onClick={() => scrollToSection('featured-bowls')} className="underline hover:text-[#FF5E36]">Tropical Bowl</button>
              <button onClick={() => scrollToSection('featured-bowls')} className="underline hover:text-[#FF5E36]">Signature Berry</button>
              <button onClick={() => scrollToSection('featured-bowls')} className="underline hover:text-[#FF5E36]">Family Size</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
