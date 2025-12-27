import React from 'react';
import { StoryCard } from './StoryCard';
import { STORIES } from '../constants';

export const BlogSection: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-gray-50/50 scroll-mt-24 md:scroll-mt-32" id="blog">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-brand-gold font-serif italic text-lg md:text-xl">Journal</span>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mt-2">Featured on the blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-16">
          {STORIES.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
        
        <div className="text-center mt-12 md:mt-20">
            <button className="bg-gray-900 text-white px-8 py-3 md:px-10 md:py-4 font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors">
                View All Stories
            </button>
        </div>
      </div>
    </div>
  );
};
