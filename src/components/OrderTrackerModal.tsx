import React, { useState, useEffect } from 'react';
import { X, Check, Clock, Bike, PackageCheck, Utensils, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

type OrderStatus = 'PLACED' | 'PREPARING' | 'PACKED' | 'OUT_FOR_DELIVERY' | 'DELIVERED';

const STAGES: { status: OrderStatus; title: string; desc: string; icon: React.ElementType }[] = [
  {
    status: 'PLACED',
    title: 'Order Placed',
    desc: 'Order received & confirmed at kitchen desk.',
    icon: CheckCircle2,
  },
  {
    status: 'PREPARING',
    title: 'Preparing Bowl',
    desc: 'Artisan chef washing & precision slicing fresh fruit.',
    icon: Utensils,
  },
  {
    status: 'PACKED',
    title: 'Packed Cold',
    desc: 'Sealed in eco-friendly cold container.',
    icon: PackageCheck,
  },
  {
    status: 'OUT_FOR_DELIVERY',
    title: 'Out for Delivery',
    desc: 'Rider on the way via temperature-controlled box.',
    icon: Bike,
  },
  {
    status: 'DELIVERED',
    title: 'Delivered',
    desc: 'Enjoy your fresh bowlful moment!',
    icon: Check,
  },
];

export const OrderTrackerModal: React.FC = () => {
  const { isTrackerOpen, setIsTrackerOpen, activeOrder } = useCart();
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

  useEffect(() => {
    if (activeOrder) {
      const matchIndex = STAGES.findIndex((s) => s.status === activeOrder.status);
      setCurrentStatusIndex(matchIndex >= 0 ? matchIndex : 0);
    }
  }, [activeOrder]);

  // Automatic live progress timer (simulating real-time server updates)
  useEffect(() => {
    if (!isTrackerOpen) return;

    const timer = setInterval(() => {
      setCurrentStatusIndex((prev) => {
        if (prev < STAGES.length - 1) {
          return prev + 1;
        } else {
          return prev;
        }
      });
    }, 10000);

    return () => clearInterval(timer);
  }, [isTrackerOpen]);

  if (!isTrackerOpen || !activeOrder) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-300">
      <div className="relative bg-[#FAF8F5] w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-white/60 flex flex-col text-left">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 p-5 sm:p-6 bg-[#1C1917] text-white flex items-center justify-between shrink-0 shadow-md">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold tracking-wider">BOWLFUL TRACKER</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FF5E36] text-white font-mono font-bold">
                {activeOrder.id}
              </span>
            </div>
            <p className="text-xs text-white/60">Placed at {activeOrder.createdAt} • Hyderabad Express</p>
          </div>

          <button
            onClick={() => setIsTrackerOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8">
          
          {/* Top ETA Notice */}
          <div className="p-5 rounded-2xl bg-white border border-[#EFEFE6] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF5E36]/10 text-[#FF5E36] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">Estimated Fresh Delivery</p>
                <p className="font-serif text-2xl font-bold text-[#1C1917]">
                  {currentStatusIndex === 4 ? 'Delivered!' : '20 - 25 mins'}
                </p>
              </div>
            </div>

            <span className="px-3.5 py-2 rounded-full bg-[#2E4A3B]/10 border border-[#2E4A3B]/20 text-[#2E4A3B] text-xs font-bold flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full bg-[#2E4A3B] ${currentStatusIndex < 4 ? 'animate-ping' : ''}`} />
              {currentStatusIndex === 4 ? 'Order Complete' : 'Live Status Updating'}
            </span>
          </div>

          {/* Stepper Progress */}
          <div className="relative pl-6 space-y-8 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#EFEFE6]">
            {STAGES.map((stage, idx) => {
              const isPassed = idx <= currentStatusIndex;
              const isCurrent = idx === currentStatusIndex;
              const IconComp = stage.icon;

              return (
                <div key={stage.status} className="relative flex items-start gap-4">
                  {/* Step Dot Icon */}
                  <div
                    className={`relative z-10 w-7 h-7 -ml-6 rounded-full flex items-center justify-center text-xs transition-all duration-500 ${
                      isPassed
                        ? 'bg-[#FF5E36] text-white shadow-md ring-4 ring-[#FF5E36]/20'
                        : 'bg-white border-2 border-[#EFEFE6] text-[#1C1917]/30'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4
                        className={`font-serif text-base font-bold ${
                          isCurrent
                            ? 'text-[#FF5E36]'
                            : isPassed
                            ? 'text-[#1C1917]'
                            : 'text-[#1C1917]/40'
                        }`}
                      >
                        {stage.title}
                      </h4>
                      {isCurrent && (
                        <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#FF5E36]/10 text-[#FF5E36] animate-pulse">
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#1C1917]/65">{stage.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Delivery & Customer Info */}
          <div className="p-5 rounded-2xl bg-white border border-[#EFEFE6] space-y-3 text-xs text-[#1C1917]/70">
            <div className="flex items-center justify-between pb-2 border-b border-[#EFEFE6] font-semibold text-[#1C1917]">
              <span>Delivery Details</span>
              <span className="text-[#2E4A3B]">Hyderabad Local</span>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#FF5E36] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#1C1917]">{activeOrder.customerName}</p>
                <p>{activeOrder.address}, {activeOrder.landmark && `${activeOrder.landmark}, `}Pincode: {activeOrder.pincode}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Phone className="w-4 h-4 text-[#FF5E36] shrink-0" />
              <span>{activeOrder.phone}</span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsTrackerOpen(false)}
            className="w-full py-4 bg-[#1C1917] text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#FF5E36] transition-all"
          >
            CLOSE TRACKER
          </button>

        </div>

      </div>
    </div>
  );
};
