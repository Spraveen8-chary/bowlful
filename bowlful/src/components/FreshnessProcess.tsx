import React from 'react';
import { PROCESS_STEPS } from '../data/content';

export const FreshnessProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#EFEFE6]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#FF5E36]">
            UNCOMPROMISED STANDARDS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1917] tracking-tight">
            From fruit to bowl.
          </h2>
          <p className="text-base text-[#1C1917]/70 font-normal">
            Every step is designed to preserve natural texture, dewiness, and maximum nutrition.
          </p>
        </div>

        {/* 4 Process Cards Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#EFEFE6] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-left"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F2EC]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 font-serif text-xl font-bold text-[#1C1917] px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                  {step.number}
                </span>
              </div>

              <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-wide text-[#1C1917]">
                    {step.title}
                  </h3>
                  <p className="text-xs font-bold text-[#FF5E36] uppercase tracking-wider mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-[#1C1917]/70 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
