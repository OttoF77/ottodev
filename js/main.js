/**
 * Main Interactive Logic for Otto Freitag Portfolio
 * Features: Certificate Viewer Modal (with focus trap & a11y), Project Filtering,
 * System Mockup Tabs (WAI-ARIA tabs with keyboard arrow nav), Mobile Menu,
 * Smooth Scroll (respecting prefers-reduced-motion), and Clipboard Copy.
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectFilters();
  initCertificateModal();
  initVideoModal();
  initSystemPreviews();
  initMobileMenu();
  initSmoothScroll();
  initCopyEmail();
});

/**
 * Filter Projects (All, Sysotto Real Systems, Hackathons, Academic)
 * Manages aria-pressed states and smooth filtering transitions.
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * Certificate Viewer Modal
 * Migrated to native HTML <dialog>:
 * - Native top-layer & inert background (eliminating manual Tab trap)
 * - Native Escape key dismissal
 * - Centralized cleanup and focus restoration on 'close' event
 * - Native ::backdrop click detection
 */
function initCertificateModal() {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;

  let lastFocusedElement = null;
  const closeBtn = modal.querySelector('.modal-close');
  const titleEl = document.getElementById('modal-cert-title');
  const issuerEl = document.getElementById('modal-cert-issuer');
  const frameEl = document.getElementById('modal-cert-frame');
  const imgEl = document.getElementById('modal-cert-image');
  const downloadBtn = document.getElementById('modal-cert-download');

  function openModal(title, issuer, fileUrl, isImage = false) {
    lastFocusedElement = document.activeElement;

    if (titleEl) titleEl.textContent = title;
    if (issuerEl) issuerEl.textContent = issuer;
    if (downloadBtn) downloadBtn.setAttribute('href', fileUrl);

    if (isImage) {
      if (frameEl) frameEl.style.display = 'none';
      if (imgEl) {
        imgEl.style.display = 'block';
        imgEl.src = fileUrl;
        imgEl.alt = title;
      }
    } else {
      if (imgEl) imgEl.style.display = 'none';
      if (frameEl) {
        frameEl.style.display = 'block';
        frameEl.src = fileUrl;
      }
    }

    document.body.style.overflow = 'hidden';
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }

    // Focus close button on open for instant keyboard access
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 50);
    }
  }

  function closeModal() {
    if (modal.open) {
      if (frameEl) frameEl.src = 'about:blank';
      if (imgEl) imgEl.src = '';
      modal.close();
    }
  }

  // Cleanup & focus restoration via native 'close' event
  modal.addEventListener('close', () => {
    document.body.style.overflow = '';
    if (frameEl) frameEl.src = 'about:blank';
    if (imgEl) imgEl.src = '';

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  });

  // Backdrop click dismissal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      const rect = modal.getBoundingClientRect();
      const isInside = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );
      if (!isInside) {
        closeModal();
      }
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  document.querySelectorAll('[data-cert-view]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.cert-card');
      if (!card) return;

      const title = card.querySelector('.cert-title')?.textContent || 'Certificado';
      const issuer = card.querySelector('.cert-org')?.textContent || '';
      let fileUrl = btn.getAttribute('data-cert-file') || '';
      const isEnRoute = typeof window !== 'undefined' && window.location && /\/en(?:\/|\/index\.html)?$/.test(window.location.pathname);
      const isEnDoc = document.documentElement.getAttribute('lang') === 'en-US';
      if ((isEnRoute || isEnDoc) && !fileUrl.startsWith('../') && !fileUrl.startsWith('/') && !fileUrl.startsWith('http')) {
        fileUrl = '../' + fileUrl;
      } else if (!isEnRoute && !isEnDoc && fileUrl.startsWith('../')) {
        fileUrl = fileUrl.replace(/^\.\.\//, '');
      }
      const isImage = fileUrl.endsWith('.jpg') || fileUrl.endsWith('.png');

      openModal(title, issuer, fileUrl, isImage);
    });
  });
}

/**
 * Video Demonstration Modal (YouTube Facade)
 * Opens YouTube videos on demand via https://www.youtube-nocookie.com/embed/{ID}
 * Zero network requests to YouTube on initial page load.
 * Native <dialog> with autoplay, focus trap, Escape key, backdrop click, and focus return.
 */
