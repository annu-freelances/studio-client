import React from "react";
import { Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#062019] text-white pt-7 pb-8 px-6 md:px-12 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Newsletter Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-emerald-400">
            Newsletter
          </h2>
          <p className="text-sm font-medium mb-1">SR Production also has a newsletter!</p>
          <p className="text-sm text-emerald-100/60 mb-6">
            On the agenda: news and tips on royal weddings and photography delivered to your inbox.
          </p>
          <p className="text-sm font-bold mb-4 uppercase tracking-widest text-emerald-400">Sign up for free!</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your E-mail*" 
              className="w-full px-6 py-3 rounded-full bg-emerald-900/40 border border-emerald-800/50 text-white text-sm outline-none focus:border-emerald-400 transition-all"
            />
            <button className="w-full md:w-auto whitespace-nowrap bg-emerald-400 text-emerald-950 font-black px-8 py-3 rounded-full hover:bg-emerald-300 transition-all uppercase text-sm flex items-center justify-center gap-2">
              Subscribe <Send size={16} />
            </button>
          </div>
          <p className="text-[10px] text-emerald-500/40 mt-3 italic">By signing up, you agree to our privacy policy.</p>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-emerald-900/50 pt-16">
          {/* Column 1 */}
          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-widest text-sm text-emerald-400">Studio</h4>
            <ul className="space-y-2 text-sm text-emerald-100/60">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Real Estate</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Events</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Portraits</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">SR Production Club</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-widest text-sm text-emerald-400">Services</h4>
            <ul className="space-y-2 text-sm text-emerald-100/60">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Cinematography</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Royal Weddings</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Traditional</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Pre-Wedding</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-widest text-sm text-emerald-400">Contact</h4>
            <ul className="space-y-2 text-sm text-emerald-100/60 leading-relaxed">
              <li className="hover:text-white transition-colors cursor-default">+91 90980 14747</li>
              <li className="hover:text-white transition-colors cursor-default">+91 93448 24441</li>
              <li className="break-all hover:text-emerald-400 transition-colors cursor-pointer">shivamrajakshivam64@gmail.com</li>
            </ul>
          </div>

          {/* Column 4 - Socials */}
          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-widest text-sm text-emerald-400">Join the Club</h4>
            <p className="text-xs text-emerald-100/60">Receive exclusive tips and photography advice from Shivam Rajak.</p>
            <div className="flex gap-4 pt-2">
              <Instagram size={22} className="cursor-pointer text-emerald-100 hover:text-emerald-400 transition-all transform hover:scale-110" />
              <Linkedin size={22} className="cursor-pointer text-emerald-100 hover:text-emerald-400 transition-all transform hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Massive Background Logo */}
        <div className="relative mb-8 select-none pointer-events-none">
          <h1 className="text-[15vw] font-black text-emerald-400/10 leading-none tracking-tighter text-center">
            SR PROD
          </h1>
        </div>

        {/* Fine Print Footer */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-emerald-900/50 pt-6 gap-6">
          <div className="max-w-2xl">
            <p className="text-[10px] text-emerald-500/50 leading-relaxed uppercase tracking-widest">
              © 2026 SR Production. All rights reserved. <br />
              99, Royal Avenue, India. SR Production is a creative agency dedicated to royal wedding photography.
            </p>
          </div>
          <div className="flex gap-6 text-[10px] font-bold text-emerald-500/70 uppercase tracking-widest">
            <span className="cursor-pointer hover:text-emerald-400 transition-colors">Legal Notices</span>
            <span className="cursor-pointer hover:text-emerald-400 transition-colors">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Decorative emerald glow */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-900/20 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;