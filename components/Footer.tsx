import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5EFE7] pt-12 md:pt-16 pb-6 border-t border-gray-100">
      <div className="container mx-auto px-6">
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-10">
          <a href="#home" className="font-sans text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-brand-gold transition-colors">Home</a>
          <a href="#weddings" className="font-sans text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-brand-gold transition-colors">Weddings</a>
          <a href="#blog" className="font-sans text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-brand-gold transition-colors">Portfolio</a>
          <a href="#fashion" className="font-sans text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-brand-gold transition-colors">Fashion</a>
          <a href="#events" className="font-sans text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-brand-gold transition-colors">Events</a>
          <a href="#book" className="font-sans text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-brand-gold transition-colors">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-8 md:mb-10">
          <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900 transition-all">
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a href="#" className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900 transition-all">
            <Facebook className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a href={`https://wa.me/${CONTACT_INFO.phoneNumber}`} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900 transition-all">
            <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8 md:mb-10 text-center">
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand-gold transition-colors">
            <Mail className="w-4 h-4" strokeWidth={1.5} />
            {CONTACT_INFO.email}
          </a>
          <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand-gold transition-colors">
            <Phone className="w-4 h-4" strokeWidth={1.5} />
            {CONTACT_INFO.phone}
          </a>
          <a href={CONTACT_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand-gold transition-colors">
            <MapPin className="w-4 h-4" strokeWidth={1.5} />
            {CONTACT_INFO.address}
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 text-center">
          <p className="text-xs font-medium text-gray-400 mb-1">Made with love, in India</p>
          <p className="text-xs font-medium text-gray-400 mb-1">&copy; {new Date().getFullYear()} MAXPIXLS Photography. All rights reserved.</p>
          <p className="text-xs font-medium text-gray-400">
            Developed by <a href="https://www.elitedigitalsolutions.tech/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Elite Digital Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
