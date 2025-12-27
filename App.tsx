import React, { useState, useEffect } from 'react';
import {
  Navbar,
  FullScreenMenu,
  HeroSlider,
  FeaturedSection,
  BlogSection,
  CTASection,
  ContactSection,
  Footer,
  WhatsAppButton,
  VideoGallery
} from './components';

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar onMenuToggle={() => setIsMenuOpen(true)} />
      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <WhatsAppButton />
      
      <main>
        <HeroSlider />
        <FeaturedSection />
        <VideoGallery />
        <BlogSection />
        <CTASection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
