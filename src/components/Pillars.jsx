import React from 'react';
import { I18N } from '../data/i18n';

export default function Pillars({ lang }) {
  const t = I18N[lang] || I18N.id;

  return (
    <section id="pilar" className="section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading">{t.pilar_title}</h2>
          <p className="section-subheading">{t.pilar_sub}</p>
        </div>

        <div className="grid-4-col">
          <div className="pillar-card glass-panel">
            <div className="p-num">01</div>
            <div className="p-icon-box emerald">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="p-title">Branding & Kepercayaan Publik</h3>
            <p className="p-desc">Membangun identitas visual yang memancarkan kredibilitas hukum (Kemenkumham), rekam jejak, dan visi mulia lembaga.</p>
          </div>

          <div className="pillar-card glass-panel">
            <div className="p-num">02</div>
            <div className="p-icon-box blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
            <h3 className="p-title">Fundraising & Donasi QRIS</h3>
            <p className="p-desc">Integrasi pembayaran donasi instan tanpa ribet via QRIS semua e-wallet, Virtual Account multi-bank, dan kalkulator zakat.</p>
          </div>

          <div className="pillar-card glass-panel">
            <div className="p-num">03</div>
            <div className="p-icon-box purple">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <h3 className="p-title">Transparansi & Akuntabilitas WTP</h3>
            <p className="p-desc">Penyajian grafik kas terbuka, laporan berkala, dan dokumentasi penyaluran nyata yang membuktikan integritas pengurus.</p>
          </div>

          <div className="pillar-card glass-panel">
            <div className="p-num">04</div>
            <div className="p-icon-box coral">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </div>
            <h3 className="p-title">Otomasi Relawan & Komunitas</h3>
            <p className="p-desc">Sistem pendaftaran relawan online, kartu anggota digital (e-KTA), sertifikat aksi, dan broadcast informasi cepat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
