/**
 * ORGANIZ.HUB — JAVASCRIPT APPLICATION ENGINE
 * Features:
 * 1. Complete Multilingual Translation Engine (ID / EN)
 * 2. Theme Manager (Dark / Light)
 * 3. Mobile Navigation Drawer
 * 4. Hero Dashboard Tabs & Donation Simulator
 * 5. 14 Live Template Category Filtering
 * 6. Feature Library Modular Tab Renderer (Bilingual)
 * 7. FAQ Accordion Engine
 * 8. Live Responsive Demo Modal Emulator
 * 9. Scroll-to-Top & Sticky Frosted Header
 * 10. Testimonials Interactive Swipe Carousel (Touch + Autoplay)
 * 11. Lead Capture Form Handler
 * 12. GSAP 3.12+ & ScrollTrigger Animations
 */

/* ==========================================================================
   TRANSLATION DICTIONARY (INDONESIAN & ENGLISH)
   ========================================================================== */
const I18N = {
  id: {
    // Navigation
    nav_solusi: "Solusi",
    nav_products: "Produk & Fitur",
    nav_templates: "14 Template Live",
    nav_info: "Informasi",
    nav_cta: "Konsultasi Gratis",
    
    // Hero
    hero_spesialis: "Spesialis Digital untuk Yayasan, Komunitas & NGO Sejak 2018",
    hero_title_1: "Digital Presence & Arsitektur Website",
    hero_title_2: "Khusus Organisasi",
    hero_desc: "Kami membantu Yayasan Sosial, Komunitas & Asosiasi, serta Lembaga NGO memiliki kehadiran digital yang profesional — Branding & Trust, Fundraising Donasi QRIS, Transparansi Kas WTP, dan Manajemen Relawan dalam satu platform terpadu.",
    hero_btn_pricing: "Lihat Paket & Harga",
    hero_btn_consult: "Konsultasi Gratis",
    hero_btn_templates: "14 Template Live ↗",
    scroll_explore: "Scroll untuk Eksplorasi Arsitektur Lengkap",

    // Solusi
    sol_tag: "ARSITEKTUR SEGMEN SPESIFIK",
    sol_title: "Solusi untuk Setiap Segmen Organisasi",
    sol_sub: "Kami memahami bahwa Yayasan, Komunitas, dan NGO memiliki alur kerja, audiens, dan kebutuhan legalitas yang berbeda. Temukan arsitektur sistem yang tepat untuk organisasi Anda.",

    // 4 Pilar
    pilar_tag: "4 PILAR ARSITEKTUR DIGITAL",
    pilar_title: "Digital Presence Profesional untuk Organisasi Nirlaba",
    pilar_sub: "Kami tidak sekadar membuat website. Kami membangun infrastruktur digital nirlaba melalui 4 pilar arsitektur yang saling memperkuat — Branding, Fundraising, Transparansi, dan Otomasi Relawan.",

    // Templates
    tpl_tag: "14 LIVE TEMPLATES DEPLOYED",
    tpl_title: "Koleksi Template Website Organisasi Modern",
    tpl_sub: "Klik tombol Live Preview untuk menguji langsung website template yang telah dideploy secara live di lingkungan cloud.",
    tpl_filter_all: "Semua Template (14)",
    tpl_filter_yayasan: "Yayasan Sosial (5)",
    tpl_filter_komunitas: "Komunitas & Aksi (5)",
    tpl_filter_ngo: "NGO & Lembaga (4)",

    // Pricing
    pkg_tag: "PILIHAN PAKET INVESTASI",
    pkg_title: "Pilih Paket Website yang Sesuai",
    pkg_sub: "Investasi terbaik untuk pertumbuhan dampak, kepercayaan donatur, dan kemandirian digital organisasi Anda.",

    // Workflow
    workflow_tag: "ALUR KERJA DIGITALISASI",
    workflow_title: "Perjalanan Pertumbuhan Digital Organisasi Anda",
    workflow_sub: "Arsitektur bertahap yang terstruktur — dari legalitas awal hingga skala gerakan nasional terpercaya.",
    wf_step1_badge: "FASE 01 • FONDASI & LEGALITAS",
    wf_step1_time: "Minggu Ke-1",
    wf_step1_title: "Legalitas Resmi & Identitas Kredibel",
    wf_step1_desc: "Penerbitan domain resmi .or.id/.org, integrasi SK Kemenkumham, struktur pengurus, dan profil program agar dinilai kredibel oleh donatur awal.",
    wf_deliv1: "Domain Resmi .or.id / .org",
    wf_deliv2: "Sertifikat SSL 256-Bit",
    wf_deliv3: "SK Kemenkumham Terintegrasi",
    
    wf_step2_badge: "FASE 02 • FUNDRAISING MANDIRI",
    wf_step2_time: "Minggu Ke-2",
    wf_step2_title: "Aktivasi Donasi QRIS & Payment Gateway",
    wf_step2_desc: "Pemasangan sistem donasi online instan via QRIS semua e-wallet dan Virtual Account multi-bank. Rekening langsung ke yayasan dengan 0% potongan perantara.",
    wf_deliv4: "QRIS Dinamis Semua E-Wallet",
    wf_deliv5: "Kwitansi PDF Otomatis Ber-Barcode",
    wf_deliv6: "Kalkulator Zakat & Fidyah",
    
    wf_step3_badge: "FASE 03 • AKUNTABILITAS PUBLIK",
    wf_step3_time: "Minggu Ke-3",
    wf_step3_title: "Transparansi Kas Real-Time & Laporan WTP",
    wf_step3_desc: "Publikasi pembukuan kas masuk & alokasi dana secara terbuka kepada donatur serta download center berkas audit akuntan publik untuk memikat donor besar.",
    wf_deliv7: "Grafik Kas Masuk & Keluar Live",
    wf_deliv8: "Download Center Laporan Audit WTP",
    wf_deliv9: "Galeri Berita Acara Penyaluran",
    
    wf_step4_badge: "FASE 04 • SKALA NASIONAL & GLOBAL",
    wf_step4_time: "Minggu Ke-4+",
    wf_step4_title: "Otomasi Relawan & Kemitraan Internasional",
    wf_step4_desc: "Perekrutan relawan 34 provinsi dengan generator E-KTA QR code, kalender aksi terpadu, serta website dwibahasa untuk pengajuan proposal hibah donor filantropi global.",
    wf_deliv10: "Direktori Relawan & Generator E-KTA",
    wf_deliv11: "Multi-Bahasa (Indonesia & English)",
    wf_deliv12: "Portal Pengajuan Hibah (Grant Proposal)",

    // Why Us
    why_tag: "SPESIALISASI MENDALAM",
    why_title: "Mengapa Organiz.Hub?",
    why_sub: "Bukan sekadar web developer umum. Kami memahami operasional, regulasi, dan psikologi donatur nirlaba secara mendalam.",

    // Features
    feat_tag: "MODULAR ARCHITECTURE",
    feat_title: "Feature Library untuk Website Organisasi",
    feat_sub: "Kumpulan fitur modular yang dirancang khusus untuk operasional Yayasan, Komunitas, dan NGO.",

    // Testimonials
    testi_tag: "BUKTI KEPUASAN KLIEN",
    testi_title: "Dipercaya Pengurus Organisasi di Seluruh Indonesia",
    testi_sub: "Dari yayasan yatim lokal hingga NGO berskala nasional — mereka mempercayakan arsitektur digital pada Organiz.Hub.",

    // FAQ
    faq_tag: "TANYA JAWAB",
    faq_title: "Pertanyaan yang Sering Diajukan (FAQ)",
    faq_sub: "Segala hal yang perlu Anda ketahui mengenai proses pembuatan website organisasi di Organiz.Hub.",

    // CTA
    cta_title: "Siap Membangun Website Organisasi yang Profesional & Terpercaya?",
    cta_desc: "Dapatkan rekomendasi arsitektur dan paket terbaik untuk Yayasan, Komunitas, atau NGO Anda. Konsultasi gratis, ramah, dan tanpa komitmen.",
    cta_btn: "Hubungi Tim Konsultan Digital via WhatsApp"
  },
  en: {
    // Navigation
    nav_solusi: "Solutions",
    nav_products: "Products & Features",
    nav_templates: "14 Live Templates",
    nav_info: "Information",
    nav_cta: "Free Consultation",
    
    // Hero
    hero_spesialis: "Digital Specialist for Foundations, Communities & NGOs Since 2018",
    hero_title_1: "Digital Presence & Website Architecture",
    hero_title_2: "Dedicated to Nonprofits",
    hero_desc: "We empower Foundations, Communities & Associations, and NGOs to establish a professional digital presence — Branding & Trust, QRIS Donation Fundraising, Cash Transparency, and Volunteer Automation in one unified platform.",
    hero_btn_pricing: "View Packages & Pricing",
    hero_btn_consult: "Free Consultation",
    hero_btn_templates: "14 Live Templates ↗",
    scroll_explore: "Scroll to Explore Full Architecture",

    // Solusi
    sol_tag: "SEGMENT-SPECIFIC ARCHITECTURE",
    sol_title: "Solutions for Every Organization Segment",
    sol_sub: "We understand that Foundations, Communities, and NGOs have unique workflows, audiences, and legal compliance needs. Find the right system architecture for your organization.",

    // 4 Pilar
    pilar_tag: "4 DIGITAL ARCHITECTURE PILLARS",
    pilar_title: "Professional Digital Presence for Nonprofits",
    pilar_sub: "We don't just build websites. We create nonprofit digital infrastructure through 4 mutually reinforcing pillars — Branding, Fundraising, Transparency, and Volunteer Automation.",

    // Templates
    tpl_tag: "14 LIVE TEMPLATES DEPLOYED",
    tpl_title: "Modern Organization Website Template Collection",
    tpl_sub: "Click Live Preview to test and explore live website templates deployed in the cloud environment.",
    tpl_filter_all: "All Templates (14)",
    tpl_filter_yayasan: "Foundations (5)",
    tpl_filter_komunitas: "Communities (5)",
    tpl_filter_ngo: "NGOs & Trusts (4)",

    // Pricing
    pkg_tag: "INVESTMENT PACKAGES",
    pkg_title: "Choose the Best Website Package",
    pkg_sub: "The best investment for growing your impact, donor trust, and digital independence.",

    // Workflow
    workflow_tag: "DIGITALIZATION WORKFLOW",
    workflow_title: "Your Organization's Digital Growth Journey",
    workflow_sub: "A structured stepwise architecture — from initial legal foundation to trusted nationwide and global scale.",
    wf_step1_badge: "PHASE 01 • FOUNDATION & LEGALITY",
    wf_step1_time: "Week 1",
    wf_step1_title: "Official Legality & Credible Identity",
    wf_step1_desc: "Deployment of official .or.id/.org domain, Ministry of Law integration, executive structure, and verified program profiles to win early donor trust.",
    wf_deliv1: "Official .or.id / .org Domain",
    wf_deliv2: "256-Bit SSL Security Certificate",
    wf_deliv3: "Integrated Legal Entity Registration",
    
    wf_step2_badge: "PHASE 02 • INDEPENDENT FUNDRAISING",
    wf_step2_time: "Week 2",
    wf_step2_title: "Instant QRIS Donations & Payment Gateway",
    wf_step2_desc: "Installation of instant online donation systems via dynamic QRIS (all e-wallets) and multi-bank Virtual Accounts. Direct to organization bank account with 0% intermediary fee.",
    wf_deliv4: "Dynamic QRIS for All E-Wallets",
    wf_deliv5: "Automated Barcoded PDF Receipts",
    wf_deliv6: "Zakat & Charitable Dues Calculator",
    
    wf_step3_badge: "PHASE 03 • PUBLIC ACCOUNTABILITY",
    wf_step3_time: "Week 3",
    wf_step3_title: "Real-Time Ledger & Unqualified Audit Reports",
    wf_step3_desc: "Publicly visible live income & expense allocation dashboards, plus an audit report download center to attract major institutional donors.",
    wf_deliv7: "Live Income & Expense Cashflow Graphs",
    wf_deliv8: "Audit Report Download Center",
    wf_deliv9: "Aid Handover & Field Gallery Reports",
    
    wf_step4_badge: "PHASE 04 • NATIONWIDE & GLOBAL SCALE",
    wf_step4_time: "Week 4+",
    wf_step4_title: "Volunteer Automation & Global Grants",
    wf_step4_desc: "Massive recruitment of volunteers across 34 provinces with digital QR E-ID cards, unified action calendar, and bilingual platform for international grant applications.",
    wf_deliv10: "Volunteer Directory & QR E-ID Generator",
    wf_deliv11: "Bilingual Platform (ID / EN)",
    wf_deliv12: "International Grant Application Portal",

    // Why Us
    why_tag: "DEEP NONPROFIT SPECIALIZATION",
    why_title: "Why Organiz.Hub?",
    why_sub: "Not just generic web developers. We deeply understand non-profit regulations, operations, and donor psychology.",

    // Features
    feat_tag: "MODULAR ARCHITECTURE",
    feat_title: "Feature Library for Organization Websites",
    feat_sub: "A collection of modular features engineered specifically for Foundations, Communities, and NGOs.",

    // Testimonials
    testi_tag: "VERIFIED CLIENT TRUST",
    testi_title: "Trusted by Non-Profit Leaders Across Indonesia",
    testi_sub: "From local orphan foundations to nationwide NGOs — they entrust their digital architecture to Organiz.Hub.",

    // FAQ
    faq_tag: "FREQUENTLY ASKED QUESTIONS",
    faq_title: "Frequently Asked Questions (FAQ)",
    faq_sub: "Everything you need to know about creating an organization website with Organiz.Hub.",

    // CTA
    cta_title: "Ready to Build a Professional & Trusted Organization Website?",
    cta_desc: "Get the best architectural recommendation and package for your Foundation, Community, or NGO. Free, friendly, and non-binding consultation.",
    cta_btn: "Consult with Our Digital Architects via WhatsApp"
  }
};

