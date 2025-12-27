import React from 'react';
import { StoryCard } from './StoryCard';
import { STORIES } from '../constants';

export const BlogSection: React.FC = () => {
  return (
    <div className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white scroll-mt-24 md:scroll-mt-32" id="blog">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-gray-500 font-serif italic text-base md:text-lg tracking-wide">Journal</span>
          <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mt-3 tracking-tight">Featured on the blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {STORIES.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
        
        <div className="text-center mt-14 md:mt-24">
            <a 
              href="#contact" 
              className="inline-block border-2 border-gray-900 text-gray-900 px-10 py-4 md:px-14 md:py-5 font-sans text-xs md:text-sm font-medium uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
                View All Stories
            </a>
        </div>
      </div>
    </div>
  );
};
