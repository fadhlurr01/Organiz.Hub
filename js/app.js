/**
 * RUMAH WEBSITE ORGANISASI - JAVASCRIPT APPLICATION ENGINE
 * Features:
 *  1. Dual-Tone Theme Manager (Dark/Light mode)
 *  2. Multi-Language i18n Manager (ID / EN)
 *  3. Antigravity Animation Engine (Scroll Reveals, 3D Hero Parallax, Downward Timeline Stepper)
 *  4. Hero Multi-Tab Interactive Dashboard Simulator
 *  5. Interactive Donation Progress Simulator & Live Charts
 *  6. Animated Social Impact Counters
 *  7. Feature & Portfolio Category Filters
 *  8. Interactive FAQ Search & Accordion
 *  9. High-Conversion Lead Capture Form Validation & Toast System
 *  10. Mobile Bottom App Dock ScrollSpy Sync
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initLanguageManager();
  initNavbar();
  initGsapAnimations();
  initHeroParallax();
  initHeroDashboardTabs();
  initWorkflowTimelineScroll();
  initDonationWidget();
  initImpactCounters();
  initWhatsAppHotlineSimulation();
  initTransparencyDonutWidget();
  initFeatureTabs();
  initPortfolioFilter();
  initLivePreviewSimulator();
  initCaseStudyModal();
  initFaqAccordion();
  initLeadCaptureForm();
  initPricingSwitcher();
  initTestimonialAutoSlider();
  initMobileBottomDock();
  initNewsletterForm();
  initFloatingWhatsApp();
  initScrollToTop();
});

/* ==========================================================================
   1. Dual-Tone Theme Manager
   ========================================================================== */
