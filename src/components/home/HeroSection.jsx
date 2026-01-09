import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const HeroSection = () => (
  <section className="relative h-screen bg-[#0a1a14] flex items-center justify-center overflow-hidden">
    {/* Background with subtle motion */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source 
          src="https://www.pexels.com/download/video/19205434/" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a14]/60 via-transparent to-[#0a1a14]"></div>
    </div>

    <div className="relative z-10 w-full max-w-[1600px] px-6  md:px-12 flex flex-col items-center">
      <div className="flex flex-col items-center mb-12">
        <div className="h-[1px] w-24 bg-emerald-500/30 mb-8"></div>
      </div>

      

      <div className="mt-76 flex flex-col md:flex-row items-center gap-8 w-full justify-between border-t border-white/10 pt-12">
        <p className="text-white/40 text-sm max-w-xs uppercase tracking-widest leading-relaxed">
          Crafting legacies through the <span className="text-white">perfect synthesis</span> of light, emotion, and technical precision.
        </p>
        <div className="flex gap-4">
          <button className="group bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-full flex items-center gap-4 transition-all duration-500 overflow-hidden relative">
            <span className="text-xs font-black uppercase tracking-widest relative z-10">Launch Portfolio</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10"></div>
          </button>
        </div>
      </div>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
      <ArrowDown size={24} />
    </div>
  </section>
);

export default HeroSection;