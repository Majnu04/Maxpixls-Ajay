import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  PrivacyModal,
  AllStoriesPage
} from './components';

// --- Main App ---

function HomePage({ 
  onMenuToggle, 
  onTermsClick, 
  onPrivacyClick 
}: { 
  onMenuToggle: () => void;
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}) {
  return (
    <>
      <main>
        <HeroSlider />
        <FeaturedSection />
        <VideoGallery />
        <BlogSection />
        <CTASection />
        <ContactSection />
      </main>
      
      <Footer 
        onTermsClick={onTermsClick}
        onPrivacyClick={onPrivacyClick}
      />
    </>
  );
}

function StoriesPage({ 
  onTermsClick, 
  onPrivacyClick 
}: { 
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}) {
  return (
    <>
      <AllStoriesPage />
      <Footer 
        onTermsClick={onTermsClick}
        onPrivacyClick={onPrivacyClick}
      />
    </>
  );
}

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
    <Router>
      <div className="bg-white min-h-screen">
        <Navbar onMenuToggle={() => setIsMenuOpen(true)} />
        <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <WhatsAppButton />
        <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
        <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onMenuToggle={() => setIsMenuOpen(true)}
                onTermsClick={() => setIsTermsOpen(true)}
                onPrivacyClick={() => setIsPrivacyOpen(true)}
              />
            } 
          />
          <Route 
            path="/stories" 
            element={
              <StoriesPage 
                onTermsClick={() => setIsTermsOpen(true)}
                onPrivacyClick={() => setIsPrivacyOpen(true)}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}