function initThemeManager() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const htmlEl = document.documentElement;

  // Retrieve stored theme or default to 'dark'
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
const i18nTranslations = {
  id: {
    "badge.org": "ORGANISASI",
    "nav.home": "Beranda",
    "nav.solutions": "Solusi",
    "nav.pillars": "4 Pilar",
    "nav.features": "Fitur",
    "nav.widgets": "Simulasi",
    "nav.portfolio": "Portofolio",
    "nav.workflow": "Alur Kerja",
    "nav.pricing": "Paket",
    "nav.faq": "FAQ",
    "mega.yayasan.title": "Yayasan Sosial & Pendidikan",
    "mega.yayasan.sub": "Panti, beasiswa & program sosial",
    "mega.komunitas.title": "Komunitas & Asosiasi",
    "mega.komunitas.sub": "Keanggotaan, relawan & event",
    "mega.ngo.title": "NGO & Lembaga Filantropi",
    "mega.ngo.sub": "Advokasi, multi-bahasa & grant",
    "mega.wakaf.title": "Lembaga Amal & Wakaf",
    "mega.wakaf.sub": "ZISWAF, kalkulator zakat & WA",
    "cta.viewPricing": "Lihat Paket",
    "cta.freeConsult": "Konsultasi Gratis",
    "cta.freeConsultText": "Konsultasi Gratis",
    "hero.ratingText": "Dipercaya 250+ Yayasan & NGO di Indonesia",
    "hero.headline": "Membangun <span class=\"text-gradient-emerald\">Fondasi Digital</span> yang Kokoh & Transparan untuk Organisasi yang Menggerakkan Perubahan.",
    "hero.subheadline": "Template website kelas arsitektur profesional yang dirancang khusus untuk Yayasan, Komunitas, dan NGO. Terintegrasi dengan sistem donasi instan, manajemen relawan, dan laporan transparansi publik.",
    "hero.ctaExplore": "Jelajahi Template",
    "hero.ctaDemo": "Simulasi Demo Live",
    "hero.badge1": "100% Legal Safe & Verified",
    "hero.badge2": "Mobile-First UI/UX",
    "hero.badge3": "Kecepatan Skor 99+",
    "hero.mockupLive": "● Live System",
    "hero.mockupTag": "KAMPANYE DARURAT PENDIDIKAN",
    "hero.mockupCampaignTitle": "1.000 Beasiswa Pelajar Pelosok Nusantara",
    "hero.mockupAutoSync": "Auto-Sync",
    "hero.mockupCollected": "Terkumpul",
    "hero.mockupTarget": "Target",
    "hero.mockupFunded": "Tercapai",
    "hero.mockupDaysLeft": "Hari Tersisa",
    "hero.mockupDonors": "Donatur",
    "hero.mockupInstantDonate": "Donasi Instan (QRIS)",
    "hero.floatImpactTitle": "Indeks Dampak Nyata",
    "hero.floatImpactSub": "Penerima Manfaat",
    "hero.floatAuditTitle": "Laporan Audit WTP",
    "hero.floatAuditStatus": "Terverifikasi Publik",
    "hero.scrollDown": "Scroll untuk Eksplorasi",
    "solusi.tag": "SOLUSI SPESIFIK & TERUKUR",
    "solusi.title": "Solusi Tepat Guna untuk Setiap Spektrum Organisasi",
    "solusi.subtitle": "Kami memahami bahwa yayasan amal, komunitas hobi, dan NGO internasional memiliki model operasional yang berbeda.",
    "solusi.c1.title": "1. YAYASAN (Sosial / Pendidikan)",
    "solusi.c1.desc": "Fondasi kokoh untuk lembaga panti, lembaga beasiswa, dan yayasan sosial kemanusiaan.",
    "solusi.c1.f1": "Portal donasi online otomatis (QRIS & VA)",
    "solusi.c1.f2": "Laporan penggunaan dana & kas publik",
    "solusi.c1.f3": "Galeri program & dokumentasi panti binaan",
    "solusi.c1.cta": "Jelajahi Blueprint Yayasan",
    "solusi.c2.title": "2. KOMUNITAS & ASOSIASI",
    "solusi.c2.desc": "Pusat interaksi anggota, pendaftaran relawan, dan manajemen kegiatan terstruktur.",
    "solusi.c2.f1": "Pendaftaran keanggotaan & kartu digital",
    "solusi.c2.f2": "Direktori anggota terverifikasi & forum mini",
    "solusi.c2.f3": "Kalender event & tiket webinar otomatis",
    "solusi.c2.cta": "Jelajahi Blueprint Komunitas",
    "solusi.c3.title": "3. NGO & LEMBAGA FILANTROPI",
    "solusi.c3.desc": "Arsitektur berstandar internasional untuk organisasi advokasi dan gerakan global.",
    "solusi.c3.f1": "Standar akuntabilitas & governance global",
    "solusi.c3.f2": "Dukungan multi-bahasa & multi-mata uang",
    "solusi.c3.f3": "Unduh laporan audit tahunan PDF terlindungi",
    "solusi.c3.cta": "Jelajahi Blueprint NGO",
    "solusi.c4.title": "4. LEMBAGA AMAL & WAKAF",
    "solusi.c4.desc": "Platform penghimpunan dana ZISWAF terpercaya dengan perhitungan fiqih akurat.",
    "solusi.c4.f1": "Kalkulator Zakat & Wakaf Produktif instan",
    "solusi.c4.f2": "Notifikasi laporan penyaluran ke donatur",
    "solusi.c4.f3": "Integrasi auto WhatsApp broadcast kwitansi",
    "solusi.c4.cta": "Jelajahi Blueprint Wakaf",
    "pilar.tag": "FONDASI STRUKTURAL KAMI",
    "pilar.title": "Kehadiran Digital Paripurna melalui 4 Pilar Arsitektur",
    "pilar.subtitle": "Kami tidak sekadar memasang halaman web. Kami mengkonstruksi ekosistem digital mandiri untuk memastikan organisasi Anda tumbuh, terpercaya, dan berkelanjutan.",
    "pilar.p1.title": "Trust & Credibility (Fondasi)",
    "pilar.p1.desc": "Desain yang memancarkan otoritas resmi, sertifikasi legalitas Kemenkumham, struktur dewan pengawas, dan integrasi badge verifikasi instansi berwenang.",
    "pilar.p1.sub": "Kunci Keberhasilan:",
    "pilar.p1.subdesc": "Meningkatkan konversi donatur baru hingga 3x lipat dengan tampilan legalitas yang jelas & terverifikasi.",
    "pilar.p2.title": "Fundraising & Engagement (Konstruksi)",
    "pilar.p2.desc": "Sistem donasi one-click (QRIS statis/dinamis, Kartu Kredit, Virtual Account), modul konversi pengunjung menjadi relawan aktif, dan donor loyalty journey.",
    "pilar.p2.sub": "Kunci Keberhasilan:",
    "pilar.p2.subdesc": "Proses donasi tanpa hambatan hanya dalam 3 langkah tanpa perlu pendaftaran akun rumit.",
    "pilar.p3.title": "Transparency & Visibility (Jendela Publik)",
    "pilar.p3.desc": "Dashboard interaktif penyaluran dana real-time, SEO ramah Google Search, serta optimasi kelayakan Google for Non-Profits (Google Ad Grants $10.000/bln).",
    "pilar.p3.sub": "Kunci Keberhasilan:",
    "pilar.p3.subdesc": "Membangun loyalitas donatur berulang dengan laporan alokasi dana yang transparan.",
    "pilar.p4.title": "Productivity & Automation (Infrastruktur Mesin)",
    "pilar.p4.desc": "Integrasi auto-email kwitansi donasi resmi, notifikasi WhatsApp otomatis kepada donatur, serta CMS visual yang sangat mudah dikelola tanpa keahlian coding.",
    "pilar.p4.sub": "Kunci Keberhasilan:",
    "pilar.p4.subdesc": "Menghemat hingga 20 jam kerja staf admin setiap minggu melalui otomasi tugas rutin.",
    "harga.tag": "INVESTASI TRANSPARAN",
    "harga.title": "Pilih Paket Arsitektur Website Organisasi Anda",
    "harga.subtitle": "Investasi digital satu kali dengan infrastruktur siap pakai untuk memperluas jangkauan kebaikan organisasi Anda.",
    "harga.annual": "Paket Tahunan (Hemat 25%)",
    "harga.monthly": "Paket Reguler",
    "harga.choosePlan": "Pilih Paket Ini",
    "alur.tag": "WORKFLOW BLUEPRINT",
    "alur.title": "Alur Konstruksi Digital Anda: Dari Nol Hingga Berdampak Luas",
    "alur.subtitle": "Metodologi bertahap yang terstruktur untuk memastikan situs web organisasi Anda siap beroperasi secara profesional tanpa hambatan teknis.",
    "alur.s1.phase": "FASE 01 • STRATEGI",
    "alur.s1.title": "Blueprint Arsitektur & Analisis Organisasi",
    "alur.s1.desc": "Penyusunan struktur kebutuhan, verifikasi legalitas lembaga, pemetaan target donatur, serta perancangan alur donasi instan.",
    "alur.s2.phase": "FASE 02 • DESAIN & CMS",
    "alur.s2.title": "Konstruksi Desain Antarmuka & Panel Admin",
    "alur.s2.desc": "Pemasangan template arsitektur premium, konfigurasi modul program panti/kegiatan, dan integrasi identitas visual organisasi.",
    "alur.s3.phase": "FASE 03 • INTEGRASI",
    "alur.s3.title": "Integrasi Gateway Donasi & Sistem Transparansi",
    "alur.s3.desc": "Penyambungan Payment Gateway (QRIS/VA), sistem formulir registrasi relawan, dan modul dashboard transparansi keuangan.",
    "alur.s4.phase": "FASE 04 • QUALITY AUDIT",
    "alur.s4.title": "Uji Kelayakan, Enkripsi & Peluncuran Go-Live",
    "alur.s4.desc": "Audit keamanan enkripsi data donatur, pengujian performa kecepatan mobile, serta indexing resmi ke Google Search Engine.",
    "alur.s5.phase": "FASE 05 • AKSELERASI",
    "alur.s5.title": "Scaling, Google Non-Profits & Pertumbuhan Dampak",
    "alur.s5.desc": "Pemanfaatan SEO, klaim Google Ad Grants $10k/bulan, pelaporan berkala otomatis, dan ekspansi basis relawan & donatur setia.",
    "fitur.tag": "MODULAR & SCALEABLE",
    "fitur.title": "Feature Library: Ekosistem Fitur Organisasi Siap Pakai",
    "fitur.subtitle": "Pilih dan sesuaikan modul fitur pintar yang dibutuhkan untuk mengakselerasi operasional yayasan dan komunitas Anda.",
    "fitur.tabAll": "Semua Fitur",
    "fitur.tabDonasi": "Donasi & Finansial",
    "fitur.tabKeanggotaan": "Keanggotaan & Relawan",
    "fitur.tabPublikasi": "Publikasi & Media",
    "fitur.tabKeamanan": "Keamanan & Audit",
    "fitur.f1.title": "Modul Penggalangan Dana Instan",
    "fitur.f1.desc": "Target bar dana terisi otomatis secara real-time dengan integrasi langsung QRIS dan e-wallet nasional.",
    "fitur.f2.title": "Database Anggota & Relawan",
    "fitur.f2.desc": "Ekspor data calon relawan terdaftar ke format CSV/Excel dengan satu klik untuk mempermudah koordinasi lapangan.",
    "fitur.f3.title": "Papan Transparansi Anggaran",
    "fitur.f3.desc": "Menampilkan infografis interaktif pembagian alokasi dana program sosial untuk membina kepercayaan publik.",
    "fitur.f4.title": "Sistem Event & Pendaftaran",
    "fitur.f4.desc": "Formulir pendaftaran tiket kegiatan/webinar online dengan pengiriman konfirmasi instan via email & QR Code.",
    "fitur.f5.title": "Media Rilis & Buletin",
    "fitur.f5.desc": "Ruang publikasi artikel berita kegiatan yang ramah mesin pencari (SEO-Ready) untuk meningkatkan jangkauan program.",
    "fitur.f6.title": "Download Center Laporan Tahunan",
    "fitur.f6.desc": "Manajemen berkas PDF aman untuk laporan audit internal/eksternal yang dapat diunduh langsung oleh publik.",
    "fitur.f7.title": "Galeri Cerita Dampak & Dokumentasi",
    "fitur.f7.desc": "Koleksi foto dan kisah inspiratif penerima manfaat yang terkurasi untuk memperkuat ikatan emosional donatur.",
    "fitur.f8.title": "Sertifikasi Legalitas & Enkripsi",
    "fitur.f8.desc": "Integrasi badge verifikasi Kemenkumham, perlindungan data pribadi donatur, dan protokol keamanan SSL 256-bit.",
    "fitur.badgeDonasi": "Donasi",
    "fitur.badgeKeanggotaan": "Keanggotaan",
    "fitur.badgePublikasi": "Publikasi",
    "fitur.badgeKeamanan": "Keamanan",
    "widget.tag": "LIVE INTERACTIVE COMPONENTS",
    "widget.title": "Koleksi Widget Cerdas Siap Pasang",
    "widget.subtitle": "Tingkatkan interaktivitas pengunjung situs Anda dengan komponen modular siap pakai berikut ini.",
    "widget.w1.title": "Donation Progress Meter",
    "widget.w1.desc": "Tampilan visual bar persentase target donasi beserta sisa hari kampanye dan simulasi tambah donasi.",
    "widget.w1.simLabel": "Simulasikan Tambah Donasi:",
    "widget.w1.reset": "Reset",
    "widget.w2.title": "Live Social Impact Counter",
    "widget.w2.desc": "Angka animasi dinamis yang menghitung jumlah penerima manfaat, relawan terdaftar, dan wilayah jangkauan.",
    "widget.w2.label1": "Penerima Manfaat",
    "widget.w2.label2": "Relawan Terdaftar",
    "widget.w2.label3": "Provinsi Jangkauan",
    "widget.w2.replay": "🔄 Putar Ulang Animasi Counter",
    "widget.w3.title": "WhatsApp Hotline Float",
    "widget.w3.desc": "Tombol mengambang dengan avatar petugas yang siap merespons pertanyaan donatur secara interaktif.",
    "widget.w3.msg": "Halo! Ada yang bisa kami bantu seputar program panti dan donasi?",
    "widget.w3.btnChat": "Mulai Obrolan WhatsApp",
    "widget.w3.tooltip": "Konsultasi Tim Ahli",
    "widget.w4.title": "Quick Transparency Chart",
    "widget.w4.desc": "Diagram lingkaran interaktif proporsi penyaluran bantuan dana sosial dan efisiensi operasional.",
    "widget.w4.center": "Penyaluran",
    "widget.w4.l1": "Penyaluran Bantuan (85%)",
    "widget.w4.l2": "Operasional & Audit (10%)",
    "widget.w4.l3": "Cadangan Darurat (5%)",
    "porto.tag": "BUKTI KARYA NYATA",
    "porto.title": "Showcase Portofolio & Transformasi Digital Organisasi",
    "porto.subtitle": "Jelajahi implementasi nyata situs web organisasi yang berhasil melipatgandakan dampak sosial dan donasi mereka.",
    "porto.tabAll": "Semua Kasus",
    "porto.tabYayasan": "Yayasan Pendidikan",
    "porto.tabLingkungan": "Komunitas Lingkungan",
    "porto.tabNgo": "NGO Kemanusiaan",
    "brosur.tag": "MATERI GRATIS 2026",
    "brosur.title": "Unduh Brosur Lengkap & Panduan Standar Digitalisasi Organisasi",
    "brosur.desc": "Dapatkan referensi terlengkap mengenai arsitektur web modern, skema biaya transparan, dan strategi fundraising nirlaba masa kini.",
    "brosur.formTitle": "Form Permintaan Brosur & Konsultasi",
    "brosur.formSub": "Dokumen PDF akan langsung dikirimkan ke kontak WhatsApp dan email Anda.",
    "brosur.btnSubmit": "Unduh Brosur & Dapatkan Konsultasi Gratis →",
    "brosur.privacy": "Privasi terjamin. Data Anda aman dan bebas spam promosi.",
    "faq.tag": "PERTANYAAN UMUM",
    "faq.title": "Tanya Jawab Seputar Website Organisasi",
    "faq.subtitle": "Informasi penting mengenai proses instalasi, mekanisme donasi, dan pengelolaan mandiri situs Anda.",
    "footer.desc": "Arsitektur Digital Terpercaya untuk Organisasi, Yayasan, Komunitas, & NGO di Indonesia."
  },
  en: {
    "badge.org": "ORGANIZATION",
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.pillars": "4 Pillars",
    "nav.features": "Features",
    "nav.widgets": "Simulations",
    "nav.portfolio": "Portfolio",
    "nav.workflow": "Workflow",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "mega.yayasan.title": "Social & Education Foundation",
    "mega.yayasan.sub": "Orphanage, scholarship & welfare",
    "mega.komunitas.title": "Community & Association",
    "mega.komunitas.sub": "Membership, volunteers & events",
    "mega.ngo.title": "NGO & Philanthropy",
    "mega.ngo.sub": "Advocacy, multi-language & grants",
    "mega.wakaf.title": "Charity & Waqf Institute",
    "mega.wakaf.sub": "Zakat calculator & WhatsApp receipts",
    "cta.viewPricing": "View Pricing",
    "cta.freeConsult": "Free Consultation",
    "cta.freeConsultText": "Free Consultation",
    "hero.ratingText": "Trusted by 250+ Foundations & NGOs in Indonesia",
    "hero.headline": "Building a Solid & Transparent <span class=\"text-gradient-emerald\">Digital Architecture</span> for Mission-Driven Organizations.",
    "hero.subheadline": "Professional architectural-grade website template designed specifically for Foundations, Communities, and NGOs. Integrated with instant donations, volunteer management, and public transparency reports.",
    "hero.ctaExplore": "Explore Templates",
    "hero.ctaDemo": "Live Demo Simulation",
    "hero.badge1": "100% Legal Safe & Verified",
    "hero.badge2": "Mobile-First UI/UX",
    "hero.badge3": "Speed Score 99+",
    "hero.mockupLive": "● Live System",
    "hero.mockupTag": "EMERGENCY EDUCATION CAMPAIGN",
    "hero.mockupCampaignTitle": "1,000 Remote Archipelago Student Scholarships",
    "hero.mockupAutoSync": "Auto-Sync",
    "hero.mockupCollected": "Collected",
    "hero.mockupTarget": "Target",
    "hero.mockupFunded": "Funded",
    "hero.mockupDaysLeft": "Days Left",
    "hero.mockupDonors": "Donors",
    "hero.mockupInstantDonate": "Instant Donation (QRIS)",
    "hero.floatImpactTitle": "Real Impact Index",
    "hero.floatImpactSub": "Beneficiaries",
    "hero.floatAuditTitle": "Unqualified Audit Report",
    "hero.floatAuditStatus": "Publicly Verified",
    "hero.scrollDown": "Scroll to Explore",
    "solusi.tag": "SPECIFIC & MEASURABLE SOLUTIONS",
    "solusi.title": "Tailored Solutions for Every Organization Spectrum",
    "solusi.subtitle": "We understand that charitable foundations, hobby communities, and international NGOs operate under distinct models.",
    "solusi.c1.title": "1. FOUNDATION (Social / Education)",
    "solusi.c1.desc": "Solid foundation for orphanages, scholarship institutions, and humanitarian charities.",
    "solusi.c1.f1": "Automated online donation portal (QRIS & VA)",
    "solusi.c1.f2": "Public cash flow & expenditure reporting",
    "solusi.c1.f3": "Program gallery & care center documentation",
    "solusi.c1.cta": "Explore Foundation Blueprint",
    "solusi.c2.title": "2. COMMUNITY & ASSOCIATION",
    "solusi.c2.desc": "Central hub for member interactions, volunteer onboarding, and structured events.",
    "solusi.c2.f1": "Membership signup & digital member cards",
    "solusi.c2.f2": "Verified member directory & mini forums",
    "solusi.c2.f3": "Event calendar & automated webinar ticketing",
    "solusi.c2.cta": "Explore Community Blueprint",
    "solusi.c3.title": "3. NGO & PHILANTHROPY",
    "solusi.c3.desc": "International standard digital architecture for global advocacy and humanitarian causes.",
    "solusi.c3.f1": "Global accountability & governance standards",
    "solusi.c3.f2": "Multi-language & multi-currency donation support",
    "solusi.c3.f3": "Protected PDF annual audit report download center",
    "solusi.c3.cta": "Explore NGO Blueprint",
    "solusi.c4.title": "4. CHARITY & ENDOWMENT TRUST",
    "solusi.c4.desc": "Trusted Zakat & Waqf fundraising platform with accurate fiqh-compliant calculators.",
    "solusi.c4.f1": "Instant Zakat & Productive Waqf calculator",
    "solusi.c4.f2": "Real-time aid distribution notifications",
    "solusi.c4.f3": "Automated WhatsApp official receipt broadcast",
    "solusi.c4.cta": "Explore Waqf Blueprint",
    "pilar.tag": "OUR STRUCTURAL FOUNDATION",
    "pilar.title": "Complete Digital Presence via 4 Architectural Pillars",
    "pilar.subtitle": "We don't merely host web pages. We construct an independent digital ecosystem ensuring your organization grows sustainably with immense public trust.",
    "pilar.p1.title": "Trust & Credibility (Foundation)",
    "pilar.p1.desc": "Design radiating official authority, Ministry of Law & Human Rights certificates, supervisory board structure, and institutional verification badges.",
    "pilar.p1.sub": "Key Success Factor:",
    "pilar.p1.subdesc": "Triples new donor conversions with clear, certified legality proofs.",
    "pilar.p2.title": "Fundraising & Engagement (Construction)",
    "pilar.p2.desc": "One-click frictionless donation system (dynamic QRIS, Credit Cards, Virtual Accounts), volunteer conversion funnels, and donor loyalty journeys.",
    "pilar.p2.sub": "Key Success Factor:",
    "pilar.p2.subdesc": "Frictionless 3-step donation flow without tedious mandatory sign-ups.",
    "pilar.p3.title": "Transparency & Visibility (Public Window)",
    "pilar.p3.desc": "Interactive live fund allocation dashboards, Google Search SEO optimization, and Google for Non-Profits ($10,000/mo Ad Grants) eligibility setup.",
    "pilar.p3.sub": "Key Success Factor:",
    "pilar.p3.subdesc": "Drives recurring donor loyalty through transparent live budget reporting.",
    "pilar.p4.title": "Productivity & Automation (Engine Infrastructure)",
    "pilar.p4.desc": "Auto-email tax-deductible donation receipts, automated WhatsApp updates to donors, and an intuitive visual CMS requiring zero coding skills.",
    "pilar.p4.sub": "Key Success Factor:",
    "pilar.p4.subdesc": "Saves up to 20 staff hours every week through automated workflow triggers.",
    "harga.tag": "TRANSPARENT INVESTMENT",
    "harga.title": "Choose Your Organization's Website Architecture",
    "harga.subtitle": "A one-time digital investment with ready-to-launch infrastructure to amplify your organization's social impact.",
    "harga.annual": "Annual Plan (Save 25%)",
    "harga.monthly": "Regular Plan",
    "harga.choosePlan": "Select This Plan",
    "alur.tag": "WORKFLOW BLUEPRINT",
    "alur.title": "Your Digital Construction Workflow: From Zero to Massive Impact",
    "alur.subtitle": "A structured stage-by-stage methodology to ensure your organization website is fully operational without technical bottlenecks.",
    "alur.s1.phase": "PHASE 01 • STRATEGY",
    "alur.s1.title": "Architecture Blueprint & Organization Analysis",
    "alur.s1.desc": "Needs scoping, institutional legality check, donor persona mapping, and donation flow modeling.",
    "alur.s2.phase": "PHASE 02 • DESIGN & CMS",
    "alur.s2.title": "UI Construction & Admin Panel",
    "alur.s2.desc": "Premium architectural template deployment, program/orphanage module setup, and visual identity styling.",
    "alur.s3.phase": "PHASE 03 • INTEGRATION",
    "alur.s3.title": "Payment Gateway & Transparency Integration",
    "alur.s3.desc": "Payment Gateway connection (QRIS/VA), volunteer registration funnels, and live transparency dashboards.",
    "alur.s4.phase": "PHASE 04 • QUALITY AUDIT",
    "alur.s4.title": "Security Audit, Encryption & Go-Live",
    "alur.s4.desc": "Donor data encryption audit, mobile speed score optimization, and official Google Search indexing.",
    "alur.s5.phase": "PHASE 05 • SCALING",
    "alur.s5.title": "Scaling, Google Non-Profits & Impact Growth",
    "alur.s5.desc": "SEO leverage, $10k/mo Google Ad Grants claim, automated recurring reports, and donor base expansion.",
    "fitur.tag": "MODULAR & SCALEABLE",
    "fitur.title": "Feature Library: Ready-to-Deploy Organization Ecosystem",
    "fitur.subtitle": "Select and customize smart modular components needed to power your foundation or community operations.",
    "fitur.tabAll": "All Features",
    "fitur.tabDonasi": "Donation & Finance",
    "fitur.tabKeanggotaan": "Membership & Volunteers",
    "fitur.tabPublikasi": "Media & Releases",
    "fitur.tabKeamanan": "Security & Audit",
    "fitur.f1.title": "Instant Fundraising Module",
    "fitur.f1.desc": "Real-time automated fundraising progress bar with instant dynamic QRIS and digital wallet gateway.",
    "fitur.f2.title": "Member & Volunteer Database",
    "fitur.f2.desc": "Export registered volunteers to Excel/CSV with one click for easy fieldwork and mobilization.",
    "fitur.f3.title": "Budget Transparency Dashboard",
    "fitur.f3.desc": "Interactive public infographic displaying precise social program fund allocations to boost donor trust.",
    "fitur.f4.title": "Event & Ticketing Engine",
    "fitur.f4.desc": "Online registration forms for webinars and field events with instant email & QR code passes.",
    "fitur.f5.title": "Press Releases & News Bulletins",
    "fitur.f5.desc": "SEO-ready publishing space for program updates and activity logs to amplify search visibility.",
    "fitur.f6.title": "Annual Audit Report Center",
    "fitur.f6.desc": "Secure PDF download portal for internal/external financial audits accessible to institutional donors.",
    "fitur.f7.title": "Impact Storytelling Gallery",
    "fitur.f7.desc": "Curated photo documentation and beneficiary case stories that evoke deep public connection.",
    "fitur.f8.title": "Legality & Encryption Shield",
    "fitur.f8.desc": "Government ministry verification badges, strict donor data protection, and 256-bit SSL protocols.",
    "fitur.badgeDonasi": "Donation",
    "fitur.badgeKeanggotaan": "Membership",
    "fitur.badgePublikasi": "Media",
    "fitur.badgeKeamanan": "Security",
    "widget.tag": "LIVE INTERACTIVE COMPONENTS",
    "widget.title": "Ready-to-Use Smart Widget Collection",
    "widget.subtitle": "Supercharge visitor engagement on your portal with these plug-and-play modular UI widgets.",
    "widget.w1.title": "Donation Progress Meter",
    "widget.w1.desc": "Live percentage progress bar displaying campaign countdown and instant donation increment simulation.",
    "widget.w1.simLabel": "Simulate Adding Donation:",
    "widget.w1.reset": "Reset",
    "widget.w2.title": "Live Social Impact Counter",
    "widget.w2.desc": "Dynamic animated metrics counting beneficiaries helped, registered volunteers, and regional coverage.",
    "widget.w2.label1": "Beneficiaries",
    "widget.w2.label2": "Registered Volunteers",
    "widget.w2.label3": "Provinces Covered",
    "widget.w2.replay": "🔄 Replay Counter Animation",
    "widget.w3.title": "WhatsApp Hotline Float",
    "widget.w3.desc": "Floating interactive help desk widget featuring staff avatars ready to assist donors.",
    "widget.w3.msg": "Hello! How can we assist you with our charity programs and donations today?",
    "widget.w3.btnChat": "Start WhatsApp Chat",
    "widget.w3.tooltip": "Consult Our Team",
    "widget.w4.title": "Quick Transparency Chart",
    "widget.w4.desc": "Interactive donut chart illustrating social fund distribution proportions and operational efficiency.",
    "widget.w4.center": "Disbursed",
    "widget.w4.l1": "Direct Program Aid (85%)",
    "widget.w4.l2": "Operations & Audit (10%)",
    "widget.w4.l3": "Emergency Reserve (5%)",
    "porto.tag": "PROVEN TRACK RECORD",
    "porto.title": "Portfolio Showcase & Digital Transformation",
    "porto.subtitle": "Explore real-world organization implementations that multiplied public donations and social reach.",
    "porto.tabAll": "All Cases",
    "porto.tabYayasan": "Education Foundation",
    "porto.tabLingkungan": "Environmental Org",
    "porto.tabNgo": "Humanitarian NGO",
    "brosur.tag": "FREE 2026 ASSETS",
    "brosur.title": "Download Complete Brochure & 2026 Digitalization Guide",
    "brosur.btnSubmit": "Download Brochure & Get Free Consultation →",
    "brosur.privacy": "Privacy guaranteed. Your data is protected & spam-free.",
    "faq.tag": "FREQUENTLY ASKED QUESTIONS",
    "faq.title": "Questions & Answers on Organization Websites",
    "faq.subtitle": "Essential insights regarding setup workflows, donation mechanisms, and autonomous portal management.",
    "faq.q1": "How long does it take to construct and launch an organization website from this template?",
    "faq.a1": "On average, the configuration, domain integration, and launch process takes <strong>5 to 10 business days</strong> after your organization profile, logo, and legal documents are received.",
    "faq.q2": "Can we manage content and news updates ourselves without coding skills?",
    "faq.a2": "Absolutely. We equip each template with an intuitive visual admin panel, accompanied by step-by-step video guides so your foundation staff can easily publish updates.",
    "faq.q3": "How are donations collected via the website disbursed into our account?",
    "faq.a3": "Funds processed via the payment gateway (QRIS/Bank Transfer/E-Wallet) are disbursed directly to <strong>your organization's official bank account</strong> with zero third-party escrow delays.",
    "faq.q4": "Does the platform support anonymous donations (Hamba Allah)?",
    "faq.a4": "Yes, our system includes an optional checkbox: <em>'Hide my name on the public donors board'</em>. Donors still receive official email/WhatsApp receipts while their public name appears as 'Hamba Allah'.",
    "addon.tag": "SCALABILITY & ACCELERATION",
    "addon.title": "Additional Acceleration & Scalability Services",
    "addon.subtitle": "Comprehensive strategic support to maximize your organization's digital reach and server resilience.",
    "addon.a1.title": "Google for Non-Profits Setup",
    "addon.a1.desc": "Assistance in claiming $10,000/month Google Ad Grants for eligible non-profits to top Google Search rankings.",
    "addon.a2.title": "WhatsApp Notification Engine",
    "addon.a2.desc": "Automated official thank-you receipts and program photo reports sent directly to donor mobile phones.",
    "addon.a3.title": "Content Writing & Annual Report Drafting",
    "addon.a3.desc": "Empathetic fundraising story drafting and visual accountability design for annual stakeholder reports.",
    "addon.a4.title": "Maintenance & Cloud Backup Guard",
    "addon.a4.desc": "Monthly server monitoring, security patching, malware mitigation, and automatic daily cloud backups.",
    "proof.tag": "NETWORK OF TRUST",
    "proof.title": "Trusted by Leading Foundations & Social Movements",
    "footer.desc": "Organiz.Hub - Integrated Digital Ecosystem Solution for Social Foundations, Communities & Philanthropic NGOs in Indonesia.",
    "footer.col1": "Solution Segments",
    "footer.col2": "Key Features",
    "footer.col3": "Legal & Support",
    "footer.terms": "Terms & Licensing",
    "footer.privacy": "Donor Privacy Policy",
    "footer.api": "Digital Framework Docs",
    "footer.support": "Contact Technical Support",
    "footer.newsTitle": "Subscribe to Digital Philanthropy Bulletin",
    "footer.newsSub": "Get regular updates on non-profit digital strategy and modern fundraising insights.",
    "footer.newsBtn": "Subscribe",
    "footer.copyright": "© 2026 Organiz.Hub by Rumah Website. All Rights Reserved."
  }
};

