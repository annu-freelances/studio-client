import React from 'react';
import { Camera, Video, Layers, ArrowRight } from 'lucide-react';

const ServiceCards = () => {
  const services = [
    { icon: <Camera size={32} />, title: 'Imagery', desc: 'Commercial, fashion, and editorial photography with a focus on high-fidelity grain.' },
    { icon: <Video size={32} />, title: 'Cinema', desc: 'Narrative-driven 8K cinematography. We don’t just film; we direct visual stories.' },
    { icon: <Layers size={32} />, title: 'Post-Process', desc: 'Bespoke color science and retouching services that define a unique brand identity.' },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a1a14] text-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-emerald-500 font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Core Capabilities</span>
            <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Services<span className="text-emerald-500">.</span></h3>
          </div>
          <p className="max-w-xs text-white/40 text-sm font-medium uppercase tracking-widest leading-loose">
            From digital canvases to cinematic frames, we offer specialized visual artifacts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {services.map((item, i) => (
            <div key={i} className="group p-16 bg-[#0a1a14] hover:bg-[#0f241c] transition-colors duration-500 flex flex-col">
              <div className="mb-12 text-emerald-500 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">{item.icon}</div>
              <h4 className="text-3xl font-black uppercase mb-6 tracking-tight">{item.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed mb-10 group-hover:text-white/70 transition-colors">{item.desc}</p>
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