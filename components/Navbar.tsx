import React, { useState, useEffect } from 'react';
import { Menu, Search, Instagram, Facebook, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface NavbarProps {
  onMenuToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchQuery);
    // For now, just close the search overlay
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-white/90 backdrop-blur-sm py-4 md:py-6'}`}>
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
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-800" />
            </button>
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hidden md:block text-gray-800 hover:text-brand-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hidden md:block text-gray-800 hover:text-brand-gold transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            {/* Mobile Search Icon - Visible only on mobile */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-[70] bg-white animate-fadeIn"
        >
          <div className="absolute top-6 right-6 z-10">
            <button 
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery('');
              }} 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close search"
            >
              <X className="w-8 h-8 text-gray-800" />
            </button>
          </div>

          <div className="h-full flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-3xl">
              <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mb-8 md:mb-12 text-center">
                Search
              </h2>
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for weddings, portraits, events..."
                    className="w-full border-b-2 border-gray-300 py-4 font-serif text-xl md:text-3xl focus:outline-none focus:border-brand-gold transition-colors bg-transparent text-gray-900 placeholder-gray-400"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:text-brand-gold transition-colors"
                    aria-label="Submit search"
                  >
                    <Search className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />
                  </button>
                </div>
              </form>
              
              <div className="mt-12 md:mt-16">
                <p className="text-gray-500 font-sans text-sm md:text-base mb-4">Popular searches:</p>
                <div className="flex flex-wrap gap-3">
                  {['Wedding Photography', 'Baby Shoots', 'Fashion Portraits', 'Destination Weddings', 'Pre Wedding'].map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setSearchQuery(term);
                        handleSearchSubmit(new Event('submit') as any);
                      }}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs md:text-sm font-sans rounded-full transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
