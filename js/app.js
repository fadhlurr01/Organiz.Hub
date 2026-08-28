/**
 * ORGANIZ.HUB — JAVASCRIPT APPLICATION ENGINE
 * Features:
 * 1. Theme Manager (Dark / Light)
 * 2. Multi-Language Switcher (ID / EN)
 * 3. Mobile Navigation Drawer
 * 4. Hero Dashboard Tabs & Donation Simulator
 * 5. 14 Live Template Category Filtering
 * 6. Feature Library Modular Tab Renderer
 * 7. FAQ Accordion Engine
 * 8. Live Responsive Demo Modal Emulator
 * 9. Scroll-to-Top & Sticky Frosted Header
 * 10. GSAP 3.12+ & ScrollTrigger Animations
 * 11. Lead Capture Form Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initLanguageManager();
  initMobileDrawer();
  initHeroDashboard();
  initTemplateFilter();
  initFeatureLibrary();
  initFaqAccordion();
  initDemoModal();
  initFloatingScroll();
  initLeadForm();
  initGsapAnimations();
});

/* ==========================================================================
   1. Theme Manager (Dark / Light)
   ========================================================================== */
function initThemeManager() {
  const themeBtn = document.getElementById('btn-theme-toggle');
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem('organiz_theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      localStorage.setItem('organiz_theme', next);
    });
  }
}

/* ==========================================================================
   2. Language Switcher (ID / EN)
   ========================================================================== */
function initLanguageManager() {
  const btnId = document.getElementById('btn-lang-id');
  const btnEn = document.getElementById('btn-lang-en');

  function setLang(lang) {
    if (btnId && btnEn) {
      if (lang === 'id') {
        btnId.classList.add('active');
        btnEn.classList.remove('active');
      } else {
        btnEn.classList.add('active');
        btnId.classList.remove('active');
      }
    }
    document.documentElement.lang = lang;
    localStorage.setItem('organiz_lang', lang);
  }

  if (btnId) btnId.addEventListener('click', () => setLang('id'));
  if (btnEn) btnEn.addEventListener('click', () => setLang('en'));

  const savedLang = localStorage.getItem('organiz_lang') || 'id';
  setLang(savedLang);
}

/* ==========================================================================
   3. Mobile Navigation Drawer
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const closeBtn = document.getElementById('drawer-close-btn');

  function open() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (overlay) overlay.addEventListener('click', close);

  document.querySelectorAll('.d-link').forEach(link => {
    link.addEventListener('click', close);
  });
}

/* ==========================================================================
   4. Hero Dashboard Tabs & Donation Simulator
   ========================================================================== */
function initHeroDashboard() {
  const tabBtns = document.querySelectorAll('.m-tab-btn');
  const tabContents = document.querySelectorAll('.m-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const activeEl = document.getElementById(`tab-content-${target}`);
      if (activeEl) activeEl.classList.add('active');
    });
  });

  // Simulator
  const simBtns = document.querySelectorAll('.btn-sim');
  const statVal = document.getElementById('stat-collected');
  const statBar = document.getElementById('stat-bar');
  let baseAmount = 842500000;

  simBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      simBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const add = parseInt(btn.getAttribute('data-amount') || '50000', 10);
      const total = baseAmount + add;
      if (statVal) statVal.textContent = 'Rp ' + total.toLocaleString('id-ID');
      const pct = Math.min(100, (total / 1000000000) * 100);
      if (statBar) statBar.style.width = pct.toFixed(1) + '%';
    });
  });

  const demoTrigger = document.getElementById('btn-trigger-demo-donate');
  if (demoTrigger) {
    demoTrigger.addEventListener('click', () => {
      alert('🌟 Simulasi Sukses! Pada sistem asli, donatur akan langsung diarahkan ke QRIS Dinamis atau Payment Gateway resmi atas nama yayasan Anda.');
    });
  }
}

/* ==========================================================================
   5. 14 Live Template Category Filtering
   ========================================================================== */
function initTemplateFilter() {
  const filterBtns = document.querySelectorAll('.t-filter-btn');
  const cards = document.querySelectorAll('.template-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-cat');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'flex';
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 });
          }
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6. Feature Library Modular Tab Renderer
   ========================================================================== */
