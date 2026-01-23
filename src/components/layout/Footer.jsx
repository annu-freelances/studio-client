import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight, Heart } from 'lucide-react';
import { ThemeContext } from '../../context/themeProvider'; // Ensure path is correct

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
  ];

  const footerLinks = [
    { title: "Sitemap", links: ["Home", "Gallery", "Services", "About", "Contact"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Use", "Licensing", "Cookies"] },
    { title: "Studio", links: ["Careers", "Press", "Gear List", "Workshops"] },
  ];

  return (
    <footer className={`py-24 px-6 md:px-12 transition-colors duration-500 border-t ${
        isDark 
            ? 'bg-[#050a08] border-white/5 text-white' 
            : 'bg-neutral-50 border-neutral-200 text-neutral-900'
    }`}>
      <div className="max-w-[1600px] mx-auto">
        
        {/* TOP SECTION: CTA & BRAND */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
          <div className="space-y-6">
             {/* Logo / Brand Name */}
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85]">
              SR <span className="text-emerald-500">Production</span>
            </h2>
            <p className={`max-w-md text-sm leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-neutral-500'
            }`}>
              Capturing the unscripted, the raw, and the royal. Based in India, available worldwide.
            </p>
          </div>

          {/* Big CTA Button */}
          <Link to="/contact">
            <button className={`group flex items-center gap-4 px-8 py-4 rounded-full border transition-all duration-300 ${
                isDark 
                    ? 'border-white/10 hover:bg-white hover:text-black' 
                    : 'border-neutral-300 hover:bg-black hover:text-white'
            }`}>
              <span className="text-xs font-black uppercase tracking-[0.2em]">Start a Project</span>
              <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* MIDDLE SECTION: LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className={`text-xs font-black uppercase tracking-[0.2em] ${
                  isDark ? 'text-white/40' : 'text-neutral-400'
              }`}>
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                        isDark ? 'text-gray-400' : 'text-neutral-600'
                    }`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Column */}
          <div className="space-y-6">
            <h4 className={`text-xs font-black uppercase tracking-[0.2em] ${
                 isDark ? 'text-white/40' : 'text-neutral-400'
            }`}>Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className={`p-3 rounded-full border transition-all duration-300 ${
                      isDark 
                        ? 'border-white/10 bg-white/5 hover:bg-emerald-500 hover:text-black hover:border-emerald-500' 
                        : 'border-neutral-200 bg-white hover:bg-emerald-600 hover:text-white hover:border-emerald-600'
                  }`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${
            isDark ? 'border-white/5' : 'border-neutral-200'
        }`}>
          <p className={`text-[10px] uppercase tracking-widest font-bold ${
              isDark ? 'text-gray-600' : 'text-neutral-400'
          }`}>
            © 2026 SR Production. All Rights Reserved.
          </p>
          
          <div className={`flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold ${
              isDark ? 'text-gray-600' : 'text-neutral-400'
          }`}>
            <span>Made with</span>
            <Heart size={10} className="text-emerald-500 fill-emerald-500" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;