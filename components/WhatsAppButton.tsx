import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const WhatsAppButton: React.FC = () => {
  const message = 'Hi! I would like to inquire about your photography services.';
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Use whatsapp:// for mobile apps, wa.me for web
    const whatsappUrl = isMobile 
      ? `whatsapp://send?phone=${CONTACT_INFO.phoneNumber}&text=${encodedMessage}`
      : `https://wa.me/${CONTACT_INFO.phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-white border border-gray-200 hover:border-gray-900 text-gray-900 p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" strokeWidth={1} />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1.5 rounded text-xs font-sans whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
    </button>
  );
};
