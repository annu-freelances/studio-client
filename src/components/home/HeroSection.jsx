import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const HeroSection = () => (
  // CHANGED: Removed pt-28, pb-6, px-6 to make it full screen (edge-to-edge)
  <section className="relative h-screen w-full overflow-hidden bg-[#0a1a14]">
    
    {/* Background Video Wrapper */}
    {/* CHANGED: Removed rounded corners, borders, and shadows. Added z-0 */}
    <div className="absolute inset-0 z-0 w-full h-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover" 
      >
        <source 
          src="./Haldi.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay - Adjusted gradient to be slightly stronger at top for Navbar visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a14]/80 via-transparent to-[#0a1a14]/90"></div>
    </div>

    {/* Content Container */}
    {/* CHANGED: Used flex-col and justify-end to push content to bottom naturally */}
    <div className="relative z-10 h-full w-full max-w-[1600px] mx-auto px-6 md:px-16 flex flex-col justify-end pb-12">
      
      {/* Bottom Text and Button Area */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-between border-t border-white/20 pt-8 md:pt-12">
        <p className="text-white/60 text-[10px] md:text-sm max-w-xs uppercase tracking-[0.3em] leading-relaxed text-center md:text-left">
          Crafting legacies through the <span className="text-white font-medium">perfect synthesis</span> of light and emotion.
        </p>
        
        <div className="flex gap-4">
          <button className="group bg-emerald-600 hover:bg-emerald-500 text-white px-8 md:px-12 py-4 md:py-6 rounded-full flex items-center gap-4 transition-all duration-500 overflow-hidden relative shadow-lg shadow-emerald-900/20">
            <span className="text-[10px] font-black uppercase tracking-widest relative z-10">Launch Portfolio</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10"></div>
          </button>
        </div>
      </div>

      {/* Animated Scroll Indicator - Positioned relative to container now */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 animate-bounce hidden md:block">
        <ArrowDown size={24} />
      </div>
    </div>
  </section>
);

export default HeroSection;