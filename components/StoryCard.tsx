import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Story } from '../types';

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 mb-4">
        <img 
          src={story.imageUrl} 
          alt={story.title} 
          loading="lazy"
          className="w-full h-full object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
      
      <div className="text-center px-4">
        <h3 className="font-serif text-lg md:text-2xl text-gray-900 mb-2 group-hover:text-brand-gold transition-colors">
          {story.title}
        </h3>
        <span className="inline-flex items-center text-[10px] md:text-xs uppercase tracking-widest text-gray-500 group-hover:translate-x-1 transition-transform">
          Read Story <ArrowRight className="w-3 h-3 ml-2" />
        </span>
      </div>
    </div>
  );
};
