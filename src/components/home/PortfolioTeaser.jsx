import React from 'react';
import { ArrowUpRight, ArrowRight, Zap } from 'lucide-react';

const PortfolioTeaser = () => {
  const projects = [
    { id: 1, title: "Urban Noir", category: "Cinema", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800", size: "tall" },
    { id: 2, title: "Vogue Editorial", category: "Imagery", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800", size: "short" },
    { id: 3, title: "Abstract Light", category: "Post-Process", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800", size: "short" },
    { id: 4, title: "Golden Hour", category: "Cinema", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800", size: "tall" },
    { id: 5, title: "Motion Study", category: "Production", img: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?q=80&w=800", size: "short" },
    { id: 6, title: "Silent Frames", category: "Imagery", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800", size: "tall" },
  ];

  return (
    <section className="py-12 px-6 md:px-12 bg-neutral-50">
      <div className="max-w-[1600px] mx-auto">
        {/* Header with Project Count */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <h3 className="text-7xl md:text-[120px] font-black text-[#0a1a14] leading-[0.8] tracking-tighter uppercase">
            Work
            <span className="text-emerald-600 pl-8">Sample</span>
          </h3>
          <div className="flex items-center gap-4 border-l border-emerald-500 pl-6 h-fit">
            <span className="text-4xl font-black text-neutral-200">06</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Selected<br/>Artifacts</span>
          </div>
        </div>

        {/* Masonry-Style Album Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-[1.5rem] bg-[#0a1a14]"
            >
              {/* Image with Parallax-like Hover */}
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay Metadata */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a14] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-emerald-400 text-[9px] font-black uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h4 className="text-white text-2xl font-black uppercase tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h4>
              </div>

              {/* Top Right Arrow Hook */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight size={20} className="text-[#0a1a14]" />
              </div>
            </div>
          ))}

          {/* Call to Action Card Integrated into Grid */}
          <div className="break-inside-avoid p-12 bg-white rounded-[2rem] border border-neutral-200 shadow-xl relative overflow-hidden group">
            <Zap className="absolute -top-4 -right-4 text-emerald-500/10 w-32 h-32 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Availability</span>
            <h4 className="text-3xl font-black uppercase mb-4 relative z-10 text-[#0a1a14]">Have a project?</h4>
            <p className="text-neutral-500 text-sm mb-10 relative z-10 leading-relaxed">
              We are currently accepting bookings for <span className="text-[#0a1a14] font-bold">Q3 2026</span>. Let's create something timeless.
            </p>
            <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#0a1a14] border-b-2 border-emerald-500 pb-2 group-hover:gap-6 transition-all">
              Contact the Studio <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTeaser;