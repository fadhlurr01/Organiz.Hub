import React, { useState } from 'react';
import { I18N } from '../data/i18n';
import { FEATURE_LIBRARY_DATA } from '../data/mockData';

export default function FeaturesLibrary({ lang }) {
  const t = I18N[lang] || I18N.id;
  const [activeTab, setActiveTab] = useState('website');

  const tabs = [
    { key: 'website', label: { id: 'Website & Core', en: 'Website & Core', zh: '核心建站系统' } },
    { key: 'donasi', label: { id: 'Donasi & Kas', en: 'Donations & Cash', zh: '捐赠与资金流' } },
    { key: 'relawan', label: { id: 'Relawan & Aksi', en: 'Volunteers & Action', zh: '志愿者与行动' } },
    { key: 'transparansi', label: { id: 'Transparansi WTP', en: 'WTP Transparency', zh: 'WTP财务公信' } },
    { key: 'keamanan', label: { id: 'Keamanan & Legal', en: 'Security & Legal', zh: '安全与法务' } },
    { key: 'seo', label: { id: 'SEO & Media', en: 'SEO & Media', zh: '推广与多媒体' } }
  ];

  const currentDataset = FEATURE_LIBRARY_DATA[lang] || FEATURE_LIBRARY_DATA.id;
  const items = currentDataset[activeTab] || [];

  return (
    <section id="fitur" className="section section-dark-alt">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading">{t.feat_title}</h2>
          <p className="section-subheading">{t.feat_sub}</p>
        </div>

        {/* Feature Tabs */}
        <div className="feature-nav-tabs">
          {tabs.map((tab) => {
            const labelText = tab.label[lang] || tab.label.id;
            return (
              <button
                key={tab.key}
                className={`f-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {labelText}
              </button>
            );
          })}
        </div>

        {/* Feature Content Grid */}
        <div className="feature-content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px' }}>
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-panel" 
              style={{ padding: '22px', borderRadius: 'var(--radius-md)', transition: 'var(--transition)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--brand-primary-subtle)', color: 'var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '0.85rem' }}>
                  ✓
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>{item.title}</h4>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
