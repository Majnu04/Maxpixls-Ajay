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
      className="relative h-auto md:h-[92vh] w-full overflow-hidden bg-white md:bg-black mt-[60px] md:mt-[100px]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {HERO_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`relative md:absolute md:inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100 block' : 'opacity-0 scale-105 hidden md:block'}`}
        >
          <div className="w-full h-full">
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-auto md:h-full object-contain md:object-cover"
            />
          </div>
          {/* Classic elegant overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        </div>
      ))}

      {/* Controls - Classic style */}
      <button 
        onClick={() => { setIsAutoPlaying(false); prevSlide(); }}
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white/40 backdrop-blur-lg rounded-full text-white transition-all transform hover:scale-110 border border-white/30"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={() => { setIsAutoPlaying(false); nextSlide(); }}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white/40 backdrop-blur-lg rounded-full text-white transition-all transform hover:scale-110 border border-white/30"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators - Classic dots - Desktop only */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 space-x-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => { setIsAutoPlaying(false); setCurrentSlide(index); }}
            className={`rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-white w-12 h-2' : 'bg-white/70 w-2 h-2 hover:bg-white/90'}`}
          />
        ))}
      </div>
    </div>
  );
};
