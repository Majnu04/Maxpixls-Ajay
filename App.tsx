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
  VideoGallery,
  TermsModal,
  PrivacyModal
} from './components';

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

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
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      
      <main>
        <HeroSlider />
        <FeaturedSection />
        <VideoGallery />
        <BlogSection />
        <CTASection />
        <ContactSection />
      </main>
      
      <Footer 
        onTermsClick={() => setIsTermsOpen(true)}
        onPrivacyClick={() => setIsPrivacyOpen(true)}
      />
    </div>
  );
}
