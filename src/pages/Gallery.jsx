import React, { useState, useEffect } from "react";
import { Search, Camera, Star, Heart, RotateCcw, Image as ImageIcon, ArrowUpRight } from "lucide-react";

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
    <div className="bg-[#050a08] min-h-screen pt-24 font-serif text-slate-100 selection:bg-emerald-500/30">
      
      {/* --- HERO SECTION (MAINTAINED) --- */}
      <section className="relative h-[85vh] overflow-hidden flex items-center bg-emerald-950">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full relative">
            <div className="absolute inset-0 bg-emerald-950/40 z-10" />
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200" className="w-full h-full object-cover" alt="Main" />
          </div>
          <div className="w-1/4 h-full -ml-32 skew-x-[-12deg] border-l-[12px] border-emerald-950 overflow-hidden relative">
             <img src="https://images.unsplash.com/photo-1740416331524-7d40b988223b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover skew-x-[12deg] scale-150" alt="Side 1"/>
          </div>
          <div className="w-1/4 h-full -ml-32 skew-x-[-12deg] border-l-[12px] border-emerald-950 overflow-hidden relative">
             <img src="https://images.unsplash.com/photo-1665960212625-3c6b274222ed?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover skew-x-[12deg] scale-150" alt="Side 2"/>
          </div>
        </div>
        
        <div className="relative z-20 px-12 md:px-24 max-w-4xl">
          <span className="text-emerald-400 font-sans tracking-[0.4em] text-xs uppercase mb-4 block">Capturing Timeless Love</span>
          <h1 className="text-white text-6xl md:text-8xl font-light leading-[0.9] mb-8 tracking-tighter">
            INDIAN <br />
            <span className="font-bold text-emerald-400 italic">WEDDINGS</span>
          </h1>
          <div className="flex gap-4">
            <button className="bg-emerald-500 text-emerald-950 px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
              Book Studio
            </button>
          </div>
        </div>
      </section>

      {/* --- MODERN FILTER BAR --- */}
      <div className="sticky top-0 z-50 bg-[#050a08]/80 backdrop-blur-xl border-b border-white/5 px-12 md:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {["All", "Weddings", "Pre-Wedding", "Mehndi", "Portraits"].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] font-sans font-bold uppercase tracking-[0.3em] transition-all relative py-2 ${
                filter === cat ? "text-emerald-400" : "text-slate-500 hover:text-white"
              }`}
            >
              {cat}
              {filter === cat && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500" />}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-6 text-[10px] font-sans uppercase tracking-widest text-slate-400">
            <span className="flex items-center gap-2 cursor-pointer hover:text-emerald-400 transition-colors">
                <Search size={14}/> Search Archive
            </span>
        </div>
      </div>

      {/* --- MODERN GALLERY GRID --- */}
      <section className="px-6 md:px-24 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[250px]">
          {cards.map((item, idx) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden bg-emerald-900/10 rounded-xl transition-all duration-700 hover:z-10
                ${item.size === 'tall' ? 'lg:col-span-3 lg:row-span-3' : ''}
                ${item.size === 'wide' ? 'lg:col-span-6 lg:row-span-2' : ''}
                ${item.size === 'small' ? 'lg:col-span-3 lg:row-span-2' : ''}
              `}
            >
              {/* Image with Parallax Scale */}
              <img 
                src={item.img} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0" 
                alt={item.title} 
              />
              
              {/* Slanted Glassmorphism Overlay (Matching Figma aesthetic but modern) */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                {/* The "Figma Slant" using a clip-path */}
                <div 
                  className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700" 
                  style={{ clipPath: "polygon(0 75%, 100% 60%, 100% 100%, 0% 100%)" }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2 overflow-hidden">
                    <span className="transform -translate-x-10 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                        {item.icon}
                    </span>
                    <span className="text-[10px] font-sans uppercase tracking-[.4em] opacity-70">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <h3 className="text-lg md:text-xl font-bold leading-tight max-w-[80%]">
                      {item.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full border border-emerald-500/50 flex items-center justify-center text-emerald-400 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                        <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Counter for grid feel */}
              <div className="absolute top-6 right-6 text-[10px] font-sans font-bold text-white/20 group-hover:text-emerald-500/40 transition-colors">
                /0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* --- LOAD MORE --- */}
        <div className="mt-24 flex flex-col items-center gap-6">
          <div className="h-[1px] w-24 bg-emerald-500/30" />
          <button className="flex items-center gap-4 text-emerald-400 group">
            <span className="text-[11px] font-sans font-black uppercase tracking-[0.5em]">Explore More</span>
            <div className="p-4 rounded-full border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-emerald-950 transition-all duration-500">
                <RotateCcw size={18} className="group-hover:rotate-180 transition-transform duration-700" />
            </div>
          </button>
        </div>
      </section>


      {/* --- CUSTOM SCROLLBAR CSS --- */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default PhotographyGallery;