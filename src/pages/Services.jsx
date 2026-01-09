import React, { useState } from 'react';
import { 
  Camera, Film, Sparkles, Scissors, Clock, 
  ChevronRight, Calendar as CalendarIcon, CheckCircle2, 
  ArrowRight, Globe, ShieldCheck, Zap
} from 'lucide-react';

const ServicesPage = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const services = [
    {
      id: 'wedding',
      title: "Wedding Photography",
      description: "Documentary-style elegance for modern unions. Capturing the quiet whispers and the grand vows.",
      duration: "8-12 Hours",
      price: "From $3,500",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200"
    },
    {
      id: 'fashion',
      title: "Fashion / Editorial",
      description: "High-concept imagery for brands and individuals. Vogue-inspired lighting and architectural posing.",
      duration: "4-6 Hours",
      price: "From $2,200",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200"
    },
    {
      id: 'cinematic',
      title: "Cinematic Films",
      description: "4K Motion portraits and storytelling. We don't just record video; we produce a private cinema experience.",
      duration: "Full Production",
      price: "From $5,000",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200"
    },
    {
      id: 'post',
      title: "Post-Production",
      description: "Professional color grading and retouching. Giving your existing raw media the SR Production polish.",
      duration: "Per Project",
      price: "Custom Quote",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200"
    }
  ];

  const timeSlots = [
    { time: "09:00 AM", available: true },
    { time: "11:30 AM", available: false },
    { time: "02:00 PM", available: true },
    { time: "04:30 PM", available: true },
    { time: "07:00 PM", available: false },
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setStep(2);
    document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#050a08] text-white min-h-screen font-sans selection:bg-emerald-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-screen-2xl  relative z-10">
          <p className="text-emerald-500 tracking-[0.4em]  text-l mb-6 flex items-center gap-4">
            <span className="w-12 h-[3px] bg-emerald-500"></span> Visual Capabilities
          </p>
          <h1 className="text-7xl md:text-9xl font-black  tracking-tighter leading-[0.85] mb-8">
            Services <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-800  font-light">Defined.</span>
          </h1>
          <p className=" text-gray-400 text-lg md:text-xl leading-relaxed font-light">
            We offer more than photography. <br />
             We offer a curated production environment where every frame is treated as a piece of architectural art.
          </p>
        </div>
      </section>

      {/* 2. SERVICES SHOWCASE (Editorial Card Grid) */}
      <section className="py-24 px-6 md:px-12 bg-[#050a08]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative bg-[#0a1a14]/40 border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-700"
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-1/2 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4">{service.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed mb-6">{service.description}</p>
                    <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                      <span className="flex items-center gap-2"><Clock size={14} /> {service.duration}</span>
                      <span>{service.price}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleServiceSelect(service)}
                    className="mt-8 flex items-center justify-between w-full py-4 border-b border-white/10 group-hover:border-emerald-500 transition-colors"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] font-bold">Check Availability</span>
                    <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SMART APPOINTMENT UI */}
      <section id="booking-section" className="py-32 px-6 md:px-12 bg-[#0a1a14]/20 border-y border-white/5 relative">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">Book a Session</h2>
            <div className="flex justify-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
              <span className={step >= 1 ? "text-emerald-500" : ""}>01 Service</span>
              <span className="opacity-20">—</span>
              <span className={step >= 2 ? "text-emerald-500" : ""}>02 Date</span>
              <span className="opacity-20">—</span>
              <span className={step >= 3 ? "text-emerald-500" : ""}>03 Time</span>
            </div>
          </div>

          <div className="bg-[#050a08] border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl relative overflow-hidden">
             {/* Progress Glow */}
             <div className="absolute top-0 left-0 h-1 bg-emerald-500 transition-all duration-700" style={{ width: `${(step/4)*100}%` }} />

             {step === 1 && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-center py-10">
                 <h4 className="text-2xl mb-8 uppercase tracking-widest font-light">Select your journey</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map(s => (
                      <button 
                        key={s.id}
                        onClick={() => handleServiceSelect(s)}
                        className="p-6 border border-white/5 rounded-2xl hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all uppercase tracking-widest text-[10px]"
                      >
                        {s.title}
                      </button>
                    ))}
                 </div>
               </div>
             )}

             {step === 2 && (
               <div className="animate-in fade-in slide-in-from-right-4 duration-700 grid lg:grid-cols-2 gap-16">
                 <div>
                    <h4 className="text-2xl mb-6 uppercase tracking-widest flex items-center gap-3">
                      <CalendarIcon className="text-emerald-500" size={24} /> 
                      Select Date
                    </h4>
                    <div className="grid grid-cols-7 gap-2">
                       {/* Mock Calendar UI */}
                       {[...Array(31)].map((_, i) => (
                         <button 
                            key={i}
                            onClick={() => { setSelectedDate(i+1); setStep(3); }}
                            className={`aspect-square rounded-full flex items-center justify-center text-sm transition-all
                              ${i+1 === selectedDate ? 'bg-emerald-500 text-black font-bold scale-110 shadow-[0_0_20px_rgba(16,185,129,0.4)]' : 'hover:bg-white/10'}
                              ${(i+1) % 7 === 0 ? 'opacity-30 pointer-events-none' : ''}
                            `}
                         >
                           {i + 1}
                         </button>
                       ))}
                    </div>
                 </div>
                 <div className="flex flex-col justify-center border-l border-white/5 pl-16">
                    <p className="text-emerald-500 text-xs tracking-widest uppercase mb-2">Selected Service</p>
                    <h3 className="text-4xl font-bold uppercase mb-4">{selectedService?.title}</h3>
                    <button onClick={() => setStep(1)} className="text-[10px] text-gray-500 uppercase hover:text-white transition-colors">Change Service</button>
                 </div>
               </div>
             )}

             {step === 3 && (
               <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                 <h4 className="text-2xl mb-12 uppercase tracking-widest text-center">Available Time Slots</h4>
                 <div className="flex flex-wrap justify-center gap-4">
                    {timeSlots.map((slot, i) => (
                      <button 
                        key={i}
                        disabled={!slot.available}
                        onClick={() => { setSelectedSlot(slot.time); setStep(4); }}
                        className={`px-8 py-4 rounded-full border text-xs tracking-[0.2em] transition-all uppercase font-bold
                          ${!slot.available ? 'border-white/5 text-gray-700 cursor-not-allowed' : 'border-white/20 hover:border-emerald-500 hover:bg-emerald-500/10'}
                          ${selectedSlot === slot.time ? 'bg-emerald-500 text-black border-emerald-500' : ''}
                        `}
                      >
                        {slot.time} {!slot.available && "(Booked)"}
                      </button>
                    ))}
                 </div>
                 <div className="mt-12 text-center">
                    <button className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-500 pb-1 hover:text-emerald-500 hover:border-emerald-500 transition-all">
                      None of these work? Join the waitlist
                    </button>
                 </div>
               </div>
             )}

             {step === 4 && (
               <div className="animate-in zoom-in-95 duration-700 text-center py-10">
                 <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/50">
                    <CheckCircle2 size={40} className="text-emerald-500" />
                 </div>
                 <h3 className="text-4xl font-bold uppercase mb-4 tracking-tighter">Request Received</h3>
                 <p className="text-gray-400 max-w-md mx-auto mb-10 font-light">
                   We have reserved the <span className="text-white font-bold">{selectedSlot}</span> slot on <span className="text-white font-bold">Oct {selectedDate}, 2026</span> for your <span className="text-white font-bold">{selectedService?.title}</span>. A producer will contact you within 2 hours.
                 </p>
                 <button 
                   onClick={() => setStep(1)}
                   className="bg-emerald-600 hover:bg-emerald-500 text-black px-12 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all"
                 >
                   Back to Home
                 </button>
               </div>
             )}
          </div>
        </div>
      </section>

      {/* 4. TRUST & VALUE SECTION */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
              <Zap size={24} />
            </div>
            <h4 className="text-xl font-bold uppercase tracking-tight">Rapid Turnaround</h4>
            <p className="text-gray-500 text-sm leading-relaxed">High-end editing shouldn't take months. Receive your cinematic preview within 48 hours of the shoot.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
              <Globe size={24} />
            </div>
            <h4 className="text-xl font-bold uppercase tracking-tight">Worldwide Travel</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Based in London, available globally. Our team is equipped for destination shoots across all continents.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
              <ShieldCheck size={24} />
            </div>
            <h4 className="text-xl font-bold uppercase tracking-tight">Premium Gear</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Utilizing RED Digital Cinema and Leica optics to ensure every pixel carries a timeless texture.</p>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-40 px-6 bg-gradient-to-b from-transparent to-[#0a1a14] text-center">
        <div className="max-w-4xl mx-auto relative">
           <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full" />
           <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 relative z-10">
             Your story <br /> <span className="text-emerald-500">deserves</span> precision.
           </h2>
           <button className="group relative bg-white text-black px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] overflow-hidden transition-all hover:pr-20">
             <span className="relative z-10 flex items-center gap-4">
               Let's Collaborate <ArrowRight size={16} />
             </span>
           </button>
        </div>
      </section>

      
    </div>
  );
};

export default ServicesPage;