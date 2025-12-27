import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_IMAGES } from '../constants';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Touch state for swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div 
      id="home" 
      className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden bg-gray-100 mt-[75px] md:mt-[100px] scroll-mt-24 md:scroll-mt-32"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {HERO_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={img} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>
      ))}

      {/* Controls - Hidden on very small screens, shown on md+ or if preferred to always show */}
      <button 
        onClick={() => { setIsAutoPlaying(false); prevSlide(); }}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button 
        onClick={() => { setIsAutoPlaying(false); nextSlide(); }}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => { setIsAutoPlaying(false); setCurrentSlide(index); }}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-6 md:w-8' : 'bg-white/50 w-1.5 md:w-2'}`}
          />
        ))}
      </div>
    </div>
  );
};
