import React, { useState, useContext } from 'react';
import { PlayCircle } from 'lucide-react';
import VideoModal from '../layout/VideoModal'; // Ensure path is correct
import { ThemeContext } from '../../context/themeProvider'; // Ensure path is correct

const PhilosophySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 1. Access Theme
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <section className={`py-24 px-6 md:px-12 overflow-hidden transition-colors duration-500 relative ${
      isDark ? 'bg-[#0a1a14] text-white' : 'bg-white text-neutral-900'
    }`}>
      
      {/* Background Decor (Subtle Gradient for depth) */}
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-700 ${
         isDark ? 'bg-emerald-900/10 opacity-100' : 'bg-emerald-50 opacity-60'
      }`} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center relative z-10">
        
        {/* TEXT CONTENT */}
        <div className="flex-1 relative">
          {/* Giant Quote Mark */}
          <div className={`absolute -top-16 -left-10 text-[200px] font-black -z-10 select-none leading-none transition-colors duration-500 ${
            isDark ? 'text-white/[0.03]' : 'text-neutral-100'
          }`}>
            "
          </div>

          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
            Emotion is the <br/>
            <span className="text-emerald-500">Primary Color.</span>
          </h2>
          
          <p className={`text-xl leading-relaxed mb-12 max-w-lg font-light ${
            isDark ? 'text-gray-400' : 'text-neutral-500'
          }`}>
            We believe photography isn't a recording of light, but a vessel for memories. 
            Every shutter click is a bridge between the present and your legacy.
          </p>

          {/* PLAY BUTTON (High Contrast Design) */}
          <div 
            className="flex items-center gap-6 cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
          >
            <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xl ${
              isDark 
                ? 'bg-white text-black hover:bg-emerald-500 hover:text-white' 
                : 'bg-neutral-900 text-white hover:bg-emerald-600 hover:shadow-emerald-200'
            }`}>
              <PlayCircle size={32} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xs font-black uppercase tracking-[0.3em] transition-colors ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}>
                Watch Our Ethos
              </span>
              <span className="text-[10px] text-emerald-500 uppercase tracking-widest mt-1">
                2 Min Film
              </span>
            </div>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="flex-1 relative w-full">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-6 mt-12">
               <img 
                 src="https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg?semt=ais_hybrid&w=740&q=80" 
                 className={`rounded-2xl w-full aspect-[3/4] object-cover transition-all duration-700 hover:scale-[1.02] ${
                   isDark 
                    ? 'grayscale hover:grayscale-0 opacity-80 hover:opacity-100' 
                    : 'grayscale hover:grayscale-0 shadow-lg'
                 }`} 
                 alt="Philo 1" 
               />
            </div>
            <div className="flex flex-col gap-6">
               <img 
                 src="https://thumbs.dreamstime.com/b/indian-wedding-mandap-beautiful-shot-ceremony-night-kolkata-60326723.jpg" 
                 className={`rounded-2xl w-full aspect-[3/4] object-cover transition-all duration-700 hover:scale-[1.02] ${
                   isDark 
                    ? 'opacity-90 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]' 
                    : 'shadow-2xl shadow-neutral-200'
                 }`} 
                 alt="Philo 2" 
               />
               
               {/* Decorative Badge */}
               <div className={`p-6 rounded-2xl border flex flex-col justify-center items-center text-center ${
                 isDark 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-neutral-50 border-neutral-100'
               }`}>
                  <span className="text-4xl font-serif italic text-emerald-500 mb-2">est.</span>
                  <span className={`text-xs font-black uppercase tracking-[0.4em] ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}>
                    2018
                  </span>
               </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        videoId="Up9LTePEojc" 
      />
    </section>
  );
};

export default PhilosophySection;