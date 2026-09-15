import React from 'react';
import { MessageCircle, Eye } from 'lucide-react';
import type { Product } from '../data/products';
import { getWhatsAppProductUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(getWhatsAppProductUrl(product, 1), '_blank');
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-[#EFEFE6] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      {/* Image Container */}
      <div 
        onClick={() => onSelect(product)}
        className="relative w-full aspect-[4/3] overflow-hidden bg-[#F5F2EC] cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#1C1917]/80 backdrop-blur-md text-white">
            {product.badge}
          </span>
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-[#1C1917] shadow-sm">
            {product.size}
          </span>
        </div>

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="p-3 bg-white text-[#1C1917] rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-1.5 text-xs font-semibold"
          >
            <Eye className="w-4 h-4" /> View Details
          </button>
          
          <button
            onClick={handleWhatsAppOrder}
            className="px-4 py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-1.5 text-xs font-bold"
          >
            <MessageCircle className="w-4 h-4 fill-white" /> ORDER ON WHATSAPP
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div>
          <div className="flex items-baseline justify-between mb-1">
            <h3 
              onClick={() => onSelect(product)}
              className="font-serif text-xl md:text-2xl font-semibold text-[#1C1917] cursor-pointer hover:text-[#FF5E36] transition-colors text-left"
            >
              {product.name}
            </h3>
            <span className="font-serif text-xl font-semibold text-[#FF5E36]">
              ₹{product.price}
            </span>
          </div>

          <p className="text-xs text-[#1C1917]/65 line-clamp-2 leading-relaxed text-left">
            {product.shortDesc}
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="pt-3 border-t border-[#EFEFE6] flex items-center justify-between">
          <span className="text-[11px] text-[#1C1917]/60 font-semibold bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#EFEFE6]">
            {product.size} bowl
          </span>

          <button
            onClick={handleWhatsAppOrder}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>ORDER ON WHATSAPP</span>
          </button>
        </div>
      </div>
    </div>
  );
};
