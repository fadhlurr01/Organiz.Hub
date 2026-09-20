import React from 'react';
import { I18N } from '../data/i18n';

export default function WhyUs({ lang }) {
  const t = I18N[lang] || I18N.id;

  return (
    <section id="why-us" className="section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading">{t.why_title}</h2>
          <p className="section-subheading">{t.why_sub}</p>
        </div>

        <div className="grid-3-col">
          <div className="why-card glass-panel">
            <div className="why-icon emerald">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="why-title">Paham Regulasi & Legalitas Hukum</h3>
            <p className="why-desc">Kami memastikan struktur publikasi website Anda patuh terhadap UU Kemenkumham, aturan Dinas Sosial, dan keterbukaan informasi nirlaba.</p>
          </div>

          <div className="why-card glass-panel">
            <div className="why-icon blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
            <h3 className="why-title">Rekening 100% Langsung ke Organisasi</h3>
            <p className="why-desc">Tidak ada pemotongan biaya pihak ketiga yang tersembunyi (0% Potongan). Seluruh donasi masuk langsung ke rekening bank atau QRIS resmi atas nama lembaga Anda.</p>
          </div>

          <div className="why-card glass-panel">
            <div className="why-icon coral">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="why-title">Pendampingan & Pelatihan Pengurus</h3>
            <p className="why-desc">Tim kami memberikan sesi panduan khusus bagi pengurus yayasan agar dapat mengunggah berita, foto penyaluran, dan laporan kas dengan sangat mudah tanpa coding.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
