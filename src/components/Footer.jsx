import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid-4">
        <div className="footer-col brand-col">
          <div className="brand-logo footer-logo">
            <div className="logo-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="brand-title">Organiz<span className="brand-accent">.Hub</span></span>
          </div>
          <p className="footer-desc">Specialist Digital Architecture & Website Solutions for Foundations, Communities & NGOs in Indonesia.</p>
          <span className="footer-reg">Izin Operasional & Standar Kemenkumham Terbuka</span>
        </div>

        <div className="footer-col">
          <h4 className="f-col-title">Solusi Segmen</h4>
          <ul className="f-links">
            <li><a href="#solusi-yayasan">Yayasan Sosial & Panti</a></li>
            <li><a href="#solusi-komunitas">Komunitas & Asosiasi</a></li>
            <li><a href="#solusi-ngo">NGO & Lembaga Filantropi</a></li>
            <li><a href="#templates">15 Template Live Cloud</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="f-col-title">Arsitektur & Paket</h4>
          <ul className="f-links">
            <li><a href="#pilar">4 Pilar Infrastruktur</a></li>
            <li><a href="#paket">Pilihan 6 Paket Website</a></li>
            <li><a href="#fitur">Feature Library Modular</a></li>
            <li><a href="#widgets">Organization Smart Tools</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="f-col-title">Kontak Resmi</h4>
          <ul className="f-links contact-info">
            <li>WhatsApp: +62 812-3456-7890</li>
            <li>Email: halo@organizhub.id</li>
            <li>Jam Layanan: Senin - Sabtu (08:00 - 20:00 WIB)</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; 2026 Organiz.Hub. Hak Cipta Dilindungi Undang-Undang.</p>
        <div className="f-bottom-links">
          <a href="#faq">Kebijakan Privasi</a>
          <a href="#faq">Syarat & Ketentuan</a>
          <a href="#hero">Kembali ke Atas ↑</a>
        </div>
      </div>
    </footer>
  );
}