function initLanguageManager() {
  const langBtns = document.querySelectorAll('[data-lang]');
  let currentLang = localStorage.getItem('rw_org_lang') || 'id';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('rw_org_lang', lang);

    // Update active button state across all language buttons (header & drawer)
    langBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    const dict = i18nTranslations[lang] || i18nTranslations.id;

    // Translate all elements with data-i18n
    const translatableEls = document.querySelectorAll('[data-i18n]');
    translatableEls.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Translate page title
    if (lang === 'en') {
      document.title = "Organiz.Hub | Modern Digital Architecture for Foundations, Communities & NGOs";
    } else {
      document.title = "Organiz.Hub | Wadah Digital Modern untuk Yayasan, Komunitas & NGO";
    }

    // Translate search and form placeholders
    const faqSearch = document.getElementById('faq-search-input');
    if (faqSearch) {
      faqSearch.placeholder = lang === 'en' ? 'Search questions (e.g., donations, timeline, coding)...' : 'Cari pertanyaan (misal: donasi, waktu, coding)...';
    }

    const formName = document.getElementById('form-name');
    if (formName) formName.placeholder = lang === 'en' ? 'Enter your full name...' : 'Masukkan nama lengkap Anda...';

    const formEmail = document.getElementById('form-email');
    if (formEmail) formEmail.placeholder = lang === 'en' ? 'email@organization.or.id' : 'email@organisasi.or.id';

    const formOrg = document.getElementById('form-org');
    if (formOrg) formOrg.placeholder = lang === 'en' ? 'Foundation / Community / NGO...' : 'Yayasan / Komunitas / NGO...';

    const formNotes = document.getElementById('form-notes');
    if (formNotes) formNotes.placeholder = lang === 'en' ? 'Write your website plans or current challenges...' : 'Tulis rencana atau kendala website Anda saat ini...';

    const newsletterInput = document.querySelector('.newsletter-input');
    if (newsletterInput) newsletterInput.placeholder = lang === 'en' ? 'Enter your email address...' : 'Masukkan alamat email Anda...';
  }

  // Bind click event to all data-lang buttons
  langBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      applyLanguage(targetLang);
    });
  });

  // Apply stored language on load
  if (currentLang !== 'id') {
    applyLanguage(currentLang);
  }
}