/* ==========================================================================
   APPLICATION ENTRYPOINT
   ========================================================================== */
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
  initTestimonialCarousel();
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
   2. Full Multilingual Engine (ID / EN)
   ========================================================================== */
function initLanguageManager() {
  const btnId = document.getElementById('btn-lang-id');
  const btnEn = document.getElementById('btn-lang-en');

  function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.id;
    document.documentElement.lang = lang;
    localStorage.setItem('organiz_lang', lang);

    if (btnId && btnEn) {
      if (lang === 'id') {
        btnId.classList.add('active');
        btnEn.classList.remove('active');
      } else {
        btnEn.classList.add('active');
        btnId.classList.remove('active');
      }
    }

    // Apply translations to all DOM elements marked with [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Re-render feature library in selected language
    const activeFTab = document.querySelector('.f-tab-btn.active');
    const fCat = activeFTab ? activeFTab.getAttribute('data-fcat') : 'website';
    if (typeof renderFeatureLibrary === 'function') {
      renderFeatureLibrary(fCat, lang);
    }
  }

  if (btnId) btnId.addEventListener('click', () => applyLanguage('id'));
  if (btnEn) btnEn.addEventListener('click', () => applyLanguage('en'));

  const savedLang = localStorage.getItem('organiz_lang') || 'id';
  applyLanguage(savedLang);
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
      const curLang = localStorage.getItem('organiz_lang') || 'id';
      if (curLang === 'en') {
        alert('🌟 Simulation Success! In the real system, donors are directly routed to dynamic QRIS or the official payment gateway under your foundation name.');
      } else {
        alert('🌟 Simulasi Sukses! Pada sistem asli, donatur akan langsung diarahkan ke QRIS Dinamis atau Payment Gateway resmi atas nama yayasan Anda.');
      }
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
   6. Feature Library Modular Tab Renderer (Bilingual)
   ========================================================================== */
