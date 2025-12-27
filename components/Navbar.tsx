import React, { useState, useEffect } from 'react';
import { Menu, Search, Instagram, Facebook } from 'lucide-react';

interface NavbarProps {
  onMenuToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-white py-4 md:py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Menu */}
        <button 
          onClick={onMenuToggle}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
          aria-label="Menu"
        >
          <Menu className="w-6 h-6 text-gray-800" />
        </button>

        {/* Center: Logo */}
        <div className="flex flex-col items-center cursor-pointer">
          <h1 className="font-serif text-2xl md:text-4xl font-bold tracking-tight text-brand-black">
            MAXPIXLS
          </h1>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 mt-1">
            by AjayBevara
          </span>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-5 h-5 text-gray-800" />
          </button>
          <a href="#" className="hidden md:block text-gray-800 hover:text-brand-gold transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hidden md:block text-gray-800 hover:text-brand-gold transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          {/* Mobile Search Icon - Visible only on mobile */}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>
    </nav>
  );
};
