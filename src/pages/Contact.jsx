import React from 'react';
import { Github, Disc as Discord, Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-[#050a08] text-white min-h-screen font-sans selection:bg-emerald-500/30 pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: TEXT & SOCIALS */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
                Contact us
              </h1>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed font-light">
                Ready to preserve your legacy? Reach out for inquiries regarding royal weddings, editorial shoots, or cinematic productions.
              </p>
            </div>

            {/* Community Links */}
            <div className="space-y-4">

              <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors group">
                <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-all">
                  <Discord size={20} className="text-emerald-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Join our community</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black">Follow us</p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all text-gray-400 hover:text-emerald-400">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE CARD FORM */}
          <div className="bg-[#0a1a14] border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Carter"
                    className="w-full bg-[#11221a] border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-600 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="example@youremail.com"
                    className="w-full bg-[#11221a] border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-600 text-sm"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Phone</label>
                  <input 
                    type="text" 
                    placeholder="123 - 456 - 7890"
                    className="w-full bg-[#11221a] border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-600 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Ex. Careers"
                    className="w-full bg-[#11221a] border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-600 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full bg-[#11221a] border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-600 text-sm resize-none"
                ></textarea>
              </div>

              <button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase text-[11px] tracking-[0.2em] px-10 py-5 rounded-2xl transition-all shadow-[0_10px_30px_rgba(16,185,129,0.2)] active:scale-95">
                Send message
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-32 pt-20 border-t border-white/5 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
            Prefer to reach out directly?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-light italic">
            "We value the intimacy of direct communication. Whether it's a call or a visit to our Gwalior studio, let's start the dialogue."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;