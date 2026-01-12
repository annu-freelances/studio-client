import React from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
      onClick={onClose} 
    >
      {/* 1. Close Button - Moved to top right of the WHOLE screen */}
      <button 
        onClick={onClose}
        className="fixed top-6 right-9 z-[1000] rounded-ful border text-white/70 hover:text-white flex items-center gap-2 transition-all hover:scale-110"
      >
        <X size={32} strokeWidth={1.5} /> {/* Changed size from 0 to 32 */}
      </button>

      {/* 2. Video Container */}
      <div 
        className="relative w-full max-w-5xl aspect-video bg-black rounded-sm overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()} 
      >
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoModal;