import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-brand-gold/10 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 md:w-96 md:h-96 bg-brand-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 md:w-96 md:h-96 bg-brand-gold/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="font-serif text-3xl md:text-7xl text-gray-900 mb-6 md:mb-8 leading-tight">
                Let's Capture Your Beautiful Story
            </h2>
            <p className="font-sans text-lg md:text-xl text-gray-600 mb-8 md:mb-10">
                From weddings to baby shoots, fashion to events - we bring your moments to life.
            </p>
            <a href="#book" className="inline-block bg-white text-gray-900 px-8 py-4 md:px-12 md:py-5 font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                Start a Conversation
            </a>
        </div>
    </div>
  );
};
