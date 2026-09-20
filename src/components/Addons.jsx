import React from 'react';

export default function Addons() {
  return (
    <section id="addons" className="section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading">Layanan Tambahan (Add-On Modules)</h2>
          <p className="section-subheading">
            Tingkatkan fungsionalitas sistem website Anda dengan modul add-on opsional sesuai kebutuhan.
          </p>
        </div>

        <div className="grid-4-col">
          <div className="addon-card glass-panel">
            <span className="addon-tag emerald">PEMBAYARAN</span>
            <h4 className="addon-title">WhatsApp Business API Direct</h4>
            <p className="addon-desc">Kirim notifikasi bukti donasi langsung ke WhatsApp donatur otomatis saat dana masuk.</p>
          </div>

          <div className="addon-card glass-panel">
            <span className="addon-tag blue">MARKETING</span>
            <h4 className="addon-title">Meta Pixel & TikTok Tracking</h4>
            <p className="addon-desc">Optimasi iklan penggalangan dana sosial Anda di Facebook, Instagram, dan TikTok Ads.</p>
          </div>

          <div className="addon-card glass-panel">
            <span className="addon-tag purple">KEANGGOTAAN</span>
            <h4 className="addon-title">Absensi QR Code Event Relawan</h4>
            <p className="addon-desc">Sistem presensi kehadiran bakti sosial langsung scan QR dari smartphone pengurus.</p>
          </div>

          <div className="addon-card glass-panel">
            <span className="addon-tag coral">PRODUKSI</span>
            <h4 className="addon-title">Video Dokumentasi Profil Yayasan</h4>
            <p className="addon-desc">Layanan liputan video profil sinematik untuk panti asuhan dan program binaan Anda.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
