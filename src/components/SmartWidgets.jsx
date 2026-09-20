import React from 'react';

export default function SmartWidgets() {
  return (
    <section id="widgets" className="section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading">Organization Smart Widget Library</h2>
          <p className="section-subheading">
            Koleksi komponen widget interaktif siap pasang untuk memperkuat keterlibatan donatur dan pengunjung.
          </p>
        </div>

        <div className="grid-3-col">
          {/* Widget 1: Donation Progress */}
          <div className="widget-card glass-panel">
            <div className="w-icon emerald">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
            <h3 className="w-title">Live Donation Progress Bar</h3>
            <p className="w-desc">Menampilkan persentase dana terkumpul dengan live counter dan tombol donasi QRIS dinamis.</p>
            <div className="w-demo-box">
              <div className="w-bar-track">
                <div className="w-bar-fill" style={{ width: '78%' }} />
              </div>
              <span className="w-stat">Rp 390.000.000 / Rp 500.000.000 (78%)</span>
            </div>
          </div>

          {/* Widget 2: Kas Transparency */}
          <div className="widget-card glass-panel">
            <div className="w-icon blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <h3 className="w-title">Interactive Kas Transparency</h3>
            <p className="w-desc">Diagram proporsi penyaluran bantuan 85% program nyata, 10% operasional, 5% dana cadangan.</p>
            <div className="w-demo-box">
              <span className="w-stat text-emerald">Audit WTP: Rp 1,2 Miliar Tersalurkan</span>
            </div>
          </div>

          {/* Widget 3: E-KTA Generator */}
          <div className="widget-card glass-panel">
            <div className="w-icon purple">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </div>
            <h3 className="w-title">Digital Volunteer E-KTA</h3>
            <p className="w-desc">Kartu anggota virtual otomatis ber-QR Code untuk verifikasi identitas relawan saat bertugas.</p>
            <div className="w-demo-box">
              <span className="w-stat text-purple">ID: ORG-2026-8842 • Terverifikasi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