function initVideoModal() {
  const modal = document.getElementById('video-modal');
  if (!modal) return;

  let lastFocusedElement = null;
  const closeBtn = modal.querySelector('.modal-close');
  const titleEl = document.getElementById('modal-video-title');
  const frameEl = document.getElementById('modal-video-frame');
  const externalLink = document.getElementById('modal-video-external');

  function openVideoModal(videoId, title, rawUrl) {
    lastFocusedElement = document.activeElement;

    if (titleEl && title) {
      titleEl.textContent = title;
    }
    if (externalLink && rawUrl) {
      externalLink.setAttribute('href', rawUrl);
    }
    if (frameEl && videoId) {
      frameEl.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    }

    document.body.style.overflow = 'hidden';
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }

    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 50);
    }
  }

  function closeVideoModal() {
    if (modal.open) {
      if (frameEl) {
        frameEl.src = 'about:blank';
      }
      modal.close();
    }
  }

  // Cleanup & stop video playback when dialog closes
  modal.addEventListener('close', () => {
    document.body.style.overflow = '';
    if (frameEl) {
      frameEl.src = 'about:blank';
    }
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  });

  // Backdrop click dismissal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      const rect = modal.getBoundingClientRect();
      const isInside = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );
      if (!isInside) {
        closeVideoModal();
      }
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeVideoModal);
  }

  document.querySelectorAll('.project-video-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const videoId = btn.getAttribute('data-video-id');
      const href = btn.getAttribute('href');
      const match = href ? href.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/) : null;
      const id = videoId || (match ? match[1] : null);
      if (!id) return;

      e.preventDefault();
      const titleKey = btn.getAttribute('data-video-title-key');
      let title = '';
      if (titleKey && window.i18n && typeof window.i18n.t === 'function') {
        title = window.i18n.t(titleKey);
      } else {
        title = btn.getAttribute('data-video-title') || btn.textContent.trim();
      }

      openVideoModal(id, title, href || `https://youtu.be/${id}`);
    });
  });
}

/**
 * Interactive Previews for Sysotto Systems
 * Implements WAI-ARIA Tabs design pattern with Arrow key navigation.
 */
function initSystemPreviews() {
  const tabButtons = Array.from(document.querySelectorAll('.sysotto-tab-btn'));
  const previewPanels = document.querySelectorAll('.preview-panel');

  if (!tabButtons.length || !previewPanels.length) return;

  function activateTab(btn) {
    tabButtons.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
      b.setAttribute('tabindex', '-1');
    });
    previewPanels.forEach((p) => p.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    btn.removeAttribute('tabindex');
    const targetId = btn.getAttribute('data-target');
    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  }

  tabButtons.forEach((btn, index) => {
    if (btn.classList.contains('active')) {
      btn.setAttribute('aria-selected', 'true');
      btn.removeAttribute('tabindex');
    } else {
      btn.setAttribute('aria-selected', 'false');
      btn.setAttribute('tabindex', '-1');
    }

    btn.addEventListener('click', () => {
      activateTab(btn);
    });

    // Arrow keys & Home/End navigation (WAI-ARIA Tabs pattern)
    btn.addEventListener('keydown', (e) => {
      let targetIndex = -1;
      if (e.key === 'ArrowRight') {
        targetIndex = (index + 1) % tabButtons.length;
      } else if (e.key === 'ArrowLeft') {
        targetIndex = (index - 1 + tabButtons.length) % tabButtons.length;
      } else if (e.key === 'Home') {
        targetIndex = 0;
      } else if (e.key === 'End') {
        targetIndex = tabButtons.length - 1;
      }

      if (targetIndex !== -1) {
        e.preventDefault();
        const targetBtn = tabButtons[targetIndex];
        activateTab(targetBtn);
        targetBtn.focus();
      }
    });
  });
}

/**
 * Mobile Navigation Menu
 * Handles responsive menu toggle, aria-expanded, and dynamic accessible labels.
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-links');

  if (!menuToggle || !navMenu) return;

  function updateMenuToggleLabel(isExpanded) {
    const isEn = window.i18n && window.i18n.currentLang === 'en-US';
    if (isExpanded) {
      menuToggle.setAttribute('aria-label', isEn ? 'Close navigation menu' : 'Fechar menu de navegação');
    } else {
      menuToggle.setAttribute('aria-label', isEn ? 'Open navigation menu' : 'Abrir menu de navegação');
    }
  }

  updateMenuToggleLabel(menuToggle.getAttribute('aria-expanded') === 'true');

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    const nextState = !isExpanded;
    menuToggle.setAttribute('aria-expanded', String(nextState));
    navMenu.classList.toggle('nav-open', nextState);
    document.body.classList.toggle('menu-active', nextState);
    updateMenuToggleLabel(nextState);
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('nav-open');
      document.body.classList.remove('menu-active');
      updateMenuToggleLabel(false);
    });
  });

  window.addEventListener('languageChanged', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    updateMenuToggleLabel(isExpanded);
  });
}

/**
 * Smooth Scroll with header offset, respecting prefers-reduced-motion.
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const isSkipLink = this.classList.contains('skip-link');
        if (isSkipLink && typeof target.focus === 'function') {
          target.focus({ preventScroll: true });
        }

        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion || isSkipLink ? 'auto' : 'smooth'
        });
      }
    });
  });
}

/**
 * Copy Email to Clipboard
 */
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('[data-action="copy-email"]');
  copyBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'otto@sysotto.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = btn.innerHTML;
        const currentLang = window.i18n ? window.i18n.currentLang : 'pt-BR';
        const msg = currentLang === 'pt-BR' ? 'E-mail copiado!' : 'Email copied!';
        
        btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> ${msg}`;
        btn.classList.add('copied');

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('copied');
        }, 2200);
      });
    });
  });
}
