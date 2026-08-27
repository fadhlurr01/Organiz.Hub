/**
 * NEXUS COWORK - JAVASCRIPT ENGINE
 * Interactive 3D Tour, Space Filters, Billing Switcher, Web Audio Ambiance & Booking Dialog
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initAudioAmbiance();
  initHeroSceneSimulator();
  initSpaceFilters();
  initTourSimulator();
  initBillingSwitcher();
  initBookingModal();
  initEventRSVP();
  initMobileDrawer();
});

/* ==========================================================================
   1. Theme Manager (Dark Cosmic / Light Modern)
   ========================================================================== */
function initThemeManager() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem('nexus_cowork_theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      localStorage.setItem('nexus_cowork_theme', next);
      showToast(next === 'dark' ? '🌙 Cosmic Dark Theme Enabled' : '☀️ Modern Light Theme Enabled');
    });
  }
}

/* ==========================================================================
   2. Web Audio API Lo-Fi Ambiance Simulator
   ========================================================================== */
function initAudioAmbiance() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  const labelText = document.getElementById('sound-label-text');
  let audioCtx = null;
  let isPlaying = false;
  let oscillator = null;
  let gainNode = null;
  let noiseNode = null;

  const startAmbiance = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();

      // Create pink/brown noise filter for calming cafe background hum
      const bufferSize = audioCtx.sampleRate * 2;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2 + white * 0.5362) * 0.04;
      }

      noiseNode = audioCtx.createBufferSource();
      noiseNode.buffer = noiseBuffer;
      noiseNode.loop = true;

      // Lowpass filter for warm cafe acoustics
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400;

      gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 1.5);

      noiseNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      noiseNode.start();
      isPlaying = true;
      soundBtn.classList.add('playing');
      labelText.textContent = 'Playing Lo-Fi Hum';
      showToast('🎧 Lo-Fi Focus Ambiance Activated (Cafe White Noise)');
    } catch (e) {
      console.warn('Web Audio note:', e);
      isPlaying = true;
      soundBtn.classList.add('playing');
      labelText.textContent = 'Focus Mode';
      showToast('🎧 Lo-Fi Focus Mode Activated');
    }
  };

  const stopAmbiance = () => {
    if (gainNode && audioCtx) {
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
      setTimeout(() => {
        if (noiseNode) noiseNode.stop();
        if (audioCtx) audioCtx.close();
      }, 500);
    }
    isPlaying = false;
    soundBtn.classList.remove('playing');
    labelText.textContent = 'Lo-Fi Cafe';
    showToast('🔇 Audio Ambiance Muted');
  };

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      if (isPlaying) stopAmbiance();
      else startAmbiance();
    });
  }
}

/* ==========================================================================
   3. Hero Interactive Live Scene Simulator
   ========================================================================== */
function initHeroSceneSimulator() {
  const sceneBtns = document.querySelectorAll('.scene-tab-btn');
  const spotCard = document.getElementById('scene-spot-card');
  const spotIcon = document.getElementById('spot-icon');
  const spotTitle = document.getElementById('spot-title');
  const spotStatus = document.getElementById('spot-status');
  const quickBookBtn = document.getElementById('btn-spot-quickbook');

  const sceneData = {
    hotdesk: {
      icon: '⚡',
      title: 'Collaborative Open Hot Desk #12',
      status: 'Available Now • Dual 4K USB-C Hub',
      plan: 'Quantum Hot Desk'
    },
    pod: {
      icon: '🎧',
      title: 'Soundproof Focus Pod #04',
      status: 'Available Now • Acoustic Class-A (-42dB)',
      plan: 'Soundproof Creator Pod'
    },
    cafe: {
      icon: '☕',
      title: 'Nitro Bar & Community Lounge',
      status: 'Free Unlimited Single-Origin Taps Open',
      plan: 'Day Explorer Pass'
    },
    boardroom: {
      icon: '🏛️',
      title: 'Executive Matrix Boardroom (20 Seats)',
      status: 'Free for Next 2 Hours • Smart Glass Privacy',
      plan: 'Executive Matrix Boardroom'
    }
  };

  sceneBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      sceneBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-target');
      const data = sceneData[target] || sceneData.hotdesk;

      spotIcon.textContent = data.icon;
      spotTitle.textContent = data.title;
      spotStatus.textContent = data.status;

      if (quickBookBtn) {
        quickBookBtn.setAttribute('data-plan', data.plan);
      }

      // Micro bounce effect
      spotCard.style.transform = 'translateX(-50%) translateY(-6px)';
      setTimeout(() => {
        spotCard.style.transform = 'translateX(-50%) translateY(0)';
      }, 200);
    });
  });

  // Hotspots SVG Click
  const hotspots = document.querySelectorAll('.hotspot-group');
  hotspots.forEach(spot => {
    spot.addEventListener('click', () => {
      const spotKey = spot.getAttribute('data-spot');
      const matchingBtn = document.querySelector(`.scene-tab-btn[data-target="${spotKey}"]`);
      if (matchingBtn) matchingBtn.click();
    });
  });

  if (quickBookBtn) {
    quickBookBtn.addEventListener('click', () => {
      const plan = quickBookBtn.getAttribute('data-plan') || 'Quantum Hot Desk';
      openBookingModal(plan);
    });
  }
}

