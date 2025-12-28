import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

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
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
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
    </motion.div>
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
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <AllStoriesPage />
      <Footer 
        onTermsClick={onTermsClick}
        onPrivacyClick={onPrivacyClick}
      />
    </motion.div>
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
        
        <AnimatedRoutes 
          onTermsClick={() => setIsTermsOpen(true)}
          onPrivacyClick={() => setIsPrivacyOpen(true)}
          onMenuToggle={() => setIsMenuOpen(true)}
        />
      </div>
    </Router>
  );
}

function AnimatedRoutes({ 
  onTermsClick, 
  onPrivacyClick, 
  onMenuToggle 
}: { 
  onTermsClick: () => void;
  onPrivacyClick: () => void;
  onMenuToggle: () => void;
}) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route 
          path="/" 
          element={
            <HomePage 
              onMenuToggle={onMenuToggle}
              onTermsClick={onTermsClick}
              onPrivacyClick={onPrivacyClick}
            />
          } 
        />
        <Route 
          path="/stories" 
          element={
            <StoriesPage 
              onTermsClick={onTermsClick}
              onPrivacyClick={onPrivacyClick}
            />
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}
