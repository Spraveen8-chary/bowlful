import React from 'react';
import { INSTAGRAM_GRID } from '../data/content';
import { Heart, MessageCircle } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const InstagramGallery: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#EFEFE6]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EFEFE6]">
          <div className="space-y-2 text-left">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#FF5E36]">
              OUR VISUAL JOURNAL
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1917] tracking-tight">
              See what’s in the bowl.
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#EFEFE6] rounded-full text-xs font-bold uppercase tracking-wider text-[#1C1917] hover:bg-[#FF5E36] hover:text-white hover:border-[#FF5E36] transition-all duration-300 shadow-sm"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>FOLLOW @BOWLFUL</span>
            <span className="text-[10px] opacity-60">(Placeholder)</span>
          </a>
        </div>

        {/* 6 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_GRID.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#F5F2EC] cursor-pointer border border-[#EFEFE6]"
            >
              <img
                src={post.image}
                alt="Bowlful Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-end space-x-3 text-xs font-semibold">
                  <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 fill-white" /> {post.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5 fill-white" /> {post.comments}</span>
                </div>
                <p className="text-[11px] font-normal line-clamp-2 leading-tight">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
