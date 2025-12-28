import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  Navbar,
  FullScreenMenu,
  WhatsAppButton,
  TermsModal,
  PrivacyModal,
  Footer
} from './components';

// Lazy load heavy components
const HeroSlider = lazy(() => import('./components').then(m => ({ default: m.HeroSlider })));
const FeaturedSection = lazy(() => import('./components').then(m => ({ default: m.FeaturedSection })));
const VideoGallery = lazy(() => import('./components').then(m => ({ default: m.VideoGallery })));
const BlogSection = lazy(() => import('./components').then(m => ({ default: m.BlogSection })));
const CTASection = lazy(() => import('./components').then(m => ({ default: m.CTASection })));
const ContactSection = lazy(() => import('./components').then(m => ({ default: m.ContactSection })));
const AllStoriesPage = lazy(() => import('./components').then(m => ({ default: m.AllStoriesPage })));

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
    <div className="page-transition">
      <main>
        <Suspense fallback={<div className="h-screen bg-gray-50" />}>
          <HeroSlider />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-white" />}>
          <FeaturedSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50" />}>
          <VideoGallery />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-white" />}>
          <BlogSection />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-gray-50" />}>
          <CTASection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-white" />}>
          <ContactSection />
        </Suspense>
      </main>
      
      <Footer 
        onTermsClick={onTermsClick}
        onPrivacyClick={onPrivacyClick}
      />
    </div>
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
    <div className="page-transition">
      <Suspense fallback={<div className="h-screen bg-white" />}>
        <AllStoriesPage />
      </Suspense>
      <Footer 
        onTermsClick={onTermsClick}
        onPrivacyClick={onPrivacyClick}
      />
    </div>
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
  );
}
