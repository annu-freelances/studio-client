import React, { useContext } from 'react';
import { Camera, Video, Layers, ArrowRight } from 'lucide-react';
import { ThemeContext } from '../../context/themeProvider'; // Ensure path is correct

const ServiceCards = () => {
  // 1. Access Theme
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const services = [
    { icon: <Camera size={32} />, title: 'Imagery', desc: 'Commercial, fashion, and editorial photography with a focus on high-fidelity grain.' },
    { icon: <Video size={32} />, title: 'Cinema', desc: 'Narrative-driven 8K cinematography. We don’t just film; we direct visual stories.' },
    { icon: <Layers size={32} />, title: 'Post-Process', desc: 'Bespoke color science and retouching services that define a unique brand identity.' },
  ];

  return (
    <section className={`py-12 px-6 md:px-12 transition-colors duration-500 ${
        isDark ? 'bg-[#0a1a14] text-white' : 'bg-neutral-50 text-neutral-900'
    }`}>
      <div className="max-w-[1600px] mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-emerald-500 font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Core Capabilities</span>
            <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
              Services<span className="text-emerald-500">.</span>
            </h3>
          </div>
          <p className={`max-w-xs text-sm font-medium uppercase tracking-widest leading-loose ${
              isDark ? 'text-white/40' : 'text-neutral-500'
          }`}>
            From digital canvases to cinematic frames, we offer specialized visual artifacts.
          </p>
        </div>

        {/* SERVICES GRID */}
        {/* We use gap-[1px] to create the border effect between cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-[1px] rounded-3xl overflow-hidden border ${
            isDark 
                ? 'bg-white/10 border-white/10' 
                : 'bg-neutral-200 border-neutral-200 shadow-sm'
        }`}>
          {services.map((item, i) => (
            <div 
              key={i} 
              className={`group p-16 flex flex-col transition-colors duration-500 ${
                  isDark 
                    ? 'bg-[#0a1a14] hover:bg-[#0f241c]' 
                    : 'bg-white hover:bg-emerald-50/30'
              }`}
            >
              {/* Icon */}
              <div className="mb-12 text-emerald-500 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                {item.icon}
              </div>
              
              {/* Title */}
              <h4 className="text-3xl font-black uppercase mb-6 tracking-tight">
                {item.title}
              </h4>
              
              {/* Description */}
              <p className={`text-sm leading-relaxed mb-10 transition-colors ${
                  isDark 
                    ? 'text-white/40 group-hover:text-white/70' 
                    : 'text-neutral-500 group-hover:text-neutral-800'
              }`}>
                {item.desc}
              </p>
              
              {/* Link Arrow */}
              <div className="mt-auto flex items-center gap-2 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                <span className="text-[10px] font-black uppercase tracking-widest">Learn More</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;