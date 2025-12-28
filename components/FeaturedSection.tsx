import React from 'react';
import { HERO_IMAGES, STORIES } from '../constants';

export const FeaturedSection: React.FC = () => {
  // Combine hero images and story images for the filmstrip
  const filmstripImages = [
    ...HERO_IMAGES,
    ...STORIES.map(s => s.imageUrl)
  ];
  
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...filmstripImages, ...filmstripImages];
  
  return (
    <div className="bg-white">
      {/* Thumbnail Gallery - Horizontal filmstrip with smooth scrolling animation for all screens */}
      <div className="overflow-hidden py-2 md:py-4">
        <div className="flex gap-1 md:gap-2 animate-scroll hover:pause-animation">
          {duplicatedImages.map((img, index) => (
            <div key={index} className="flex-shrink-0 h-20 md:h-32 lg:h-40 overflow-hidden">
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                loading="lazy"
                className="h-full w-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="pt-12 pb-6 md:pt-20 md:pb-8">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="font-serif text-2xl md:text-5xl text-gray-900 leading-tight mb-6 md:mb-8">
            Maxpixls Photography & Films - Capturing Your Most Precious Moments
          </h2>
          <p className="font-sans text-gray-600 text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-2xl mx-auto">
            Specializing in Wedding Photography, Pre & Post Wedding Shoots, Destination Weddings, Baby Shoots, Fashion Portraits, and Event Photography. 
            We create timeless visual stories that capture the essence of your special moments with artistry and emotion.
          </p>
        </div>
      </div>
    </div>
  );
};
