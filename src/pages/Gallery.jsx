import React, { useState, useEffect, useCallback, useRef, useContext } from "react";
import {
  Search,
  Camera,
  Star,
  Heart,
  Image as ImageIcon,
  LayoutGrid,
  X,
  ChevronRight,
  ChevronLeft,
  Maximize2,
} from "lucide-react";
import { ThemeContext } from '../context/themeProvider'; // Ensure path is correct

const PhotographyGallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const galleryRef = useRef(null);
  
  // 1. Access Theme
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  // --- DATA ---
  const cards = [
    {
      id: 1,
      title: "The Royal Groom's Procession",
      category: "Weddings",
      location: "Udaipur Palace",
      date: "Oct 2025",
      icon: <Star size={16} />,
      img: "https://images.unsplash.com/photo-1665960212625-3c6b274222ed?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "tall",
    },
    {
      id: 2,
      title: "Golden Hour Haldi Rituals",
      category: "Pre-Wedding",
      location: "Jaipur Fort",
      date: "Nov 2025",
      icon: <ImageIcon size={16} />,
      img: "https://images.unsplash.com/photo-1740416331524-7d40b988223b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "small",
    },
    {
      id: 3,
      title: "Symmetry of Henna Art",
      category: "Mehndi",
      location: "Oberoi Udaivilas",
      date: "Dec 2025",
      icon: <Heart size={16} />,
      img: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800",
      size: "small",
    },
    {
      id: 4,
      title: "The Eternal Phere",
      category: "Ceremonies",
      location: "Rishikesh Ghats",
      date: "Jan 2026",
      icon: <Camera size={16} />,
      img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800",
      size: "wide",
    },
    {
      id: 5,
      title: "Vibrant Sangeet Nights",
      category: "Celebrations",
      location: "Taj Lands End",
      date: "Jan 2026",
      icon: <Star size={16} />,
      img: "https://images.unsplash.com/photo-1766763845299-32226a613f22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxoaW5kdSUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
      size: "small",
    },
    {
      id: 6,
      title: "A Regal Bridal Portrait",
      category: "Portraits",
      location: "City Palace",
      date: "Feb 2026",
      icon: <ImageIcon size={16} />,
      img: "https://images.unsplash.com/photo-1600685912448-8bc35c141e18?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "tall",
    },
    {
      id: 7,
      title: "Candid Family Joys",
      category: "Candid",
      location: "Home Garden",
      date: "Feb 2026",
      icon: <Heart size={16} />,
      img: "https://images.unsplash.com/photo-1660455559502-8f71b47443c4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "small",
    },
    {
      id: 8,
      title: "Temple Wedding Serenity",
      category: "Weddings",
      location: "Madurai Temple",
      date: "Mar 2026",
      icon: <Camera size={16} />,
      img: "https://plus.unsplash.com/premium_photo-1661893944387-1347f1b01f59?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "small",
    },
  ];

  // --- LOGIC ---

  // Scroll to gallery
  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle Image Selection with Animation Trigger
  const handleSelectImage = (img) => {
    setIsAnimating(true);
    setSelectedImage(img);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = cards.findIndex((c) => c.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % cards.length;
    handleSelectImage(cards[nextIndex]);
  }, [selectedImage, cards]);

  const handlePrev = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = cards.findIndex((c) => c.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    handleSelectImage(cards[prevIndex]);
  }, [selectedImage, cards]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handleNext, handlePrev]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "unset";
  }, [selectedImage]);

  // Filter Related Images
  const getRelatedImages = (current) => {
    if (!current) return [];
    const sameCat = cards.filter(
      (c) => c.category === current.category && c.id !== current.id,
    );
    const others = cards.filter((c) => c.category !== current.category);
    return [...sameCat, ...others].slice(0, 5);
  };

  const relatedImages = getRelatedImages(selectedImage);

  return (
    <div className={`min-h-screen font-serif pt-24 transition-colors duration-500 selection:bg-emerald-500/30 ${
        isDark ? 'bg-[#0a1a14] text-slate-100' : 'bg-neutral-50 text-neutral-900'
    }`}>
      {/* --- HERO SECTION --- */}
      <section className={`relative h-[95vh] w-full overflow-hidden flex items-center transition-colors duration-500 ${
        isDark ? 'bg-[#050a08]' : 'bg-neutral-100'
      }`}>
        <div className="absolute inset-0 z-0 flex">
          <div className="relative w-full lg:w-[65%] h-full overflow-hidden group">
            {/* Gradient Overlay: Keeps dark logic for image legibility even in light mode, but lighter edge */}
            <div className={`absolute inset-0 z-10 opacity-80 bg-gradient-to-r ${
                isDark 
                    ? 'from-[#050a08] via-transparent to-transparent' 
                    : 'from-neutral-100 via-transparent to-transparent'
            }`} />
            
            {/* HERO IMAGE: Logic Updated for Light Mode Color */}
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200"
              className={`w-full h-full object-cover transition-all duration-[1.5s] ease-out ${
                isDark 
                  ? 'grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105' 
                  : 'group-hover:scale-105' // LIGHT MODE: No grayscale, full color initially
              }`}
              alt="Hero"
            />

            <div className="absolute top-12 left-12 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-white">
                Live Archive 2026
              </span>
            </div>
          </div>
          <div className="hidden lg:flex w-[35%] h-[120%] -translate-y-[10%] gap-4 p-4 -ml-20 relative z-10">
            <div className={`flex-1 h-full overflow-hidden rounded-[2vw] border relative group ${
                isDark ? 'border-white/10' : 'border-white/50 shadow-2xl'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1740416331524-7d40b988223b?q=80&w=387&auto=format&fit=crop"
                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-all duration-[1s]"
                alt="Detail 1"
              />
            </div>
            <div className={`flex-1 h-full overflow-hidden rounded-[2vw] border relative group translate-y-[15%] ${
                isDark ? 'border-white/10' : 'border-white/50 shadow-2xl'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1665960212625-3c6b274222ed?q=80&w=387&auto=format&fit=crop"
                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-all duration-[1s]"
                alt="Detail 2"
              />
            </div>
          </div>
        </div>
        <div className="relative z-20 w-full px-6 md:px-24">
          <div className="max-w-6xl">
            <div className="inline-flex items-center gap-4 mb-6 translate-y-4 animate-[fade-in-up_0.8s_forwards]">
              <span className="h-[2px] w-12 bg-emerald-500" />
              <span className="text-emerald-500 font-sans font-black uppercase tracking-[0.5em] text-[11px]">
                Premium Production Studio
              </span>
            </div>
            {/* Title Stroke Logic */}
            <h1 className={`text-[12vw] lg:text-[10rem] font-black leading-[0.8] tracking-tighter mb-12 uppercase ${
                isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              ROYAL <br />
              <span
                className="text-transparent"
                style={{ 
                    WebkitTextStroke: isDark ? "2px rgba(255,255,255,0.2)" : "2px rgba(0,0,0,0.1)" 
                }}
              >
                VEDAS
              </span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <button
                onClick={scrollToGallery}
                className="group relative bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-xl font-sans font-black uppercase text-[10px] tracking-widest transition-all overflow-hidden flex items-center gap-3 cursor-pointer shadow-lg hover:shadow-emerald-500/20"
              >
                <LayoutGrid size={16} />
                <span className="relative z-10">Open Archive</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FILTER & SEARCH --- */}
      <div
        ref={galleryRef}
        className={`sticky top-0 z-40 backdrop-blur-xl border-b px-12 md:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-6 transition-colors duration-500 ${
            isDark 
                ? 'bg-[#050a08]/80 border-white/5' 
                : 'bg-white/80 border-neutral-200 shadow-sm'
        }`}
      >
        <div className="flex gap-8 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {["All", "Weddings", "Pre-Wedding", "Mehndi", "Portraits"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] font-sans font-bold uppercase tracking-[0.3em] transition-all relative py-2 ${
                    filter === cat 
                        ? "text-emerald-500" 
                        : isDark ? "text-slate-500 hover:text-white" : "text-neutral-400 hover:text-neutral-900"
                }`}
              >
                {cat}
                {filter === cat && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500" />
                )}
              </button>
            ),
          )}
        </div>
      </div>

      {/* --- MAIN GRID --- */}
      <section className="px-6 md:px-24 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[250px]">
          {cards
            .filter((c) => filter === "All" || c.category === filter)
            .map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectImage(item)}
                className={`group relative overflow-hidden rounded-xl transition-all duration-700 hover:z-10 cursor-pointer border hover:border-emerald-500/50 ${
                  isDark 
                    ? 'bg-white/5 border-white/5' 
                    : 'bg-white border-neutral-200 shadow-sm hover:shadow-xl'
                }
                ${item.size === "tall" ? "lg:col-span-3 lg:row-span-3" : ""}
                ${item.size === "wide" ? "lg:col-span-6 lg:row-span-2" : ""}
                ${item.size === "small" ? "lg:col-span-3 lg:row-span-2" : ""}
              `}
              >
                {/* GALLERY IMAGE: Logic Updated for Light Mode Color */}
                <img
                  src={item.img}
                  className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
                    isDark 
                      ? 'opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 group-hover:scale-105' 
                      : 'opacity-100 group-hover:scale-105' // LIGHT MODE: Full opacity, Full color, Scale only
                  }`}
                  alt={item.title}
                />
                
                {/* Overlay remains dark for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-emerald-500 text-[10px] uppercase tracking-widest block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif text-xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* --- REIMAGINED THEATER MODE (PAGE VIEW) --- */}
      {/* ========================================================= */}

      {selectedImage && (
        <div className={`fixed inset-0 z-[100] flex flex-col animate-[fade-in_0.3s_ease-out] ${
            isDark ? 'bg-[#050a08]' : 'bg-neutral-50'
        }`}>
          {/* 1. Ambient Background (Blurred version of current image) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
            <img
              src={selectedImage.img}
              className={`w-full h-full object-cover blur-[100px] scale-150 transition-opacity duration-700 ${isAnimating ? "opacity-0" : "opacity-100"}`}
              alt="Ambient"
            />
            {/* Overlay to ensure UI contrast */}
            <div className={`absolute inset-0 ${isDark ? 'bg-black/60' : 'bg-white/80'}`} />
          </div>

          {/* 2. Top Bar (Tools) */}
          <div className={`relative z-50 flex justify-between items-center px-8 py-6 w-full ${
            isDark ? 'bg-gradient-to-b from-black/80 to-transparent' : 'bg-gradient-to-b from-white to-transparent'
          }`}>
            <div className={`flex items-center gap-4 text-[10px] uppercase tracking-widest font-sans ${
                isDark ? 'text-white/50' : 'text-neutral-500'
            }`}>
              <span className="text-emerald-500">Royal Vedas Archive</span>
              <span className={`h-3 w-[1px] ${isDark ? 'bg-white/20' : 'bg-neutral-300'}`} />
              <span>{selectedImage.date}</span>
            </div>

            {/* Only Close Button remains */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSelectedImage(null)}
                className={`p-3 rounded-full transition-all duration-300 ml-4 group ${
                    isDark 
                        ? 'bg-white/10 hover:bg-emerald-600 text-white' 
                        : 'bg-neutral-200 hover:bg-emerald-600 text-neutral-900 hover:text-white'
                }`}
              >
                <X
                  size={20}
                  className="group-hover:rotate-90 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* 3. Main Stage (The "Grown Up" Image) */}
          <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden px-4 md:px-12 py-4">
            {/* Left Nav Area */}
            <div
              className="absolute left-0 top-0 bottom-0 w-24 z-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <ChevronLeft size={40} className={`drop-shadow-lg ${isDark ? 'text-white' : 'text-neutral-800'}`} />
            </div>

            {/* The Image */}
            <div
              className={`relative h-full w-full max-w-[90vw] flex flex-col items-center justify-center transition-all duration-500 ease-out ${isAnimating ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"}`}
            >
              <img
                src={selectedImage.img}
                className={`max-h-[75vh] w-auto h-auto max-w-full object-contain ${
                    isDark 
                        ? 'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]' 
                        : 'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]'
                }`}
                alt={selectedImage.title}
              />

              {/* Floating Caption inside the stage */}
              <div className="mt-6 text-center">
                <h2 className={`text-3xl md:text-5xl font-serif tracking-tight mb-2 ${
                    isDark ? 'text-white' : 'text-neutral-900'
                }`}>
                  {selectedImage.title}
                </h2>
                <div className="flex items-center justify-center gap-3 text-emerald-500/80 text-xs font-sans uppercase tracking-[0.2em]">
                  {selectedImage.icon}
                  <span>{selectedImage.location}</span>
                </div>
              </div>
            </div>

            {/* Right Nav Area */}
            <div
              className="absolute right-0 top-0 bottom-0 w-24 z-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight size={40} className={`drop-shadow-lg ${isDark ? 'text-white' : 'text-neutral-800'}`} />
            </div>
          </div>

          {/* 4. The "Related Deck" (Bottom Strip) */}
          <div className={`relative z-50 h-[180px] w-full border-t flex flex-col ${
            isDark 
                ? 'bg-[#050a08]/90 border-white/5' 
                : 'bg-white/95 border-neutral-200'
          }`}>
            {/* Deck Header */}
            <div className={`px-10 py-3 flex justify-between items-center border-b ${
                isDark ? 'border-white/5' : 'border-neutral-100'
            }`}>
              <div className="flex items-center gap-2">
                <LayoutGrid size={14} className="text-emerald-500" />
                <span className={`text-[10px] font-bold font-sans uppercase tracking-[0.3em] ${
                    isDark ? 'text-white/60' : 'text-neutral-500'
                }`}>
                  Next in {selectedImage.category}
                </span>
              </div>
              <div className={`hidden md:flex gap-4 text-[10px] uppercase tracking-widest ${
                 isDark ? 'text-white/30' : 'text-neutral-400'
              }`}>
                <span>Use Arrow Keys</span>
                <span className="border border-current px-1 rounded">←</span>
                <span className="border border-current px-1 rounded">→</span>
              </div>
            </div>

            {/* Deck Scroller */}
            <div className="flex-1 overflow-x-auto no-scrollbar flex items-center px-10 gap-4">
              {relatedImages.map((img, idx) => (
                <div
                  key={img.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectImage(img);
                  }}
                  className={`relative group flex-shrink-0 h-24 w-40 cursor-pointer overflow-hidden rounded-sm border hover:border-emerald-500 transition-all duration-300 ${
                      isDark ? 'border-white/10' : 'border-neutral-200'
                  }`}
                >
                  <img
                    src={img.img}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    alt="rel"
                  />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 p-1 rounded-full backdrop-blur-sm">
                      <Maximize2 size={12} className="text-white" />
                    </div>
                  </div>

                  <span className="absolute bottom-1 right-1 text-[8px] font-mono text-white/80 bg-black/40 px-1 rounded">
                    0{idx + 1}
                  </span>
                </div>
              ))}

              {/* End Card - View All */}
              <div
                onClick={() => setSelectedImage(null)}
                className={`h-24 w-24 flex flex-col items-center justify-center border transition-all cursor-pointer rounded-sm ml-4 hover:text-emerald-500 hover:border-emerald-500/30 ${
                    isDark 
                        ? 'border-white/5 text-white/20' 
                        : 'border-neutral-200 text-neutral-400'
                }`}
              >
                <span className="text-[9px] uppercase tracking-widest text-center leading-tight">
                  View
                  <br />
                  All
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Style Hooks */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default PhotographyGallery;