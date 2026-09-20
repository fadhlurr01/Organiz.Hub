import React from 'react';

export default function Team() {
  return (
    <section id="team" className="section section-dark-alt">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading">Tim Konsultan Digital Organiz.Hub</h2>
          <p className="section-subheading">
            Specialist Digital Architecture for Foundations & NGOs
          </p>
        </div>

        <div className="team-profile-card glass-panel">
          <div className="team-avatar-box">
            <div className="team-avatar-initials">OH</div>
          </div>
          <div className="team-info">
            <h3 className="team-name">Fadhlur Rohman & Tim Arsitektur Nirlaba</h3>
            <span className="team-role text-emerald">Principal Architect & Nonprofit Digital Strategist</span>
            <p className="team-bio">
              Telah berpengalaman mendampingi lebih dari 250+ Yayasan Sosial, Komunitas Nasional, dan Lembaga NGO di seluruh Indonesia sejak 2018 dalam membangun platform digital mandiri, aman, dan terpercaya.
            </p>
            <div className="team-badges">
              <span className="t-badge">✓ 250+ Organisasi Didampingi</span>
              <span className="t-badge">✓ Kepatuhan Hukum & Kas WTP</span>
              <span className="t-badge">✓ Spesialis Donasi QRIS Terverifikasi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
