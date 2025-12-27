import React, { useEffect } from 'react';
import { StoryCard } from './StoryCard';
import { STORIES } from '../constants';

export const AllStoriesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gray-900 mb-4">All Stories</h1>
          <p className="text-gray-600 text-lg">Explore our complete collection of captured moments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {STORIES.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a 
            href="/"
            className="inline-block border-2 border-gray-900 text-gray-900 px-10 py-4 md:px-14 md:py-5 font-sans text-xs md:text-sm font-medium uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllStoriesPage;
