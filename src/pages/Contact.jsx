import React, { useState, useContext } from 'react';
import { 
  Send, Facebook, Twitter, Instagram, 
  Linkedin, Youtube, Mail, Phone, MapPin, Sparkles 
} from 'lucide-react';
import { ThemeContext } from '../context/themeProvider'; // Ensure path is correct

const ContactPage = () => {
  const [activeType, setActiveType] = useState('wedding');
  
  // 1. Access Theme
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const inquiryTypes = [
    { id: 'wedding', label: 'Royal Wedding' },
    { id: 'editorial', label: 'Editorial' },
    { id: 'cinema', label: 'Cinematic' },
  ];

  return (
    <div className={`min-h-screen font-sans selection:bg-emerald-500/30 pt-22 pb-20 relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[#0a1a14] text-white' : 'bg-neutral-50 text-neutral-900'
    }`}>
      
      {/* Background Ambience (Subtle in Light Mode, Glowing in Dark) */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none transition-opacity duration-500 ${
        isDark ? 'bg-emerald-500/5 opacity-100' : 'bg-emerald-400/10 opacity-60'
      }`} />
      <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none transition-opacity duration-500 ${
        isDark ? 'bg-emerald-600/5 opacity-100' : 'bg-emerald-300/10 opacity-60'
      }`} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 items-stretch">
          
          {/* LEFT COLUMN: THE BRIEF */}
          <div className="lg:col-span-5 flex flex-col justify-between py-4">
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                  Let's <br /> 
                  <span className={`transition-colors ${isDark ? 'text-emerald-500/50' : 'text-emerald-600/50'}`}>Create</span> <br /> 
                  Legacy.
                </h1>
              </div>
              
              <p className={`text-lg max-w-sm leading-relaxed font-light ${
                isDark ? 'text-gray-400' : 'text-neutral-500'
              }`}>
                Available for worldwide travel. Based in Bhopal, documenting stories that transcend time.
              </p>

              {/* Interactive Contact "Orbs" */}
              <div className="space-y-4 pt-8">
                {[
                  { icon: <Mail size={18}/>, label: "Studio Email", val: "hello@srproduction.in" },
                  { icon: <Phone size={18}/>, label: "Direct Line", val: "+91 98765 43210" },
                  { icon: <MapPin size={18}/>, label: "Bhopal Studio", val: "Madhya Pradesh, India" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-pointer">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-2xl border transition-all duration-300 ${
                       isDark 
                        ? 'bg-white/5 border-white/10 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 text-emerald-500' 
                        : 'bg-white border-neutral-200 shadow-sm group-hover:border-emerald-500 group-hover:shadow-emerald-100 text-emerald-600'
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className={`text-[10px] uppercase tracking-widest font-bold ${
                        isDark ? 'text-gray-500' : 'text-neutral-400'
                      }`}>{item.label}</p>
                      <p className={`text-sm font-medium transition-colors ${
                        isDark 
                            ? 'text-white group-hover:text-emerald-400' 
                            : 'text-neutral-900 group-hover:text-emerald-600'
                      }`}>{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Cluster */}
            <div className="pt-16 space-y-6">
              <p className={`text-[10px] uppercase tracking-[0.4em] font-black ${
                 isDark ? 'text-gray-600' : 'text-neutral-400'
              }`}>Digital Presence</p>
              <div className="flex flex-wrap gap-3">
                {[Instagram, Youtube, Twitter, Linkedin, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className={`p-4 rounded-xl border transition-all duration-300 ${
                    isDark 
                        ? 'bg-white/5 border-white/5 hover:border-emerald-500/30 hover:text-emerald-400 text-white' 
                        : 'bg-white border-neutral-200 text-neutral-600 hover:text-emerald-600 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-50'
                  }`}>
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE MODERN INQUIRY FORM */}
          <div className="lg:col-span-7">
            <div className={`border rounded-[48px] p-8 md:p-16 shadow-2xl relative overflow-hidden backdrop-blur-xl transition-colors duration-500 ${
                isDark 
                    ? 'bg-[#0a1a14] border-white/5' 
                    : 'bg-white border-neutral-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]'
            }`}>
              {/* Form Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <h3 className="text-2xl font-bold uppercase tracking-tighter">Production Inquiry</h3>
                <div className={`flex p-1 rounded-2xl border ${
                    isDark ? 'bg-black/40 border-white/5' : 'bg-neutral-100 border-neutral-200'
                }`}>
                  {inquiryTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setActiveType(type.id)}
                      className={`px-6 py-2 rounded-xl text-[10px] uppercase font-black tracking-widest transition-all ${
                        activeType === type.id 
                          ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20' 
                          : isDark ? 'text-gray-500 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {/* Inputs with floating-style labels */}
                {[
                  { label: "Client Name", type: "text", placeholder: "Shivam Rajak" },
                  { label: "Email Address", type: "email", placeholder: "shivam@example.com" },
                  { label: "Event Date", type: "text", placeholder: "October 2026" },
                  { label: "Location", type: "text", placeholder: "Bhopal, MP" }
                ].map((f, i) => (
                  <div key={i} className="group space-y-3">
                    <label className={`text-[10px] font-black uppercase tracking-[0.2em] ml-1 transition-colors ${
                        isDark ? 'text-emerald-500/60 group-focus-within:text-emerald-400' : 'text-emerald-600/70 group-focus-within:text-emerald-600'
                    }`}>
                      {f.label}
                    </label>
                    <input 
                      type={f.type} 
                      placeholder={f.placeholder}
                      className={`w-full border-b px-0 py-3 focus:outline-none focus:border-emerald-500 transition-all text-base font-light ${
                        isDark 
                            ? 'bg-white/[0.03] border-white/10 placeholder:text-gray-700 text-white' 
                            : 'bg-neutral-50 border-neutral-200 placeholder:text-neutral-400 text-neutral-900 focus:bg-white pl-2'
                      }`}
                    />
                  </div>
                ))}

                <div className="md:col-span-2 group space-y-3">
                  <label className={`text-[10px] font-black uppercase tracking-[0.2em] ml-1 ${
                      isDark ? 'text-emerald-500/60' : 'text-emerald-600/70'
                  }`}>Tell us your vision</label>
                  <textarea 
                    rows="4"
                    placeholder="Describe the scale, mood, and must-have moments..."
                    className={`w-full border-b px-0 py-3 focus:outline-none focus:border-emerald-500 transition-all text-base font-light resize-none ${
                        isDark 
                            ? 'bg-white/[0.03] border-white/10 placeholder:text-gray-700 text-white' 
                            : 'bg-neutral-50 border-neutral-200 placeholder:text-neutral-400 text-neutral-900 focus:bg-white pl-2'
                    }`}
                  ></textarea>
                </div>

                <div className="md:col-span-2 pt-6">
                  <button className="group relative w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase text-xs tracking-[0.3em] py-6 rounded-2xl transition-all flex items-center justify-center gap-4 overflow-hidden">
                    <span className="relative z-10">Send Inquiry</span>
                    <Send size={16} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* REFINED FOOTER NOTE */}
        <div className="mt-40 text-center">
          <div className={`inline-block p-1 rounded-full border mb-8 ${
              isDark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'
          }`}>
            <div className="px-4 py-1 flex items-center gap-2">
              <Sparkles size={14} className="text-emerald-500" />
              <span className="text-[9px] uppercase font-black tracking-widest text-emerald-500">Currently Booking for 2026/27</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6">
            Intimacy is our <span className="text-emerald-500">Specialty.</span>
          </h2>
          <p className={`max-w-xl mx-auto text-sm leading-relaxed font-light italic ${
             isDark ? 'text-gray-500' : 'text-neutral-500'
          }`}>
            We limit our productions to 20 clients per year to ensure every frame receives the architectural gravity it deserves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;