const featureLibraryData = {
  id: {
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
  },
  en: {
    website: [
      { title: "Multi-Device Responsive Design", desc: "Optimized viewport experience across smartphones, tablets, and large monitors." },
      { title: "Dual Theme (Dark & Light)", desc: "Two high-contrast professional color palettes for comfortable reading." },
      { title: "Ultra Fast Loading (Score 99+)", desc: "Clean architecture and asset optimization for instant rural cellular access." },
      { title: "Official .or.id / .org Domain", desc: "Official verified non-profit domain name registration with free SSL." },
      { title: "Beginner-Friendly Admin Panel", desc: "Easily publish news, galleries, and reports without any coding skills." },
      { title: "Campaign Banners & Hero Slider", desc: "Showcase priority programs on the homepage to evoke donor empathy." }
    ],
    donasi: [
      { title: "Universal QRIS Donation", desc: "Accepts GoPay, OVO, DANA, LinkAja, ShopeePay, and all Mobile Banking apps." },
      { title: "Multi-Bank Virtual Accounts", desc: "BCA, Mandiri, BRI, BNI, BSI for institutional and corporate contributions." },
      { title: "Automated Live Progress Bar", desc: "Real-time dynamic fundraising meter that updates immediately upon payment." },
      { title: "Barcoded Digital PDF Receipts", desc: "Automatic email/WhatsApp delivery of stamped digital contribution proofs." },
      { title: "Zakat & Charitable Calculator", desc: "Automated calculations aligned with current gold nisab standards." },
      { title: "Secure Donor CRM Database", desc: "Organized donor contact records for sustainable donor relationship management." }
    ],
    relawan: [
      { title: "34 Provinces Volunteer Directory", desc: "Verified volunteer database with skill tagging and regional mapping." },
      { title: "QR Code Digital E-ID Generator", desc: "Unique digital membership cards for rapid field verification at disaster posts." },
      { title: "Social Action Calendar", desc: "Integrated scheduling for humanitarian missions, workshops, and aid dispatch." },
      { title: "Automated Action E-Certificates", desc: "Instant barcoded certificate generation upon mission completion." },
      { title: "Volunteer Registration Engine", desc: "Custom intake forms with interest filtering and availability checks." },
      { title: "Volunteer WhatsApp Integration", desc: "Direct group invite links for rapid regional disaster coordination." }
    ],
    transparansi: [
      { title: "Real-Time Public Ledger", desc: "Open chart of donations received and honest line-item fund allocations." },
      { title: "Unqualified Audit Download Center", desc: "Central repository of public accountant audit PDFs for major grant donors." },
      { title: "85/10/5 Allocation Diagram", desc: "Transparent breakdown of direct aid, logistics, and emergency reserves." },
      { title: "Aid Handover Documentation", desc: "Photo logs and signed verification notices of aid delivered to beneficiaries." },
      { title: "Legal License Publication", desc: "Prominent display of Ministry of Law entity license and Social Service permits." },
      { title: "Tamper-Proof Transaction Log", desc: "Immutable record keeping ensuring absolute financial integrity." }
    ],
    keamanan: [
      { title: "256-Bit SSL Encryption", desc: "Top-tier data security standards safeguarding donor privacy." },
      { title: "Anti-DDoS & Cloud Firewall", desc: "24/7 uninterrupted uptime protection against cyber attacks." },
      { title: "Daily Cloud Database Backups", desc: "Automated nightly backups stored across isolated cloud infrastructure." },
      { title: "Role-Based Admin Access", desc: "Granular roles for Chairman, Treasurer, and Volunteer Coordinators." },
      { title: "Personal Data Protection Compliance", desc: "Strict adherence to donor and foster-child personal data privacy laws." },
      { title: "Suspicious Login Notifications", desc: "Automated alerts for unauthorized access attempts." }
    ],
    seo: [
      { title: "Google Nonprofit Schema Markup", desc: "Structured data ensuring top-ranking discoverability on Google search." },
      { title: "AI-Ready Search Optimization", desc: "Optimized indexing for AI search engines (ChatGPT, Perplexity, Gemini)." },
      { title: "Open Graph Social Sharing", desc: "Crisp WhatsApp & Facebook preview cards with high-impact campaign posters." },
      { title: "Automated XML Sitemaps", desc: "Automatic index refresh whenever new articles or programs are published." },
      { title: "Google Search Console Connected", desc: "Detailed analytics on donor search queries and visitor impressions." },
      { title: "Next-Gen WebP Compression", desc: "Ultra-crisp event photos optimized for ultra-low mobile data consumption." }
    ]
  }
};