const featureLibraryData = {
  website: [
    { title: "Desain Responsif Multi-Device", desc: "Tampilan proporsional di smartphone, tablet, laptop, dan layar monitor besar." },
    { title: "Dual Theme (Dark & Light)", desc: "Dua palet warna profesional yang nyaman dibaca donatur di berbagai kondisi." },
    { title: "Ultra Fast Loading (Score 99+)", desc: "Kode bersih dan optimasi gambar untuk kecepatan akses instan di pelosok." },
    { title: "Domain Resmi .or.id / .org", desc: "Penggunaan nama domain resmi organisasi berizin Kemenkumham dengan SSL gratis." },
    { title: "Dashboard Admin Ramah Pemula", desc: "Kelola berita, galeri, dan laporan dengan mudah tanpa keahlian coding." },
    { title: "Banner Kampanye & Hero Slider", desc: "Pamerkan program prioritas utama di halaman depan untuk menarik empati donatur." }
  ],
  donasi: [
    { title: "Donasi QRIS Semua E-Wallet", desc: "Mendukung GoPay, OVO, DANA, LinkAja, ShopeePay, dan seluruh Mobile Banking." },
    { title: "Virtual Account Multi-Bank", desc: "BCA, Mandiri, BRI, BNI, BSI untuk donasi jumlah besar institusi dan perusahaan." },
    { title: "Live Progress Bar Otomatis", desc: "Grafik capaian dana yang bertambah otomatis secara real-time saat donasi masuk." },
    { title: "Kwitansi PDF Berstempel Digital", desc: "Kirim bukti penerimaan donasi otomatis ber-barcode kepada para donatur." },
    { title: "Kalkulator Zakat Maal & Profesi", desc: "Perhitungan zakat otomatis sesuai nisab harga emas terbaru." },
    { title: "Rekap Data Donatur Aman", desc: "Database kontak donatur tersimpan rapi untuk menjalin silaturahmi berkala." }
  ],
  relawan: [
    { title: "Direktori Relawan 34 Provinsi", desc: "Database anggota relawan dengan pemetaan wilayah dan keahlian khusus." },
    { title: "Generator E-KTA Ber-QR Code", desc: "Kartu anggota digital dengan identitas unik untuk verifikasi di posko lapangan." },
    { title: "Kalender Aksi & Bakti Sosial", desc: "Jadwal kegiatan kemanusiaan, workshop, dan distribusi logistik terpadu." },
    { title: "E-Sertifikat Partisipasi Aksi", desc: "Cetak sertifikat otomatis ber-barcode setelah relawan selesai bertugas." },
    { title: "Formulir Pendaftaran Relawan", desc: "Kuesioner pendaftaran dengan filtering minat dan ketersediaan waktu." },
    { title: "Integrasi Grup WhatsApp Relawan", desc: "Tautan masuk grup koordinasi cepat per posko daerah bencana." }
  ],
  transparansi: [
    { title: "Laporan Kas Publik Real-Time", desc: "Grafik terbuka pemasukan donasi dan rincian alokasi dana secara jujur." },
    { title: "Download Center Laporan WTP", desc: "Pusat unduhan berkas PDF audit akuntan publik untuk donor besar." },
    { title: "Diagram Alokasi Dana 85/10/5", desc: "Transparansi proporsi dana bantuan nyata, operasional, dan cadangan." },
    { title: "Dokumentasi Serah Terima Bantuan", desc: "Foto dan berita acara penyaluran bantuan kepada penerima manfaat." },
    { title: "Publikasi Legalitas Hukum", desc: "Pencantuman nomor SK Kemenkumham dan izin operasional Dinas Sosial." },
    { title: "Audit Log Transaksi Donasi", desc: "Riwayat transaksi aman yang tidak dapat dimanipulasi pihak luar." }
  ],
  keamanan: [
    { title: "Enkripsi SSL 256-Bit", desc: "Standar keamanan data tertinggi untuk melindungi privasi donatur." },
    { title: "Anti-DDoS & Cloud Firewall", desc: "Perlindungan website dari serangan siber tanpa risiko down 24/7." },
    { title: "Pencadangan Data Harian (Backup)", desc: "Pencadangan database donatur ke cloud terpisah setiap tengah malam." },
    { title: "Role-Based Admin Access", desc: "Pembagian hak akses admin (Ketua Yayasan, Bendahara, Koordinator Relawan)." },
    { title: "Kepatuhan UU PDP", desc: "Penerapan perlindungan data pribadi donatur dan anak asuh binaan." },
    { title: "Notifikasi Login Mencurigakan", desc: "Peringatan otomatis via email saat ada upaya akses tidak sah." }
  ],
  seo: [
    { title: "Struktur SEO Standar Google", desc: "Schema markup nirlaba agar website mudah ditemukan di halaman 1 Google." },
    { title: "AI-Ready Search Optimization", desc: "Terindeks optimal oleh mesin pencari AI (ChatGPT, Perplexity, Gemini)." },
    { title: "Open Graph Social Sharing", desc: "Pratinjau link WhatsApp & Facebook rapi dengan poster kampanye tajam." },
    { title: "Sitemap XML Otomatis", desc: "Pembaruan indeks berkala setiap kali menerbitkan artikel atau program baru." },
    { title: "Google Search Console Terhubung", desc: "Laporan kata kunci donatur yang mengunjungi website organisasi Anda." },
    { title: "Kompresi Gambar WebP", desc: "Foto kegiatan tajam namun sangat ringan dibuka di jaringan seluler." }
  ]
};

