import React, { useContext } from 'react';
import { ArrowUpRight, ArrowRight, Zap } from 'lucide-react';
import { ThemeContext } from '../../context/themeProvider'; // Ensure path is correct

const PortfolioTeaser = () => {
  // 1. Access Theme
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const projects = [
    { 
      id: 1, 
      title: "The Royal Mandap", 
      category: "Ceremony", 
      img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800", 
      size: "tall" 
    },
    { 
      id: 2, 
      title: "Henna Artistry", 
      category: "Mehndi", 
      img: "https://cdn.pixabay.com/photo/2022/07/16/08/54/bride-7324803_640.jpg", 
      size: "short" 
    },
    { 
      id: 3, 
      title: "Golden Jewels", 
      category: "Details", 
      img: "https://cdn.pixabay.com/photo/2020/05/01/14/09/indian-5117279_640.jpg", 
      size: "short" 
    },
    { 
      id: 4, 
      title: "The Baraat Entry", 
      category: "Tradition", 
      img: "https://cdn.pixabay.com/photo/2020/12/10/19/06/wedding-5821105_640.jpg", 
      size: "tall" 
    },
    { 
      id: 5, 
      title: "Floral Decor", 
      category: "Setup", 
      img: "https://cdn.pixabay.com/photo/2023/09/12/11/02/ai-generated-8248592_640.jpg", 
      size: "short" 
    },
    { 
      id: 6, 
      title: "Bridal Portrait", 
      category: "Candid", 
      img: "https://cdn.pixabay.com/photo/2023/12/19/11/16/red-8457517_640.jpg", 
      size: "tall" 
    },
  ];

  return (
    <section className={`py-12 px-6 md:px-12 transition-colors duration-500 ${
        isDark ? 'bg-[#0a1a14]' : 'bg-neutral-50'
    }`}>
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header with Project Count */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <h3 className={`text-7xl md:text-[120px] font-black leading-[0.8] tracking-tighter uppercase transition-colors ${
              isDark ? 'text-white' : 'text-[#0a1a14]'
          }`}>
            Work
            <span className="text-emerald-500 pl-8">Sample</span>
          </h3>
          <div className="flex items-center gap-4 border-l border-emerald-500 pl-6 h-fit">
            <span className={`text-4xl font-black transition-colors ${
                isDark ? 'text-white/10' : 'text-neutral-200'
            }`}>06</span>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${
                isDark ? 'text-neutral-500' : 'text-neutral-400'
            }`}>Selected<br/>Artifacts</span>
          </div>
        </div>

        {/* Masonry-Style Album Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`relative break-inside-avoid group cursor-pointer overflow-hidden rounded-[1.5rem] ${
                  isDark ? 'bg-[#050a08]' : 'bg-neutral-200'
              }`}
            >
              {/* Image with Parallax-like Hover & Theme Logic */}
              <img 
                src={project.img} 
                alt={project.title}
                className={`w-full h-auto object-cover transition-all duration-700 ${
                  isDark 
                    // Dark Mode: Grayscale -> Color on hover
                    ? 'grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 group-hover:scale-105' 
                    // Light Mode: Full Color always -> Scale on hover
                    : 'opacity-100 group-hover:scale-105'
                }`}
              />
              
              {/* Overlay Metadata (Always dark gradient for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a14] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-emerald-400 text-[9px] font-black uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h4 className="text-white text-2xl font-black uppercase tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h4>
              </div>

              {/* Top Right Arrow Hook */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight size={20} className="text-[#0a1a14]" />
              </div>
            </div>
          ))}

          {/* Call to Action Card Integrated into Grid */}
          <div className={`break-inside-avoid p-12 rounded-[2rem] border shadow-xl relative overflow-hidden group transition-colors duration-500 ${
              isDark 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white border-neutral-200'
          }`}>
            <Zap className={`absolute -top-4 -right-4 w-32 h-32 rotate-12 group-hover:rotate-45 transition-transform duration-700 ${
                isDark ? 'text-emerald-500/10' : 'text-emerald-500/10'
            }`} />
            
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Availability</span>
            
            <h4 className={`text-3xl font-black uppercase mb-4 relative z-10 ${
                isDark ? 'text-white' : 'text-[#0a1a14]'
            }`}>Have a project?</h4>
            
            <p className={`text-sm mb-10 relative z-10 leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-neutral-500'
            }`}>
              We are currently accepting bookings for <span className={`font-bold ${isDark ? 'text-white' : 'text-[#0a1a14]'}`}>Q3 2026</span>. Let's create something timeless.
            </p>
            
            <button className={`flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-emerald-500 pb-2 group-hover:gap-6 transition-all ${
                isDark ? 'text-white' : 'text-[#0a1a14]'
            }`}>
              Contact the Studio <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTeaser;