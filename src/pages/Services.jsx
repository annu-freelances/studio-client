import React, { useState, useContext } from 'react';
import { 
  Clock, ChevronRight, Calendar as CalendarIcon, CheckCircle2, 
  ArrowRight, Globe, ShieldCheck, Zap, Sparkles 
} from 'lucide-react';
import { ThemeContext } from '../context/themeProvider'; // Ensure path is correct

const ServicesPage = () => {
  const [bookingData, setBookingData] = useState({
    service: null,
    date: null,
    slot: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // 1. Access Theme
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const services = [
    {
      id: 'wedding',
      title: "Wedding Photography",
      description: "Documentary-style elegance for modern unions.",
      duration: "8-12 Hours",
      price: "$3,500",
      image: "https://images.unsplash.com/photo-1740416331524-7d40b988223b?q=80&w=387&auto=format&fit=crop"
    },
    {
      id: 'fashion',
      title: "Fashion / Editorial",
      description: "High-concept imagery with Vogue-inspired lighting.",
      duration: "4-6 Hours",
      price: "$2,200",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200"
    },
    {
      id: 'cinematic',
      title: "Cinematic Films",
      description: "4K Motion portraits and private cinema experiences.",
      duration: "Full Production",
      price: "$5,000",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200"
    },
    {
      id: 'post',
      title: "Post-Production",
      description: "Professional color grading and master retouching.",
      duration: "Per Project",
      price: "Custom",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200"
    }
  ];

  const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "07:00 PM"];

  const handleServiceClick = (s) => {
    setBookingData({ ...bookingData, service: s });
    document.getElementById('booking-engine').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFinalSubmit = () => {
    if (bookingData.service && bookingData.date && bookingData.slot) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-emerald-500/30 transition-colors duration-500 ${
        isDark ? 'bg-[#0a1a14] text-white' : 'bg-neutral-50 text-neutral-900'
    }`}>
      
      {/* 1. EDITORIAL SERVICES GRID */}
      <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service) => (
          <div key={service.id} className={`group relative border rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-700 ${
              isDark 
                ? 'bg-[#0a1a14]/40 border-white/5' 
                : 'bg-white border-neutral-200 shadow-sm hover:shadow-xl'
          }`}>
            <div className="flex flex-col lg:flex-row h-full">
              <div className="lg:w-1/2 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">{service.title}</h3>
                  <p className={`text-sm font-light leading-relaxed mb-6 ${
                      isDark ? 'text-gray-400' : 'text-neutral-500'
                  }`}>{service.description}</p>
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-emerald-500 font-bold">
                    <span className="flex items-center gap-1"><Clock size={12} /> {service.duration}</span>
                    <span>From {service.price}</span>
                  </div>
                </div>
                <button onClick={() => handleServiceClick(service)} className={`mt-8 flex items-center justify-between w-full py-4 border-b group-hover:border-emerald-500 transition-colors ${
                    isDark ? 'border-white/10' : 'border-neutral-100'
                }`}>
                  <span className="text-xs uppercase tracking-widest font-bold">Reserve Session</span>
                  <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 2. MODERN RESERVATION ENGINE */}
      <section id="booking-engine" className={`py-32 px-6 md:px-12 border-y transition-colors duration-500 ${
          isDark 
            ? 'bg-[#0a1a14]/20 border-white/5' 
            : 'bg-neutral-100 border-neutral-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          {!isSubmitted ? (
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Interaction Left Column */}
              <div className="lg:col-span-8 space-y-10">
                <div>
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Book Your <span className="text-emerald-500">Slot</span></h2>
                  <p className="text-emerald-500/70 uppercase text-xs tracking-[0.3em]">Precision Scheduling • Real-time Availability</p>
                </div>

                {/* Step 1: Service Quick Pick */}
                <div className={`border rounded-[32px] p-8 ${
                    isDark ? 'bg-[#050a08] border-white/5' : 'bg-white border-neutral-200 shadow-sm'
                }`}>
                  <h3 className="text-xs uppercase tracking-widest text-emerald-500 mb-6 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-emerald-500"></span> 01. Select Production
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {services.map(s => (
                      <button 
                        key={s.id}
                        onClick={() => setBookingData({...bookingData, service: s})}
                        className={`p-4 rounded-2xl border text-[10px] uppercase font-bold tracking-widest transition-all ${
                          bookingData.service?.id === s.id 
                            ? 'bg-emerald-500 text-black border-emerald-500' 
                            : isDark 
                                ? 'bg-white/5 border-white/5 text-gray-400 hover:border-white/20' 
                                : 'bg-neutral-50 border-neutral-100 text-neutral-500 hover:border-emerald-500 hover:text-emerald-600'
                        }`}
                      >
                        {s.title.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2 & 3: Calendar & Time */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className={`border rounded-[32px] p-8 ${
                      isDark ? 'bg-[#050a08] border-white/5' : 'bg-white border-neutral-200 shadow-sm'
                  }`}>
                    <h3 className="text-xs uppercase tracking-widest text-emerald-500 mb-6 flex items-center gap-2">
                      <CalendarIcon size={14} /> 02. Date
                    </h3>
                    <div className="grid grid-cols-7 gap-1">
                      {[...Array(28)].map((_, i) => (
                        <button 
                          key={i}
                          onClick={() => setBookingData({...bookingData, date: i+1})}
                          className={`aspect-square rounded-full flex items-center justify-center text-xs transition-all ${
                            bookingData.date === i+1 
                                ? 'bg-emerald-500 text-black font-bold' 
                                : isDark 
                                    ? 'text-gray-500 hover:bg-white/10' 
                                    : 'text-neutral-400 hover:bg-emerald-50 hover:text-emerald-600'
                          }`}
                        >
                          {i+1}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={`border rounded-[32px] p-8 ${
                       isDark ? 'bg-[#050a08] border-white/5' : 'bg-white border-neutral-200 shadow-sm'
                  }`}>
                    <h3 className="text-xs uppercase tracking-widest text-emerald-500 mb-6 flex items-center gap-2">
                      <Clock size={14} /> 03. Time
                    </h3>
                    <div className="space-y-2">
                      {timeSlots.map(slot => (
                        <button 
                          key={slot}
                          onClick={() => setBookingData({...bookingData, slot: slot})}
                          className={`w-full py-3 px-6 rounded-xl border text-left text-[10px] uppercase font-bold tracking-widest transition-all ${
                            bookingData.slot === slot 
                                ? 'bg-emerald-500 border-emerald-500 text-black' 
                                : isDark 
                                    ? 'bg-white/5 border-white/5 text-gray-500 hover:border-emerald-500/50' 
                                    : 'bg-neutral-50 border-neutral-100 text-neutral-500 hover:border-emerald-500 hover:text-emerald-600'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky Booking Ledger */}
              <div className="lg:col-span-4 sticky top-12">
                <div className="bg-emerald-200 rounded-[40px] p-10 text-black relative overflow-hidden shadow-2xl">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-black/5 rounded-full" />
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 opacity-60">Session Summary</h4>
                  
                  <div className="space-y-6 mb-12">
                    <div className="border-b border-black/10 pb-4">
                      <p className="text-[9px] uppercase font-black opacity-40 mb-1">Production Type</p>
                      <p className="text-xl font-bold uppercase tracking-tighter">{bookingData.service?.title || "—"}</p>
                    </div>
                    <div className="border-b border-black/10 pb-4">
                      <p className="text-[9px] uppercase font-black opacity-40 mb-1">Schedule</p>
                      <p className="text-xl font-bold uppercase tracking-tighter">
                        {bookingData.date ? `Oct ${bookingData.date}, 2026` : "—"} 
                        {bookingData.slot ? ` @ ${bookingData.slot}` : ""}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-black opacity-40 mb-1">Fee</p>
                      <p className="text-3xl font-black">{bookingData.service?.price || "—"}</p>
                    </div>
                  </div>

                  <button 
                    disabled={!bookingData.slot}
                    onClick={handleFinalSubmit}
                    className={`w-full py-6 rounded-2xl flex items-center justify-center gap-3 transition-all uppercase font-black tracking-widest text-sm ${
                      bookingData.slot ? 'bg-black text-white hover:scale-[1.02] shadow-xl' : 'bg-black/10 text-black/30 cursor-not-allowed'
                    }`}
                  >
                    Confirm Booking <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 animate-in zoom-in-95 duration-700">
              <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
                <CheckCircle2 size={48} className="text-black stroke-[3px]" />
              </div>
              <h3 className="text-6xl font-black uppercase tracking-tighter mb-4">Confirmed.</h3>
              <p className={`max-w-sm mx-auto mb-10 font-light ${isDark ? 'text-gray-400' : 'text-neutral-500'}`}>
                We have locked in your session for <span className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>Oct {bookingData.date}</span>. Our producer will reach out shortly.
              </p>
              <button onClick={() => setIsSubmitted(false)} className="border-b border-emerald-500 text-emerald-500 uppercase text-xs font-bold tracking-widest pb-1">Create another reservation</button>
            </div>
          )}
        </div>
      </section>

      {/* 3. TRUST & FINAL CTA */}
      <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
          { icon: <Zap />, title: "Rapid Turnaround", desc: "Cinematic preview within 48 hours." },
          { icon: <Globe />, title: "Worldwide Travel", desc: "Available for destination shoots globally." },
          { icon: <ShieldCheck />, title: "Premium Optics", desc: "RED Digital & Leica gear standard." }
        ].map((item, i) => (
          <div key={i} className="space-y-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 ${
                isDark ? 'bg-emerald-500/10' : 'bg-emerald-100'
            }`}>
                {item.icon}
            </div>
            <h4 className="text-xl font-bold uppercase tracking-tight">{item.title}</h4>
            <p className={`text-sm leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-neutral-500'
            }`}>{item.desc}</p>
          </div>
        ))}
      </section>

      <section className={`py-40 px-6 text-center transition-colors duration-500 ${
          isDark 
            ? 'bg-gradient-to-b from-transparent to-[#0a1a14]' 
            : 'bg-gradient-to-b from-transparent to-neutral-200'
      }`}>
        <div className="max-w-4xl mx-auto relative">
           <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full" />
           <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 relative z-10">
             Your story <br /> <span className="text-emerald-500">deserves</span> precision.
           </h2>
           <button className={`px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] hover:pr-20 transition-all ${
               isDark 
                ? 'bg-white text-black' 
                : 'bg-black text-white'
           }`}>
             Let's Collaborate <ArrowRight className="inline ml-2" size={16} />
           </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;