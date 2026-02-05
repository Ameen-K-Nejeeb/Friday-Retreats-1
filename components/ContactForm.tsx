
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="bg-off-white dark:bg-[#1a0c0e] px-4 py-20 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-md mx-auto">
        <h2 className="text-[#181112] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] font-display text-center mb-10">Connect With Us</h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 px-1">Full Name</label>
            <input className="w-full px-5 py-4 bg-white dark:bg-[#2d1a1d] border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-maroon-dark text-sm transition-all placeholder:text-gray-400 dark:text-white" placeholder="Your name" type="text"/>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 px-1">Email Address</label>
            <input className="w-full px-5 py-4 bg-white dark:bg-[#2d1a1d] border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-maroon-dark text-sm transition-all placeholder:text-gray-400 dark:text-white" placeholder="name@example.com" type="email"/>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 px-1">Phone Number</label>
            <input className="w-full px-5 py-4 bg-white dark:bg-[#2d1a1d] border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-maroon-dark text-sm transition-all placeholder:text-gray-400 dark:text-white" placeholder="+1 (555) 000-0000" type="tel"/>
          </div>
          <div className="pt-4">
            <button className="w-full bg-maroon-dark text-white font-bold py-5 rounded-full shadow-xl hover:bg-primary active:scale-[0.98] transition-all text-base tracking-widest uppercase" type="submit">
              Get in Touch
            </button>
          </div>
        </form>
        <p className="text-center text-xs text-gray-400 mt-10 font-sans italic opacity-80">Our luxury travel specialists respond within 24 hours.</p>
      </div>
    </section>
  );
};

export default ContactForm;
