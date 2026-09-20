import React, { useState, useEffect } from 'react';
import { I18N } from '../data/i18n';

export default function Navbar({ lang, setLang, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const t = I18N[lang] || I18N.id;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header id="main-header" className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container container">
          
          {/* Brand Logo */}
          <a href="#hero" className="brand-logo" aria-label="Organiz.Hub Beranda">
            <div className="logo-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" style={{ width: '18px', height: '18px', flexShrink: 0 }}>
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="logo-text">
              <span className="brand-title">Organiz<span className="brand-accent">.Hub</span></span>
              <span className="brand-badge-pill hide-tablet">Yayasan • Komunitas • NGO</span>
            </div>
          </a>

          {/* Desktop Navigation with 4 Mega Grouped Dropdowns */}
          <nav className="desktop-navigation hide-mobile" aria-label="Navigasi Utama">
            <ul className="nav-list">
              
              {/* 1. Dropdown Solusi Segmen */}
              <li className="nav-item has-dropdown">
                <a href="#solusi" className="nav-anchor">
                  <span>{t.nav_solusi}</span>
                  <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <div className="dropdown-menu">
                  <a href="#solusi-yayasan" className="dropdown-link">
                    <div className="dd-icon crimson">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 10a3 3 0 0 1 6 0v11" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_sol_yayasan_title}</strong>
                      <span>{t.dd_sol_yayasan_sub}</span>
                    </div>
                  </a>
                  <a href="#solusi-komunitas" className="dropdown-link">
                    <div className="dd-icon amber">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_sol_komunitas_title}</strong>
                      <span>{t.dd_sol_komunitas_sub}</span>
                    </div>
                  </a>
                  <a href="#solusi-ngo" className="dropdown-link">
                    <div className="dd-icon purple">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_sol_ngo_title}</strong>
                      <span>{t.dd_sol_ngo_sub}</span>
                    </div>
                  </a>
                </div>
              </li>

              {/* 2. Dropdown Produk & Fitur */}
              <li className="nav-item has-dropdown">
                <a href="#paket" className="nav-anchor">
                  <span>{t.nav_products}</span>
                  <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <div className="dropdown-menu">
                  <a href="#templates" className="dropdown-link dd-highlight">
                    <div className="dd-icon crimson">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    </div>
                    <div>
                      <strong className="text-crimson">{t.dd_prod_tpl_title}</strong>
                      <span>{t.dd_prod_tpl_sub}</span>
                    </div>
                  </a>
                  <a href="#pilar" className="dropdown-link">
                    <div className="dd-icon amber">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_prod_pilar_title}</strong>
                      <span>{t.dd_prod_pilar_sub}</span>
                    </div>
                  </a>
                  <a href="#paket" className="dropdown-link">
                    <div className="dd-icon purple">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_prod_pkg_title}</strong>
                      <span>{t.dd_prod_pkg_sub}</span>
                    </div>
                  </a>
                  <a href="#fitur" className="dropdown-link">
                    <div className="dd-icon amber">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 14 14" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_prod_feat_title}</strong>
                      <span>{t.dd_prod_feat_sub}</span>
                    </div>
                  </a>
                  <a href="#widgets" className="dropdown-link">
                    <div className="dd-icon crimson">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_prod_tools_title}</strong>
                      <span>{t.dd_prod_tools_sub}</span>
                    </div>
                  </a>
                  <a href="#addons" className="dropdown-link">
                    <div className="dd-icon purple">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_prod_addon_title}</strong>
                      <span>{t.dd_prod_addon_sub}</span>
                    </div>
                  </a>
                </div>
              </li>

              {/* 3. Dropdown Informasi */}
              <li className="nav-item has-dropdown">
                <a href="#why-us" className="nav-anchor">
                  <span>{t.nav_info}</span>
                  <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <div className="dropdown-menu">
                  <a href="#why-us" className="dropdown-link">
                    <div className="dd-icon crimson">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_info_why_title}</strong>
                      <span>{t.dd_info_why_sub}</span>
                    </div>
                  </a>
                  <a href="#roadmap" className="dropdown-link">
                    <div className="dd-icon amber">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_info_road_title}</strong>
                      <span>{t.dd_info_road_sub}</span>
                    </div>
                  </a>
                  <a href="#team" className="dropdown-link">
                    <div className="dd-icon purple">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_info_team_title}</strong>
                      <span>{t.dd_info_team_sub}</span>
                    </div>
                  </a>
                  <a href="#testimoni" className="dropdown-link">
                    <div className="dd-icon amber">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_info_testi_title}</strong>
                      <span>{t.dd_info_testi_sub}</span>
                    </div>
                  </a>
                  <a href="#brosur" className="dropdown-link">
                    <div className="dd-icon crimson">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_info_brochure_title}</strong>
                      <span>{t.dd_info_brochure_sub}</span>
                    </div>
                  </a>
                  <a href="#faq" className="dropdown-link">
                    <div className="dd-icon purple">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_info_faq_title}</strong>
                      <span>{t.dd_info_faq_sub}</span>
                    </div>
                  </a>
                </div>
              </li>

              {/* 4. Dropdown Kontak */}
              <li className="nav-item has-dropdown">
                <a href="#kontak" className="nav-anchor">
                  <span>{t.nav_contact}</span>
                  <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <div className="dropdown-menu">
                  <a href="https://wa.me/6281234567890?text=Halo%20Organiz.Hub,%20saya%20tertarik%20konsultasi%20website%20organisasi" target="_blank" rel="noopener noreferrer" className="dropdown-link">
                    <div className="dd-icon crimson">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_contact_wa_title}</strong>
                      <span>{t.dd_contact_wa_sub}</span>
                    </div>
                  </a>
                  <a href="https://wa.me/6281234567890?text=Halo%20Organiz.Hub,%20kami%20ingin%20jadwal%20Zoom%20demo%20arsitektur%20website" target="_blank" rel="noopener noreferrer" className="dropdown-link">
                    <div className="dd-icon amber">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_contact_zoom_title}</strong>
                      <span>{t.dd_contact_zoom_sub}</span>
                    </div>
                  </a>
                  <a href="#brosur" className="dropdown-link">
                    <div className="dd-icon purple">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                    </div>
                    <div>
                      <strong>{t.dd_contact_prop_title}</strong>
                      <span>{t.dd_contact_prop_sub}</span>
                    </div>
                  </a>
                </div>
              </li>

            </ul>
          </nav>

          {/* Right Header Actions: Trilingual Switcher (ID/EN/ZH), Theme & Dedicated CTA */}
          <div className="header-right-group">
            <div className="lang-switch hide-mobile">
              <button className={`lang-btn ${lang === 'id' ? 'active' : ''}`} onClick={() => setLang('id')}>ID</button>
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
              <button className={`lang-btn ${lang === 'zh' ? 'active' : ''}`} onClick={() => setLang('zh')}>中文</button>
            </div>

            <button className="theme-btn" onClick={toggleTheme} aria-label="Ganti Mode Tema" title="Toggle Dark/Light Mode">
              {theme === 'dark' ? (
                <svg className="theme-icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg className="theme-icon moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Dedicated Standalone CTA */}
            <a href="https://wa.me/6281234567890?text=Halo%20Organiz.Hub,%20saya%20tertarik%20konsultasi%20website%20organisasi" target="_blank" rel="noopener noreferrer" className="btn-nav-cta hide-mobile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', flexShrink: 0 }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>{t.nav_cta}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button className="mobile-menu-btn" onClick={() => setDrawerOpen(true)} aria-label="Buka Menu">
              <span></span><span></span><span></span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Slide Drawer */}
      <div className={`drawer-overlay ${drawerOpen ? 'active' : ''}`} onClick={closeDrawer} />
      <aside className={`mobile-drawer ${drawerOpen ? 'active' : ''}`}>
        <div className="drawer-top">
          <span className="brand-title">Organiz<span className="brand-accent">.Hub</span></span>
          <button className="drawer-close" onClick={closeDrawer}>&times;</button>
        </div>
        <div className="drawer-links">
          <div className="lang-switch-mobile" style={{ display: 'flex', gap: '6px', marginBottom: '14px', padding: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-color)' }}>
            <button className={`lang-btn ${lang === 'id' ? 'active' : ''}`} style={{ flex: 1 }} onClick={() => setLang('id')}>ID</button>
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} style={{ flex: 1 }} onClick={() => setLang('en')}>EN</button>
            <button className={`lang-btn ${lang === 'zh' ? 'active' : ''}`} style={{ flex: 1 }} onClick={() => setLang('zh')}>中文</button>
          </div>
          <a href="#hero" className="d-link" onClick={closeDrawer}>Beranda</a>
          <a href="#solusi" className="d-link" onClick={closeDrawer}>{t.nav_solusi}</a>
          <a href="#paket" className="d-link" onClick={closeDrawer}>{t.nav_products}</a>
          <a href="#why-us" className="d-link" onClick={closeDrawer}>{t.nav_info}</a>
          <a href="#kontak" className="d-link" onClick={closeDrawer}>{t.nav_contact}</a>
          <a href="#templates" className="d-link" onClick={closeDrawer}>{t.dd_prod_tpl_title}</a>
          <a href="#brosur" className="d-link" onClick={closeDrawer}>{t.dd_info_brochure_title}</a>
          <a href="#testimoni" className="d-link" onClick={closeDrawer}>{t.dd_info_testi_title}</a>
          <a href="#faq" className="d-link" onClick={closeDrawer}>{t.dd_info_faq_title}</a>
        </div>
        <div className="drawer-bottom">
          <a href="https://wa.me/6281234567890?text=Halo%20Organiz.Hub,%20saya%20tertarik%20konsultasi%20website%20organisasi" target="_blank" rel="noopener noreferrer" className="btn-primary w-100">
            {t.nav_cta}
          </a>
        </div>
      </aside>
    </>
  );
}