/* ==========================================================================
   4. Spaces & Zones Category Filters
   ========================================================================== */
function initSpaceFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const spaceCards = document.querySelectorAll('.space-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      spaceCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeCardIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. 360° Virtual Tour Preview Simulator
   ========================================================================== */
function initTourSimulator() {
  const thumbBtns = document.querySelectorAll('.tour-thumb-btn');
  const hudName = document.getElementById('hud-room-name');
  const hudNoise = document.getElementById('hud-noise-level');
  const hudSpeed = document.getElementById('hud-speed');
  const backdrop = document.getElementById('tour-backdrop-view');
  const lightBtn = document.getElementById('btn-toggle-lights');
  const panBtn = document.getElementById('btn-toggle-pan');
  const bookThisBtn = document.getElementById('btn-tour-book-this');

  const tourGradients = {
    hotdesk: 'radial-gradient(circle at center, #1E1B4B 0%, #060814 100%)',
    studio: 'radial-gradient(circle at center, #3B0764 0%, #090314 100%)',
    pod: 'radial-gradient(circle at center, #064E3B 0%, #021C14 100%)',
    lounge: 'radial-gradient(circle at center, #7C2D12 0%, #150802 100%)'
  };

  let currentZoneName = 'Zone A: Collaborative Open Deck';

  thumbBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      thumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const zone = btn.getAttribute('data-zone');
      currentZoneName = btn.getAttribute('data-name');
      hudName.textContent = `📍 ${currentZoneName}`;
      hudNoise.textContent = `🔊 Noise: ${btn.getAttribute('data-noise')}`;
      hudSpeed.textContent = `🚀 ${btn.getAttribute('data-speed')}`;

      backdrop.style.background = tourGradients[zone] || tourGradients.hotdesk;
    });
  });

  // Light color cycler
  const lightModes = [
    { label: '💡 Mode: Neon Cyan', color: 'rgba(6, 182, 212, 0.4)' },
    { label: '💡 Mode: Electric Violet', color: 'rgba(124, 58, 237, 0.4)' },
    { label: '💡 Mode: Sunset Coral', color: 'rgba(244, 63, 94, 0.4)' },
    { label: '💡 Mode: Daylight Focus', color: 'rgba(255, 255, 255, 0.2)' }
  ];
  let lightIdx = 0;

  if (lightBtn) {
    lightBtn.addEventListener('click', () => {
      lightIdx = (lightIdx + 1) % lightModes.length;
      lightBtn.textContent = lightModes[lightIdx].label;
      backdrop.style.boxShadow = `inset 0 0 80px ${lightModes[lightIdx].color}`;
      showToast(`Ambience Lighting: ${lightModes[lightIdx].label.replace('💡 Mode: ', '')}`);
    });
  }

  // Auto-Orbit 360 toggle
  let isOrbiting = false;
  let orbitInterval = null;
  if (panBtn) {
    panBtn.addEventListener('click', () => {
      isOrbiting = !isOrbiting;
      panBtn.classList.toggle('active', isOrbiting);
      panBtn.textContent = isOrbiting ? '⏸️ Pause Orbit' : '🔄 Auto-Orbit 360°';

      if (isOrbiting) {
        let angle = 0;
        orbitInterval = setInterval(() => {
          angle = (angle + 1) % 360;
          backdrop.style.backgroundPosition = `${angle}% 50%`;
        }, 60);
        showToast('🔄 360° Live Auto-Orbit Engaged');
      } else {
        clearInterval(orbitInterval);
      }
    });
  }

  if (bookThisBtn) {
    bookThisBtn.addEventListener('click', () => {
      openBookingModal(currentZoneName);
    });
  }
}