/* ==========================================================================
   3. GSAP 3.12+ & ScrollTrigger High-Impact Animation Suite
   ========================================================================== */
function initGsapAnimations() {
  if (typeof gsap === 'undefined') {
    console.warn('GSAP is not loaded. Fallback to default visibility.');
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
    return;
  }

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.defaults({ ease: "power2.out", duration: 0.8 });

  // Header Scroll Frosted State
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  const mm = gsap.matchMedia();

  mm.add({
    isDesktop: "(min-width: 992px)",
    isMobile: "(max-width: 991px)",
    reduceMotion: "(prefers-reduced-motion: reduce)"
  }, (context) => {
    const { isDesktop, reduceMotion } = context.conditions;

    if (reduceMotion) {
      gsap.set(".reveal-on-scroll, .trust-rating-pill, .hero-headline, .hero-subheadline, .hero-cta-group .btn, .quick-trust-badges .badge-item, .glass-dashboard-card, .solusi-card, .solution-card, .pilar-card, .feature-card, .portfolio-card, .pricing-card, .faq-item, .footer-col", {
        autoAlpha: 1,
        y: 0,
        x: 0,
        scale: 1
      });
      return;
    }

    // --- 1. HERO SECTION MASTER TIMELINE ---
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl
      .fromTo(".trust-rating-pill", 
        { autoAlpha: 0, y: -25, scale: 0.94 }, 
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.75, delay: 0.15 }
      )
      .fromTo(".hero-headline", 
        { autoAlpha: 0, y: 35 }, 
        { autoAlpha: 1, y: 0, duration: 0.85 }, 
        "-=0.45"
      )
      .fromTo(".hero-subheadline", 
        { autoAlpha: 0, y: 20 }, 
        { autoAlpha: 1, y: 0, duration: 0.75 }, 
        "-=0.55"
      )
      .fromTo(".hero-cta-group .btn", 
        { autoAlpha: 0, y: 20, scale: 0.92 }, 
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.12, ease: "back.out(1.6)" }, 
        "-=0.45"
      )
      .fromTo(".quick-trust-badges .badge-item", 
        { autoAlpha: 0, y: 18 }, 
        { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.1 }, 
        "-=0.35"
      )
      .fromTo(".glass-dashboard-card.main-frame", 
        { autoAlpha: 0, y: 55, scale: 0.93, rotationX: isDesktop ? 8 : 0 }, 
        { autoAlpha: 1, y: 0, scale: 1, rotationX: 0, duration: 1.05, ease: "power3.out" }, 
        "-=0.85"
      )
      .fromTo(".mockup-floating-badge, .mockup-floating-badge-bottom", 
        { autoAlpha: 0, scale: 0.6, y: 15 }, 
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "back.out(2)" }, 
        "-=0.5"
      );

    // Continuous Subtle Floating Hero Mockup
    gsap.to("#hero-mockup-layer", {
      y: -10,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Background Constellation Nodes Pulse
    gsap.to(".node-pulse", {
      scale: 1.8,
      autoAlpha: 0,
      duration: 2.4,
      repeat: -1,
      stagger: 0.45,
      transformOrigin: "center center",
      ease: "power1.out"
    });

    // --- 2. GLOBAL SECTION HEADERS SCROLLTRIGGER ---
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.utils.toArray(".section-header, .section-tag").forEach((el) => {
        gsap.fromTo(el,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // --- 3. SOLUSI CARDS (4 Segments) ---
      const solutionCards = gsap.utils.toArray(".solusi-card, .solution-card");
      if (solutionCards.length) {
        gsap.fromTo(solutionCards,
          { autoAlpha: 0, y: 45, scale: 0.95 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: solutionCards[0].closest(".container") || solutionCards[0],
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // --- 4. 4 PILAR ARSITEKTUR CARDS ---
      const pillarCards = gsap.utils.toArray(".pilar-card, .pillar-card");
      if (pillarCards.length) {
        gsap.fromTo(pillarCards,
          { autoAlpha: 0, y: 40, scale: 0.95 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.14,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: pillarCards[0].closest(".container") || pillarCards[0],
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // --- 5. ALUR KONSTRUKSI (WORKFLOW PIPELINE) ---
      const workflowSection = document.getElementById('timeline-section') || document.getElementById('alur');
      const workflowLine = document.getElementById('workflow-line-progress');
      if (workflowSection && workflowLine) {
        gsap.fromTo(workflowLine,
          { height: "8%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: workflowSection,
              start: "top 70%",
              end: "bottom 70%",
              scrub: 0.6
            }
          }
        );
      }

      const stepRows = gsap.utils.toArray(".pipeline-step-row");
      stepRows.forEach((row, idx) => {
        gsap.fromTo(row,
          { autoAlpha: 0, x: idx % 2 === 0 ? -30 : 30 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none none",
              onEnter: () => row.classList.add('active-step'),
              onLeaveBack: () => row.classList.remove('active-step')
            }
          }
        );
      });

      // --- 6. FEATURE LIBRARY MATRIX CARDS ---
      const featCards = gsap.utils.toArray(".feature-card");
      if (featCards.length) {
        gsap.fromTo(featCards,
          { autoAlpha: 0, y: 30, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featCards[0].closest(".container") || featCards[0],
              start: "top 82%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // --- 7. INTERACTIVE LIVE WIDGETS ---
      const widgetBoxes = gsap.utils.toArray(".live-widget-box");
      if (widgetBoxes.length) {
        gsap.fromTo(widgetBoxes,
          { autoAlpha: 0, y: 40, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: widgetBoxes[0].closest(".container") || widgetBoxes[0],
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // --- 8. PORTFOLIO SHOWCASE CARDS ---
      const portoCards = gsap.utils.toArray(".portfolio-card");
      if (portoCards.length) {
        gsap.fromTo(portoCards,
          { autoAlpha: 0, y: 45, scale: 0.95 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.14,
            ease: "power2.out",
            scrollTrigger: {
              trigger: portoCards[0].closest(".container") || portoCards[0],
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // --- 9. PRICING CARDS ---
      const pricingCards = gsap.utils.toArray(".pricing-card");
      if (pricingCards.length) {
        gsap.fromTo(pricingCards,
          { autoAlpha: 0, y: 50, scale: 0.94 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: "back.out(1.3)",
            scrollTrigger: {
              trigger: pricingCards[0].closest(".container") || pricingCards[0],
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // --- 10. LEAD CAPTURE BROCHURE CARD ---
      const leadCard = document.querySelector(".brochure-section-card, #download-brosur .glass-card");
      if (leadCard) {
        gsap.fromTo(leadCard,
          { autoAlpha: 0, y: 40, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leadCard,
              start: "top 82%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // --- 11. FAQ ITEMS ---
      const faqItems = gsap.utils.toArray(".faq-item");
      if (faqItems.length) {
        gsap.fromTo(faqItems,
          { autoAlpha: 0, y: 25 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: faqItems[0].closest(".container") || faqItems[0],
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // --- 12. FOOTER COLUMNS ---
      const footerCols = gsap.utils.toArray(".site-footer .footer-col, .footer-bottom");
      if (footerCols.length) {
        gsap.fromTo(footerCols,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".site-footer",
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }

    // --- 13. FLOATING WHATSAPP BUTTON PULSE ---
    const waFloat = document.getElementById("wa-floating-btn");
    if (waFloat) {
      gsap.to(waFloat, {
        scale: 1.08,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    // --- 14. 3D CARD TILT MICRO-INTERACTION (Desktop) ---
    if (isDesktop) {
      const tiltCards = document.querySelectorAll(".glass-card, .solusi-card, .pilar-card, .portfolio-card, .feature-card, .pricing-card");
      tiltCards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -4;
          const rotateY = ((x - centerX) / centerX) * 4;

          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.3,
            ease: "power1.out"
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        });
      });
    }
  });
}

/* ==========================================================================
   4. Hero Floating Mockup Interactive Elements
   ========================================================================== */
function initHeroParallax() {
  const amountBtns = document.querySelectorAll('.amount-btn');
  amountBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      amountBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  const heroDonateBtn = document.getElementById('hero-btn-donasi-demo');
  if (heroDonateBtn) {
    heroDonateBtn.addEventListener('click', () => {
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(heroDonateBtn, 
          { scale: 0.93 }, 
          { scale: 1, duration: 0.4, ease: "back.out(2)" }
        );
      }
      heroDonateBtn.classList.add('btn-pulse-active');
      setTimeout(() => heroDonateBtn.classList.remove('btn-pulse-active'), 400);
    });
  }
}

/* ==========================================================================
   5. Hero Multi-Tab Interactive Dashboard Simulator
   ========================================================================== */
function initHeroDashboardTabs() {
  const tabBtns = document.querySelectorAll('.mockup-tab-btn[data-mockup-tab]');
  const panels = {
    donasi: document.getElementById('panel-mockup-donasi'),
    kas: document.getElementById('panel-mockup-kas'),
    relawan: document.getElementById('panel-mockup-relawan')
  };

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-mockup-tab');
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      Object.keys(panels).forEach((key) => {
        if (panels[key]) {
          const isTarget = key === target;
          panels[key].classList.toggle('active', isTarget);
          if (isTarget && typeof gsap !== 'undefined') {
            gsap.fromTo(panels[key], 
              { autoAlpha: 0, y: 8 }, 
              { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }
            );
          }
        }
      });
    });
  });
}

/* ==========================================================================
   6. Workflow Laser Pipeline Scroll Engine (Legacy / Fallback Sync)
   ========================================================================== */
function initWorkflowTimelineScroll() {
  // Managed by GSAP ScrollTrigger in initGsapAnimations
}

/* ==========================================================================
   7. Interactive Donation Progress Simulator & QRIS Meter
   ========================================================================== */
function initDonationWidget() {
  const curAmountEl = document.getElementById('widget-cur-amount');
  const progressFill = document.getElementById('widget-progress-fill');
  const pctLabel = document.getElementById('widget-pct-label');
  const addButtons = document.querySelectorAll('.btn-add-donation');
  const resetBtn = document.querySelector('.btn-reset-donation');

  const baseAmount = 48500000;
  const targetAmount = 60000000;
  let currentAmount = baseAmount;

  function updateWidgetDisplay(animate = true) {
    if (!curAmountEl || !progressFill) return;
    const pct = Math.min((currentAmount / targetAmount) * 100, 100);
    curAmountEl.textContent = `Rp ${new Intl.NumberFormat('id-ID').format(currentAmount)}`;
    
    if (typeof gsap !== 'undefined' && animate) {
      gsap.to(progressFill, {
        width: `${pct.toFixed(1)}%`,
        duration: 0.7,
        ease: "power2.out"
      });
      gsap.fromTo(curAmountEl, 
        { scale: 1.08, color: "var(--accent-emerald)" }, 
        { scale: 1, color: "inherit", duration: 0.35 }
      );
    } else {
      progressFill.style.width = `${pct.toFixed(1)}%`;
    }

    if (pctLabel) {
      pctLabel.textContent = `${pct.toFixed(1)}%`;
    }
  }

  addButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = Number(btn.getAttribute('data-val') || 0);
      currentAmount += val;
      updateWidgetDisplay(true);
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentAmount = baseAmount;
      updateWidgetDisplay(true);
    });
  }
}

/* ==========================================================================
   8. WhatsApp & AI Assistant Live Interactive Hotline Preview
   ========================================================================== */
function initWhatsAppHotlineSimulation() {
  const replyChips = document.querySelectorAll('.quick-reply-btn[data-chat-answer]');
  const chatBubbleText = document.getElementById('widget-chat-text');
  const chatBubbleTime = document.getElementById('widget-chat-time');

  replyChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const answer = chip.getAttribute('data-chat-answer');
      if (chatBubbleText && answer) {
        chatBubbleText.innerHTML = `<strong>Admin:</strong> ${answer}`;
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(chatBubbleText, 
            { autoAlpha: 0, scale: 0.95 }, 
            { autoAlpha: 1, scale: 1, duration: 0.3 }
          );
        }
        if (chatBubbleTime) {
          const now = new Date();
          const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
          chatBubbleTime.textContent = `${timeStr} • Terkirim & Dibaca`;
        }
      }
    });
  });
}

/* ==========================================================================
   9. Transparency Donut Interactive Segment Inspector
   ========================================================================== */
function initTransparencyDonutWidget() {
  const legendItems = document.querySelectorAll('.legend-item[data-pct]');
  const centerPct = document.getElementById('chart-center-pct');
  const centerLabel = document.getElementById('chart-center-label');

  legendItems.forEach((item) => {
    const handleInspect = () => {
      const pct = item.getAttribute('data-pct');
      const label = item.getAttribute('data-label');
      if (centerPct && pct) centerPct.textContent = pct;
      if (centerLabel && label) centerLabel.textContent = label;
      if (typeof gsap !== 'undefined' && centerPct) {
        gsap.fromTo([centerPct, centerLabel], 
          { scale: 1.15, autoAlpha: 0.6 }, 
          { scale: 1, autoAlpha: 1, duration: 0.35, ease: "back.out(2)" }
        );
      }
    };

    item.addEventListener('mouseenter', handleInspect);
    item.addEventListener('click', handleInspect);
  });
}

/* ==========================================================================
   10. Animated Social Impact Counters (GSAP Powered)
   ========================================================================== */
function initImpactCounters() {
  const counterEls = document.querySelectorAll('.counter-animate');
  const replayBtn = document.getElementById('btn-replay-counters');

  function animateCounters() {
    counterEls.forEach((counter) => {
      const target = Number(counter.getAttribute('data-target') || 0);
      const countObj = { val: 0 };
      if (typeof gsap !== 'undefined') {
        gsap.to(countObj, {
          val: target,
          duration: 2.2,
          ease: "power2.out",
          onUpdate: () => {
            counter.textContent = new Intl.NumberFormat('id-ID').format(Math.floor(countObj.val));
          },
          onComplete: () => {
            counter.textContent = new Intl.NumberFormat('id-ID').format(target);
          }
        });
      } else {
        counter.textContent = new Intl.NumberFormat('id-ID').format(target);
      }
    });
  }

  if (typeof ScrollTrigger !== 'undefined' && counterEls.length > 0) {
    ScrollTrigger.create({
      trigger: counterEls[0].closest('.live-widget-box') || counterEls[0],
      start: "top 80%",
      once: true,
      onEnter: animateCounters
    });
  } else if (counterEls.length > 0) {
    animateCounters();
  }

  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      animateCounters();
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(replayBtn, { rotation: 0 }, { rotation: 360, duration: 0.6, ease: "power2.out" });
      }
    });
  }
}

/* ==========================================================================
   11. Feature Library Category Tabs (GSAP Stagger Transition)
   ========================================================================== */
function initFeatureTabs() {
  const tabs = document.querySelectorAll('.filter-tab-btn[data-filter]');
  const cards = document.querySelectorAll('.feature-card[data-cat]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      const visibleCards = [];

      cards.forEach((card) => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          visibleCards.push(card);
        } else {
          card.style.display = 'none';
        }
      });

      if (typeof gsap !== 'undefined' && visibleCards.length > 0) {
        gsap.fromTo(visibleCards, 
          { autoAlpha: 0, y: 20, scale: 0.96 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.05, ease: "power2.out" }
        );
      }
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });
  });
}

/* ==========================================================================
   12. Portfolio Category Filters (GSAP Stagger Transition)
   ========================================================================== */
function initPortfolioFilter() {
  const tabs = document.querySelectorAll('.filter-tab-btn[data-porto-filter]');
  const cards = document.querySelectorAll('.portfolio-card[data-porto-cat]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-porto-filter');
      const visibleCards = [];

      cards.forEach((card) => {
        const cat = card.getAttribute('data-porto-cat');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          visibleCards.push(card);
        } else {
          card.style.display = 'none';
        }
      });

      if (typeof gsap !== 'undefined' && visibleCards.length > 0) {
        gsap.fromTo(visibleCards,
          { autoAlpha: 0, y: 25, scale: 0.95 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.07, ease: "power2.out" }
        );
      }
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });
  });
}

