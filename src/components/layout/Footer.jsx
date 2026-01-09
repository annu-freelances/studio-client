import React from "react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a1a14] text-white pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">

        {/* Top Tier: Brand & Status */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-16">
          
          {/* Brand Info */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500/80">
                Available across India
              </span>
            </div>

            <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">
              Creating <br />
              <span className="text-emerald-500">royal memories.</span>
            </h2>
          </div>

          {/* Contact Blocks */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-12">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                Studio
              </h4>
              <p className="text-sm font-medium leading-relaxed text-white/70">
                SR Production<br />
                Royal Wedding Photography<br />
                Across India
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                Contact
              </h4>
              <p className="text-sm font-medium leading-relaxed text-white/70">
                +91 90980 14747<br />
                +91 93448 24441<br />
                shivamrajakshivam64@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/5 pt-8">
          <div className="space-y-2">
            <div className="text-2xl font-black tracking-tighter">
              SR PRODUCTION<span className="text-emerald-500">.</span>
            </div>
            <p className="text-[9px] font-bold text-white/40 uppercase tracking-[0.4em]">
              © 2026 SR Production | Shivam Rajak
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white/5 hover:bg-emerald-500 hover:text-white p-4 rounded-full transition-all duration-500"
            >
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