function renderFeatureLibrary(cat, lang) {
  const container = document.getElementById('feature-items-wrapper');
  if (!container) return;
  const currentLang = lang || localStorage.getItem('organiz_lang') || 'id';
  const langData = featureLibraryData[currentLang] || featureLibraryData.id;
  const items = langData[cat] || langData.website;

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

function initFeatureLibrary() {
  const fTabs = document.querySelectorAll('.f-tab-btn');
  fTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      fTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-fcat');
      renderFeatureLibrary(cat);
    });
  });

  renderFeatureLibrary('website');
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

    const curLang = localStorage.getItem('organiz_lang') || 'id';
    const msg = encodeURIComponent(`Halo Organiz.Hub, saya ${name} dari ${org} (${phone}). Saya ingin meminta Brosur & Panduan Digitalisasi Organisasi 2026 format PDF.`);
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');

    if (curLang === 'en') {
      alert(`Thank you ${name}! The digitalization guide PDF will be forwarded directly to your WhatsApp (${phone}).`);
    } else {
      alert(`Terima kasih ${name}! Brosur digitalisasi akan langsung diteruskan ke WhatsApp Anda (${phone}).`);
    }
    form.reset();
  });
}

/* ==========================================================================
   11. Testimonial Interactive Swipe Carousel
   ========================================================================== */
