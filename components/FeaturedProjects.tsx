"use client";
import { useState, useRef } from 'react';
import FadeInWhenVisible from './effects/FadeInWhenVisible';

const FeaturedProjects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Punto Pay', 
      category: 'Mobile App',
      description: 'The First Super App in Latin America',
      videoPath: '/videos/11.mp4'
    },
    { 
      id: 2, 
      title: 'Kahlan Zane', 
      category: 'Digital Product',
      description: 'A digital product for immersive experiences',
      videoPath: '/videos/13.mp4'
    },
    { 
      id: 3, 
      title: 'Iceberg Analytics', 
      category: 'Data Visualization',
      description: 'Deep insights visualization platform',
      videoPath: '/videos/12.mp4'
    },
    { 
      id: 4, 
      title: 'Urban Architecture', 
      category: '3D Visualization',
      description: 'Modern building design tool',
      videoPath: '/videos/14.mp4'
    },
    { 
      id: 5, 
      title: 'Tech Device', 
      category: 'Product Design',
      description: 'Next-generation hardware interface',
      videoPath: '/videos/15.mp4'
    },
    { 
      id: 6, 
      title: 'Balloon Experience', 
      category: 'Mobile App',
      description: 'Hot air balloon booking experience',
      videoPath: '/videos/16.mp4'
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

  return (
    <section id="projects" className="relative bg-black text-white rounded-t-[50px] overflow-hidden">
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
      
      <div className="container mx-auto max-w-7xl pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-0">Featured projects</h2>
          <button className="text-white border border-white px-6 py-2 sm:py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base font-medium">
            View all projects
          </button>
        </div>
        
        <div className="space-y-12 sm:space-y-16">
          {/* Create rows with two projects each */}
          {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {/* First project in the row */}
              <div className="flex flex-col">
                {/* Video card - full width with no text inside */}
                <div 
                  className="relative overflow-hidden rounded-2xl group h-[500px] sm:h-[600px] bg-gray-900"
                  onMouseEnter={() => handleMouseEnter(rowIndex * 2)}
                  onMouseLeave={() => handleMouseLeave(rowIndex * 2)}
                >
                  <video
                    ref={el => videoRefs.current[rowIndex * 2] = el}
                    src={projects[rowIndex * 2].videoPath}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play indicator overlay */}
                  {hoveredVideo !== rowIndex * 2 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Project details outside the card */}
                <FadeInWhenVisible>
                  <div className="mt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs sm:text-sm px-3 py-1 bg-gray-800 rounded-full text-gray-300">
                        {projects[rowIndex * 2].category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold">{projects[rowIndex * 2].title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base">{projects[rowIndex * 2].description}</p>
                  </div>
                </FadeInWhenVisible>
              </div>
              
              {/* Second project in the row - only if it exists */}
              {rowIndex * 2 + 1 < projects.length && (
                <div className="flex flex-col">
                  {/* Video card - full width with no text inside */}
                  <div 
                    className="relative overflow-hidden rounded-2xl group h-[500px] sm:h-[600px] bg-gray-900"
                    onMouseEnter={() => handleMouseEnter(rowIndex * 2 + 1)}
                    onMouseLeave={() => handleMouseLeave(rowIndex * 2 + 1)}
                  >
                    <video
                      ref={el => videoRefs.current[rowIndex * 2 + 1] = el}
                      src={projects[rowIndex * 2 + 1].videoPath}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Play indicator overlay */}
                    {hoveredVideo !== rowIndex * 2 + 1 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Project details outside the card */}
                  <FadeInWhenVisible>
                    <div className="mt-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs sm:text-sm px-3 py-1 bg-gray-800 rounded-full text-gray-300">
                          {projects[rowIndex * 2 + 1].category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold">{projects[rowIndex * 2 + 1].title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base">{projects[rowIndex * 2 + 1].description}</p>
                    </div>
                  </FadeInWhenVisible>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;