/* ==========================================================================
   6. Membership Billing Switcher (Monthly vs Annual)
   ========================================================================== */
function initBillingSwitcher() {
  const switchBtn = document.getElementById('billing-switch-btn');
  const lblMonthly = document.getElementById('billing-lbl-monthly');
  const lblAnnual = document.getElementById('billing-lbl-annual');
  const amounts = document.querySelectorAll('.price-amount');
  let isAnnual = false;

  if (switchBtn) {
    switchBtn.addEventListener('click', () => {
      isAnnual = !isAnnual;
      switchBtn.classList.toggle('active', isAnnual);
      lblMonthly.classList.toggle('active', !isAnnual);
      lblAnnual.classList.toggle('active', isAnnual);

      amounts.forEach((el) => {
        const val = isAnnual ? el.getAttribute('data-annual') : el.getAttribute('data-monthly');
        el.textContent = val;
      });

      showToast(isAnnual ? '🎁 Annual Plan Active: 20% Discount + 20 Free Boardroom Credits Applied!' : 'Monthly Billing Active');
    });
  }
}

/* ==========================================================================
   7. Booking Modal & Instant Reservation Engine
   ========================================================================== */
function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const form = document.getElementById('booking-form');
  const spaceSelect = document.getElementById('book-space-type');
  const summaryPassName = document.getElementById('summary-pass-name');
  const dateInput = document.getElementById('book-date');

  // Set default minimum date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  // Triggers
  const openButtons = [
    document.getElementById('btn-open-booking-top'),
    document.getElementById('btn-open-booking-drawer'),
    document.getElementById('btn-hero-booking'),
    document.getElementById('btn-cta-open-modal')
  ];

  openButtons.forEach(btn => {
    if (btn) btn.addEventListener('click', () => openBookingModal());
  });

  // Card triggers
  document.querySelectorAll('.btn-book-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.getAttribute('data-plan') || 'Day Explorer Pass ($25/day)';
      openBookingModal(plan);
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.close());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.close();
    });
  }

  if (spaceSelect) {
    spaceSelect.addEventListener('change', () => {
      summaryPassName.textContent = spaceSelect.value.split(' (')[0];
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('book-name').value;
      const space = spaceSelect.value;
      const date = dateInput.value;

      modal.close();
      showToast(`🎉 Confirmed! Free Pass reserved for ${name} on ${date}. Confirmation sent to your email.`);
      form.reset();
    });
  }
}

function openBookingModal(preselectedPlan = 'Day Explorer Pass ($25/day)') {
  const modal = document.getElementById('booking-modal');
  const spaceSelect = document.getElementById('book-space-type');
  const summaryPassName = document.getElementById('summary-pass-name');

  if (spaceSelect) {
    // Try to match value
    for (let opt of spaceSelect.options) {
      if (opt.value.toLowerCase().includes(preselectedPlan.toLowerCase().split(' (')[0])) {
        spaceSelect.value = opt.value;
        break;
      }
    }
    summaryPassName.textContent = spaceSelect.value.split(' (')[0];
  }

  if (modal) modal.showModal();
}

/* ==========================================================================
   8. Community Events RSVP
   ========================================================================== */
function initEventRSVP() {
  const rsvpBtns = document.querySelectorAll('.btn-rsvp');
  rsvpBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const eventName = btn.getAttribute('data-event');
      btn.textContent = '✓ RSVP Confirmed';
      btn.style.background = 'var(--accent-cyan)';
      btn.style.color = '#FFFFFF';
      btn.style.borderColor = 'transparent';
      showToast(`🎟️ Spot reserved for "${eventName}"! Added to calendar.`);
    });
  });
}

/* ==========================================================================
   9. Mobile Drawer Engine
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const closeBtn = document.getElementById('drawer-close-btn');

  const openDrawer = () => {
    if (drawer) drawer.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (drawer) drawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-drawer a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   Toast Helper
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
