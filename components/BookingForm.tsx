
import React from 'react';

const BookingForm: React.FC = () => {
  return (
    <section className="px-4 py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-[#181112] dark:text-white text-2xl font-bold leading-tight font-display mb-6">Plan Your Stay</h2>
        <div className="bg-white dark:bg-[#2d1a1d] p-8 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-800">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 px-1">Where to?</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-3.5 text-gray-400 group-focus-within:text-primary transition-colors">location_on</span>
                <input 
                  className="w-full pl-12 pr-4 py-4 bg-background-light dark:bg-background-dark border-none rounded-2xl focus:ring-2 focus:ring-primary text-sm transition-all" 
                  placeholder="Search destination" 
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 px-1">Check In</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-3.5 text-gray-400 group-focus-within:text-primary transition-colors">calendar_today</span>
                  <input 
                    className="w-full pl-12 pr-4 py-4 bg-background-light dark:bg-background-dark border-none rounded-2xl focus:ring-2 focus:ring-primary text-sm transition-all" 
                    placeholder="Select date" 
                    type="date"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 px-1">Check Out</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-3.5 text-gray-400 group-focus-within:text-primary transition-colors">calendar_today</span>
                  <input 
                    className="w-full pl-12 pr-4 py-4 bg-background-light dark:bg-background-dark border-none rounded-2xl focus:ring-2 focus:ring-primary text-sm transition-all" 
                    placeholder="Select date" 
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 px-1">Guests</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-3.5 text-gray-400 group-focus-within:text-primary transition-colors">group</span>
                <select className="w-full pl-12 pr-10 py-4 bg-background-light dark:bg-background-dark border-none rounded-2xl focus:ring-2 focus:ring-primary text-sm appearance-none cursor-pointer">
                  <option>2 Adults, 0 Children</option>
                  <option>1 Adult</option>
                  <option>2 Adults, 1 Child</option>
                  <option>4 Adults, 2 Children</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-3.5 text-gray-400 pointer-events-none">expand_more</span>
              </div>
            </div>
            <button className="w-full bg-primary hover:bg-maroon-dark text-white font-bold py-5 rounded-2xl shadow-xl mt-4 flex items-center justify-center gap-2 transition-all active:scale-95 group">
              <span>Check Availability</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
