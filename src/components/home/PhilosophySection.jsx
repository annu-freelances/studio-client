import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import VideoModal from '../layout/VideoModal'; // Make sure the path to your UI folder is correct

const PhilosophySection = () => {
  // 1. Create the state to manage the popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-12 px-6 md:px-12 bg-white text-[#0a1a14] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="flex-1 relative">
          <div className="absolute -top-10 -left-10 text-[200px] font-black text-neutral-100 -z-10 select-none">"</div>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10">
            Emotion is the <br/>
            <span className="text-emerald-600">Primary Color.</span>
          </h2>
          <p className="text-neutral-500 text-xl leading-relaxed mb-12">
            We believe photography isn't a recording of light, but a vessel for memories. 
            Every shutter click is a bridge between the present and your legacy.
          </p>

          {/* 2. Added onClick to trigger the state */}
          <div 
            className="flex items-center gap-6 cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="w-16 h-16 rounded-full bg-[#0a1a14] flex items-center justify-center text-white group-hover:bg-emerald-600 transition-colors">
              <PlayCircle size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Watch Our Ethos Film</span>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg?semt=ais_hybrid&w=740&q=80" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 mt-12" alt="Philo 1" />
            <img src="https://thumbs.dreamstime.com/b/indian-wedding-mandap-beautiful-shot-ceremony-night-kolkata-60326723.jpg" className="rounded-2xl shadow-2xl" alt="Philo 2" />
          </div>
        </div>
      </div>

      {/* 3. Place the Modal here at the bottom of the section */}
      <VideoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        videoId="Up9LTePEojc" // Put your YouTube ID here
      />
    </section>
  );
};

export default PhilosophySection;