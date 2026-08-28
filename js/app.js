/**
 * ORGANIZ.HUB - JAVASCRIPT APPLICATION ENGINE
 * Features:
 * 1. Dual-Tone Theme Manager (Dark/Light with localStorage persistence)
 * 2. Multi-Language (i18n ID / EN) Engine
 * 3. Mobile Slide-Out Drawer Navigation
 * 4. GSAP 3.12+ & ScrollTrigger Animation Suite
 * 5. Hero Dashboard Multi-Tab Switcher & Donation Calculator Simulation
 * 6. 14 Live Templates Showcase Filtering
 * 7. Feature Library Interactive Filter Tabs
 * 8. FAQ Accordion Engine
 * 9. Live Responsive Demo Modal Emulator (Desktop / Tablet / Mobile)
 * 10. Scroll-to-Top & Floating Action Stack
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initLanguageManager();
  initMobileDrawer();
  initHeroDashboardTabs();
  initTemplateFilter();
  initFeatureLibrary();
  initFaqAccordion();
  initDemoModalEmulator();
  initFloatingActionButtons();
  initGsapAnimations();
  initLeadFormHandler();
});

/* ==========================================================================
   1. Dual-Tone Theme Manager
   ========================================================================== */
function initThemeManager() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem('rw_org_theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', nextTheme);
      localStorage.setItem('rw_org_theme', nextTheme);
    });
  }
}

/* ==========================================================================
   2. Multi-Language (i18n) Engine (ID / EN)
   ========================================================================== */
const i18nData = {
  id: {
    "nav.home": "Beranda",
    "nav.solutions": "Solusi",
    "nav.templates": "14 Template Live",
    "nav.pillars": "4 Pilar",
    "nav.features": "Fitur",
    "nav.widgets": "Smart Tools",
    "nav.pricing": "Paket & Harga",
    "nav.portfolio": "Portofolio",
    "nav.faq": "FAQ",
    "nav.contact": "Kontak",
    "mega.yayasan.title": "Yayasan Sosial & Pendidikan",
    "mega.yayasan.sub": "Panti, beasiswa, donasi QRIS & kas publik",
    "mega.komunitas.title": "Komunitas & Asosiasi",
    "mega.komunitas.sub": "Keanggotaan, direktori relawan & event",
    "mega.ngo.title": "NGO & Lembaga Filantropi",
    "mega.ngo.sub": "Advokasi, multi-bahasa & audit transparan",
    "cta.viewPricing": "Lihat Harga",
    "cta.freeConsultText": "Konsultasi Gratis",
    "hero.ratingText": "Spesialis Digital untuk Yayasan, Komunitas & NGO Sejak 2018",
    "hero.headline": "Digital Presence & Arsitektur Website <span class=\"text-gradient-emerald\">Khusus Organisasi</span>",
    "hero.subheadline": "Kami membantu Yayasan Sosial, Komunitas & Asosiasi, serta Lembaga NGO memiliki kehadiran digital yang profesional — Branding & Trust, Fundraising Donasi QRIS, Transparansi Kas WTP, dan Manajemen Relawan dalam satu platform terpadu.",
    "hero.ctaPricing": "Lihat Paket & Harga",
    "hero.ctaConsult": "Konsultasi Gratis",
    "hero.mockupLive": "● Live System",
    "hero.mockupTag": "KAMPANYE BEASISWA NUSANTARA",
    "hero.mockupCampaignTitle": "1.000 Beasiswa Pelajar Pelosok Indonesia",
    "hero.mockupAutoSync": "Auto-Sync",
    "hero.mockupCollected": "Terkumpul",
    "hero.mockupTarget": "Target",
    "hero.mockupFunded": "Tercapai",
    "hero.mockupDaysLeft": "Hari Tersisa",
    "hero.mockupDonors": "Donatur",
    "hero.mockupInstantDonate": "Simulasi Donasi QRIS",
    "hero.scrollDown": "Scroll untuk Eksplorasi",
    "solusi.tag": "SOLUSI TEPAT GUNA",
    "solusi.title": "Solusi untuk Setiap Segmen Organisasi",
    "solusi.subtitle": "Kami memahami bahwa Yayasan, Komunitas, dan NGO memiliki alur kerja, audiens, dan kebutuhan legalitas yang berbeda. Temukan arsitektur sistem yang tepat untuk organisasi Anda."
  },
  en: {
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.templates": "14 Live Templates",
    "nav.pillars": "4 Pillars",
    "nav.features": "Features",
    "nav.widgets": "Smart Tools",
    "nav.pricing": "Packages & Pricing",
    "nav.portfolio": "Portfolio",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "mega.yayasan.title": "Foundations & Education",
    "mega.yayasan.sub": "Orphanages, scholarships, instant QRIS & audit",
    "mega.komunitas.title": "Communities & Associations",
    "mega.komunitas.sub": "Membership, volunteer directory & events",
    "mega.ngo.title": "NGO & Philanthropy",
    "mega.ngo.sub": "Advocacy, multi-language & open transparency",
    "cta.viewPricing": "View Pricing",
    "cta.freeConsultText": "Free Consultation",
    "hero.ratingText": "Digital Specialist for Foundations, Communities & NGOs Since 2018",
    "hero.headline": "Digital Presence & Website Architecture <span class=\"text-gradient-emerald\">Tailored for Nonprofits</span>",
    "hero.subheadline": "We empower Foundations, Communities, and NGOs with enterprise-grade digital platforms — Branding & Trust, QRIS Fundraising, Transparent Audits, and Volunteer Automation in one unified ecosystem.",
    "hero.ctaPricing": "Explore Packages & Pricing",
    "hero.ctaConsult": "Free Consultation",
    "hero.mockupLive": "● Live System",
    "hero.mockupTag": "EMERGENCY SCHOLARSHIP CAMPAIGN",
    "hero.mockupCampaignTitle": "1,000 Remote Archipelago Student Scholarships",
    "hero.mockupAutoSync": "Auto-Sync",
    "hero.mockupCollected": "Collected",
    "hero.mockupTarget": "Target",
    "hero.mockupFunded": "Funded",
    "hero.mockupDaysLeft": "Days Left",
    "hero.mockupDonors": "Donors",
    "hero.mockupInstantDonate": "Simulate QRIS Donation",
    "hero.scrollDown": "Scroll to Explore",
    "solusi.tag": "TARGETED SOLUTIONS",
    "solusi.title": "Tailored Solutions for Every Nonprofit Spectrum",
    "solusi.subtitle": "We understand that Foundations, Communities, and NGOs operate under distinct workflows, donor psychology, and governance. Discover the exact digital system for your mission."
  }
};

