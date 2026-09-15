import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CHOOSE',
      desc: 'Pick your favourite bowl from our daily curated selection of fresh-cut fruit combinations.',
    },
    {
      num: '02',
      title: 'PREPARE',
      desc: 'We prepare and pack it fresh to your exact order using food-grade hygienic cold packaging.',
    },
    {
      num: '03',
      title: 'ENJOY',
      desc: 'Open. Pick up your fork. Enjoy crisp, juicy fruits right when your day demands a refresh.',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#EFEFE6]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EFEFE6]">
          <div className="space-y-2 text-left">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#FF5E36]">
              THREE SIMPLE STEPS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1917] tracking-tight">
              How Bowlful works.
            </h2>
          </div>
          <p className="text-sm text-[#1C1917]/60 max-w-sm text-left">
            No subscription traps, no complicated prep. Just fresh-cut goodness delivered to your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-6 text-left group">
              <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light text-[#1C1917]/20 group-hover:text-[#FF5E36] transition-colors duration-500 block">
                {step.num}
              </span>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold tracking-wider text-[#1C1917]">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#1C1917]/70 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
