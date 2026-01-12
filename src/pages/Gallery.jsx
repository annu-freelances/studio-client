import React, { useState } from "react";
import { 
  Search, Camera, Star, Heart, RotateCcw, 
  Image as ImageIcon, ArrowUpRight, LayoutGrid, Play 
} from "lucide-react";

const PhotographyGallery = () => {
  const [filter, setFilter] = useState("All");

  const cards = [
    { id: 1, title: "The Royal Groom's Procession", category: "Weddings", icon: <Star size={16}/>, img: "https://images.unsplash.com/photo-1665960212625-3c6b274222ed?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", size: "tall" },
    { id: 2, title: "Golden Hour Haldi Rituals", category: "Pre-Wedding", icon: <ImageIcon size={16}/>, img: "https://images.unsplash.com/photo-1740416331524-7d40b988223b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", size: "small" },
    { id: 3, title: "Symmetry of Henna Art", category: "Mehndi", icon: <Heart size={16}/>, img: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800", size: "small" },
    { id: 4, title: "The Eternal Phere", category: "Ceremonies", icon: <Camera size={16}/>, img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800", size: "wide" },
    { id: 5, title: "Vibrant Sangeet Nights", category: "Celebrations", icon: <Star size={16}/>, img: "https://images.unsplash.com/photo-1766763845299-32226a613f22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxoaW5kdSUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D", size: "small" },
    { id: 6, title: "A Regal Bridal Portrait", category: "Portraits", icon: <ImageIcon size={16}/>, img: "https://images.unsplash.com/photo-1600685912448-8bc35c141e18?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", size: "tall" },
    { id: 7, title: "Candid Family Joys", category: "Candid", icon: <Heart size={16}/>, img: "https://images.unsplash.com/photo-1660455559502-8f71b47443c4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", size: "small" },
    { id: 8, title: "Temple Wedding Serenity", category: "Weddings", icon: <Camera size={16}/>, img: "https://plus.unsplash.com/premium_photo-1661893944387-1347f1b01f59?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", size: "small" },
  ];

  return (
    <div className="bg-[#0a1a14] min-h-screen font-serif pt-24 text-slate-100 selection:bg-emerald-500/30">
      
      {/* --- REIMAGINED ROYAL VEDAS HERO (EMERALD THEME) --- */}
      <section className="relative h-[95vh] w-full bg-[#050a08] overflow-hidden flex items-center">
        {/* Layered Background Architecture */}
        <div className="absolute inset-0 z-0 flex">
          <div className="relative w-full lg:w-[65%] h-full overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#050a08] via-transparent to-transparent z-10 opacity-80" />
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out" 
              alt="Hero Focus" 
            />
            {/* Status Indicator */}
            <div className="absolute top-12 left-12 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-white">Live Archive 2026</span>
            </div>
          </div>

          {/* Editorial Floating Panels */}
          <div className="hidden lg:flex w-[35%] h-[120%] -translate-y-[10%] gap-4 p-4 -ml-20 relative z-10">
            <div className="flex-1 h-full overflow-hidden rounded-[2vw] border border-white/10 relative group">
              <img src="https://images.unsplash.com/photo-1740416331524-7d40b988223b?q=80&w=387&auto=format&fit=crop" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-all duration-[1s]" alt="Detail 1"/>
              <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex-1 h-full overflow-hidden rounded-[2vw] border border-white/10 relative group translate-y-[15%]">
              <img src="https://images.unsplash.com/photo-1665960212625-3c6b274222ed?q=80&w=387&auto=format&fit=crop" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-all duration-[1s]" alt="Detail 2"/>
              <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Cinematic Content Overlay */}
        <div className="relative z-20 w-full px-6 md:px-24">
          <div className="max-w-6xl">
            <div className="inline-flex items-center gap-4 mb-6 translate-y-4 animate-[fade-in-up_0.8s_forwards]">
              <span className="h-[2px] w-12 bg-emerald-500" />
              <span className="text-emerald-500 font-sans font-black uppercase tracking-[0.5em] text-[11px]">Premium Production Studio</span>
            </div>
            <h1 className="text-white text-[12vw] lg:text-[10rem] font-black leading-[0.8] tracking-tighter mb-12 uppercase">
              ROYAL <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>VEDAS</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <div className="flex items-center gap-4">
                <button className="group relative bg-emerald-600 hover:bg-emerald-700 text-black px-10 py-5 rounded-xl font-sans font-black uppercase text-[10px] tracking-widest transition-all overflow-hidden flex items-center gap-3">
                  <LayoutGrid size={16} />
                  <span className="relative z-10">Open Archive</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                </button>
                {/* <button className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group hover:bg-white hover:text-black transition-all">
                  <Play size={20} className="fill-current group-hover:scale-110 transition-transform" />
                </button> */}
              </div>
              <div className="max-w-[280px] border-l-2 border-emerald-600/40 pl-6">
                <p className="text-gray-400 text-[11px] uppercase tracking-widest leading-relaxed font-bold font-sans">
                  Documenting the architectural symmetry and raw emotion of high-end Indian unions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Geographic Data */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 items-center text-white/20 uppercase font-black text-[10px] tracking-[0.8em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
          <span>Coordinates: 26.2183° N</span>
          <div className="h-24 w-[1px] bg-white/10" />
          <span>Gwalior • India</span>
        </div>
      </section>

      {/* --- REMAINDER OF PAGE (GALLERY LOGIC INTACT) --- */}
      <div className="sticky top-0 z-50 bg-[#050a08]/80 backdrop-blur-xl border-b border-white/5 px-12 md:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {["All", "Weddings", "Pre-Wedding", "Mehndi", "Portraits"].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] font-sans font-bold uppercase tracking-[0.3em] transition-all relative py-2 ${
                filter === cat ? "text-emerald-500" : "text-slate-500 hover:text-white"
              }`}
            >
              {cat}
              {filter === cat && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500" />}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-6 text-[10px] font-sans uppercase tracking-widest text-slate-400">
            <span className="flex items-center gap-2 cursor-pointer hover:text-emerald-500 transition-colors">
                <Search size={14}/> Search Archive
            </span>
        </div>
      </div>

      <section className="px-6 md:px-24 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[250px]">
          {cards.map((item, idx) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden bg-white/5 rounded-xl transition-all duration-700 hover:z-10
                ${item.size === 'tall' ? 'lg:col-span-3 lg:row-span-3' : ''}
                ${item.size === 'wide' ? 'lg:col-span-6 lg:row-span-2' : ''}
                ${item.size === 'small' ? 'lg:col-span-3 lg:row-span-2' : ''}
              `}
            >
              <img 
                src={item.img} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div 
                  className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700" 
                  style={{ clipPath: "polygon(0 75%, 100% 60%, 100% 100%, 0% 100%)" }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-emerald-500 mb-2 overflow-hidden">
                    <span className="transform -translate-x-10 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                        {item.icon}
                    </span>
                    <span className="text-[10px] font-sans uppercase tracking-[.4em] opacity-70">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <h3 className="text-lg md:text-xl font-bold leading-tight max-w-[80%] uppercase font-sans tracking-tighter">
                      {item.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full border border-emerald-500/50 flex items-center justify-center text-emerald-500 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                        <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6 text-[10px] font-sans font-bold text-white/20 group-hover:text-emerald-500/40 transition-colors">
                /0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-24 flex flex-col items-center gap-6">
          <div className="h-[1px] w-24 bg-emerald-500/30" />
          <button className="flex items-center gap-4 text-emerald-500 group">
            <span className="text-[11px] font-sans font-black uppercase tracking-[0.5em]">Explore More</span>
            <div className="p-4 rounded-full border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                <RotateCcw size={18} className="group-hover:rotate-180 transition-transform duration-700" />
            </div>
          </button>
        </div>
      </section>

      {/* Global Style Hooks */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PhotographyGallery;