import React, { useState, useEffect } from 'react';

export default function FloatingStack() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-actions">
      <button 
        className={`btn-scroll-top ${showScroll ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll ke Atas"
      >
        ↑
      </button>
      <a 
        href="https://wa.me/6281234567890?text=Halo%20Organiz.Hub,%20saya%20tertarik%20konsultasi" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-wa-float" 
        aria-label="WhatsApp Hotline"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      </a>
    </div>
  );
}
