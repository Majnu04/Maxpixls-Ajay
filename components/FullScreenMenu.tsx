import React from 'react';
import { X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`fixed inset-0 z-[60] bg-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="absolute top-6 left-6">
         <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-8 h-8 text-gray-800" />
         </button>
      </div>

      <div className="h-full flex flex-col items-center justify-center space-y-6 md:space-y-8 p-4">
        {NAV_ITEMS.map((item, index) => (
          <a 
            key={index} 
            href={item.href} 
            onClick={onClose}
            className={`font-serif text-3xl md:text-5xl lg:text-6xl text-center text-gray-800 hover:text-brand-gold hover:italic transition-all duration-300 cursor-pointer ${item.label.includes('Book') ? 'text-brand-gold italic' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};
