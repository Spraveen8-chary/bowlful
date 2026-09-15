import React from 'react';

export const FruitVisualSection: React.FC = () => {
  const fruits = [
    {
      name: 'Watermelon',
      tag: 'Crisp & Hydrating',
      image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80',
      desc: 'Naturally sweet juice & ruby red freshness.',
    },
    {
      name: 'Pineapple',
      tag: 'Golden & Tangy',
      image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
      desc: 'Sun-ripened golden tropical pineapple.',
    },
    {
      name: 'Papaya',
      tag: 'Smooth & Tropical',
      image: 'https://images.unsplash.com/photo-1617112848923-cc2234396a8d?auto=format&fit=crop&w=800&q=80',
      desc: 'Rich orange sliced papaya.',
    },
    {
      name: 'Pomegranate',
      tag: 'Ruby Arils',
      image: 'https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=800&q=80',
      desc: 'Bursting with sparkling jewel seeds.',
    },
    {
      name: 'Black Grapes',
      tag: 'Sweet Seedless',
      image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80',
      desc: 'Firm, juicy spheres of natural nectar.',
    },
    {
      name: 'Apple',
      tag: 'Crisp Crunch',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80',
      desc: 'Precision sliced for long-lasting crunch.',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#FF5E36]">
            NATURE'S PALETTE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1917] tracking-tight leading-[1.1]">
            Colour belongs
            <br />
            <span className="font-cormorant italic font-normal text-[#1C1917]/80">
              in your bowl.
            </span>
          </h2>
          <p className="text-base text-[#1C1917]/70">
            We celebrate the unfiltered, vivid hues of whole fresh fruits cut pure with zero added color or syrups.
          </p>
        </div>

        {/* Floating Collage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {fruits.map((fruit, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#EFEFE6] p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between min-h-[320px]"
            >
              {/* Top info */}
              <div className="z-10 space-y-1 text-left">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#FF5E36]">
                  {fruit.tag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  {fruit.name}
                </h3>
                <p className="text-xs text-[#1C1917]/60">
                  {fruit.desc}
                </p>
              </div>

              {/* Floating Image */}
              <div className="relative w-full h-44 mt-4 rounded-2xl overflow-hidden bg-[#F5F2EC]">
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