/* ==========================================================================
   13. Interactive Live Preview Simulator Modal (Desktop & Mobile Modes)
   ========================================================================== */
function initLivePreviewSimulator() {
  const modal = document.getElementById('live-preview-modal');
  const iframe = document.getElementById('preview-live-iframe');
  const select = document.getElementById('preview-demo-select');
  const titleEl = document.getElementById('preview-active-title');
  const externalLink = document.getElementById('preview-open-external-btn');
  const closeBtn = document.getElementById('preview-close-modal-btn');
  const btnDesktop = document.getElementById('btn-device-desktop');
  const btnMobile = document.getElementById('btn-device-mobile');
  const themeToggleBtn = document.getElementById('preview-theme-toggle-btn');
  const frameEl = document.getElementById('preview-device-frame');
  const triggerBtns = document.querySelectorAll('.btn-trigger-live-preview');

  if (!modal) return;

  function syncIframeTheme(theme) {
    try {
      if (iframe && iframe.contentDocument && iframe.contentDocument.documentElement) {
        iframe.contentDocument.documentElement.setAttribute('data-theme', theme);
      }
    } catch (e) {
      // Ignore cross-origin access issues if any
    }
  }

  function setPreviewDemo(url, title) {
    if (iframe) {
      iframe.src = url;
    }
    if (titleEl) titleEl.textContent = title || 'Live Preview Demo';
    if (externalLink) externalLink.href = url;
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === url) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  }

  if (iframe) {
    iframe.addEventListener('load', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      syncIframeTheme(currentTheme);
    });
  }

  // Trigger buttons from portfolio cards
  triggerBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.getAttribute('data-demo-url') || 'demo-yayasan.html';
      const title = btn.getAttribute('data-demo-title') || 'Website Demo';
      setPreviewDemo(url, title);
      modal.showModal();

      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      syncIframeTheme(currentTheme);
    });
  });

  // Dropdown demo switch
  if (select) {
    select.addEventListener('change', () => {
      const selectedUrl = select.value;
      const selectedTitle = select.options[select.selectedIndex].text;
      setPreviewDemo(selectedUrl, selectedTitle);
    });
  }

  // Viewport Device Switcher (Desktop 100% vs Mobile 390px phone bezel)
  if (btnDesktop && btnMobile && frameEl) {
    btnDesktop.addEventListener('click', () => {
      btnDesktop.classList.add('active');
      btnMobile.classList.remove('active');
      frameEl.classList.remove('mobile-frame');
      frameEl.classList.add('desktop-frame');
    });

    btnMobile.addEventListener('click', () => {
      btnMobile.classList.add('active');
      btnDesktop.classList.remove('active');
      frameEl.classList.remove('desktop-frame');
      frameEl.classList.add('mobile-frame');
    });
  }

  // Preview Theme Switcher (Dark vs Light mode)
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('rw_org_theme', next);
      syncIframeTheme(next);
    });
  }

  // Close modal
  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.close());
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
}

