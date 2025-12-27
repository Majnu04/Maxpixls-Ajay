import React from 'react';

export const FeaturedSection: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-white">
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
  );
};
