import React from 'react';
import { I18N } from '../data/i18n';
import { PACKAGES_DATA } from '../data/mockData';

export default function Pricing({ lang }) {
  const t = I18N[lang] || I18N.id;

  const getPackageFeatures = (key) => {
    const featuresMap = {
      id: {
        p1: ["1 Halaman Responsif Ultra Cepat", "Integrasi Donasi QRIS Otomatis", "Live Donation Progress Meter", "WhatsApp Direct Hotline & Notifikasi", "Free Domain & SSL 1 Tahun"],
        p2: ["5-7 Halaman Informasi Lembaga", "Publikasi Legalitas Kemenkumham", "Galeri Kegiatan & Berita Terbitan", "Form Kontak & Formulir Relawan", "SEO Dasar & Google Maps Lokasi"],
        p3: ["Multi-Kampanye Donasi Tanpa Batas", "Payment Gateway QRIS, E-Wallet & VA", "Kalkulator Zakat Maal & Profesi", "Generate Kwitansi PDF Otomatis", "Dashboard Rekap Data Donatur"],
        p4: ["Seluruh Fitur Paket 1, 2, dan 3", "Laporan Transparansi Kas Terbuka (WTP)", "Multi-Bahasa Dwibahasa (ID / EN / ZH)", "Direktori Relawan & Generator E-KTA", "Unduhan PDF Laporan Tahunan & Riset"],
        p5: ["Database Relawan Terverifikasi", "Generator E-KTA Ber-QR Code Unik", "Kalender Aksi & Ticketing Event", "E-Sertifikat Partisipasi Aksi Otomatis", "Sistem Penugasan Posko Lapangan"],
        p6: ["Arsitektur Multi-Cabang / Daerah", "Modul Advokasi Kebijakan & Petisi", "Portal Hibah Dana (Grant Application)", "Enkripsi Data Tertinggi & SLA Support", "Integrasi Custom Database & CRM"]
      },
      en: {
        p1: ["1 Ultra-Fast Responsive Page", "Automated QRIS Donation Integration", "Live Donation Progress Meter", "Direct WhatsApp Hotline & Alert", "Free Domain & 256-Bit SSL 1 Year"],
        p2: ["5-7 Official Organization Pages", "Ministry of Law Entity Publication", "Program Gallery & Press Releases", "Contact & Volunteer Intake Forms", "Nonprofit Google SEO & Maps Setup"],
        p3: ["Unlimited Multi-Campaign Fundraising", "QRIS, E-Wallet & VA Payment Gateway", "Automated Nisab Zakat Calculator", "Auto-Generated Barcoded PDF Receipts", "Dedicated Donor CRM Dashboard"],
        p4: ["All Features in Tier 1, 2, and 3", "Real-Time Public Ledger (WTP Audit)", "Full Multilingual Engine (ID / EN / ZH)", "Volunteer Directory & QR E-ID Cards", "Annual Reports & Grant PDF Center"],
        p5: ["Verified Volunteer Master Database", "Unique QR Code E-ID Card Generator", "Action Mission Calendar & Ticketing", "Automated Verified Action E-Certificates", "Disaster Field Post Assignment Engine"],
        p6: ["Multi-Branch Regional Architecture", "Policy Advocacy & Civic Petitions", "Grant Proposal Application Portal", "Highest Grade Encryption & SLA Support", "Custom External Database & CRM API"]
      },
      zh: {
        p1: ["1页极速响应式着陆页", "自动集成全渠道QRIS捐赠通道", "实时筹款进度条动态看板", "WhatsApp官方直通客服与通知", "赠送1年官方域名与高强度SSL"],
        p2: ["5-7页完整机构官方页面", "司法部批文与民政资质公示", "公益动态与实地项目图文纪实", "联络沟通与志愿者报名表单", "Google非营利SEO与地图定位标注"],
        p3: ["无上限发起多项目筹款矩阵", "全电子钱包与银行虚拟账户网关", "智能黄金起征天课与善款计算器", "捐款成功自动生成防伪PDF电子凭条", "捐赠人名册与CRM沉淀看板"],
        p4: ["包含套餐1、2、3的全部功能", "实时财务收支与WTP无保留审计看板", "印尼语/英语/中文全站多语言引擎", "全国志愿者花名册与二维码电子证", "年度审计公报与研究资助PDF专区"],
        p5: ["实名认证全国志愿者数据库", "唯一防伪二维码电子会员卡生成器", "公益救援行动日历与活动报名", "服务圆满完成自动批量发放电子证书", "灾区一线救援网格化任务派发系统"],
        p6: ["支持全国多分会与区域分站架构", "公共政策倡导与在线公民倡议联署", "国际公益基金赠款申请与评审门户", "最高等级数据加密与SLA全天候运维", "支持对接机构私有数据库与ERP/CRM"]
      }
    };
    const langKey = featuresMap[lang] ? lang : 'id';
    return featuresMap[langKey][key] || [];
  };

  const getRibbonText = () => {
    if (lang === 'zh') return "最受机构青睐方案";
    if (lang === 'en') return "MOST POPULAR CHOICE";
    return "PALING BANYAK DIPILIH";
  };

  const getBtnOrderText = (isFeatured) => {
    if (isFeatured) {
      if (lang === 'zh') return "咨询此定制方案";
      if (lang === 'en') return "Consult This Package";
      return "Konsultasikan Paket Ini";
    }
    if (lang === 'zh') return "选择此方案 →";
    if (lang === 'en') return "Choose This Package →";
    return "Pilih Paket Ini";
  };

  return (
    <section id="paket" className="section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading">{t.pkg_title}</h2>
          <p className="section-subheading">{t.pkg_sub}</p>
        </div>

        <div className="grid-3-col">
          {PACKAGES_DATA.map((pkg) => {
            const features = getPackageFeatures(pkg.featuresKey);
            const waMsg = encodeURIComponent(`Halo Organiz.Hub, saya tertarik untuk konsultasi dan memilih ${pkg.title} (${pkg.price}). Mohon informasi langkah pendaftarannya.`);

            return (
              <div 
                key={pkg.num} 
                className={`pricing-card glass-panel ${pkg.isFeatured ? 'featured-pkg' : ''}`}
              >
                {pkg.isFeatured && (
                  <div className="popular-ribbon">{getRibbonText()}</div>
                )}
                <div className="p-badge-num">{pkg.num}</div>
                <h3 className="pkg-title">{pkg.title}</h3>
                <span className="pkg-sub">{pkg.sub}</span>
                <div className="pkg-price">
                  {pkg.price} <span className="price-type">{pkg.period}</span>
                </div>
                <p className="pkg-summary">{pkg.summary}</p>
                <ul className="pkg-features">
                  {features.map((item, idx) => (
                    <li key={idx}>
                      <span>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/6281234567890?text=${waMsg}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={pkg.isFeatured ? 'btn-primary w-100' : 'btn-outline w-100'}
                >
                  {getBtnOrderText(pkg.isFeatured)}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
