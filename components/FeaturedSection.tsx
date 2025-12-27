import React from 'react';
import { HERO_IMAGES, STORIES } from '../constants';

export const FeaturedSection: React.FC = () => {
  // Combine hero images and story images for the filmstrip
  const filmstripImages = [
    ...HERO_IMAGES,
    ...STORIES.map(s => s.imageUrl)
  ];
  
  return (
    <div className="bg-white">
      {/* Thumbnail Gallery - Mobile: 3 grid, Desktop: horizontal filmstrip */}
      <div className="md:hidden grid grid-cols-3 gap-1">
        {HERO_IMAGES.slice(1, 4).map((img, index) => (
          <div key={index} className="aspect-square overflow-hidden">
            <img 
              src={img} 
              alt={`Gallery ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Desktop: Horizontal filmstrip */}
      <div className="hidden md:flex overflow-x-auto gap-2 px-4 py-4 hide-scrollbar">
        {filmstripImages.map((img, index) => (
          <div key={index} className="flex-shrink-0 h-32 lg:h-40 overflow-hidden">
            <img 
              src={img} 
              alt={`Gallery ${index + 1}`} 
              className="h-full w-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
      
      <div className="py-12 md:py-20">
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
