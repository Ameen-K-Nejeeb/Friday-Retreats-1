
import React from 'react';
import { DEALS } from '../constants';

const TopDeals: React.FC = () => {
  return (
    <section className="py-12 overflow-hidden">
      <div className="px-4 pb-2">
        <h2 className="text-[#181112] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] font-display">Top Deals</h2>
        <p className="text-[#896168] dark:text-gray-400 text-sm mt-1">Curated luxury at exceptional value</p>
      </div>
      <div className="flex overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex items-stretch p-4 gap-6">
          {DEALS.map((deal) => (
            <div 
              key={deal.id} 
              className="group flex h-full flex-1 flex-col gap-0 rounded-2xl bg-white dark:bg-[#2d1a1d] shadow-xl min-w-[280px] md:min-w-[320px] overflow-hidden border border-gray-100 dark:border-gray-800 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div 
                className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover flex flex-col group-hover:scale-105 transition-transform duration-500" 
                style={{ backgroundImage: `url("${deal.imageUrl}")` }}
              />
              <div className="flex flex-col flex-1 justify-between p-6 gap-4 relative bg-white dark:bg-[#2d1a1d]">
                <div>
                  <p className="text-[#181112] dark:text-white text-xl font-bold font-display leading-tight">{deal.location}</p>
                  <p className="text-primary font-bold text-lg mt-1">{deal.price}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{deal.description}</p>
                </div>
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-background-light dark:bg-background-dark/50 text-[#181112] dark:text-white text-sm font-bold border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                  <span className="truncate">View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDeals;