/* ==========================================================================
   11.5 Quick Case Study Fallback Modal
   ========================================================================== */
function initCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.close());
  }
}

/* ==========================================================================
   14. Interactive FAQ Search & Smooth GSAP Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  const searchInput = document.getElementById('faq-search-input');

  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question-btn');
    const pane = item.querySelector('.faq-answer-pane');

    if (btn && pane) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close other accordion items smoothly
        faqItems.forEach((other) => {
          if (other !== item && other.classList.contains('open')) {
            other.classList.remove('open');
            const otherPane = other.querySelector('.faq-answer-pane');
            if (otherPane && typeof gsap !== 'undefined') {
              gsap.to(otherPane, { height: 0, autoAlpha: 0, duration: 0.3, ease: "power2.in" });
            }
          }
        });

        if (!isOpen) {
          item.classList.add('open');
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(pane, 
              { height: 0, autoAlpha: 0 }, 
              { height: "auto", autoAlpha: 1, duration: 0.35, ease: "power2.out" }
            );
          }
        } else {
          item.classList.remove('open');
          if (typeof gsap !== 'undefined') {
            gsap.to(pane, { height: 0, autoAlpha: 0, duration: 0.25, ease: "power2.in" });
          }
        }

        if (typeof ScrollTrigger !== 'undefined') {
          setTimeout(() => ScrollTrigger.refresh(), 350);
        }
      });
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const matched = [];

      faqItems.forEach((item) => {
        const qText = item.querySelector('.faq-q-text')?.textContent.toLowerCase() || '';
        const aText = item.querySelector('.faq-answer-pane')?.textContent.toLowerCase() || '';
        if (qText.includes(query) || aText.includes(query)) {
          item.style.display = 'block';
          matched.push(item);
        } else {
          item.style.display = 'none';
        }
      });

      if (typeof gsap !== 'undefined' && matched.length > 0) {
        gsap.fromTo(matched, 
          { autoAlpha: 0, y: 12 }, 
          { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.04, ease: "power2.out" }
        );
      }
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });
  }
}

/* ==========================================================================
   15. High-Conversion Lead Capture Form Validation
   ========================================================================== */
