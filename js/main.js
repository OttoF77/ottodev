/**
 * Main Interactive Logic for Otto Freitag Portfolio
 * Features: Certificate Viewer Modal, Project Filtering, System Mockup Tabs, Mobile Menu, Clipboard Copy.
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectFilters();
  initCertificateModal();
  initSystemPreviews();
  initMobileMenu();
  initSmoothScroll();
  initCopyEmail();
});

/**
 * Filter Projects (All, Sysotto Real Systems, Academic)
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

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
 */
function initCertificateModal() {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close');
  const titleEl = document.getElementById('modal-cert-title');
  const issuerEl = document.getElementById('modal-cert-issuer');
  const frameEl = document.getElementById('modal-cert-frame');
  const imgEl = document.getElementById('modal-cert-image');
  const downloadBtn = document.getElementById('modal-cert-download');

  function openModal(title, issuer, fileUrl, isImage = false) {
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

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (frameEl) frameEl.src = 'about:blank';
    if (imgEl) imgEl.src = '';
  }

  document.querySelectorAll('[data-cert-view]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.cert-card');
      if (!card) return;

      const title = card.querySelector('.cert-title')?.textContent || 'Certificado';
      const issuer = card.querySelector('.cert-org')?.textContent || '';
      const fileUrl = btn.getAttribute('data-cert-file') || '';
      const isImage = fileUrl.endsWith('.jpg') || fileUrl.endsWith('.png');

      openModal(title, issuer, fileUrl, isImage);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Interactive Previews for Sysotto Systems (Tab switching between Industry, FoodService, SiteBuilder, Core)
 */
function initSystemPreviews() {
  const tabButtons = document.querySelectorAll('.sysotto-tab-btn');
  const previewPanels = document.querySelectorAll('.preview-panel');

  if (!tabButtons.length || !previewPanels.length) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => b.classList.remove('active'));
      previewPanels.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/**
 * Mobile Navigation Menu
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-links');

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('nav-open');
    document.body.classList.toggle('menu-active');
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('nav-open');
      document.body.classList.remove('menu-active');
    });
  });
}

/**
 * Smooth Scroll with header offset
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
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
      const email = btn.getAttribute('data-email') || 'ottofreitag@uol.com.br';
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
