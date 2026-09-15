import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getWhatsAppCartUrl } from '../utils/whatsapp';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    deliveryFee,
    total,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-[#1C1917]/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col justify-between border-l border-[#EFEFE6]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#EFEFE6] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#FF5E36]" />
              <h2 className="font-serif text-xl font-bold text-[#1C1917]">Your Cart</h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#FAF8F5] border border-[#EFEFE6]">
                {cart.reduce((a, b) => a + b.quantity, 0)} items
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-[#FAF8F5] text-[#1C1917] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-[#EFEFE6] flex items-center justify-center text-[#1C1917]/40">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-lg font-bold text-[#1C1917]">Your cart is empty</p>
                  <p className="text-xs text-[#1C1917]/60">Explore our menu and add your favourite fresh fruit bowl.</p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-[#1C1917] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#FF5E36] transition-all"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-4 rounded-2xl bg-white border border-[#EFEFE6] flex gap-4 items-center shadow-sm"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 rounded-xl object-cover bg-[#F5F2EC] shrink-0"
                  />
                  <div className="flex-grow space-y-1 text-left">
                    <div className="flex items-start justify-between">
                      <h4 className="font-serif text-sm font-bold text-[#1C1917]">{product.name}</h4>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-[#1C1917]/40 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs font-bold text-[#FF5E36]">₹{product.price * quantity}</p>
                    <span className="text-[10px] text-[#1C1917]/50 block">{product.size}</span>

                    {/* Quantity Picker */}
                    <div className="flex items-center space-x-3 pt-1">
                      <div className="flex items-center border border-[#EFEFE6] rounded-full px-2 py-0.5 bg-[#FAF8F5]">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="text-[#1C1917] hover:text-[#FF5E36] p-0.5"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-[#1C1917] w-6 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="text-[#1C1917] hover:text-[#FF5E36] p-0.5"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 bg-white border-t border-[#EFEFE6] space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-[#1C1917]/70">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1C1917]">₹{subtotal}</span>
                </div>

                <div className="flex justify-between text-[#1C1917]/70">
                  <span>Delivery (Hyderabad Local)</span>
                  <span className="font-semibold text-[#1C1917]">
                    {deliveryFee === 0 ? (
                      <span className="text-[#2E4A3B]">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>

                {subtotal < 500 && (
                  <p className="text-[10px] text-[#FF5E36] font-medium">
                    Add ₹{500 - subtotal} more for FREE Hyderabad Delivery!
                  </p>
                )}

                <div className="pt-2 border-t border-[#EFEFE6] flex justify-between text-base font-bold text-[#1C1917]">
                  <span>Total</span>
                  <span className="font-serif text-lg text-[#FF5E36]">₹{total}</span>
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={getWhatsAppCartUrl(cart, total)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#20bd5a] transition-all shadow-md flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>ORDER ON WHATSAPP (₹{total})</span>
                </a>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 bg-[#FAF8F5] border border-[#EFEFE6] text-[#1C1917] rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-[#EFEFE6] transition-all"
                >
                  CONTINUE SHOPPING
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#1C1917]/50 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2E4A3B]" />
                <span>Cold-packed & delivered fresh in Hyderabad</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