function initLeadCaptureForm() {
  const form = document.getElementById('brochure-lead-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const phone = document.getElementById('form-phone')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const org = document.getElementById('form-org')?.value.trim();
    const type = document.getElementById('form-type')?.value;

    let valid = true;

    const setErr = (id, msg) => {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = msg;
        el.style.display = msg ? 'block' : 'none';
      }
      if (msg) valid = false;
    };

    setErr('err-name', !name ? 'Nama lengkap wajib diisi' : '');
    setErr('err-phone', !phone || phone.length < 9 ? 'Nomor WhatsApp tidak valid (min 9 digit)' : '');
    setErr('err-email', !email || !email.includes('@') ? 'Alamat email tidak valid' : '');
    setErr('err-org', !org ? 'Nama organisasi wajib diisi' : '');
    setErr('err-type', !type ? 'Silakan pilih jenis organisasi' : '');

    if (valid) {
      const btn = document.getElementById('btn-submit-brochure');
      if (btn) {
        btn.innerHTML = 'Memproses Permintaan... ⏳';
        btn.disabled = true;
      }

      setTimeout(() => {
        showToast(`Selamat ${name}! Brosur 2026 & Panduan telah terkirim.`);
        form.reset();
        if (btn) {
          btn.innerHTML = 'Unduh Brosur & Dapatkan Konsultasi Gratis →';
          btn.disabled = false;
        }

        const modal = document.getElementById('case-study-modal');
        const modalTitle = document.getElementById('modal-case-title');
        const modalBody = document.getElementById('modal-case-body');

        if (modal && modalTitle && modalBody) {
          modalTitle.textContent = "✅ Dokumen Brosur Berhasil Dikirim!";
          modalBody.innerHTML = `
            <div style="text-align: center; padding: 20px 0;">
              <div style="font-size: 3rem; margin-bottom: 12px;">📁🎉</div>
              <h3 style="color: var(--accent-emerald); margin-bottom: 8px;">Terima Kasih Atas Minat Anda!</h3>
              <p>Buku Panduan <strong>Standar Digitalisasi Organisasi & NGO 2026</strong> dan rincian paket telah dialokasikan untuk <strong>${org}</strong>.</p>
              <br>
              <p style="font-size: 0.88rem; color: var(--text-muted);">Tim konsultan arsitektur kami akan segera menghubungi nomor WhatsApp <strong>${phone}</strong> untuk sesi diskusi gratis.</p>
            </div>
          `;
          modal.showModal();
        }
      }, 1000);
    }
  });

  const planButtons = document.querySelectorAll('.btn-select-plan');
  planButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const plan = btn.getAttribute('data-plan');
      const notes = document.getElementById('form-notes');
      if (notes) {
        notes.value = `Saya berminat dengan paket: ${plan}. Mohon informasi detail implementasi.`;
      }
    });
  });
}

