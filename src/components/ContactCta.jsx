import React from 'react';
import { I18N } from '../data/i18n';

export default function ContactCta({ lang }) {
  const t = I18N[lang] || I18N.id;

  return (
    <section id="kontak" className="section cta-final-section">
      <div className="container max-w-960 text-center">
        <div className="cta-final-card glass-panel">
          <h2 className="cta-title">{t.cta_title}</h2>
          <p className="cta-desc">{t.cta_desc}</p>
          <div className="cta-btn-wrap">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Organiz.Hub,%20kami%20ingin%20konsultasi%20pembuatan%20website%20organisasi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary btn-lg"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', height: '20px' }}>
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              <span>{t.cta_btn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
