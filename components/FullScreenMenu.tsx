import React from 'react';
import { X, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Link } from 'react-router-dom';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'Home', href: '#home', highlight: true, isRoute: false },
    { label: 'Blog', href: '#blog', isRoute: false },
    { label: 'Book us now :)', href: '#book', isRoute: false },
    { label: 'Stories for brands', href: '/stories', isRoute: true },
  ];

  return (
    <div 
      className={`fixed inset-0 z-[60] bg-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="absolute top-6 left-6">
         <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-8 h-8 text-gray-800" />
         </button>
      </div>

      <div className="h-full flex flex-col items-center justify-center px-4">
        <div className="space-y-6 md:space-y-8 mb-12">
          {menuItems.map((item, index) => (
            item.isRoute ? (
              <Link 
                key={index} 
                to={item.href} 
                onClick={onClose}
                className={`block font-serif text-3xl md:text-4xl text-center transition-colors duration-300 cursor-pointer ${
                  item.highlight 
                    ? 'text-[#FF6B6B] hover:opacity-80' 
                    : 'text-gray-800 hover:text-[#FF6B6B]'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a 
                key={index} 
                href={item.href} 
                onClick={onClose}
                className={`block font-serif text-3xl md:text-4xl text-center transition-colors duration-300 cursor-pointer ${
                  item.highlight 
                    ? 'text-[#FF6B6B] hover:opacity-80' 
                    : 'text-gray-800 hover:text-[#FF6B6B]'
                }`}
              >
                {item.label}
              </a>
            )
          ))}
        </div>

        {/* Logo */}
        <div className="mt-8 mb-4">
          <img 
            src="/logo12.png" 
            alt="MAXPIXLS" 
            className="h-16 w-auto object-contain mx-auto"
            style={{ filter: 'brightness(0) saturate(100%)' }}
          />
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-4 mb-4">
          <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900 transition-all">
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
          </a>
          <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900 transition-all">
            <Facebook className="w-4 h-4" strokeWidth={1.5} />
          </a>
          <a href={CONTACT_INFO.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900 transition-all">
            <Youtube className="w-4 h-4" strokeWidth={1.5} />
          </a>
          <a href={`https://wa.me/${CONTACT_INFO.phoneNumber}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900 transition-all">
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
};
