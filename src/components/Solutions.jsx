import React from 'react';
import { I18N } from '../data/i18n';

export default function Solutions({ lang, onFilterCategory }) {
  const t = I18N[lang] || I18N.id;

  return (
    <section id="solusi" className="section section-dark-alt">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading">{t.sol_title}</h2>
          <p className="section-subheading">{t.sol_sub}</p>
        </div>

        <div className="grid-3-col">
          {/* Segmen 1: Yayasan */}
          <div className="solution-card glass-panel" id="solusi-yayasan">
            <div className="sol-header">
              <div className="sol-icon-box emerald">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10a3 3 0 0 1 6 0v11" />
                </svg>
              </div>
              <span className="sol-badge emerald">YAYASAN SOSIAL</span>
            </div>
            <h3 className="sol-title">Yayasan Sosial & Pendidikan</h3>
            <p className="sol-desc">Untuk panti asuhan, lembaga pendidikan, pondok tahfidz, dan lembaga pengelola zakat/infaq.</p>
            <ul className="sol-checklist">
              <li><span>✓</span> Portal Donasi QRIS Dinamis & Virtual Account</li>
              <li><span>✓</span> Laporan Kas Publik & Transparansi Donasi Real-Time</li>
              <li><span>✓</span> Galeri Anak Asuh & Program Binaan Terbuka</li>
              <li><span>✓</span> Bukti Kwitansi PDF Otomatis Berstempel Digital</li>
            </ul>
            <a 
              href="#templates" 
              className="sol-link" 
              onClick={() => onFilterCategory && onFilterCategory('yayasan')}
            >
              Lihat Template Yayasan →
            </a>
          </div>

          {/* Segmen 2: Komunitas */}
          <div className="solution-card glass-panel" id="solusi-komunitas">
            <div className="sol-header">
              <div className="sol-icon-box blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className="sol-badge blue">KOMUNITAS</span>
            </div>
            <h3 className="sol-title">Komunitas & Asosiasi</h3>
            <p className="sol-desc">Untuk komunitas hobi, gerakan sosial kepemudaan, ikatan alumni, dan asosiasi profesi.</p>
            <ul className="sol-checklist">
              <li><span>✓</span> Database Keanggotaan & Generator E-KTA Digital</li>
              <li><span>✓</span> Kalender Aksi Sosial, Meetup & Event Ticketing</li>
              <li><span>✓</span> Form Pendaftaran Relawan & Screening Keahlian</li>
              <li><span>✓</span> Integrasi Forum Diskusi & WhatsApp Group</li>
            </ul>
            <a 
              href="#templates" 
              className="sol-link"
              onClick={() => onFilterCategory && onFilterCategory('komunitas')}
            >
              Lihat Template Komunitas →
            </a>
          </div>

          {/* Segmen 3: NGO */}
          <div className="solution-card glass-panel" id="solusi-ngo">
            <div className="sol-header">
              <div className="sol-icon-box purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className="sol-badge purple">NGO & FILANTROPI</span>
            </div>
            <h3 className="sol-title">NGO & Lembaga Filantropi</h3>
            <p className="sol-desc">Untuk organisasi nirlaba internasional, lembaga advokasi hak asasi, lingkungan, dan riset sosial.</p>
            <ul className="sol-checklist">
              <li><span>✓</span> Multi-Bahasa (ID / EN / ZH) untuk Mitra Donor Internasional</li>
              <li><span>✓</span> Pusat Unduhan Laporan Tahunan & Audit Keuangan WTP</li>
              <li><span>✓</span> Halaman Publikasi Riset, Kertas Kebijakan & Artikel</li>
              <li><span>✓</span> Formulir Pengajuan Hibah & Kemitraan Strategis</li>
            </ul>
            <a 
              href="#templates" 
              className="sol-link"
              onClick={() => onFilterCategory && onFilterCategory('ngo')}
            >
              Lihat Template NGO →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
