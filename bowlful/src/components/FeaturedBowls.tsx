import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import type { Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { Sparkles } from 'lucide-react';

interface FeaturedBowlsProps {
  onSelectProduct: (product: Product) => void;
}

export const FeaturedBowls: React.FC<FeaturedBowlsProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'CLASSIC', 'TROPICAL', 'PREMIUM', 'SIGNATURE', 'FAMILY'];

  const filteredProducts = activeCategory === 'ALL'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.badge === activeCategory);

  return (
    <section id="featured-bowls" className="py-24 px-6 md:px-12 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#EFEFE6]">
          <div className="max-w-2xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF5E36]">
              <Sparkles className="w-3.5 h-3.5" />
              CURATED FRESH SELECTION
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1917] tracking-tight leading-[1.1]">
              Meet your new favourite bowl.
            </h2>
            <p className="text-base sm:text-lg text-[#1C1917]/70 font-normal leading-relaxed">
              A colourful selection of fresh-cut fruits, prepared for moments when you want something simple, fresh and delicious.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#1C1917] text-white shadow-md'
                    : 'bg-white border border-[#EFEFE6] text-[#1C1917]/70 hover:bg-[#EFEFE6]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