function initLanguageManager() {
  const idBtn = document.getElementById('lang-id-btn');
  const enBtn = document.getElementById('lang-en-btn');
  const savedLang = localStorage.getItem('rw_org_lang') || 'id';

  setLanguage(savedLang);

  if (idBtn) {
    idBtn.addEventListener('click', () => {
      setLanguage('id');
      localStorage.setItem('rw_org_lang', 'id');
    });
  }

  if (enBtn) {
    enBtn.addEventListener('click', () => {
      setLanguage('en');
      localStorage.setItem('rw_org_lang', 'en');
    });
  }
}

function setLanguage(lang) {
  const translations = i18nData[lang] || i18nData.id;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.innerHTML = translations[key];
    }
  });

  const idBtn = document.getElementById('lang-id-btn');
  const enBtn = document.getElementById('lang-en-btn');

  if (idBtn && enBtn) {
    if (lang === 'id') {
      idBtn.classList.add('active');
      enBtn.classList.remove('active');
    } else {
      enBtn.classList.add('active');
      idBtn.classList.remove('active');
    }
  }

  document.documentElement.lang = lang;
}

/* ==========================================================================
   3. Mobile Slide-Out Drawer Navigation
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const closeBtn = document.getElementById('drawer-close-btn');

  function openDrawer() {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Close when clicking any drawer link
  document.querySelectorAll('.drawer-nav-link, .drawer-sublink, .drawer-action-btn').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // Drawer expandable submenu toggle
  document.querySelectorAll('.drawer-expandable').forEach((item) => {
    const subtoggle = item.querySelector('.drawer-subtoggle');
    if (subtoggle) {
      subtoggle.addEventListener('click', (e) => {
        e.preventDefault();
        item.classList.toggle('expanded');
      });
    }
  });
}

/* ==========================================================================
   4. Hero Dashboard Multi-Tab Switcher & Donation Calculator Simulation
   ========================================================================== */
