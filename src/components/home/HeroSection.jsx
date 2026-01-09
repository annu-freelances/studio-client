import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const HeroSection = () => (
  // Adjusted pt-24 to push it below the fixed navbar
  // Added pb-6, px-6 to create the frame spacing on other sides
  <section className="relative h-screen bg-[#0a1a14] pt-28 pb-6 px-6 md:px-8 flex items-center justify-center overflow-hidden">
    
    {/* This is the Rounded Border Frame */}
    <div className="relative w-full h-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 flex items-center justify-center shadow-2xl">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105" // scale-105 prevents tiny gaps on edges
        >
          <source 
            src="./Haldi.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for text clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a14]/60 via-transparent to-[#0a1a14]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10  w-full max-w-[1600px] pt-88 px-28 md:px-16 flex flex-col items-center">
        <div className="mt-auto mb-12 flex flex-col md:flex-row items-center gap-8 w-full justify-between border-t border-white/10 pt-12">
          <p className="text-white/40 text-[10px] md:text-sm max-w-xs uppercase tracking-[0.3em] leading-relaxed">
            Crafting legacies through the <span className="text-white">perfect synthesis</span> of light and emotion.
          </p>
          
          <div className="flex gap-4">
            <button className="group bg-emerald-600 hover:bg-emerald-500 text-white px-8 md:px-12 py-4 md:py-6 rounded-full flex items-center gap-4 transition-all duration-500 overflow-hidden relative">
              <span className="text-[10px] font-black uppercase tracking-widest relative z-10">Launch Portfolio</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
        <ArrowDown size={20} />
      </div>
    </div>
  </section>
);

export default HeroSection;