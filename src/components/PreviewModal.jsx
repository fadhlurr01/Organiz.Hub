import React, { useState } from 'react';

export default function PreviewModal({ isOpen, onClose, previewUrl, previewTitle }) {
  const [viewport, setViewport] = useState('desktop');
  const [loading, setLoading] = useState(true);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="modal-backdrop-overlay" 
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(8, 9, 13, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        className="dialog-container glass-panel"
        style={{
          width: '95vw',
          maxWidth: '1280px',
          height: '88vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-lg)',
          background: 'var(--bg-surface)'
        }}
      >
        {/* Header Bar */}
        <div 
          className="dialog-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 18px',
            borderBottom: '1px solid var(--border-color)',
            background: 'var(--bg-surface-elevated)'
          }}
        >
          {/* Window Dots & Title */}
          <div className="dialog-title-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span 
                onClick={onClose} 
                style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444', display: 'inline-block', cursor: 'pointer' }}
                title="Tutup"
              />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            </div>
            <span style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-primary)', marginLeft: '8px' }}>
              {previewTitle || 'Live Template Preview'}
            </span>
          </div>

          {/* Viewport Switcher */}
          <div className="vp-switcher" style={{ display: 'flex', gap: '4px', background: 'rgba(0,0,0,0.25)', padding: '3px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-color)' }}>
            <button 
              className={`vp-btn ${viewport === 'desktop' ? 'active' : ''}`}
              onClick={() => setViewport('desktop')}
              style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                background: viewport === 'desktop' ? 'var(--brand-primary)' : 'transparent',
                color: viewport === 'desktop' ? '#FFF' : 'var(--text-secondary)',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Desktop
            </button>
            <button 
              className={`vp-btn ${viewport === 'tablet' ? 'active' : ''}`}
              onClick={() => setViewport('tablet')}
              style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                background: viewport === 'tablet' ? 'var(--brand-primary)' : 'transparent',
                color: viewport === 'tablet' ? '#FFF' : 'var(--text-secondary)',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Tablet (768px)
            </button>
            <button 
              className={`vp-btn ${viewport === 'mobile' ? 'active' : ''}`}
              onClick={() => setViewport('mobile')}
              style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                background: viewport === 'mobile' ? 'var(--brand-primary)' : 'transparent',
                color: viewport === 'mobile' ? '#FFF' : 'var(--text-secondary)',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Mobile (390px)
            </button>
          </div>

          {/* Dialog Controls */}
          <div className="dialog-controls" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a 
              href={previewUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline-glass"
              style={{ padding: '6px 12px', fontSize: '0.8rem', textDecoration: 'none' }}
            >
              Buka Asli ↗
            </a>
            <button 
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '1.4rem',
                cursor: 'pointer',
                lineHeight: '1',
                padding: '4px'
              }}
            >
              &times;
            </button>
          </div>
        </div>

        {/* Dialog Body with Responsive Iframe Container */}
        <div 
          className="dialog-body" 
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-body)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {loading && (
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'var(--brand-primary)',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}
            >
              Memuat Live Template Website...
            </div>
          )}
          <iframe 
            src={previewUrl} 
            title={previewTitle}
            onLoad={() => setLoading(false)}
            style={{
              width: viewport === 'desktop' ? '100%' : viewport === 'tablet' ? '768px' : '390px',
              height: '100%',
              border: 'none',
              boxShadow: viewport !== 'desktop' ? '0 0 30px rgba(0,0,0,0.5)' : 'none',
              transition: 'width 0.3s ease',
              borderRadius: viewport !== 'desktop' ? '8px' : '0'
            }}
          />
        </div>
      </div>
    </div>
  );
}
