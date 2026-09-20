import React, { useState } from 'react';
import { I18N } from '../data/i18n';
import { TEMPLATES_DATA } from '../data/mockData';

export default function TemplateGallery({ lang, onOpenPreview, activeFilter, setActiveFilter }) {
  const t = I18N[lang] || I18N.id;
  const [filter, setFilter] = useState(activeFilter || 'all');

  const currentFilter = activeFilter !== undefined ? activeFilter : filter;
  const handleFilterChange = (cat) => {
    setFilter(cat);
    if (setActiveFilter) setActiveFilter(cat);
  };

  const filteredTemplates = TEMPLATES_DATA.filter(tpl => {
    if (currentFilter === 'all') return true;
    return tpl.cat === currentFilter;
  });

  return (
    <section id="templates" className="section section-dark-alt">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading">{t.tpl_title}</h2>
          <p className="section-subheading">{t.tpl_sub}</p>
        </div>

        {/* Filter Category Buttons */}
        <div className="filter-tab-bar">
          <button 
            className={`t-filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            {t.tpl_filter_all}
          </button>
          <button 
            className={`t-filter-btn ${currentFilter === 'yayasan' ? 'active' : ''}`}
            onClick={() => handleFilterChange('yayasan')}
          >
            {t.tpl_filter_yayasan}
          </button>
          <button 
            className={`t-filter-btn ${currentFilter === 'komunitas' ? 'active' : ''}`}
            onClick={() => handleFilterChange('komunitas')}
          >
            {t.tpl_filter_komunitas}
          </button>
          <button 
            className={`t-filter-btn ${currentFilter === 'ngo' ? 'active' : ''}`}
            onClick={() => handleFilterChange('ngo')}
          >
            {t.tpl_filter_ngo}
          </button>
        </div>

        {/* Templates Showcase Grid */}
        <div className="templates-grid">
          {filteredTemplates.map((tpl) => {
            const badgeText = tpl.badge[lang] || tpl.badge.id;
            const descText = tpl.desc[lang] || tpl.desc.id;
            const badgeColor = tpl.cat === 'yayasan' ? 'emerald' : tpl.cat === 'komunitas' ? 'blue' : 'purple';

            return (
              <div key={tpl.id} className="template-card glass-panel" data-cat={tpl.cat}>
                <div className="t-head">
                  <span className={`t-badge ${badgeColor}`}>{badgeText}</span>
                  <span className="t-num">#{tpl.id}</span>
                </div>
                <h4 className="t-name">{tpl.name}</h4>
                <span className="t-focus">{tpl.focus}</span>
                <p className="t-desc">{descText}</p>
                <div className="t-foot">
                  <button 
                    className="btn-demo-trigger"
                    onClick={() => onOpenPreview(tpl.url, `${tpl.name} — ${tpl.focus}`)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span>Live Preview</span>
                  </button>
                  <a 
                    href={tpl.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-icon-link" 
                    title="Buka di Tab Baru"
                  >
                    ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
