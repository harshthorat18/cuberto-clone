'use client';

// components/HeroSection.tsx
import React from 'react';
import { useEffect } from 'react';
import FadeInWhenVisible from './effects/FadeInWhenVisible';
import { MagneticButton } from './effects/MagneticButton';

const Work = () => {

        useEffect(() => {
    MagneticButton(".magnetic-btn", { duration: 0.8 });
  }, []);
  
  
  return (
    <FadeInWhenVisible>
    <div className="min-h-screen bg-white from-gray-900 to-black text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16 relative">
      {/* Left side - Spherical art graphic */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-12 md:mb-0">
        <><video 
              src="/videos/2.mp4"
              autoPlay
              loop
              muted
              playsInline
               className="w-full h-full object-cover"
             />
          </>
      </div>

      {/* Right side - Company introduction */}
      <div className="w-full md:w-1/2 md:pl-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Crafting Digital Experiences</h1>
        <p className="text-lg md:text-xl mb-4 text-black">
          Since 2010, weve been helping clients find business solutions and create unique websites and digital products.
        </p>
        <p className="text-lg md:text-xl mb-8 text-black">
          We never use templates. Our process strictly follows design phase development to ensure every project is one-of-a-kind.
        </p>
        
        {/* What we do button */}
        <button className="relative overflow-hidden border-2 border-black text-black font-semibold py-3 px-8 rounded-full group">
  <span className=" magnetic-btn highlight-target relative z-10 transition-colors duration-500 ease-out group-hover:text-white">
    What we do
  </span>

  <span className="hover:absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-500 ease-out group-hover:h-full"></span>
</button>

      </div>
    </div>
    </FadeInWhenVisible>
  );
};

export default Work;