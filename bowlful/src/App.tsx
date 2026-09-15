import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import type { Product } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { FeaturedBowls } from './components/FeaturedBowls';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Philosophy } from './components/Philosophy';
import { HowItWorks } from './components/HowItWorks';
import { FreshnessProcess } from './components/FreshnessProcess';
import { AboutSection } from './components/AboutSection';
import { HygieneTrust } from './components/HygieneTrust';
import { OrderCTA } from './components/OrderCTA';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { StickyMobileBar } from './components/StickyMobileBar';

const MainAppContent: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF8F5] text-[#1C1917] selection:bg-[#FF5E36] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Marquee />
        <FeaturedBowls onSelectProduct={(product) => setSelectedProduct(product)} />
        <Philosophy />
        <HowItWorks />
        <FreshnessProcess />
        <AboutSection />
        <HygieneTrust />
        <OrderCTA />
      </main>

      <Footer />

      {/* Drawers & Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <CartDrawer />
      <CheckoutModal />
      <OrderTrackerModal />
      <StickyMobileBar />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <MainAppContent />
    </CartProvider>
  );
};

export default App;
