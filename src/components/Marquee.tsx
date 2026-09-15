import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    "FRESHLY PREPARED",
    "BEAUTIFULLY PACKED",
    "MADE FOR YOUR DAY",
    "BOWLFUL HYDERABAD",
    "NATURAL & DELICIOUS",
    "ELEVATED DAILY SNACKING",
  ];

  return (
    <section id="marquee" className="w-full bg-[#1C1917] text-[#FAF8F5] py-5 overflow-hidden border-y border-[#1C1917]/20 select-none">
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span className="font-serif text-sm md:text-base tracking-[0.25em] font-medium uppercase whitespace-nowrap">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E36] opacity-80" />
          </div>
        ))}
      </div>
    </section>
  );
};
