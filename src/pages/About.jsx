import React, { useEffect, useState } from 'react';
import { 
  Plus, ArrowRight, Quote, Award, 
  MapPin, Camera, Sparkles, Target 
} from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    { title: "Craftsmanship", desc: "Every pixel is handled with architectural precision.", icon: <Camera size={20} /> },
    { title: "Authenticity", desc: "We favor raw emotion over staged perfection.", icon: <Sparkles size={20} /> },
    { title: "Legacy", desc: "Creating visuals that feel relevant 50 years from today.", icon: <Target size={20} /> },
    { title: "Discretion", desc: "A seamless, quiet presence in high-stakes environments.", icon: <Award size={20} /> }
  ];

  const processSteps = [
    { id: "01", title: "Discover", desc: "We dive into your narrative, understanding the 'why' behind the vision." },
    { id: "02", title: "Design", desc: "Mapping the aesthetic, lighting, and cinematic direction." },
    { id: "03", title: "Capture", desc: "The quiet execution. Preserving moments with high-end optics." },
    { id: "04", title: "Refine", desc: "Precision color grading and retouching to achieve the SR look." }
  ];

  return (
    <div className="bg-[#050a08] text-white min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* 1. HERO SECTION - THE STUDIO */}
      <section className="relative pt-48 pb-32 px-6 md:px-12 border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-screen-2xl text-center mx-auto relative z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-emerald-500 tracking-[0.5em] uppercase text-[12px] font-black mb-8 flex items-center gap-4">
              <span className="w-12 h-[3px] bg-emerald-500"></span> Behind the lens
            </p>
            <h1 className="text-6xl md:text-[13rem] font-black uppercase tracking-tighter leading-[0.8] mb-12">
              SR. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 to-emerald-800 lowercase font-light">Studio.</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-16">
              <p className="max-w-xl text-gray-400 text-lg md:text-2xl leading-relaxed font-light italic border-l-2 border-emerald-500/30 pl-8">
                "We don’t capture moments. We preserve the underlying meaning of life’s most profound narratives."
              </p>
              <div className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold border border-white/10 px-6 py-4 rounded-full">
                Est. Bhopal 2024 — Worldwide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative group">
          <div className="rounded-[40px] overflow-hidden aspect-[3/4] border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1554080353-a576cf803bda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110" 
              alt="Studio vibe" 
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-emerald-950 p-10 rounded-3xl hidden md:block">
             <Quote className="text-emerald-500 mb-4" size={32} />
             <p className="text-sm font-bold tracking-widest uppercase">Legacy over <br /> moments.</p>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-12">
          <h2 className="text-4xl md:text-6xl font-black lowercase tracking-tighter leading-none">
            Our Vision is <br /> 
            <span className="text-emerald-500 lowercase">Emotion Over Perfection.</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
            <p>
              Founded on the principle that modern imagery has become too sterile, <span className="text-white font-medium italic">SR Production</span> was born to bring back the cinematic soul. We use light as a sculptor and shadow as a storyteller.
            </p>
            <p>
              Whether it's a high-fashion editorial or a private union, we treat every frame with the same architectural gravity as a feature film.
            </p>
          </div>
          <button className="flex items-center gap-4 text-emerald-400 font-bold  text-xs tracking-[0.4em] group">
            Our Portfolio <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
          </button>
        </div>
      </section>

      {/* 3. CREATIVE DIRECTOR SECTION */}
      /* 3. CREATIVE DIRECTOR SECTION */
<section className="py-32 bg-[#0a1a14]/30 border-y border-white/5 relative">
  <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      
      <div className="order-2 lg:order-1">
        <span className="text-emerald-500 font-serif text-3xl block mb-6">
          Founder & Lead Photographer
        </span>

        <h3 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
          Shivam<br /> Rajak
        </h3>

        <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-lg">
          Shivam Rajak is the creative force behind <span className="text-white italic">SR Production</span>,
          a studio dedicated to capturing royal wedding stories with emotional depth and cinematic finesse.
          Known for his eye for traditional details and authentic moments, Shivam blends culture,
          emotion, and storytelling into timeless visual memories.
        </p>

        <div className="flex gap-10 border-t border-white/10 pt-10">
          <div>
            <p className="text-3xl font-black uppercase">300+</p>
            <p className="text-[10px] uppercase tracking-widest text-emerald-500/60 font-bold">
              Weddings Covered
            </p>
          </div>

          <div>
            <p className="text-3xl font-black uppercase">10+</p>
            <p className="text-[10px] uppercase tracking-widest text-emerald-500/60 font-bold">
              States Across India
            </p>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-full border-4 border-emerald-500/20 group">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200"
            className="w-full object-top h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            alt="Shivam Rajak - SR Production"
          />
          <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
        </div>
      </div>

    </div>
  </div>
</section>


      {/* 4. PROCESS & APPROACH */}
      <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="text-center mb-24">
           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">The Approach</h2>
           <p className="text-emerald-500 uppercase tracking-[0.5em] text-[10px] mt-4 font-bold">How we build your legacy</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {processSteps.map((step, i) => (
             <div key={i} className="p-10 border border-white/5 bg-white/[0.02] rounded-[32px] hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all duration-500 group">
                <span className="text-4xl font-serif italic text-emerald-500/30 group-hover:text-emerald-500 transition-colors block mb-8">{step.id}</span>
                <h4 className="text-xl font-bold uppercase tracking-widest mb-4">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{step.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 5. VALUES GRID */}
      <section className="py-32 bg-[#0a1a14]/50">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-16">
           {values.map((v, i) => (
             <div key={i} className="space-y-6">
                <div className="text-emerald-500">{v.icon}</div>
                <h5 className="text-xs uppercase tracking-[0.4em] font-black">{v.title}</h5>
                <p className="text-gray-500 text-[13px] leading-relaxed italic">"{v.desc}"</p>
             </div>
           ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-48 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/5 blur-[150px] rounded-full translate-y-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">
            Let’s Preserve <br /> <span className="text-emerald-500">Meaning.</span>
          </h2>
          <button className="bg-white text-black px-16 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-emerald-500 hover:text-white transition-all transform active:scale-95">
             Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;