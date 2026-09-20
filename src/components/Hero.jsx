import React, { useState } from 'react';
import { I18N } from '../data/i18n';

export default function Hero({ lang }) {
  const t = I18N[lang] || I18N.id;
  const [activeTab, setActiveTab] = useState('donasi');
  const [donationAmount, setDonationAmount] = useState(100000);
  const [donorName, setDonorName] = useState('Hamba Allah');
  const [totalCollected, setTotalCollected] = useState(384500000);
  const targetDonation = 500000000;
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleDonate = (amount) => {
    setDonationAmount(amount);
  };

  const submitDonation = (e) => {
    e.preventDefault();
    setTotalCollected(prev => Math.min(targetDonation, prev + donationAmount));
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const progressPercent = Math.min(100, Math.round((totalCollected / targetDonation) * 100));

  return (
    <section id="hero" className="section hero-section">
      {/* Cyber Mesh Ambient FX */}
      <div className="hero-futuristic-bg" aria-hidden="true">
        <div className="hero-cyber-grid" />
        <div className="hero-glow-orb orb-1" />
        <div className="hero-glow-orb orb-2" />
        <div className="hero-glow-orb orb-3" />
        <svg className="hero-network-svg" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <circle cx="200" cy="180" r="4" fill="#890C25" opacity="0.6" />
          <circle cx="380" cy="120" r="5" fill="#D97706" opacity="0.7" />
          <circle cx="560" cy="240" r="4" fill="#890C25" opacity="0.6" />
          <circle cx="840" cy="160" r="6" fill="#890C25" opacity="0.8" />
          <circle cx="1120" cy="280" r="5" fill="#D97706" opacity="0.6" />
          <circle cx="1300" cy="140" r="4" fill="#890C25" opacity="0.5" />
          <line x1="200" y1="180" x2="380" y2="120" stroke="rgba(137,12,37,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="380" y1="120" x2="560" y2="240" stroke="rgba(217,119,6,0.25)" strokeWidth="1.5" />
          <line x1="560" y1="240" x2="840" y2="160" stroke="rgba(137,12,37,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="840" y1="160" x2="1120" y2="280" stroke="rgba(137,12,37,0.25)" strokeWidth="1.5" />
          <line x1="1120" y1="280" x2="1300" y2="140" stroke="rgba(217,119,6,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="container hero-layout">
        {/* Left Hero Pitch */}
        <div className="hero-left-content">
          <div className="badge-pill-spesialis">
            <span className="pulse-dot-emerald" />
            <span>{t.hero_spesialis}</span>
          </div>

          <h1 className="hero-title">
            <span>{t.hero_title_1}</span>{' '}
            <span className="gradient-text-emerald">{t.hero_title_2}</span>
          </h1>

          <p className="hero-description">{t.hero_desc}</p>

          <div className="hero-actions">
            <a href="#paket" className="btn-primary">
              <span>{t.hero_btn_pricing}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <a href="https://wa.me/6281234567890?text=Halo%20Organiz.Hub,%20kami%20ingin%20konsultasi%20arsitektur%20website" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', flexShrink: 0 }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              <span>{t.hero_btn_consult}</span>
            </a>
            <a href="#templates" className="btn-outline-glass">
              <span>{t.hero_btn_templates}</span>
            </a>
          </div>

          {/* 5 Mini Pillars Strip */}
          <div className="hero-pillars-bar">
            <div className="hp-item"><div className="hp-icon emerald">✓</div><span>Branding & Trust</span></div>
            <div className="hp-item"><div className="hp-icon blue">✓</div><span>Donasi QRIS</span></div>
            <div className="hp-item"><div className="hp-icon purple">✓</div><span>Kas Publik WTP</span></div>
            <div className="hp-item"><div className="hp-icon amber">✓</div><span>E-KTA Relawan</span></div>
            <div className="hp-item"><div className="hp-icon coral">✓</div><span>Legalitas Kemenkumham</span></div>
          </div>
        </div>

        {/* Right Interactive Mockup Dashboard */}
        <div className="hero-right-visual" id="hero-mockup-wrapper">
          <div className="dashboard-window glass-panel">
            <div className="window-header">
              <div className="win-dots">
                <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              </div>
              <div className="win-url-bar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                <span>https://yayasan-nusantara.or.id/program/beasiswa</span>
              </div>
            </div>

            {/* Mockup Dashboard Sub-Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', padding: '4px 12px', gap: '8px' }}>
              <button 
                onClick={() => setActiveTab('donasi')}
                style={{ 
                  background: activeTab === 'donasi' ? 'var(--brand-primary-subtle)' : 'transparent', 
                  color: activeTab === 'donasi' ? 'var(--text-primary)' : 'var(--text-secondary)',
                  border: 'none', 
                  padding: '6px 14px', 
                  borderRadius: 'var(--radius-sm)', 
                  cursor: 'pointer',
                  fontWeight: activeTab === 'donasi' ? '600' : '400',
                  fontSize: '0.85rem'
                }}
              >
                💳 Donasi QRIS
              </button>
              <button 
                onClick={() => setActiveTab('kas')}
                style={{ 
                  background: activeTab === 'kas' ? 'var(--brand-primary-subtle)' : 'transparent', 
                  color: activeTab === 'kas' ? 'var(--text-primary)' : 'var(--text-secondary)',
                  border: 'none', 
                  padding: '6px 14px', 
                  borderRadius: 'var(--radius-sm)', 
                  cursor: 'pointer',
                  fontWeight: activeTab === 'kas' ? '600' : '400',
                  fontSize: '0.85rem'
                }}
              >
                📊 Transparansi Kas
              </button>
              <button 
                onClick={() => setActiveTab('ekta')}
                style={{ 
                  background: activeTab === 'ekta' ? 'var(--brand-primary-subtle)' : 'transparent', 
                  color: activeTab === 'ekta' ? 'var(--text-primary)' : 'var(--text-secondary)',
                  border: 'none', 
                  padding: '6px 14px', 
                  borderRadius: 'var(--radius-sm)', 
                  cursor: 'pointer',
                  fontWeight: activeTab === 'ekta' ? '600' : '400',
                  fontSize: '0.85rem'
                }}
              >
                🪪 E-KTA Relawan
              </button>
            </div>

            <div className="window-content" style={{ padding: '20px' }}>
              {activeTab === 'donasi' && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-primary)', fontWeight: '700' }}>
                        PROGRAM AKTIF • BEASISWA 2026
                      </span>
                      <h3 style={{ fontSize: '1.2rem', marginTop: '4px', fontWeight: '700' }}>Beasiswa 500 Santri Pelosok</h3>
                    </div>
                    <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', padding: '4px 10px', borderRadius: 'var(--radius-pill)', fontSize: '0.78rem', fontWeight: '600' }}>
                      QRIS Terverifikasi
                    </span>
                  </div>

                  {/* Live Progress Bar */}
                  <div style={{ marginBottom: '18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Terkumpul: <strong style={{ color: 'var(--text-primary)' }}>Rp {totalCollected.toLocaleString('id-ID')}</strong></span>
                      <span style={{ color: 'var(--brand-primary)', fontWeight: '700' }}>{progressPercent}%</span>
                    </div>
                    <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
                      <div style={{ width: `${progressPercent}%`, height: '100%', background: 'linear-gradient(90deg, #890C25, #D97706)', transition: 'width 0.4s ease' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                      <span>Target: Rp 500.000.000</span>
                      <span>1.420 Donatur Terdaftar</span>
                    </div>
                  </div>

                  {/* Nominal Pills */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Pilih Nominal Donasi Cepat:</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                      {[25000, 50000, 100000, 250000].map(amt => (
                        <button 
                          key={amt}
                          type="button"
                          onClick={() => handleDonate(amt)}
                          style={{
                            padding: '8px 4px',
                            background: donationAmount === amt ? 'var(--brand-primary)' : 'rgba(255,255,255,0.05)',
                            color: donationAmount === amt ? '#FFF' : 'var(--text-primary)',
                            border: '1px solid',
                            borderColor: donationAmount === amt ? 'var(--brand-primary)' : 'var(--border-color)',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                          }}
                        >
                          Rp {amt.toLocaleString('id-ID')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Donation Simulator Form */}
                  <form onSubmit={submitDonation} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <input 
                      type="text" 
                      value={donorName} 
                      onChange={e => setDonorName(e.target.value)} 
                      placeholder="Nama Donatur / Hamba Allah"
                      style={{
                        flex: 1,
                        padding: '10px 14px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem'
                      }}
                    />
                    <button 
                      type="submit"
                      style={{
                        padding: '10px 18px',
                        background: 'linear-gradient(135deg, #890C25, #A81332)',
                        color: '#FFF',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 14px rgba(137, 12, 37, 0.35)'
                      }}
                    >
                      ⚡ Simulasikan Donasi
                    </button>
                  </form>

                  {showSuccessToast && (
                    <div style={{ marginTop: '12px', padding: '8px 14px', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', borderRadius: 'var(--radius-sm)', color: '#10B981', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>✓</span> Donasi berhasil dicatat! Kwitansi PDF dan Barcode telah digenerate secara otomatis.
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'kas' && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Alokasi Kas Transparan (WTP Audit 2026)</h4>
                    <span style={{ fontSize: '0.75rem', color: '#10B981', background: 'rgba(16,185,129,0.1)', padding: '2px 8px', borderRadius: '10px' }}>Wajar Tanpa Pengecualian</span>
                  </div>
                  
                  {/* Allocation Bars */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                        <span>85% Penyaluran Program Nyata Santri</span>
                        <strong style={{ color: '#10B981' }}>Rp 326.825.000</strong>
                      </div>
                      <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '85%', height: '100%', background: '#10B981' }} />
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                        <span>10% Operasional & Logistik Lapangan</span>
                        <strong style={{ color: '#D97706' }}>Rp 38.450.000</strong>
                      </div>
                      <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '10%', height: '100%', background: '#D97706' }} />
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                        <span>5% Dana Cadangan Tanggap Darurat</span>
                        <strong style={{ color: '#890C25' }}>Rp 19.225.000</strong>
                      </div>
                      <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '5%', height: '100%', background: '#890C25' }} />
                      </div>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    📄 Laporan kas diaudit akuntan publik independen berlisensi Kementerian Keuangan RI secara berkala tiap semester.
                  </div>
                </div>
              )}

              {activeTab === 'ekta' && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Kartu Anggota Virtual (E-KTA) Relawan</h4>
                    <span style={{ fontSize: '0.75rem', color: '#890C25', background: 'rgba(137,12,37,0.12)', padding: '2px 8px', borderRadius: '10px', fontWeight: '600' }}>QR Code Terverifikasi</span>
                  </div>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(137,12,37,0.12), rgba(217,119,6,0.08))',
                    border: '1px solid rgba(137,12,37,0.25)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--brand-primary)', fontWeight: '700' }}>RELAVAN MEDIS AKTIF</div>
                      <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '2px' }}>Fadhlur Rohman</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>ID: ORG-2026-8842</div>
                      <div style={{ fontSize: '0.75rem', color: '#10B981', marginTop: '6px' }}>● Status: Siaga Bencana Posko Utama</div>
                    </div>
                    {/* Fake QR Code */}
                    <div style={{ width: '64px', height: '64px', background: '#FFF', padding: '6px', borderRadius: '6px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2px' }}>
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} style={{ background: (i % 2 === 0 || i % 3 === 0) ? '#000' : '#FFF' }} />
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: '12px', fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    Scan QR Code ini untuk memvalidasi legalitas penugasan relawan di lokasi aksi kemanusiaan.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
