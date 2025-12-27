import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 md:pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        
        {/* Logo */}
        <div className="mb-8 md:mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-gray-900">MAXPIXLS</h2>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500">Photography & Films by AjayBevara</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12 font-sans text-xs md:text-sm uppercase tracking-widest text-gray-600">
          <a href="#home" className="hover:text-brand-gold transition-colors">Home</a>
          <a href="#weddings" className="hover:text-brand-gold transition-colors">Weddings</a>
          <a href="#blog" className="hover:text-brand-gold transition-colors">Portfolio</a>
          <a href="#fashion" className="hover:text-brand-gold transition-colors">Fashion</a>
          <a href="#events" className="hover:text-brand-gold transition-colors">Events</a>
          <a href="#book" className="hover:text-brand-gold transition-colors">Contact</a>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-6 mb-8 md:mb-12">
            <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors text-gray-900">
                <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors text-gray-900">
                <Facebook className="w-5 h-5" />
            </a>
        </div>

        <div className="text-gray-400 text-[10px] md:text-xs font-sans">
            <p className="mb-2">Made with love, in India</p>
            <p>&copy; {new Date().getFullYear()} MAXPIXLS Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