function initTestimonialCarousel() {
  const track = document.getElementById('testi-track');
  const viewport = document.getElementById('testi-viewport');
  const btnPrev = document.getElementById('testi-btn-prev');
  const btnNext = document.getElementById('testi-btn-next');
  const dots = document.querySelectorAll('.testi-dot');
  const slides = document.querySelectorAll('.testi-slide');

  if (!track || slides.length === 0) return;

  let currentIdx = 0;
  const totalSlides = slides.length;
  let autoPlayTimer = null;

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentIdx = index;
    track.style.transform = `translateX(-${currentIdx * 100}%)`;

    dots.forEach((d, i) => {
      if (i === currentIdx) d.classList.add('active');
      else d.classList.remove('active');
    });

    slides.forEach((s, i) => {
      if (i === currentIdx) s.classList.add('active');
      else s.classList.remove('active');
    });
  }

  function nextSlide() {
    goToSlide(currentIdx + 1);
  }

  function prevSlide() {
    goToSlide(currentIdx - 1);
  }

  if (btnNext) btnNext.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
  if (btnPrev) btnPrev.addEventListener('click', () => { prevSlide(); resetAutoplay(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-slide') || '0', 10);
      goToSlide(idx);
      resetAutoplay();
    });
  });

  // Touch Swipe Engine
  let startX = 0;
  let currentX = 0;
  let isSwiping = false;

  if (viewport) {
    viewport.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isSwiping = true;
      clearInterval(autoPlayTimer);
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
      currentX = e.touches[0].clientX;
    }, { passive: true });

    viewport.addEventListener('touchend', () => {
      if (!isSwiping) return;
      const diff = startX - currentX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
      isSwiping = false;
      resetAutoplay();
    });
  }

  function startAutoplay() {
    autoPlayTimer = setInterval(nextSlide, 5500);
  }

  function resetAutoplay() {
    clearInterval(autoPlayTimer);
    startAutoplay();
  }

  if (viewport) {
    viewport.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
    viewport.addEventListener('mouseleave', startAutoplay);
  }

  goToSlide(0);
  startAutoplay();
}

