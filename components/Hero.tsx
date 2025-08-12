"use client"

import FadeInWhenVisible from "./effects/FadeInWhenVisible";

// components/Hero.tsx
const Hero = () => {
  return (
    <FadeInWhenVisible>
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-black md:text-6xl lg:text-7xl font-bold mb-6">
            Design agency focused on <span className="text-blue-500">AI-driven</span> products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We create digital experiences that leverage artificial intelligence to solve complex problems and deliver exceptional user value.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button data-hover="true"className="highlight-target bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              View our work
            </button>
            <button className="border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Learn more
            </button>
          </div>
        </div>
        
        <div className="highlight-target  flex justify-center">
          <div className="highlight-target relative w-full max-w-6xl  rounded-3xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
             <video 
              src="/videos/short.mp4"
              autoPlay
              loop
              muted
              playsInline
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </section>
    </FadeInWhenVisible>
  );
};

export default Hero;