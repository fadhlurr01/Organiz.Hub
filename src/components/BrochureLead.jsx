import React, { useState } from 'react';

export default function BrochureLead({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Halo Organiz.Hub, saya ${formData.name} dari ${formData.org} (${formData.phone}). Saya ingin meminta Brosur & Panduan Digitalisasi Organisasi 2026 format PDF.`
    );
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', org: '', phone: '' });
  };

  return (
    <section id="brosur" className="section section-dark-alt">
      <div className="container">
        <div className="brochure-lead-box glass-panel">
          <div className="brochure-left">
            <h2 className="brochure-title">Download Brosur & Panduan Digitalisasi Organisasi 2026</h2>
            <p className="brochure-desc">
              Dapatkan panduan komprehensif berisi perbandingan fitur, rincian biaya paket, contoh proposal hibah nirlaba, dan panduan integrasi donasi QRIS langsung ke WhatsApp Anda.
            </p>
            <div className="brochure-checklist">
              <div>✓ Dokumen PDF 28 Halaman Bebas Biaya</div>
              <div>✓ Contoh Proposal Kemenkumham & Donatur</div>
              <div>✓ Panduan Praktis Kas Terbuka WTP</div>
            </div>
          </div>

          <div className="brochure-right">
            <form className="lead-form-box" onSubmit={handleSubmit}>
              <h4 className="form-title">Kirimkan Brosur ke Kontak Saya:</h4>
              <div className="form-group">
                <label htmlFor="inp-name">Nama Lengkap Pengurus</label>
                <input 
                  type="text" 
                  id="inp-name" 
                  required 
                  placeholder="Contoh: Budi Santoso, S.Sos"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inp-org">Nama Organisasi / Yayasan / Komunitas</label>
                <input 
                  type="text" 
                  id="inp-org" 
                  required 
                  placeholder="Contoh: Yayasan Cahaya Mandiri"
                  value={formData.org}
                  onChange={e => setFormData({ ...formData, org: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inp-phone">Nomor WhatsApp Aktif</label>
                <input 
                  type="tel" 
                  id="inp-phone" 
                  required 
                  placeholder="0812xxxxxxxx"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-primary w-100">
                <span>Unduh Brosur & Panduan (PDF)</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>
              {submitted && (
                <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', borderRadius: 'var(--radius-sm)', color: '#10B981', fontSize: '0.85rem' }}>
                  ✓ Permintaan brosur telah diteruskan ke WhatsApp Anda!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
