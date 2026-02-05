
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full">
      <div 
        className="flex min-h-[85vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-6 text-center transition-transform duration-700"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpn9XwbQDSYo3quNUg55wFLkQtzgUdFFhZj8O1weoddo2_--kZnBTm-G-VXz4ntZS-Ogln8u6sbU0pPorKG2HByZNdBdB5UwPGaQtRmCCvleQan7IfFGpltZ0IUrMvhKs1HdtycPW5IZiUiVU9J6raxJQKJCV4E_Ly6Kh58hRAhp4LyXMw2zFInAZGx3GlBJfGxe9ZzOJWX3WKePLP7hNqKDL72-ZDFtG0a51qT1hbJ9z1Zi2qpMY-ujBcPkfq27Kgf0aFO-J_zcza")`
        }}
      >
        <div className="flex flex-col gap-4 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-7xl font-display">
            Your Friday Starts Here
          </h1>
          <p className="text-white text-lg font-normal leading-normal md:text-xl max-w-md mx-auto opacity-90">
            Experience exotic luxury retreats tailored for your ultimate escape.
          </p>
        </div>
        <button className="mt-6 flex min-w-[220px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-maroon-dark text-white text-base font-bold leading-normal tracking-[0.015em] shadow-2xl hover:bg-primary transition-all active:scale-95 group">
          <span className="truncate">Book Your Escape</span>
          <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
