"use client"

// components/Footer.tsx
const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-4 bg-black text-white">
      <div className="container mx-auto">
        <div className="text-center">
<div className="relative w-full h-screen"> 
  <video 
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/videos/ropes.mp4" 
    autoPlay 
    muted 
    loop 
    playsInline
  />
  <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
    <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
      Have an idea? 
      <button className="border border-gray-300 px-8 py-3 rounded-full font-medium hover:text-black hover:bg-gray-50 transition-colors">
              TELL US
            </button>
    </h2>
  </div>
</div>

          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Get in touch
            </button>
            <button className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors">
              View our work
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@cuberto.com
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (555) 123-4567
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">cuberto</div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Dribbble</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Cuberto. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;