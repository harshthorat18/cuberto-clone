"use client";
import { useState, useRef } from 'react';

const Services = () => {
  const services = [
    { 
      title: 'Brand Identity', 
      description: 'Creating cohesive visual language for tech brands',
      videoPath: '/videos/21.mp4'
    },
    { 
      title: 'AI-Enhanced UX/UI Design', 
      description: 'Crafting intuitive interfaces for AI applications',
      videoPath: '/videos/22.mp4'
    },
    { 
      title: 'Custom Development', 
      description: 'Building scalable digital products with modern frameworks',
      videoPath: '/videos/23.mp4'
    },
    { 
      title: 'Product Strategy', 
      description: 'Developing roadmaps for AI-driven solutions',
      videoPath: '/videos/24.mp4'
    },
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredVideo(index);
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play().catch(e => console.log("Play error:", e));
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredVideo(null);
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause();
      // Reset video to beginning
      if (videoRefs.current[index]) {
        videoRefs.current[index]!.currentTime = 0;
      }
    }
  };

  // Create ref callbacks for each video
  const createVideoRef = (index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el;
  };

  return (
    <div className="h-full bg-black">
      <section id="services" className="relative bg-white text-gray-900 rounded-t-[50px] overflow-hidden">
        {/* Curved top edge with SVG */}  
        <div className="absolute top-0 left-0 w-full h-16 sm:h-20">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1440 100" 
            preserveAspectRatio="none"
          >
            <path 
              fill="#000000" 
              d="M0,0 C360,50 1080,50 1440,0 L1440,100 L0,100 Z" 
            />
          </svg>
        </div>
        
        <div className="container mx-auto max-w-6xl pt-20 pb-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive design and development services tailored for AI-powered products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Video with overlay effect */}
                <div className="relative h-48 overflow-hidden">
                  <video
                    ref={createVideoRef(index)}
                    src={service.videoPath}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play indicator overlay */}
                  {hoveredVideo !== index && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