/* ==========================================================================
   12. GSAP 3.12+ & ScrollTrigger Animation Suite (Design DNA & Skills Applied)
   ========================================================================== */
function initGsapAnimations() {
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Interactive Glass Card Spotlight Reflection (Design DNA Phase 3 Visual Effects)
  document.querySelectorAll('.glass-panel, .solution-card, .pillar-card, .pricing-card, .workflow-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  const mm = gsap.matchMedia();

  mm.add({
    isDesktop: "(min-width: 992px)",
    reduceMotion: "(prefers-reduced-motion: reduce)"
  }, (context) => {
    const { isDesktop, reduceMotion } = context.conditions;

    if (reduceMotion) return;

    // 1. Hero Entrance Master Timeline
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl
      .fromTo(".badge-pill-spesialis", { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.6 })
      .fromTo(".hero-title", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.3")
      .fromTo(".hero-description", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.4")
      .fromTo(".hero-actions .btn-primary, .hero-actions .btn-secondary, .hero-actions .btn-outline-glass", { autoAlpha: 0, y: 20, scale: 0.95 }, { autoAlpha: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.5 }, "-=0.4")
      .fromTo(".dashboard-window", { autoAlpha: 0, y: 40, scale: 0.94 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 }, "-=0.6")
      .fromTo(".floating-badge", { autoAlpha: 0, scale: 0.6, y: 15 }, { autoAlpha: 1, scale: 1, y: 0, stagger: 0.15, duration: 0.6, ease: "back.out(2)" }, "-=0.3");

    // 2. 3D Interactive Mouse Parallax on Hero Visual
    const heroSection = document.getElementById('hero');
    const mockupWrap = document.getElementById('hero-mockup-wrapper');
    if (heroSection && mockupWrap && isDesktop) {
      heroSection.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 22;
        const yPos = (clientY / window.innerHeight - 0.5) * 22;
        gsap.to(mockupWrap, {
          rotationY: xPos * 0.45,
          rotationX: -yPos * 0.45,
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

    // 3. Scrubbed Cyber-Workflow Stepper Timeline (GSAP ScrollTrigger scrub)
    const wfWrapper = document.querySelector('.workflow-journey-wrapper');
    const wfGlow = document.querySelector('.workflow-line-glow');
    if (wfWrapper && wfGlow && typeof ScrollTrigger !== 'undefined') {
      gsap.fromTo(wfGlow,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: wfWrapper,
            start: "top 70%",
            end: "bottom 75%",
            scrub: 0.5
          }
        }
      );

      // Trigger each step node & card on scroll
      document.querySelectorAll('.workflow-step-row').forEach(row => {
        const node = row.querySelector('.workflow-node');
        const card = row.querySelector('.workflow-card');

        gsap.fromTo(node,
          { scale: 0.7, opacity: 0.4 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(card,
          { autoAlpha: 0, y: 35, scale: 0.95 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }

    // 4. ScrollTrigger Section Titles & Batched Entrances
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

      ScrollTrigger.batch(".solution-card, .pillar-card, .template-card, .pricing-card, .why-card, .widget-card, .addon-card", {
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

      // 5. Testimonial Section Entrance & Auto-Swipe Activation
      gsap.fromTo("#testimoni .testi-carousel-wrapper",
        { autoAlpha: 0, y: 40, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#testimoni",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".org-trust-marquee-wrap",
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#testimoni",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Subtle parallax on floating badges
      gsap.to(".badge-top-right", {
        y: -30,
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 }
      });

      gsap.to(".badge-bottom-left", {
        y: -15,
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 }
      });
    }
  });
}
