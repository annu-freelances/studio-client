import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../../context/themeProvider'; // Ensure path is correct

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 1. Access the theme
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark'; // Helper boolean for cleaner code

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out`}>
      <div 
        className={`w-full transition-all duration-500 ease-in-out flex justify-between items-center px-6 md:px-12 border-b ${
          isScrolled 
            // 2. Conditional Backgrounds: Dark = Your Original | Light = Studio White
            ? isDark 
                ? 'bg-[#050a08]/95 backdrop-blur-xl border-white/10 shadow-2xl py-3 rounded-b-2xl' 
                : 'bg-white/90 backdrop-blur-xl border-black/5 shadow-sm py-3 rounded-b-2xl'
            : 'bg-transparent border-transparent py-6 rounded-b-none'
        }`}
      >
        
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-4 group relative">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Logo Borders: Dark = Emerald/20 | Light = Emerald/40 (for visibility) */}
            <div className={`absolute inset-0 border rounded-full transition-colors duration-700 ${
                isDark ? 'border-emerald-500/20 group-hover:border-emerald-500/60' : 'border-emerald-600/30 group-hover:border-emerald-600' 
            }`}></div>
            
            <div className="relative w-7 h-7 overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-[120deg]">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 bg-emerald-500/80 group-hover:bg-emerald-400 transition-colors duration-500"
                  style={{
                    clipPath: 'polygon(50% 50%, 100% 0, 100% 25%)',
                    transform: `rotate(${i * 60}deg)`,
                    transformOrigin: '50% 50%'
                  }}
                />
              ))}
               {/* Inner Dot: Dark = #050a08 | Light = White */}
              <div className={`absolute inset-[6px] rounded-full z-10 border border-emerald-500/20 group-hover:scale-75 transition-transform duration-500 shadow-inner ${
                  isDark ? 'bg-[#050a08]' : 'bg-white'
              }`}></div>
            </div>
          </div>

          <div className="flex flex-col">
            {/* Logo Text: Dark = White | Light = Neutral-900 (Charcoal) */}
            <span className={`font-black text-xl tracking-[-0.02em] leading-none uppercase transition-colors ${
                isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              SR <span className="text-emerald-500 font-light group-hover:text-emerald-400 transition-colors">Production</span>
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `text-[10px] font-bold uppercase tracking-[0.4em] relative py-2 group transition-all ${
                    isActive 
                        ? 'text-emerald-500' 
                        : isDark ? 'text-gray-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-emerald-500 transition-all duration-500 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            {/* THEME TOGGLE BUTTON (Desktop) */}
            <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 border ${
                    isDark 
                        ? 'border-transparent hover:bg-white/10 text-yellow-400' 
                        : 'border-neutral-200 hover:bg-neutral-100 text-neutral-600'
                }`}
                title="Toggle Theme"
            >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link to="/services">
                <button className={`group relative px-6 py-2.5 rounded-lg overflow-hidden transition-all duration-500 active:scale-95 border ${
                    isDark 
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-black border-emerald-400/20 shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white border-transparent '
                }`}>
                <span className="relative z-10 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    Book Session <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                </button>
            </Link>
          </div>
        </div>

        {/* MOBILE ACTIONS (Toggle + Menu) */}
        <div className="md:hidden flex items-center gap-4">
            {/* THEME TOGGLE (Mobile) */}
            <button 
                onClick={toggleTheme}
                className={`p-1.5 rounded-full transition-colors ${
                    isDark ? 'text-yellow-400' : 'text-neutral-600'
                }`}
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button 
                className={`transition-colors ${isDark ? 'text-white hover:text-emerald-500' : 'text-neutral-900 hover:text-emerald-600'}`} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 backdrop-blur-2xl z-[110] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        // Mobile Overlay Colors
        isDark ? 'bg-[#050a08]/98' : 'bg-white/98'
      }`}>
        <button 
          className="absolute top-8 right-8 text-emerald-500 hover:rotate-90 transition-transform duration-500" 
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={40} strokeWidth={1} />
        </button>

        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, i) => (
            <NavLink 
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                `text-4xl font-black uppercase tracking-tighter transition-colors ${
                  isActive 
                    ? 'text-emerald-500' 
                    : isDark ? 'text-white hover:text-emerald-500' : 'text-neutral-900 hover:text-emerald-600'
                }`
              }
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/services" 
            onClick={() => setIsMenuOpen(false)}
            className="mt-6 bg-emerald-600 text-black px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;