
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="text-[#181112] dark:text-white flex size-12 shrink-0 items-center justify-start">
        <span className="material-symbols-outlined cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-full transition-colors">menu</span>
      </div>
      <h2 className="text-[#181112] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center font-display">Friday Retreats</h2>
      <div className="flex w-12 items-center justify-end">
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#181112] dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
          <span className="material-symbols-outlined text-3xl">account_circle</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