function initFeatureLibrary() {
  const fTabs = document.querySelectorAll('.f-tab-btn');
  const container = document.getElementById('feature-items-wrapper');

  function render(cat) {
    if (!container) return;
    const items = featureLibraryData[cat] || featureLibraryData.website;
    container.innerHTML = items.map(item => `
      <div class="feat-item-card glass-panel">
        <div class="feat-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
        </div>
        <div>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    `).join('');

    if (typeof gsap !== 'undefined') {
      gsap.fromTo('.feat-item-card', { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.3 });
    }
  }

  fTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      fTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-fcat');
      render(cat);
    });
  });

  render('website');
}

/* ==========================================================================
   7. FAQ Accordion Engine
   ========================================================================== */
function initFaqAccordion() {
  const rows = document.querySelectorAll('.faq-row');

  rows.forEach(row => {
    const trigger = row.querySelector('.faq-trigger');
    const panel = row.querySelector('.faq-panel');

    if (trigger && panel) {
      trigger.addEventListener('click', () => {
        const isOpen = row.classList.contains('active');

        // Close all
        rows.forEach(r => {
          r.classList.remove('active');
          const p = r.querySelector('.faq-panel');
          const t = r.querySelector('.faq-trigger');
          if (p) p.style.maxHeight = null;
          if (t) t.setAttribute('aria-expanded', 'false');
        });

        // Open clicked
        if (!isOpen) {
          row.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
          panel.style.maxHeight = panel.scrollHeight + 40 + 'px';
        }
      });
    }
  });
}

/* ==========================================================================
   8. Live Responsive Demo Modal Emulator
   ========================================================================== */
function initDemoModal() {
  const modal = document.getElementById('modal-demo-dialog');
  const iframe = document.getElementById('demo-iframe');
  const title = document.getElementById('demo-title-text');
  const extLink = document.getElementById('demo-ext-link');
  const closeBtn = document.getElementById('btn-close-modal-x');
  const closeDot = document.getElementById('dialog-dot-close');
  const vpBtns = document.querySelectorAll('.vp-btn');
  const loading = document.getElementById('demo-loading');

  if (!modal) return;

  function openDemo(url, titleText) {
    if (title) title.textContent = titleText;
    if (extLink) extLink.href = url;
    if (loading) loading.style.display = 'block';

    if (iframe) {
      iframe.src = url;
      iframe.className = 'demo-iframe vp-desktop';
      iframe.onload = () => {
        if (loading) loading.style.display = 'none';
      };
    }

    vpBtns.forEach(b => b.classList.remove('active'));
    const defVp = document.querySelector('.vp-btn[data-vp="desktop"]');
    if (defVp) defVp.classList.add('active');

    modal.showModal();
    document.body.style.overflow = 'hidden';
  }

  function closeDemo() {
    modal.close();
    if (iframe) iframe.src = 'about:blank';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-demo-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.getAttribute('data-url');
      const titleText = btn.getAttribute('data-title') || 'Live Template Preview';
      if (url) openDemo(url, titleText);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDemo);
  if (closeDot) closeDot.addEventListener('click', closeDemo);

  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const inside = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!inside) closeDemo();
  });

  vpBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      vpBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const vp = btn.getAttribute('data-vp');
      if (iframe) iframe.className = `demo-iframe vp-${vp}`;
    });
  });
}