/* ==========================================================================
   16. Pricing Switcher (Annual vs Regular with GSAP Animation)
   ========================================================================== */
function initPricingSwitcher() {
  const btnAnnual = document.getElementById('billing-annual');
  const btnMonthly = document.getElementById('billing-monthly');

  const p1 = document.getElementById('price-val-1');
  const p2 = document.getElementById('price-val-2');
  const p3 = document.getElementById('price-val-3');

  function updatePrices(annual) {
    if (annual) {
      if (p1) p1.textContent = '1.950.000';
      if (p2) p2.textContent = '3.850.000';
      if (p3) p3.textContent = '7.500.000';
    } else {
      if (p1) p1.textContent = '2.600.000';
      if (p2) p2.textContent = '5.100.000';
      if (p3) p3.textContent = '9.900.000';
    }

    if (typeof gsap !== 'undefined') {
      gsap.fromTo([p1, p2, p3], 
        { autoAlpha: 0, y: -12, scale: 0.94 }, 
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.06, ease: "back.out(1.5)" }
      );
    }
  }

  if (btnAnnual && btnMonthly) {
    btnAnnual.addEventListener('click', () => {
      btnAnnual.classList.add('active');
      btnMonthly.classList.remove('active');
      updatePrices(true);
    });

    btnMonthly.addEventListener('click', () => {
      btnMonthly.classList.add('active');
      btnAnnual.classList.remove('active');
      updatePrices(false);
    });
  }
}

/* ==========================================================================
   17. Automatic Testimonial Swiper / Carousel Engine (GSAP Transition)
   ========================================================================== */
function initTestimonialAutoSlider() {
  const slider = document.getElementById('testimonial-slider');
  const slides = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot-btn[data-dot]');
  const prevBtn = document.getElementById('testi-prev');
  const nextBtn = document.getElementById('testi-next');
  const container = document.querySelector('.testimonial-carousel-container');

  if (!slides || slides.length === 0) return;

  let currentIdx = 0;
  const totalSlides = slides.length;
  let autoPlayTimer = null;
  const slideInterval = 4800;

  function showSlide(index) {
    const prevIdx = currentIdx;
    currentIdx = (index + totalSlides) % totalSlides;

    slides.forEach((slide, idx) => {
      const isActive = idx === currentIdx;
      slide.classList.toggle('active', isActive);

      if (isActive && typeof gsap !== 'undefined') {
        gsap.fromTo(slide, 
          { autoAlpha: 0, x: currentIdx > prevIdx ? 30 : -30 }, 
          { autoAlpha: 1, x: 0, duration: 0.55, ease: "power2.out" }
        );
      }
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIdx);
    });
  }

  function nextSlide() {
    showSlide(currentIdx + 1);
  }

  function prevSlide() {
    showSlide(currentIdx - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(nextSlide, slideInterval);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  // Next & Prev Controls
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoPlay();
    });
  }

  // Dots Navigation
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const dotIdx = parseInt(dot.getAttribute('data-dot'), 10);
      showSlide(dotIdx);
      startAutoPlay();
    });
  });

  // Pause on hover
  if (container) {
    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);

    // Touch Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 40) {
        nextSlide();
      } else if (touchEndX > touchStartX + 40) {
        prevSlide();
      }
      startAutoPlay();
    }, { passive: true });
  }

  // Start autoplay immediately
  startAutoPlay();
}

/* ==========================================================================
   16. Full Responsive Navbar & Mobile Drawer Engine (ScrollSpy Sync)
   ========================================================================== */
function initNavbar() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const closeBtn = document.getElementById('drawer-close-btn');
  const solusiToggle = document.getElementById('drawer-solusi-toggle');
  const expandable = document.querySelector('.drawer-expandable');

  const openDrawer = () => {
    if (drawer) drawer.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    if (toggleBtn) {
      toggleBtn.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (drawer) drawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    if (toggleBtn) {
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer && drawer.classList.contains('active');
      if (isOpen) closeDrawer();
      else openDrawer();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  if (solusiToggle && expandable) {
    solusiToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      expandable.classList.toggle('expanded');
    });
  }

  // Close drawer on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Close drawer when any link is clicked inside drawer
  const drawerLinks = document.querySelectorAll('.mobile-nav-drawer a');
  drawerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Comprehensive Desktop, Drawer, and Bottom Dock ScrollSpy Sync
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const drawerNavLinks = document.querySelectorAll('.drawer-nav-link');
  const dockItems = document.querySelectorAll('.mobile-bottom-dock .dock-item');

  const header = document.querySelector('.site-header');

  const trackedSections = [
    { id: 'hero', navKey: 'hero', dockId: 'dock-hero' },
    { id: 'solusi', navKey: 'solusi' },
    { id: 'pilar', navKey: 'pilar' },
    { id: 'fitur', navKey: 'fitur' },
    { id: 'widgets', navKey: 'widgets', dockId: 'dock-widgets' },
    { id: 'portofolio', navKey: 'portofolio' },
    { id: 'alur', navKey: 'alur' },
    { id: 'harga', navKey: 'harga', dockId: 'dock-harga' },
    { id: 'download-brosur', navKey: 'brosur', dockId: 'dock-brosur' },
    { id: 'faq', navKey: 'faq' }
  ];

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Toggle frosted glass on scroll, blend with background at top
    if (header) {
      if (scrollY > 25) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    let currentNavKey = 'hero';
    let currentDockId = 'dock-hero';

    trackedSections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) {
        const top = el.offsetTop - 140;
        const height = el.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentNavKey = sec.navKey;
          if (sec.dockId) currentDockId = sec.dockId;
        }
      }
    });

    desktopLinks.forEach((link) => {
      const navTarget = link.getAttribute('data-nav');
      link.classList.toggle('active', navTarget === currentNavKey);
    });

    drawerNavLinks.forEach((link) => {
      const navTarget = link.getAttribute('data-nav');
      link.classList.toggle('active', navTarget === currentNavKey);
    });

    dockItems.forEach((item) => {
      item.classList.toggle('active', item.id === currentDockId);
    });
  }, { passive: true });
}

function initMobileBottomDock() {
  const dockItems = document.querySelectorAll('.mobile-bottom-dock .dock-item');
  dockItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.add('dock-pressed');
      setTimeout(() => item.classList.remove('dock-pressed'), 200);

      const ripple = document.createElement('span');
      ripple.className = 'dock-ripple';
      item.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    });
  });
}

/* ==========================================================================
   17. Newsletter Form
   ========================================================================== */
function initNewsletterForm() {
  const newsForm = document.getElementById('newsletter-form');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      newsForm.reset();
    });
  }
}

/* ==========================================================================
   18. Floating WhatsApp Action
   ========================================================================== */
function initFloatingWhatsApp() {
  const waBtn = document.getElementById('wa-floating-btn');
  const waDemoBtn = document.getElementById('btn-trigger-wa-demo');

  const waAction = () => {
    const text = encodeURIComponent('Halo Organiz.Hub, saya ingin konsultasi mengenai pembuatan website Yayasan / Komunitas / NGO kami.');
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  if (waBtn) waBtn.addEventListener('click', waAction);
  if (waDemoBtn) waDemoBtn.addEventListener('click', waAction);
}

/* ==========================================================================
   19. Scroll To Top Action (Stacked Above WhatsApp)
   ========================================================================== */
function initScrollToTop() {
  const scrollBtn = document.getElementById('scroll-to-top-btn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 280) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   Toast Notification Helper (Silenced for clicks)
   ========================================================================== */
function showToast(message) {
  // Silent execution to avoid annoying UI popups on ordinary clicks
}
