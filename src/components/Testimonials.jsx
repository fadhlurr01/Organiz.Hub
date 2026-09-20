import React, { useState, useEffect } from 'react';
import { I18N } from '../data/i18n';
import { TESTIMONIALS_DATA } from '../data/mockData';

export default function Testimonials({ lang }) {
  const t = I18N[lang] || I18N.id;
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = () => {
    setCurrentIdx(prev => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIdx(prev => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimoni" className="section section-testi-enhanced">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading">{t.testi_title}</h2>
          <p className="section-subheading">{t.testi_sub}</p>
        </div>

        {/* Verified Organizations Marquee Ribbon */}
        <div className="org-partner-marquee-container">
          <div className="org-marquee-ribbon">
            <div className="org-chip-pill"><span className="org-dot" /> Yayasan Yatim Nusantara Mandiri</div>
            <div className="org-chip-pill"><span className="org-dot" /> Gerakan Relawan Hijau Indonesia</div>
            <div className="org-chip-pill"><span className="org-dot" /> Lembaga Advokasi Hak & Lingkungan</div>
            <div className="org-chip-pill"><span className="org-dot" /> Panti Asuhan Kasih Ibu Mandiri</div>
            <div className="org-chip-pill"><span className="org-dot" /> Dompet Filantropi & Zakat Nasional</div>
            <div className="org-chip-pill"><span className="org-dot" /> Aksi Relawan Medis Darurat 34 Provinsi</div>
            <div className="org-chip-pill"><span className="org-dot" /> Yayasan Beasiswa Pelajar Pelosok</div>
            <div className="org-chip-pill"><span className="org-dot" /> Asosiasi Konservasi Satwa Nusantara</div>
            <div className="org-chip-pill"><span className="org-dot" /> Yayasan Yatim Nusantara Mandiri</div>
            <div className="org-chip-pill"><span className="org-dot" /> Gerakan Relawan Hijau Indonesia</div>
            <div className="org-chip-pill"><span className="org-dot" /> Lembaga Advokasi Hak & Lingkungan</div>
          </div>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="testi-carousel-wrapper">
          <div className="testi-carousel-viewport" id="testi-viewport">
            <div 
              className="testi-carousel-track" 
              id="testi-track"
              style={{ transform: `translateX(-${currentIdx * 100}%)`, transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              {TESTIMONIALS_DATA.map((item, idx) => (
                <div key={idx} className={`testi-slide ${currentIdx === idx ? 'active' : ''}`}>
                  <div className="testi-card glass-panel">
                    <div className="testi-top-meta">
                      <div className={`testi-org-type-badge ${item.badgeColor}`}>{item.type}</div>
                      <div className="testi-stars">★★★★★</div>
                      <span className="testi-verified-tag">{item.verified}</span>
                    </div>
                    <p className="testi-quote">{item.quote}</p>
                    <div className="testi-author-row">
                      <div className={`author-avatar-chip ${item.badgeColor}`}>{item.initials}</div>
                      <div className="testi-author">
                        <strong>{item.author}</strong>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="testi-controls-bar">
            <button className="testi-btn-prev" onClick={prevSlide} aria-label="Testimoni Sebelumnya">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>

            <div className="testi-dots-track">
              {TESTIMONIALS_DATA.map((_, dotIdx) => (
                <span 
                  key={dotIdx}
                  className={`testi-dot ${currentIdx === dotIdx ? 'active' : ''}`}
                  onClick={() => setCurrentIdx(dotIdx)}
                />
              ))}
            </div>

            <button className="testi-btn-next" onClick={nextSlide} aria-label="Testimoni Selanjutnya">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '18px', height: '18px' }}><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