function initHeroDashboardTabs() {
  const tabBtns = document.querySelectorAll('.mockup-tab-btn');
  const tabPanels = document.querySelectorAll('.mockup-tab-panel');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-mockup-tab');

      tabBtns.forEach((b) => b.classList.remove('active'));
      tabPanels.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = document.getElementById(`panel-mockup-${targetTab}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });

  // Simulation amount buttons
  const amountBtns = document.querySelectorAll('.amount-btn');
  const statCollected = document.getElementById('hero-stat-collected');
  const progressBar = document.getElementById('hero-progress-bar');
  let currentBase = 842500000;

  amountBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      amountBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const addAmount = parseInt(btn.getAttribute('data-amount') || '50000', 10);
      const simulatedTotal = currentBase + addAmount;
      const formatted = 'Rp ' + simulatedTotal.toLocaleString('id-ID');
      if (statCollected) statCollected.textContent = formatted;

      const pct = Math.min(100, (simulatedTotal / 1000000000) * 100);
      if (progressBar) progressBar.style.width = pct.toFixed(1) + '%';
    });
  });

  // Demo Donate Trigger
  const donateBtn = document.getElementById('hero-btn-donasi-demo');
  if (donateBtn) {
    donateBtn.addEventListener('click', () => {
      alert('🌟 Simulasi Sukses! Pada sistem asli, donatur akan langsung diarahkan ke QRIS Dinamis atau Payment Gateway resmi atas nama organisasi Anda.');
    });
  }
}

/* ==========================================================================
   5. 14 Live Templates Showcase Filtering
   ========================================================================== */
function initTemplateFilter() {
  const filterBtns = document.querySelectorAll('.t-filter-btn');
  const templateCards = document.querySelectorAll('.template-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      templateCards.forEach((card) => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 });
          }
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6. Feature Library Interactive Filter Tabs
   ========================================================================== */
const featureLibraryData = {
  website: [
    { title: "Responsive Multi-Device", desc: "Tampilan sempurna di Smartphone, Tablet, Laptop, Desktop hingga TV.", icon: "globe" },
    { title: "Dual-Tone Dark & Light Mode", desc: "Dua palet tema modern yang memanjakan mata donatur di berbagai situasi.", icon: "sun" },
    { title: "Ultra Fast Loading (99+)", desc: "Optimasi aset dan kode ringan untuk kecepatan akses instan di jaringan pelosok.", icon: "zap" },
    { title: "Custom Domain Organisasi", desc: "Integrasi domain resmi berakhiran .or.id, .org, atau .id dengan SSL gratis.", icon: "link" },
    { title: "Arsitektur Glassmorphism 3D", desc: "Estetika modern kelas institusional yang memancarkan kepercayaan donatur.", icon: "layers" },
    { title: "Dashboard Admin Pengurus", desc: "Kelola seluruh konten, berita, dan program tanpa perlu keahlian coding.", icon: "layout" }
  ],
  donasi: [
    { title: "Donasi QRIS Dinamis & Statis", desc: "Dukung semua e-wallet (GoPay, OVO, Dana, ShopeePay) & Mobile Banking.", icon: "credit-card" },
    { title: "Virtual Account Multi-Bank", desc: "BCA, Mandiri, BNI, BRI, BSI untuk donasi jumlah besar institusi/perusahaan.", icon: "briefcase" },
    { title: "Donation Progress Meter", desc: "Grafik visual persentase dana terkumpul dengan live counter auto-sync.", icon: "activity" },
    { title: "Kwitansi Donasi PDF Otomatis", desc: "Cetak bukti donasi ber-barcode dan stempel digital yayasan dalam hitungan detik.", icon: "file-text" },
    { title: "Kalkulator Zakat & Amal", desc: "Hitung zakat maal, profesi, dan infaq otomatis berdasarkan nisab harga emas.", icon: "percent" },
    { title: "Donatur Recurring / Bulanan", desc: "Sistem pengingat donasi rutin via pesan WhatsApp terotomasi.", icon: "repeat" }
  ],
  relawan: [
    { title: "Direktori Relawan Lapangan", desc: "Database anggota relawan di 34 provinsi dengan status keikutsertaan.", icon: "users" },
    { title: "Generator E-KTA Relawan", desc: "Kartu anggota digital dengan QR code verifikasi identitas resmi.", icon: "award" },
    { title: "Kalender Aksi & Event Sosial", desc: "Jadwal kegiatan bakti sosial, workshop, webinar, dan penyaluran bantuan.", icon: "calendar" },
    { title: "Sertifikat Keikutsertaan PDF", desc: "Generate otomatis e-sertifikat relawan setelah aksi selesai.", icon: "check-circle" },
    { title: "Penugasan Wilayah & Posko", desc: "Pemetaan koordinasi tim darurat bencana di lokasi terdampak.", icon: "map-pin" },
    { title: "Form Pendaftaran Relawan", desc: "Kuesioner keahlian (medis, logistik, pengajar) tersaring rapi.", icon: "clipboard" }
  ],
  transparansi: [
    { title: "Laporan Kas Publik Real-Time", desc: "Grafik terbuka pemasukan donasi dan penyaluran dana sosial.", icon: "bar-chart-2" },
    { title: "Download Center Laporan Tahunan", desc: "Pusat unduhan berkas PDF laporan audit keuangan berpredikat WTP.", icon: "download" },
    { title: "Diagram Alokasi Dana 85/10/5", desc: "Visualisasi proporsi bantuan nyata, operasional, dan dana darurat.", icon: "pie-chart" },
    { title: "Arsip Berita Acara Penyaluran", desc: "Foto serah terima bantuan dan tanda terima penerima manfaat terverifikasi.", icon: "file-check" },
    { title: "Audit Log Transaksi Donasi", desc: "Riwayat transaksi aman yang tidak dapat dimanipulasi pihak luar.", icon: "shield" },
    { title: "Status Kemenkumham Terbuka", desc: "Publikasi nomor registrasi izin dinas sosial dan kementerian.", icon: "check-square" }
  ],
  keamanan: [
    { title: "Enkripsi SSL 256-Bit", desc: "Protokol keamanan data tertinggi untuk melindungi privasi donatur.", icon: "lock" },
    { title: "Verifikasi Legalitas Hukum", desc: "Badge verifikasi Kemenkumham dan izin operasional resmi.", icon: "shield-check" },
    { title: "Anti-DDoS & Firewall Cloud", desc: "Perlindungan website dari serangan siber 24/7 tanpa downtime.", icon: "server" },
    { title: "Backup Data Harian Otomatis", desc: "Pencadangan database donatur dan berkas laporan ke cloud terpisah.", icon: "database" },
    { title: "Role-Based Access Control", desc: "Pembatasan hak akses admin (Ketua, Bendahara, Koordinator Relawan).", icon: "user-check" },
    { title: "Kepatuhan UU PDP", desc: "Penerapan standar privasi data pribadi donatur dan anak asuh binaan.", icon: "eye-off" }
  ],
  widgets: [
    { title: "Timeline Program Perjalanan", desc: "Jadwal dan alur program kemanusiaan dalam bentuk kronologi visual.", icon: "clock" },
    { title: "Peta Interaktif Sebaran Posko", desc: "Visualisasi titik posko dan penerima manfaat di seluruh Indonesia.", icon: "map" },
    { title: "WhatsApp Multi-CS Float", desc: "Floating hotline yang terhubung ke petugas layanan donatur.", icon: "message-circle" },
    { title: "Testimonial Carousel Slider", desc: "Kumpulan ulasan donatur dan cerita inspiratif penerima manfaat.", icon: "star" },
    { title: "Countdown Urgensi Kampanye", desc: "Hitung mundur sisa hari penggalangan dana darurat bencana.", icon: "timer" },
    { title: "FAQ Accordion Interaktif", desc: "Tanya jawab seputar donasi, legalitas, dan mekanisme bantuan.", icon: "help-circle" }
  ],
  seo: [
    { title: "Struktur SEO Standar Google", desc: "Schema markup nirlaba agar mudah ditemukan di halaman pertama Google.", icon: "search" },
    { title: "AI-Ready Search Optimization", desc: "Terindeks optimal oleh mesin pencari AI (ChatGPT, Perplexity, Gemini).", icon: "cpu" },
    { title: "Open Graph & Media Sharing", desc: "Pratinjau tautan WhatsApp/Facebook rapi dengan banner kampanye tajam.", icon: "share-2" },
    { title: "Sitemap XML & Robots Otomatis", desc: "Indeks berkala setiap kali Anda menerbitkan berita atau program baru.", icon: "file-code" },
    { title: "Optimasi Gambar WebP Ringan", desc: "Kompresi foto kegiatan otomatis tanpa mengurangi kualitas ketajaman.", icon: "image" },
    { title: "Google Search Console Terhubung", desc: "Laporan kata kunci donatur yang mengunjungi website organisasi Anda.", icon: "trending-up" }
  ],
  i18n: [
    { title: "Multi-Language (ID / EN)", desc: "Dukungan dwibahasa instan untuk menjangkau donatur asing & grant global.", icon: "globe" },
    { title: "Penerjemah Halaman Cepat", desc: "Struktur switch bahasa ringan tanpa perlu me-reload seluruh halaman.", icon: "translate" },
    { title: "Mata Uang Ganda (IDR / USD)", desc: "Konversi perkiraan donasi mata uang asing secara real-time.", icon: "dollar-sign" },
    { title: "Format Tanggal Internasional", desc: "Penyesuaian format kalender sesuai standar mitra internasional.", icon: "calendar" },
    { title: "Proposal Hibah Bahasa Inggris", desc: "Halaman khusus presentasi organisasi untuk lembaga donor asing.", icon: "file" },
    { title: "Dukungan Multi-Zona Waktu", desc: "WIB, WITA, WIT, dan UTC untuk event webinar nirlaba global.", icon: "watch" }
  ],
  integrasi: [
    { title: "Integrasi Midtrans / Xendit", desc: "Payment gateway resmi langsung masuk ke rekening bank yayasan.", icon: "link-2" },
    { title: "Meta Pixel & TikTok Pixel", desc: "Pelacakan donatur untuk optimasi efektivitas iklan media sosial.", icon: "target" },
    { title: "Google Analytics 4 & GTM", desc: "Analisis demografi donatur dan halaman kampanye paling diminati.", icon: "pie-chart" },
    { title: "WhatsApp Business API Direct", desc: "Kirim pesan notifikasi otomatis saat donasi berhasil masuk.", icon: "send" },
    { title: "Mailchimp / Email Newsletter", desc: "Kirim buletin kabar perkembangan panti kepada donatur setia.", icon: "mail" },
    { title: "Export Data ke Excel / CSV", desc: "Unduh rekap donatur dan relawan sekali klik untuk rapat pengurus.", icon: "file-spreadsheet" }
  ],
  analytics: [
    { title: "Dashboard Pertumbuhan Donasi", desc: "Grafik tren donasi bulanan, tahunan, dan donatur terloyal.", icon: "bar-chart" },
    { title: "Heatmap Perilaku Pengunjung", desc: "Ketahui bagian website yang paling sering dibaca donatur via Clarity.", icon: "eye" },
    { title: "Conversion Funnel Tracking", desc: "Pantau rasio pengunjung yang berhasil menyelesaikan donasi.", icon: "filter" },
    { title: "Laporan Kinerja Tiap Kampanye", desc: "Evaluasi program mana yang paling cepat mencapai target dana.", icon: "award" },
    { title: "Rekap Demografi Wilayah", desc: "Ketahui kota dan provinsi asal donatur terbanyak lembaga Anda.", icon: "compass" },
    { title: "Audit Biaya vs Dampak Sosial", desc: "Rasio transparansi penggunaan dana operasional organisasi.", icon: "sliders" }
  ]
};

function initFeatureLibrary() {
  const fTabs = document.querySelectorAll('.f-tab-btn');
  const container = document.getElementById('feature-items-container');

  function renderFeatures(cat) {
    if (!container) return;
    const items = featureLibraryData[cat] || featureLibraryData.website;
    container.innerHTML = items.map(item => `
      <div class="feature-item-card glass-card">
        <div class="f-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline>
          </svg>
        </div>
        <div class="f-text">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    `).join('');

    if (typeof gsap !== 'undefined') {
      gsap.fromTo('.feature-item-card', { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.35 });
    }
  }

  fTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      fTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-fcat');
      renderFeatures(cat);
    });
  });

  renderFeatures('website');
}

/* ==========================================================================
   7. FAQ Accordion Engine
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const panel = item.querySelector('.faq-answer-panel');

    if (btn && panel) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close all
        faqItems.forEach(other => {
          other.classList.remove('active');
          const otherPanel = other.querySelector('.faq-answer-panel');
          const otherBtn = other.querySelector('.faq-question-btn');
          if (otherPanel) otherPanel.style.maxHeight = null;
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        // Toggle clicked
        if (!isOpen) {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
          panel.style.maxHeight = panel.scrollHeight + 40 + 'px';
        }
      });
    }
  });
}

/* ==========================================================================
   8. Live Responsive Demo Modal Emulator (14 Templates)
   ========================================================================== */
function initDemoModalEmulator() {
  const modal = document.getElementById('live-demo-modal');
  const iframe = document.getElementById('demo-preview-iframe');
  const titleText = document.getElementById('demo-modal-title-text');
  const externalLink = document.getElementById('demo-modal-external-link');
  const closeBtn = document.getElementById('btn-close-demo-modal');
  const closeDot = document.getElementById('demo-modal-close-dot');
  const vpBtns = document.querySelectorAll('.vp-btn');
  const loadingIndicator = document.getElementById('demo-loading-indicator');

  if (!modal) return;

  function openDemo(url, title) {
    if (titleText) titleText.textContent = title;
    if (externalLink) externalLink.setAttribute('href', url);
    if (loadingIndicator) loadingIndicator.style.display = 'flex';

    if (iframe) {
      iframe.src = url;
      iframe.className = 'demo-iframe vp-desktop';
      iframe.onload = () => {
        if (loadingIndicator) loadingIndicator.style.display = 'none';
      };
    }

    // Reset viewport buttons to desktop
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

  // Open triggers
  document.querySelectorAll('.btn-open-demo-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.getAttribute('data-url');
      const title = btn.getAttribute('data-title') || 'Live Template Preview';
      if (url) openDemo(url, title);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDemo);
  if (closeDot) closeDot.addEventListener('click', closeDemo);

  // Close when clicking modal backdrop
  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) closeDemo();
  });

  // Viewport switchers (Desktop, Tablet, Mobile)
  vpBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      vpBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const vp = btn.getAttribute('data-vp');

      if (iframe) {
        iframe.className = `demo-iframe vp-${vp}`;
      }
    });
  });
}

/* ==========================================================================
   9. Scroll-to-Top & Floating Action Stack
   ========================================================================== */
function initFloatingActionButtons() {
  const scrollBtn = document.getElementById('scroll-to-top-btn');

  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 280) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Header Scroll Frosted State
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }
}

/* ==========================================================================
   10. GSAP 3.12+ & ScrollTrigger Animation Suite
   ========================================================================== */
function initGsapAnimations() {
  if (typeof gsap === 'undefined') {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
    return;
  }

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.defaults({ ease: "power2.out", duration: 0.8 });

  const mm = gsap.matchMedia();

  mm.add({
    isDesktop: "(min-width: 992px)",
    reduceMotion: "(prefers-reduced-motion: reduce)"
  }, (context) => {
    const { isDesktop, reduceMotion } = context.conditions;

    if (reduceMotion) {
      gsap.set(".reveal-on-scroll, .inline-spec-badge, .hero-headline, .hero-subheadline, .hero-cta-group .btn", {
        autoAlpha: 1, y: 0, scale: 1
      });
      return;
    }

    // Hero Master Timeline
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl
      .fromTo(".inline-spec-badge", { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.6, delay: 0.1 })
      .fromTo(".hero-headline", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.35")
      .fromTo(".hero-subheadline", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.45")
      .fromTo(".hero-cta-group .btn", { autoAlpha: 0, y: 20, scale: 0.94 }, { autoAlpha: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.55, ease: "back.out(1.5)" }, "-=0.4")
      .fromTo(".hero-five-pillars-strip .pillar-mini-item", { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.5 }, "-=0.3")
      .fromTo(".glass-dashboard-card.main-frame", { autoAlpha: 0, y: 45, scale: 0.94 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.95 }, "-=0.7")
      .fromTo(".floating-glass-card", { autoAlpha: 0, scale: 0.7, y: 15 }, { autoAlpha: 1, scale: 1, y: 0, stagger: 0.15, duration: 0.6, ease: "back.out(1.8)" }, "-=0.4")
      .fromTo(".hero-stats-ribbon-container", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.3")
      .fromTo(".modern-scroll-trigger", { autoAlpha: 0, y: -10 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.2");

    // Floating Hero Mockup Layer Subtle Sway
    gsap.to("#hero-mockup-layer", {
      y: -10,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Interactive 3D Mouse Parallax on Hero Visual
    const heroSection = document.getElementById('hero');
    const mockupLayer = document.getElementById('hero-mockup-layer');
    if (heroSection && mockupLayer && isDesktop) {
      heroSection.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 24;
        const yPos = (clientY / window.innerHeight - 0.5) * 24;
        gsap.to(mockupLayer, {
          rotationY: xPos * 0.4,
          rotationX: -yPos * 0.4,
          x: xPos * 0.6,
          y: yPos * 0.6,
          duration: 0.8,
          ease: "power2.out"
        });
      });

      heroSection.addEventListener('mouseleave', () => {
        gsap.to(mockupLayer, {
          rotationY: 0,
          rotationX: 0,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "power3.out"
        });
      });
    }

    // --- SCROLLTRIGGER BATCHING & ENTRANCE ANIMATIONS ---
    if (typeof ScrollTrigger !== 'undefined') {
      // Section Headers
      gsap.utils.toArray(".section-header").forEach(el => {
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

      // Batched Card Entrances for High Performance & Smooth Stagger
      ScrollTrigger.batch(".solusi-card-modern, .pilar-card, .template-card, .pricing-card, .widget-card, .case-card, .addon-card, .testi-card, .why-card", {
        interval: 0.1,
        batchMax: 3,
        onEnter: (batch) => {
          gsap.fromTo(batch,
            { autoAlpha: 0, y: 35, scale: 0.96 },
            { autoAlpha: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.7, ease: "power3.out", overwrite: "auto" }
          );
        },
        start: "top 90%"
      });

      // Roadmap Progress Timeline Line Scrub
      const roadmapWrap = document.querySelector('.growth-timeline-wrap');
      const timelineLine = document.querySelector('.timeline-line');
      if (roadmapWrap && timelineLine) {
        gsap.fromTo(timelineLine,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: roadmapWrap,
              start: "top 75%",
              end: "bottom 80%",
              scrub: 0.5
            }
          }
        );
      }

      // Background Constellation Subtle Parallax Drift
      const bgSvg = document.querySelector('.org-network-svg');
      if (bgSvg) {
        gsap.to(bgSvg, {
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }
    }
  });
}

/* ==========================================================================
   11. Lead Consultation Form Handler
   ========================================================================== */
function initLeadFormHandler() {
  const form = document.getElementById('lead-consult-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const org = formData.get('org_name') || '';
    const segment = formData.get('segment') || '';

    const text = encodeURIComponent(`Halo Organiz.Hub, saya ${name} dari ${org} (${segment}). Saya ingin meminta brosur lengkap & panduan digitalisasi organisasi 2026.`);
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');

    alert(`Terima kasih ${name}! Permintaan Anda telah diterima. Dokumen brosur & konsultasi akan diteruskan ke kontak WhatsApp Anda (${phone}).`);
    form.reset();
  });
}
