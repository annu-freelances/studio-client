import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Minus,
  ChevronRight,
  Instagram,
  Play,
} from "lucide-react";

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "IVORY ELEGANCE",
      category: "Wedding",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
      size: "tall",
    },
    {
      id: 2,
      title: "VERDANT VOGUE",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200",
      size: "wide",
    },
    {
      id: 3,
      title: "NOIR LIGHT",
      category: "Cinematic",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
      size: "medium",
    },
    {
      id: 4,
      title: "GLAMOUR ARCHIVE",
      category: "Editorial",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
      size: "tall",
    },
    {
      id: 5,
      title: "THE CEREMONY",
      category: "Wedding",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200",
      size: "medium",
    },
    {
      id: 6,
      title: "URBAN KINETIC",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",
      size: "wide",
    },
  ];

  const categories = ["All", "Wedding", "Fashion", "Cinematic", "Editorial"];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-[#020617] text-slate-100 min-h-screen selection:bg-emerald-500/30">
      {/* GLOW OVERLAYS (Adds the "Light Green" Vibe) */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. IMMERSIVE HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Background "Ghost" Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <h2 className="text-[20vw] font-black text-emerald-500/[0.03] leading-none uppercase italic">
            Portfolio
          </h2>
        </div>

        <div className="relative z-10 max-w-screen-2xl w-full px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4 text-emerald-400 font-medium tracking-[0.4em] text-xs"></div>
            <h1 className="text-7xl md:text-9xl font-black  tracking-tighter leading-[0.85]">
              Visual <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-600 ">
                Anthem.
              </span>
            </h1>
            <p className="max-w-lg text-slate-400 text-lg md:text-xl leading-relaxed font-light">
              High-end editorial storytelling. We merge architectural precision
              with cinematic soul to define your unique legacy.
            </p>
            <div className="flex gap-6 pt-4">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all">
                Start a Project
              </button>
              <button className="flex items-center gap-3 group text-xs uppercase tracking-widest font-bold">
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Play size={14} fill="currentColor" />
                </span>
                Showreel 2026
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 mt-45 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                alt="Featured Portrait"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-500/50">
            Explore
          </span>
        </div>
      </section>

      {/* 2. MODERN CATEGORY FILTER */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 border-b border-white/5 ${
          isScrolled
            ? "bg-[#020617]/90 backdrop-blur-xl py-4"
            : "bg-transparent py-10"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center">
          <div className="hidden md:flex gap-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[11px] font-bold uppercase tracking-[0.25em] relative py-2 group ${
                  filter === cat ? "text-emerald-400" : "text-slate-500"
                }`}
              >
                {cat}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-emerald-500 transition-all duration-500 ${
                    filter === cat ? "w-full" : "w-0 group-hover:w-1/2"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-emerald-500 cursor-pointer">
            <span className="text-[11px] font-bold uppercase tracking-widest">
              Filter Archive
            </span>
            <ChevronRight size={14} />
          </div>
        </div>
      </nav>

      {/* 3. GALLERY SHOWCASE */}
      <section className="py-24 px-6">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 auto-rows-[300px]">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl bg-slate-900 transition-all duration-700
                ${item.size === "tall" ? "lg:col-span-4 lg:row-span-2" : ""}
                ${item.size === "wide" ? "lg:col-span-8 lg:row-span-1" : ""}
                ${item.size === "medium" ? "lg:col-span-4 lg:row-span-1" : ""}
              `}
            >
              <img
                src={item.image}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-emerald-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                  {item.category}
                </span>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold tracking-tighter uppercase">
                    {item.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED STORY SECTION */}
      <section className="py-32 bg-emerald-950/20 border-y border-white/5 px-6">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">
              The <span className=" text-emerald-500">Luminous</span> <br />{" "}
              Collection
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Every shot is a dialogue between the observer and the observed.
              For the 2026 Archive, we focused on "Natural Minimalism" —
              capturing the luxury of silence in busy spaces.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <p className="text-3xl font-black text-emerald-400">120+</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">
                  Global Shoots
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-400">08</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">
                  Awards Won
                </p>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1200"
              className="relative rounded-2xl z-10 grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Story"
            />
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8">
              Ready to be captured?
            </h3>
            <button className="bg-white text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-emerald-500 hover:text-white transition-all">
              Book the Studio
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-500">
          © SR Production Studio 2026
        </p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-emerald-500 transition-colors">
            <Instagram size={18} />
          </a>
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-500">
            Twitter / X
          </span>
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-500">
            Vimeo
          </span>
        </div>
      </footer>
    </div>
  );
};

export default GalleryPage;