/* ==========================================================================
   9. Scroll-to-Top & Sticky Frosted Header
   ========================================================================== */
function initFloatingScroll() {
  const scrollBtn = document.getElementById('btn-scroll-top');
  const header = document.getElementById('main-header');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (scrollBtn) {
      if (y > 300) scrollBtn.classList.add('visible');
      else scrollBtn.classList.remove('visible');
    }

    if (header) {
      if (y > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
  }, { passive: true });

  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   10. Lead Capture Form Handler
   ========================================================================== */
function initLeadForm() {
  const form = document.getElementById('lead-form-brosur');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('inp-name').value;
    const org = document.getElementById('inp-org').value;
    const phone = document.getElementById('inp-phone').value;

    const msg = encodeURIComponent(`Halo Organiz.Hub, saya ${name} dari ${org} (${phone}). Saya ingin meminta Brosur & Panduan Digitalisasi Organisasi 2026 format PDF.`);
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');

    alert(`Terima kasih ${name}! Brosur digitalisasi akan langsung diteruskan ke WhatsApp Anda (${phone}).`);
    form.reset();
  });
}

/* ==========================================================================
   11. GSAP 3.12+ & ScrollTrigger Animation Suite
   ========================================================================== */
function initGsapAnimations() {
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const mm = gsap.matchMedia();

  mm.add({
    isDesktop: "(min-width: 992px)",
    reduceMotion: "(prefers-reduced-motion: reduce)"
  }, (context) => {
    const { isDesktop, reduceMotion } = context.conditions;

    if (reduceMotion) return;

    // Hero Entrance Timeline
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl
      .fromTo(".badge-pill-spesialis", { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.6 })
      .fromTo(".hero-title", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.3")
      .fromTo(".hero-description", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.4")
      .fromTo(".hero-actions .btn-primary, .hero-actions .btn-secondary, .hero-actions .btn-outline-glass", { autoAlpha: 0, y: 20, scale: 0.95 }, { autoAlpha: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.5 }, "-=0.4")
      .fromTo(".dashboard-window", { autoAlpha: 0, y: 40, scale: 0.94 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 }, "-=0.6")
      .fromTo(".floating-badge", { autoAlpha: 0, scale: 0.6, y: 15 }, { autoAlpha: 1, scale: 1, y: 0, stagger: 0.15, duration: 0.6, ease: "back.out(2)" }, "-=0.3");

    // 3D Interactive Mouse Parallax on Hero Visual
    const heroSection = document.getElementById('hero');
    const mockupWrap = document.getElementById('hero-mockup-wrapper');
    if (heroSection && mockupWrap && isDesktop) {
      heroSection.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        gsap.to(mockupWrap, {
          rotationY: xPos * 0.4,
          rotationX: -yPos * 0.4,
          duration: 0.8,
          ease: "power2.out"
        });
      });

      heroSection.addEventListener('mouseleave', () => {
        gsap.to(mockupWrap, {
          rotationY: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out"
        });
      });
    }

    // ScrollTrigger Batched Entrances
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.utils.toArray(".section-title-wrap").forEach(el => {
        gsap.fromTo(el,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
          }
        );
      });

      ScrollTrigger.batch(".solution-card, .pillar-card, .template-card, .pricing-card, .roadmap-step, .why-card, .widget-card, .addon-card, .testi-card", {
        interval: 0.1,
        batchMax: 3,
        onEnter: (batch) => {
          gsap.fromTo(batch,
            { autoAlpha: 0, y: 35, scale: 0.96 },
            { autoAlpha: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.65, ease: "power3.out", overwrite: "auto" }
          );
        },
        start: "top 90%"
      });
    }
  });
}
