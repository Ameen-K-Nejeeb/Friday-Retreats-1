
import React from 'react';
import { TESTIMONIALS } from '../constants';

const GuestStories: React.FC = () => {
  return (
    <section className="bg-white/30 dark:bg-white/5 py-16">
      <div className="px-4 pb-8 text-center md:text-left">
        <h2 className="text-[#181112] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] font-display">Guest Stories</h2>
      </div>
      <div className="px-4 grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        {TESTIMONIALS.map((t, idx) => (
          <div key={t.id} className={`relative p-8 rounded-3xl bg-white dark:bg-[#2d1a1d]/40 shadow-sm border border-gray-50 dark:border-white/5 ${idx > 0 ? 'md:border-t-0' : ''}`}>
            <span className="material-symbols-outlined text-primary text-6xl absolute -top-4 -left-2 opacity-20 pointer-events-none">format_quote</span>
            <p className="text-[#181112] dark:text-white text-xl italic font-display leading-relaxed relative z-10 mb-6">
              {t.quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full overflow-hidden border-2 border-primary/20">
                <img alt={t.author} className="w-full h-full object-cover" src={t.avatarUrl} />
              </div>
              <div>
                <p className="font-bold text-base">{t.author}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-sans">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuestStories;
