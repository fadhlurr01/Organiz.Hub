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
   TRANSLATION DICTIONARY (INDONESIAN, ENGLISH & MANDARIN CHINESE)
   ========================================================================== */
const I18N = {
  id: {
    // Navigation 4 Menus
    nav_solusi: "Solusi",
    nav_products: "Produk & Fitur",
    nav_info: "Informasi",
    nav_contact: "Kontak",
    nav_cta: "Konsultasi Gratis",
    
    // Dropdown Items
    dd_sol_yayasan_title: "Yayasan Sosial & Pendidikan",
    dd_sol_yayasan_sub: "Panti asuhan, beasiswa, donasi QRIS & kas publik",
    dd_sol_komunitas_title: "Komunitas & Asosiasi",
    dd_sol_komunitas_sub: "Keanggotaan, database relawan, event & E-KTA",
    dd_sol_ngo_title: "NGO & Filantropi",
    dd_sol_ngo_sub: "Advokasi, multi-bahasa, grant & audit WTP",
    
    dd_prod_tpl_title: "14 Template Live Cloud ↗",
    dd_prod_tpl_sub: "Koleksi template cloud live siap pakai untuk Yayasan, Komunitas & NGO",
    dd_prod_pilar_title: "4 Pilar Arsitektur",
    dd_prod_pilar_sub: "Branding, Fundraising, Transparansi, Relawan",
    dd_prod_pkg_title: "Pilihan 6 Paket Website",
    dd_prod_pkg_sub: "Dari Campaign Landing Page hingga Enterprise",
    dd_prod_feat_title: "Feature Library Modular",
    dd_prod_feat_sub: "Kumpulan modul spesifik operasional nirlaba",
    dd_prod_tools_title: "Organization Smart Tools",
    dd_prod_tools_sub: "Widget kalkulator zakat, meter donasi & E-KTA",
    dd_prod_addon_title: "Layanan Tambahan (Add-Ons)",
    dd_prod_addon_sub: "WhatsApp API, Ads Tracking & Video Profil",

    dd_info_why_title: "Mengapa Organiz.Hub?",
    dd_info_why_sub: "Spesialisasi regulasi & psikologi donatur",
    dd_info_road_title: "Roadmap Pertumbuhan",
    dd_info_road_sub: "Tahapan digitalisasi bertahap nirlaba",
    dd_info_team_title: "Tim Konsultan Digital",
    dd_info_team_sub: "Principal architect & nonprofit strategists",
    dd_info_testi_title: "Dipercaya di Seluruh Indonesia",
    dd_info_testi_sub: "Testimoni nyata dari ketua yayasan & NGO",
    dd_info_brochure_title: "Download Brosur 2026",
    dd_info_brochure_sub: "Panduan lengkap PDF & rincian biaya paket",
    dd_info_faq_title: "FAQ (Tanya Jawab)",
    dd_info_faq_sub: "Jawaban seputar teknis, rekening & hosting",

    dd_contact_wa_title: "Konsultasi WhatsApp Langsung",
    dd_contact_wa_sub: "Diskusi kebutuhan & estimasi biaya (Respon < 15 Menit)",
    dd_contact_zoom_title: "Jadwal Diskusi Zoom Virtual",
    dd_contact_zoom_sub: "Presentasi demo live untuk jajaran pengurus & pembina",
    dd_contact_prop_title: "Permintaan Proposal & RAB",
    dd_contact_prop_sub: "Pengajuan dokumen penawaran resmi untuk rapat yayasan",
    
    // Hero Section
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
    // Navigation 4 Menus
    nav_solusi: "Solutions",
    nav_products: "Products & Features",
    nav_info: "Information",
    nav_contact: "Contact",
    nav_cta: "Free Consultation",
    
    // Dropdown Items
    dd_sol_yayasan_title: "Social & Education Foundations",
    dd_sol_yayasan_sub: "Orphanages, scholarships, QRIS donations & ledger",
    dd_sol_komunitas_title: "Communities & Associations",
    dd_sol_komunitas_sub: "Membership, volunteer database, events & E-Cards",
    dd_sol_ngo_title: "NGOs & Philanthropy",
    dd_sol_ngo_sub: "Advocacy, multilingual, grants & audit reports",
    
    dd_prod_tpl_title: "14 Live Cloud Templates ↗",
    dd_prod_tpl_sub: "Ready-to-deploy cloud templates for Foundations & NGOs",
    dd_prod_pilar_title: "4 Architecture Pillars",
    dd_prod_pilar_sub: "Branding, Fundraising, Transparency, Volunteers",
    dd_prod_pkg_title: "6 Investment Packages",
    dd_prod_pkg_sub: "From Campaign Landing Pages to Full Enterprise",
    dd_prod_feat_title: "Modular Feature Library",
    dd_prod_feat_sub: "Suite of specialized nonprofit operating modules",
    dd_prod_tools_title: "Organization Smart Tools",
    dd_prod_tools_sub: "Zakat calculator, donation meters & QR E-Cards",
    dd_prod_addon_title: "Additional Add-Ons",
    dd_prod_addon_sub: "WhatsApp API, Ads Tracking & Profile Video",

    dd_info_why_title: "Why Organiz.Hub?",
    dd_info_why_sub: "Deep compliance & donor psychology specialization",
    dd_info_road_title: "Growth Roadmap",
    dd_info_road_sub: "Stepwise digital maturity framework",
    dd_info_team_title: "Digital Consulting Team",
    dd_info_team_sub: "Principal architects & nonprofit strategists",
    dd_info_testi_title: "Trusted Across the Nation",
    dd_info_testi_sub: "Authentic reviews from foundation and NGO leaders",
    dd_info_brochure_title: "Download 2026 Brochure",
    dd_info_brochure_sub: "Complete PDF blueprint and package pricing",
    dd_info_faq_title: "FAQ & Help Center",
    dd_info_faq_sub: "Clear answers on technical, hosting, and banking setup",

    dd_contact_wa_title: "Direct WhatsApp Consultation",
    dd_contact_wa_sub: "Discuss scope & cost estimation (Response < 15 Mins)",
    dd_contact_zoom_title: "Virtual Zoom Demo Session",
    dd_contact_zoom_sub: "Live architecture walkthrough for board of trustees",
    dd_contact_prop_title: "Official Proposal & Budget Request",
    dd_contact_prop_sub: "Formal procurement document for committee meetings",
    
    // Hero Section
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
  },
  zh: {
    // Navigation 4 Menus
    nav_solusi: "解决方案",
    nav_products: "产品与功能",
    nav_info: "关于我们",
    nav_contact: "联系咨询",
    nav_cta: "免费咨询",
    
    // Dropdown Items
    dd_sol_yayasan_title: "社会与教育基金会",
    dd_sol_yayasan_sub: "孤儿院、助学金、QRIS在线捐款及公开财务账目",
    dd_sol_komunitas_title: "公益社团与行业协会",
    dd_sol_komunitas_sub: "会员管理、志愿者数据库、活动日历与电子会员卡",
    dd_sol_ngo_title: "非政府组织与慈善机构",
    dd_sol_ngo_sub: "社会倡导、多语言支持、国际赠款与WTP审计报告",
    
    dd_prod_tpl_title: "14套在线云模板 ↗",
    dd_prod_tpl_sub: "专为基金会与公益组织量身打造的即用型云端模板",
    dd_prod_pilar_title: "四大数字架构支柱",
    dd_prod_pilar_sub: "品牌信誉、筹款募捐、财务透明、志愿者自动化",
    dd_prod_pkg_title: "六大建站套餐选择",
    dd_prod_pkg_sub: "从单页募捐着陆页到大型企业级非营利平台",
    dd_prod_feat_title: "模块化功能库",
    dd_prod_feat_sub: "专为非营利组织运营设计的全套功能模块",
    dd_prod_tools_title: "组织智能小工具",
    dd_prod_tools_sub: "天课计算器、实时捐赠进度条与二维码电子卡",
    dd_prod_addon_title: "增值扩展服务",
    dd_prod_addon_sub: "WhatsApp官方API、广告归因与机构宣传视频",

    dd_info_why_title: "为什么选择 Organiz.Hub？",
    dd_info_why_sub: "深谙非营利法规、合规流程与捐助者信任心理",
    dd_info_road_title: "数字化成长路线图",
    dd_info_road_sub: "四阶段稳健数字化赋能体系",
    dd_info_team_title: "数字化咨询专家团队",
    dd_info_team_sub: "首席系统架构师与非营利战略专家",
    dd_info_testi_title: "印尼全国机构信赖之选",
    dd_info_testi_sub: "来自各地基金会主席与NGO负责人的真实好评",
    dd_info_brochure_title: "下载2026年机构手册",
    dd_info_brochure_sub: "获取完整的PDF架构指南与详细费用明细",
    dd_info_faq_title: "常见问题解答 (FAQ)",
    dd_info_faq_sub: "关于技术搭建、独立账户与云端托管的详尽解答",

    dd_contact_wa_title: "WhatsApp 实时在线咨询",
    dd_contact_wa_sub: "探讨需求与费用估算（15分钟内极速响应）",
    dd_contact_zoom_title: "预约 Zoom 远程演示会议",
    dd_contact_zoom_sub: "为理事会与管理团队提供现场系统演示",
    dd_contact_prop_title: "申请官方方案书与预算报价",
    dd_contact_prop_sub: "获取符合基金会会议标准的正式采购提案",
    
    // Hero Section
    hero_spesialis: "自2018年起专注基金会、社团与NGO的数字化专家",
    hero_title_1: "专业数字形象与网站架构",
    hero_title_2: "专为公益组织打造",
    hero_desc: "我们帮助社会基金会、公益社团及非政府组织建立专业可信的数字阵地——涵盖品牌信任、QRIS在线筹款、透明财务看板及志愿者协同管理，尽在一体化云端平台。",
    hero_btn_pricing: "查看建站套餐与报价",
    hero_btn_consult: "立即免费咨询",
    hero_btn_templates: "14套云模板预览 ↗",
    scroll_explore: "向下滑动探索完整数字化架构",

    // Solusi
    sol_tag: "细分领域定制架构",
    sol_title: "满足各类非营利组织的专属解决方案",
    sol_sub: "我们深刻理解基金会、社团和NGO在工作流、受众及法律合规方面的差异。为您的组织找到最契合的系统架构。",

    // 4 Pilar
    pilar_tag: "四大数字化核心支柱",
    pilar_title: "为非营利组织打造卓越的专业数字形象",
    pilar_sub: "我们不仅是建站，更是通过四大相互协同的支柱——品牌塑造、筹款系统、透明公开与志愿者自动化，构筑数字基建。",

    // Templates
    tpl_tag: "14套已部署云端模板",
    tpl_title: "现代非营利组织网站模板精选",
    tpl_sub: "点击“在线预览”按钮，即可直接在真实云环境中测试体验已部署的模板系统。",
    tpl_filter_all: "全部模板 (14)",
    tpl_filter_yayasan: "公益基金会 (5)",
    tpl_filter_komunitas: "社团与行动 (5)",
    tpl_filter_ngo: "非政府组织 (4)",

    // Pricing
    pkg_tag: "精选投资套餐",
    pkg_title: "选择最适合您组织的建站套餐",
    pkg_sub: "最具性价比的数字化投资，助力扩大社会影响力、赢得捐助者信任并实现数字自主。",

    // Workflow
    workflow_tag: "数字化实施路径",
    workflow_title: "您的组织数字化成长全流程",
    workflow_sub: "严谨的分阶段架构——从初始合规搭建到全国乃至全球级公信力机构。",
    wf_step1_badge: "第一阶段 • 基石与合规",
    wf_step1_time: "第1周",
    wf_step1_title: "法定资质与公信力形象",
    wf_step1_desc: "开通官方.or.id/.org域名，整合司法部注册批文，公开管理层架构与项目档案，确立初期公信力。",
    wf_deliv1: "官方 .or.id / .org 顶级域名",
    wf_deliv2: "256位高强度SSL安全证书",
    wf_deliv3: "官方法人资质与批文集成",
    
    wf_step2_badge: "第二阶段 • 自主筹款",
    wf_step2_time: "第2周",
    wf_step2_title: "启用QRIS即时捐款与支付网关",
    wf_step2_desc: "部署全电子钱包动态QRIS和多银行虚拟账户捐款通道。款项100%直接进入基金会账户，0%中介抽成。",
    wf_deliv4: "支持全部电子钱包的动态QRIS",
    wf_deliv5: "带防伪条码的自动PDF电子收据",
    wf_deliv6: "智能天课与善款计算器",
    
    wf_step3_badge: "第三阶段 • 公开透明",
    wf_step3_time: "第3周",
    wf_step3_title: "实时财务账目与WTP无保留审计",
    wf_step3_desc: "向公众如实公开资金流水与支出明细看板，并提供注册会计师审计报告下载专区，吸引大型机构资助。",
    wf_deliv7: "实时资金流向与支出动态图表",
    wf_deliv8: "WTP无保留意见审计报告下载中心",
    wf_deliv9: "善款发放图文与签收凭证档案",
    
    wf_step4_badge: "第四阶段 • 全国与全球拓展",
    wf_step4_time: "第4周+",
    wf_step4_title: "志愿者协同自动化与国际合作",
    wf_step4_desc: "支持34省志愿者在线招募与二维码电子卡生成，配备统一活动日历及双语网站，助力申请国际公益基金赠款。",
    wf_deliv10: "志愿者花名册与二维码电子证件生成器",
    wf_deliv11: "印尼语、英语与中文多语言平台",
    wf_deliv12: "国际赠款申请门户与专用对接通道",

    // Why Us
    why_tag: "深厚行业洞察",
    why_title: "为什么选择 Organiz.Hub？",
    why_sub: "绝非普通外包公司。我们深刻理解非营利组织运营规律、政策监管以及捐款人的心理预期。",

    // Features
    feat_tag: "模块化架构体系",
    feat_title: "专为组织打造的功能模块库",
    feat_sub: "为基金会、社团与NGO量身定制的模块化功能组件，支持自由组合与平滑升级。",

    // Testimonials
    testi_tag: "客户口碑见证",
    testi_title: "深受印尼各地非营利组织负责人的信赖",
    testi_sub: "从地方孤儿福利基金会到全国性非政府组织——他们均选择 Organiz.Hub 构筑数字化基石。",

    // FAQ
    faq_tag: "常见问题解答",
    faq_title: "关于建站的常见疑问 (FAQ)",
    faq_sub: "为您梳理在 Organiz.Hub 搭建组织官方网站所需了解的一切关键细节。",

    // CTA
    cta_title: "准备好打造专业且值得信赖的官方网站了吗？",
    cta_desc: "为您的基金会、社团或NGO获取量身定制的架构方案与最佳套餐。免费、热情且毫无负担的专业咨询。",
    cta_btn: "通过 WhatsApp 立即联络数字化顾问团队"
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
   2. Full Multilingual Engine (ID / EN / ZH)
   ========================================================================== */
function initLanguageManager() {
  const btnId = document.getElementById('btn-lang-id');
  const btnEn = document.getElementById('btn-lang-en');
  const btnZh = document.getElementById('btn-lang-zh');

  // Complete section datasets for all 14 templates, 6 packages, roadmap, widgets, add-ons, testimonials, and FAQ
  const EXTENDED_I18N = {
    templates: {
      id: [
        { badge: "NGO & Konservasi", desc: "Desain alam modern dengan visual biodiversity tajam, modul perlindungan satwa langka & kampanye habitat." },
        { badge: "Yayasan & Filantropi", desc: "Portal kemanusiaan anak asuh, kampanye beasiswa, dan laporan kas donasi terintegrasi." },
        { badge: "NGO & Medis", desc: "Arsitektur nirlaba medis, klinik darurat, dan koordinasi tenaga medis sukarela di daerah pelosok." },
        { badge: "NGO Lingkungan", desc: "Portal advokasi hutan tropis, adopsi pohon, dan perlindungan ekosistem hutan nusantara." },
        { badge: "Yayasan Riset", desc: "Portal publikasi riset sosial, pengajuan grant inovasi, dan transparansi dana filantropi." },
        { badge: "NGO Hukum", desc: "Platform advokasi hukum, pendampingan korban, dan kertas kebijakan nirlaba berstandar internasional." },
        { badge: "NGO Iklim", desc: "Aksi darurat iklim, edukasi transisi energi hijau, dan petisi online masyarakat terorganisir." },
        { badge: "Komunitas Medis", desc: "Portal koordinasi tanggap bencana darurat, logistik obat-obatan, dan pemetaan posko lapangan." },
        { badge: "Yayasan Yatim", desc: "Sistem santunan anak yatim terprogram, laporan beasiswa berkala, dan interaksi orang tua asuh." },
        { badge: "Komunitas Pemuda", desc: "Platform kolaborasi gerakan pemuda, direktori anggota daerah, dan ruang pamer karya sosial." },
        { badge: "Yayasan Global", desc: "Template nirlaba berbasis tujuan pembangunan berkelanjutan (SDGs) dengan metriks dampak interaktif." },
        { badge: "Filantropi & Grants", desc: "Portal manajemen hibah dana sosial, seleksi proposal nirlaba, dan tracking pencairan dana bertahap." },
        { badge: "NGO Konservasi", desc: "Portal advokasi keanekaragaman hayati gunung, ekspedisi alam liar, dan pusat edukasi ekosistem." },
        { badge: "Komunitas Digital", desc: "Jaringan kolaborasi inovator sosial, lokakarya nirlaba terbuka, dan inkubasi gerakan masa depan." }
      ],
      en: [
        { badge: "NGO & Conservation", desc: "Modern nature design with sharp biodiversity visuals, endangered species protection & habitat campaigns." },
        { badge: "Foundations & Philanthropy", desc: "Humanitarian foster child portal, scholarship campaigns, and integrated donation ledger." },
        { badge: "Medical NGO", desc: "Nonprofit health architecture, emergency clinic response, and rural medical volunteer coordination." },
        { badge: "Environmental NGO", desc: "Rainforest advocacy platform, tree adoption program, and rainforest ecosystem preservation." },
        { badge: "Research Foundation", desc: "Social research publication hub, innovation grant applications, and philanthropic transparency." },
        { badge: "Legal Rights NGO", desc: "Legal advocacy platform, victim assistance desk, and international standard non-profit policy papers." },
        { badge: "Climate Action NGO", desc: "Planetary climate emergency, green energy transition education, and organized online civic petitions." },
        { badge: "Emergency Medical Aid", desc: "Disaster emergency response coordination, medicine logistics tracking, and field post mapping." },
        { badge: "Orphan Welfare Foundation", desc: "Programmed orphan care system, periodic scholarship reporting, and foster parent engagement." },
        { badge: "Youth Community", desc: "Youth movement collaboration platform, regional member directory, and social work showcase." },
        { badge: "Global SDGs Foundation", desc: "Sustainable Development Goals (SDGs) non-profit platform with interactive real-time impact metrics." },
        { badge: "Philanthropy & Grants", desc: "Social grant lifecycle management, nonprofit proposal reviews, and milestone payout tracking." },
        { badge: "Wildlife & Alpine NGO", desc: "Alpine biodiversity preservation, wilderness field expeditions, and ecological conservation center." },
        { badge: "Digital Nonprofit Network", desc: "Social innovator collaboration network, open nonprofit workshops, and future impact incubation." }
      ],
      zh: [
        { badge: "非政府组织与自然保护", desc: "现代生态自然风格设计，具备物种多样性视觉呈现、珍稀物种守护与栖息地筹款模块。" },
        { badge: "慈善基金与人道主义", desc: "受助孤儿关怀中心、助学金项目矩阵及全自动资金流水公示平台。" },
        { badge: "医疗援助与卫生倡导", desc: "医疗类非营利专属架构、应急流动诊所调度及偏远山区志愿医护协同系统。" },
        { badge: "热带雨林保护组织", desc: "雨林生态倡导门户、爱心认养树木及国家级原始森林生态系统保护行动。" },
        { badge: "社会发展与科研基金", desc: "社会科学研究成果发布、创新公益赠款申报通道及慈善基金透明公示平台。" },
        { badge: "人权倡导与法律援助", desc: "法律援助中心、受害者紧急救助及符合国际非营利标准的政策研究智库。" },
        { badge: "气候危机应对组织", desc: "全球气候紧急行动、绿色能源转型科普以及有组织的大众在线环保联署平台。" },
        { badge: "应急医疗志愿网络", desc: "重大灾害应急响应指挥调度、急救药品物资调拨及一线救援网格地图。" },
        { badge: "孤儿福利与助学基金", desc: "体系化孤儿救助体系、定期学业进展汇报及资助人线上互动家园。" },
        { badge: "青年行动与社区协同", desc: "青年公益社团协同平台、全国分会花名册及社会创新成果展示空间。" },
        { badge: "全球可持续发展基金", desc: "深度践行联合国可持续发展目标 (SDGs) 的国际非营利平台与动态影响力指标。" },
        { badge: "先锋慈善与国际赠款", desc: "公益创投基金管理中心、机构资助申请评审及分阶段资金拨付全流程追踪。" },
        { badge: "高山生态与自然信托", desc: "山地生物多样性保护平台、荒野科研科考纪实及生态环境保护科普基地。" },
        { badge: "数字社会创新联盟", desc: "跨界社会创新者协同网络、开放式非营利工作坊及未来影响力孵化生态。" }
      ]
    },
    pricing_features: {
      id: {
        ribbon: "PALING BANYAK DIPILIH",
        btn_order: "Pilih Paket Ini →",
        btn_consult: "Konsultasikan Paket Ini",
        p1: ["1 Halaman Responsif Ultra Cepat", "Integrasi Donasi QRIS Otomatis", "Live Donation Progress Meter", "WhatsApp Direct Hotline & Notifikasi", "Free Domain & SSL 1 Tahun"],
        p2: ["5-7 Halaman Informasi Lembaga", "Publikasi Legalitas Kemenkumham", "Galeri Kegiatan & Berita Terbitan", "Form Kontak & Formulir Relawan", "SEO Dasar & Google Maps Lokasi"],
        p3: ["Multi-Kampanye Donasi Tanpa Batas", "Payment Gateway QRIS, E-Wallet & VA", "Kalkulator Zakat Maal & Profesi", "Generate Kwitansi PDF Otomatis", "Dashboard Rekap Data Donatur"],
        p4: ["Seluruh Fitur Paket 1, 2, dan 3", "Laporan Transparansi Kas Terbuka (WTP)", "Multi-Bahasa Dwibahasa (ID / EN / ZH)", "Direktori Relawan & Generator E-KTA", "Unduhan PDF Laporan Tahunan & Riset"],
        p5: ["Database Relawan Terverifikasi", "Generator E-KTA Ber-QR Code Unik", "Kalender Aksi & Ticketing Event", "E-Sertifikat Partisipasi Aksi Otomatis", "Sistem Penugasan Posko Lapangan"],
        p6: ["Arsitektur Multi-Cabang / Daerah", "Modul Advokasi Kebijakan & Petisi", "Portal Hibah Dana (Grant Application)", "Enkripsi Data Tertinggi & SLA Support", "Integrasi Custom Database & CRM"]
      },
      en: {
        ribbon: "MOST POPULAR CHOICE",
        btn_order: "Choose This Package →",
        btn_consult: "Consult This Package",
        p1: ["1 Ultra-Fast Responsive Page", "Automated QRIS Donation Integration", "Live Donation Progress Meter", "Direct WhatsApp Hotline & Alert", "Free Domain & 256-Bit SSL 1 Year"],
        p2: ["5-7 Official Organization Pages", "Ministry of Law Entity Publication", "Program Gallery & Press Releases", "Contact & Volunteer Intake Forms", "Nonprofit Google SEO & Maps Setup"],
        p3: ["Unlimited Multi-Campaign Fundraising", "QRIS, E-Wallet & VA Payment Gateway", "Automated Nisab Zakat Calculator", "Auto-Generated Barcoded PDF Receipts", "Dedicated Donor CRM Dashboard"],
        p4: ["All Features in Tier 1, 2, and 3", "Real-Time Public Ledger (WTP Audit)", "Full Multilingual Engine (ID / EN / ZH)", "Volunteer Directory & QR E-ID Cards", "Annual Reports & Grant PDF Center"],
        p5: ["Verified Volunteer Master Database", "Unique QR Code E-ID Card Generator", "Action Mission Calendar & Ticketing", "Automated Verified Action E-Certificates", "Disaster Field Post Assignment Engine"],
        p6: ["Multi-Branch Regional Architecture", "Policy Advocacy & Civic Petitions", "Grant Proposal Application Portal", "Highest Grade Encryption & SLA Support", "Custom External Database & CRM API"]
      },
      zh: {
        ribbon: "最受机构青睐方案",
        btn_order: "选择此方案 →",
        btn_consult: "咨询此定制方案",
        p1: ["1页极速响应式着陆页", "自动集成全渠道QRIS捐赠通道", "实时筹款进度条动态看板", "WhatsApp官方直通客服与通知", "赠送1年官方域名与高强度SSL"],
        p2: ["5-7页完整机构官方页面", "司法部批文与民政资质公示", "公益动态与实地项目图文纪实", "联络沟通与志愿者报名表单", "Google非营利SEO与地图定位标注"],
        p3: ["无上限发起多项目筹款矩阵", "全电子钱包与银行虚拟账户网关", "智能黄金起征天课与善款计算器", "捐款成功自动生成防伪PDF电子凭条", "捐赠人名册与CRM沉淀看板"],
        p4: ["包含套餐1、2、3的全部功能", "实时财务收支与WTP无保留审计看板", "印尼语/英语/中文全站多语言引擎", "全国志愿者花名册与二维码电子证", "年度审计公报与研究资助PDF专区"],
        p5: ["实名认证全国志愿者数据库", "唯一防伪二维码电子会员卡生成器", "公益救援行动日历与活动报名", "服务圆满完成自动批量发放电子证书", "灾区一线救援网格化任务派发系统"],
        p6: ["支持全国多分会与区域分站架构", "公共政策倡导与在线公民倡议联署", "国际公益基金赠款申请与评审门户", "最高等级数据加密与SLA全天候运维", "支持对接机构私有数据库与ERP/CRM"]
      }
    },
    faq: {
      id: [
        { q: "Berapa lama proses pembuatan website organisasi hingga siap online?", a: "Untuk paket Campaign Landing Page dan Organization Profile rata-rata selesai dalam 3-5 hari kerja. Untuk paket Growth Platform atau Enterprise rata-rata membutuhkan waktu 7-14 hari kerja termasuk integrasi payment gateway QRIS." },
        { q: "Apakah dana donasi dipotong oleh pihak Organiz.Hub?", a: "Sama sekali tidak. Kami tidak memotong donasi sepeser pun (0% fee potongan). Seluruh dana dari donatur masuk 100% langsung ke rekening bank atau akun payment gateway resmi atas nama organisasi Anda." },
        { q: "Bagaimana jika pengurus yayasan kami belum paham mengelola website?", a: "Tim kami menyediakan sesi training panduan khusus via Zoom / Google Meet serta video tutorial langkah demi langkah. Dashboard admin kami rancang sangat ramah pemula tanpa perlu keahlian coding sama sekali." },
        { q: "Apakah website sudah termasuk domain resmi .or.id atau .org?", a: "Ya, seluruh paket kami sudah termasuk domain resmi (.or.id, .org, atau .id) beserta sertifikat keamanan SSL dan hosting cloud berkecepatan tinggi selama 1 tahun penuh." }
      ],
      en: [
        { q: "How long does it take to launch the organization website?", a: "Campaign Landing Page and Organization Profile packages typically take 3-5 business days. Growth Platform and Enterprise packages take 7-14 business days including live QRIS payment gateway configuration." },
        { q: "Does Organiz.Hub take any percentage cut from donations?", a: "Absolutely not. We take 0% intermediary fee. 100% of all donor contributions flow directly into your organization's official bank account or verified merchant gateway." },
        { q: "What if our management team has no technical web skills?", a: "We provide dedicated live onboarding sessions via Zoom/Google Meet plus structured video walkthroughs. Our administrative dashboard is intuitive and 100% code-free." },
        { q: "Does the package include official .or.id or .org domains?", a: "Yes, all our packages include official domain registration (.or.id, .org, or .id), 256-bit SSL encryption, and premium high-speed cloud hosting for 1 full year." }
      ],
      zh: [
        { q: "搭建上线一套组织官方网站通常需要多长时间？", a: "单页筹款着陆页与机构形象官网套餐通常在3-5个工作日内交付上线。全功能增长平台及大型企业级方案通常需要7-14个工作日（包含动态QRIS支付网关接入与合规资质审核）。" },
        { q: "Organiz.Hub 是否会从我们筹集的善款中扣除手续费？", a: "绝不抽成。我们实行0%中介分成政策。爱心人士捐赠的每一分善款100%直接进入以您机构名义开立的正规银行账户或持牌支付通道。" },
        { q: "如果我们的理事会或工作人员没有技术背景该如何管理？", a: "我们将通过 Zoom 安排专属远程辅导并提供详细的操作视频手册。管理后台专为非技术人员量身研发，发布新闻、更新账目均无需编写任何代码。" },
        { q: "套餐费用中是否已包含官方 .or.id 或 .org 顶级域名？", a: "是的，所有套餐均已包含1年正规组织顶级域名（.or.id、.org 或 .id）、全球信任的256位SSL安全加密证书以及企业级高速云端托管服务。" }
      ]
    }
  };

  function applyLanguage(lang) {
    const validLang = (lang === 'zh' || lang === 'en' || lang === 'id') ? lang : 'id';
    const dict = I18N[validLang] || I18N.id;
    document.documentElement.lang = validLang;
    localStorage.setItem('organiz_lang', validLang);

    // 1. Update active state of language buttons
    [btnId, btnEn, btnZh].forEach(b => { if (b) b.classList.remove('active'); });
    if (validLang === 'id' && btnId) btnId.classList.add('active');
    if (validLang === 'en' && btnEn) btnEn.classList.add('active');
    if (validLang === 'zh' && btnZh) btnZh.classList.add('active');

    // 2. Update mobile drawer buttons
    document.querySelectorAll('.lang-switch-mobile .lang-btn').forEach(mb => {
      mb.classList.remove('active');
      const txt = mb.textContent.trim().toLowerCase();
      if ((validLang === 'id' && txt === 'id') || (validLang === 'en' && txt === 'en') || (validLang === 'zh' && (txt === 'zh' || txt === '中文'))) {
        mb.classList.add('active');
      }
    });

    // 3. Update all static elements marked with [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // 4. Update all 14 Template Cards
    const tplData = EXTENDED_I18N.templates[validLang] || EXTENDED_I18N.templates.id;
    document.querySelectorAll('.templates-grid .template-card').forEach((card, idx) => {
      if (tplData[idx]) {
        const badgeEl = card.querySelector('.t-head .t-badge');
        const descEl = card.querySelector('.t-desc');
        const btnSpan = card.querySelector('.btn-demo-trigger span');
        if (badgeEl) badgeEl.textContent = tplData[idx].badge;
        if (descEl) descEl.textContent = tplData[idx].desc;
        if (btnSpan) btnSpan.textContent = dict['tpl_btn_preview'] || 'Live Preview';
      }
    });

    // 5. Update 6 Pricing Cards Checklists & Buttons
    const pkgData = EXTENDED_I18N.pricing_features[validLang] || EXTENDED_I18N.pricing_features.id;
    const ribbonEl = document.querySelector('.popular-ribbon');
    if (ribbonEl) ribbonEl.textContent = pkgData.ribbon;

    document.querySelectorAll('.pricing-card').forEach((card, idx) => {
      const featureKey = `p${idx + 1}`;
      const items = pkgData[featureKey];
      if (items) {
        const listItems = card.querySelectorAll('.pkg-features li');
        items.forEach((txt, liIdx) => {
          if (listItems[liIdx]) {
            listItems[liIdx].innerHTML = `<span>✓</span> ${txt}`;
          }
        });
      }
      const ctaBtn = card.querySelector('a.btn-outline, a.btn-primary');
      if (ctaBtn) {
        if (card.classList.contains('featured-pkg')) {
          ctaBtn.textContent = pkgData.btn_consult;
        } else {
          ctaBtn.textContent = pkgData.btn_order;
        }
      }
    });

    // 6. Update FAQ items
    const faqData = EXTENDED_I18N.faq[validLang] || EXTENDED_I18N.faq.id;
    document.querySelectorAll('.faq-row').forEach((row, idx) => {
      if (faqData[idx]) {
        const qSpan = row.querySelector('.faq-trigger span:first-child');
        const aP = row.querySelector('.faq-panel p');
        if (qSpan) qSpan.textContent = faqData[idx].q;
        if (aP) aP.textContent = faqData[idx].a;
      }
    });

    // 7. Update Feature Library
    const activeFTab = document.querySelector('.f-tab-btn.active');
    const fCat = activeFTab ? activeFTab.getAttribute('data-fcat') : 'website';
    if (typeof renderFeatureLibrary === 'function') {
      renderFeatureLibrary(fCat, validLang);
    }
  }

  if (btnId) btnId.addEventListener('click', () => applyLanguage('id'));
  if (btnEn) btnEn.addEventListener('click', () => applyLanguage('en'));
  if (btnZh) btnZh.addEventListener('click', () => applyLanguage('zh'));

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
  },
  zh: {
    website: [
      { title: "全设备响应式设计", desc: "针对手机、平板和大型显示器进行全方位视口适配优化。" },
      { title: "双主题模式 (深色/浅色)", desc: "内置两套高对比度专业配色，带来舒适的浏览阅读体验。" },
      { title: "极速秒开架构 (评分99+)", desc: "代码极致精简与资源压缩，即使在弱网环境下也能秒速加载。" },
      { title: "官方 .or.id / .org 域名", desc: "正规组织域名认证与全球通用免费SSL高安全证书配置。" },
      { title: "零代码简易后台系统", desc: "无需任何编程经验，管理人员即可轻松发布新闻、动态与财务报表。" },
      { title: "焦点横幅与使命轮播", desc: "在首页首屏重点呈现核心公益项目，高效激发捐赠人共情。" }
    ],
    donasi: [
      { title: "全渠道动态 QRIS 捐赠", desc: "全面支持GoPay、OVO、DANA、ShopeePay及所有银行手机App扫码。" },
      { title: "多银行专属虚拟账户 (VA)", desc: "支持各大商业银行专属账户，方便大型企业与机构进行大额对公捐款。" },
      { title: "实时善款进度条看板", desc: "动态筹款进度条与数据看板，到账后毫秒级自动更新数值。" },
      { title: "防伪条码 PDF 电子收据", desc: "捐赠成功后自动生成带机构公章与防伪条码的合法电子凭证。" },
      { title: "智能天课与善款计算器", desc: "依据最新黄金起征标准与法规自动核算应缴天课金额。" },
      { title: "捐赠人专属档案管理 (CRM)", desc: "系统化沉淀捐款人名册与联络信息，助力建立长期资助信任。" }
    ],
    relawan: [
      { title: "34省全国志愿者花名册", desc: "实名认证志愿者数据库，支持技能标签筛选与属地网格化调度。" },
      { title: "二维码数字化电子会员证 (E-ID)", desc: "一键生成带专属防伪二维码的电子卡，用于一线救灾身份核验。" },
      { title: "公益行动联合日历", desc: "集中排期人道主义救援、技能培训与物资派发等各类行动。" },
      { title: "志愿服务电子荣誉证书", desc: "活动圆满结束后自动批量生成带唯一核验编号的服务证书。" },
      { title: "志愿者在线报名审核", desc: "自定义招募表单，支持特长分类筛选与空闲时段排班核验。" },
      { title: "WhatsApp 应急行动群集成", desc: "支持一键直达应急行动联络群，实现突发灾害快速群发调度。" }
    ],
    transparansi: [
      { title: "实时公开财务流水看板", desc: "如实公开善款流入与各科目支出明细，杜绝暗箱操作。" },
      { title: "WTP无保留审计报告下载中心", desc: "集中归档注册会计师权威审计报告PDF，便于申报政府与大型基金。" },
      { title: "85/10/5 资金规范分配图", desc: "清晰展示项目直接支出(85%)、运营保障(10%)及应急储备(5%)。" },
      { title: "善款物资发放图文凭据", desc: "图文归档受助人签收凭条与实地交付现场记录，全程可追溯。" },
      { title: "法定批文资质权威公示", desc: "显著公示司法部社团批文及民政部门公开募捐许可信息。" },
      { title: "防篡改交易审计日志", desc: "系统底层记录不可篡改的流水日志，确保账目绝对清白合规。" }
    ],
    keamanan: [
      { title: "256位高强度 SSL 加密", desc: "银行级数据传输加密标准，严密保护捐赠人隐私与支付安全。" },
      { title: "云端防火墙与防 DDoS 攻击", desc: "全天候7×24小时无间断运行防护，抵御恶意网络攻击。" },
      { title: "云数据库每日自动冷备份", desc: "多地域隔离的自动化夜间云备份，确保核心资产数据万无一失。" },
      { title: "分级权限管理体系", desc: "为理事长、财务总监、项目专员及志愿者主管分配精准权限。" },
      { title: "严格合规个人信息保护法", desc: "严格遵守捐赠人与未成年受助人隐私保密法规标准。" },
      { title: "异常登录即时安全预警", desc: "当检测到未授权IP异地访问时，系统自动发送邮件拦截警报。" }
    ],
    seo: [
      { title: "Google 非营利规范数据结构", desc: "部署Nonprofit专属结构化数据，确保在Google搜索首页脱颖而出。" },
      { title: "AI 搜索引擎优化 (AI-Ready)", desc: "深度优化ChatGPT、Perplexity、Gemini等AI工具的语义索引。" },
      { title: "社交媒体 Open Graph 预览", desc: "在WhatsApp与Facebook分享时自动呈现高清精美的项目海报卡片。" },
      { title: "自动更新 XML 站点地图", desc: "每当发布新文章或发起新筹款时，自动向搜索引擎提交更新抓取。" },
      { title: "连接 Google Search Console", desc: "实时洞察捐助人搜索热词与网站访问趋势，精准把握公众关切。" },
      { title: "下一代 WebP 极速图像压缩", desc: "高清活动现场纪实图片自动转码压缩，节省移动端流量并极速加载。" }
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

      gsap.fromTo(".org-partner-marquee-container",
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
