import React, { useState } from 'react';
import { I18N } from '../data/i18n';
import { FAQS_DATA } from '../data/mockData';

export default function Faq({ lang }) {
  const t = I18N[lang] || I18N.id;
  const [openIdx, setOpenIdx] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const currentFaqs = FAQS_DATA[lang] || FAQS_DATA.id;

  return (
    <section id="faq" className="section section-dark-alt">
      <div className="container max-w-860">
        <div className="section-title-wrap">
          <h2 className="section-heading">{t.faq_title}</h2>
          <p className="section-subheading">{t.faq_sub}</p>
        </div>

        <div className="faq-list-accordion">
          {currentFaqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="faq-row glass-panel">
                <button 
                  className="faq-trigger" 
                  aria-expanded={isOpen}
                  onClick={() => toggleAccordion(idx)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" style={{ transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s ease' }}>+</span>
                </button>
                {isOpen && (
                  <div className="faq-panel" style={{ display: 'block', padding: '0 24px 20px 24px' }}>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.92rem' }}>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
