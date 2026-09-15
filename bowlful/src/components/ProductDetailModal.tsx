import React, { useState } from 'react';
import { X, Plus, Minus, MessageCircle, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import type { Product } from '../data/products';
import { getWhatsAppProductUrl } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-300">
      <div className="relative bg-[#FAF8F5] w-full max-w-4xl max-h-[85vh] sm:max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-white/60 flex flex-col">
        
        {/* Sticky Close Header */}
        <div className="sticky top-0 z-20 p-4 bg-white/95 backdrop-blur-md border-b border-[#EFEFE6] flex items-center justify-between shrink-0 shadow-sm">
          <span className="font-serif text-lg font-bold text-[#1C1917] pl-2">{product.name}</span>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#FAF8F5] text-[#1C1917] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left Large Photography */}
          <div className="md:col-span-6 relative aspect-square md:aspect-auto bg-[#F5F2EC]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#1C1917] text-white shadow-md">
                {product.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#1C1917] shadow-sm">
                {product.size}
              </span>
            </div>
          </div>

          {/* Right Product Specifications & Actions */}
          <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FF5E36] tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" /> Fresh-Cut Daily • Hyderabad
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl font-bold text-[#FF5E36]">
                  ₹{product.price * quantity}
                </span>
                <span className="text-xs text-[#1C1917]/50 font-medium">
                  (₹{product.price} / {product.size})
                </span>
              </div>

              <p className="text-sm text-[#1C1917]/75 leading-relaxed">
                {product.description}
              </p>

              {/* Ingredients List */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                  Included Fresh Fruits:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-[#EFEFE6] text-xs text-[#1C1917]/80 font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fresh Prep Info */}
              <div className="p-3 rounded-xl bg-white border border-[#EFEFE6] text-xs text-[#1C1917]/70 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF5E36]" />
                <span>Cut fresh to order • Served cold in eco-sealed container</span>
              </div>

              {/* Seasonal Disclaimer */}
              <p className="text-[11px] italic text-[#1C1917]/50 pt-1">
                * {product.seasonalNote || "Fruit selection may vary with seasonal availability."}
              </p>
            </div>

            {/* Quantity & CTA Buttons */}
            <div className="space-y-4 pt-4 border-t border-[#EFEFE6]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider uppercase text-[#1C1917]">Quantity</span>
                
                <div className="flex items-center border border-[#1C1917]/20 rounded-full bg-white px-3 py-1.5 space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:text-[#FF5E36] transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-bold text-[#1C1917] w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:text-[#FF5E36] transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={getWhatsAppProductUrl(product, quantity)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#20bd5a] transition-all shadow-lg flex items-center justify-center gap-2.5 text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>ORDER VIA WHATSAPP (₹{product.price * quantity})</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-3 bg-[#FAF8F5] text-[#1C1917]/70 rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-[#EFEFE6] transition-all"
                >
                  CONTINUE BROWSING
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#1C1917]/50 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span>Instant WhatsApp Dispatch • +91 9347506301</span>
              </div>
            </div>

          </div>

        </div>
        </div>

      </div>
    </div>
  );
};
