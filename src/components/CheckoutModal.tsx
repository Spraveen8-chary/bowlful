import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import confetti from 'canvas-confetti';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    subtotal,
    deliveryFee,
    total,
    isCheckoutOpen,
    setIsCheckoutOpen,
    placeOrder,
  } = useCart();

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    address: '',
    landmark: '',
    pincode: '500033',
    paymentMethod: 'Cash on Delivery',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isCheckoutOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.customerName.trim()) errs.customerName = 'Name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit mobile number required';
    if (!formData.address.trim()) errs.address = 'Delivery address is required';
    if (!formData.pincode.trim()) errs.pincode = 'Pincode required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF5E36', '#2E4A3B', '#FAF8F5'],
      });
    } catch (err) {
      console.error(err);
    }

    placeOrder(formData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-300">
      <div className="relative bg-[#FAF8F5] w-full max-w-3xl max-h-[85vh] sm:max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-white/60 flex flex-col text-left">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 p-5 sm:p-6 bg-white border-b border-[#EFEFE6] flex items-center justify-between shrink-0 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-wider text-[#1C1917]">BOWLFUL</span>
            <span className="text-xs text-[#1C1917]/40 font-mono">/ CHECKOUT</span>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-2 rounded-full hover:bg-[#FAF8F5] text-[#1C1917] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Customer Details */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1C1917] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#FF5E36] text-[#FAF8F5] text-xs font-sans flex items-center justify-center">1</span>
              Customer Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1C1917]/70 mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Ananya Reddy"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#EFEFE6] rounded-xl text-sm focus:outline-none focus:border-[#FF5E36]"
                />
                {errors.customerName && <p className="text-[11px] text-red-500 mt-1">{errors.customerName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C1917]/70 mb-1">Phone Number (WhatsApp) *</label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#EFEFE6] rounded-xl text-sm focus:outline-none focus:border-[#FF5E36]"
                />
                {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Delivery Location Hyderabad */}
          <div className="space-y-4 pt-4 border-t border-[#EFEFE6]">
            <h3 className="font-serif text-lg font-bold text-[#1C1917] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#FF5E36] text-[#FAF8F5] text-xs font-sans flex items-center justify-center">2</span>
              Delivery Address (Hyderabad, Telangana)
            </h3>

            <div>
              <label className="block text-xs font-semibold text-[#1C1917]/70 mb-1">Full Street Address / Flat No / Office *</label>
              <textarea
                rows={2}
                placeholder="e.g. Flat 402, Oakwood Apartments, Road No. 36, Jubilee Hills"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[#EFEFE6] rounded-xl text-sm focus:outline-none focus:border-[#FF5E36]"
              />
              {errors.address && <p className="text-[11px] text-red-500 mt-1">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1C1917]/70 mb-1">Landmark</label>
                <input
                  type="text"
                  placeholder="e.g. Near Metro Station / Peddamma Temple"
                  value={formData.landmark}
                  onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#EFEFE6] rounded-xl text-sm focus:outline-none focus:border-[#FF5E36]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C1917]/70 mb-1">Pincode *</label>
                <input
                  type="text"
                  placeholder="500033"
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#EFEFE6] rounded-xl text-sm focus:outline-none focus:border-[#FF5E36]"
                />
                {errors.pincode && <p className="text-[11px] text-red-500 mt-1">{errors.pincode}</p>}
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4 pt-4 border-t border-[#EFEFE6]">
            <h3 className="font-serif text-lg font-bold text-[#1C1917] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#FF5E36] text-[#FAF8F5] text-xs font-sans flex items-center justify-center">3</span>
              Payment Method
            </h3>

            <div className="p-4 rounded-2xl bg-white border-2 border-[#FF5E36] flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <span className="font-bold text-sm text-[#1C1917]">Cash on Delivery</span>
                <p className="text-xs text-[#1C1917]/60">Pay with cash or UPI upon doorstep arrival in Hyderabad.</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#2E4A3B]/10 text-[#2E4A3B] text-xs font-bold uppercase tracking-wider">
                Only Option Available
              </span>
            </div>
          </div>

          {/* Order Summary Box */}
          <div className="p-5 rounded-2xl bg-white border border-[#EFEFE6] space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-[#EFEFE6]">
              <span className="text-xs font-bold text-[#1C1917]">Order Summary ({cart.length} items)</span>
              <span className="font-serif text-lg font-bold text-[#FF5E36]">₹{total}</span>
            </div>
            <div className="text-xs text-[#1C1917]/70 space-y-1">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full py-5 bg-[#FF5E36] text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#E84D25] transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>CONFIRM & PLACE ORDER (₹{total})</span>
          </button>
        </form>
        </div>

      </div>
    </div>
  );
};
