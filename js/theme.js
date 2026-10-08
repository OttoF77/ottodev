/**
 * Theme Manager for Otto Freitag Portfolio
 * Handles automatic system preference detection, manual toggle, persistence and smooth transitions.
 */

(function () {
  const STORAGE_KEY = 'otto_portfolio_theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function applyTheme(theme, persist = false) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#090d16' : '#fcfbf9');
    }

    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) {
      metaColorScheme.setAttribute('content', theme);
    }

    if (persist) {
      localStorage.setItem(STORAGE_KEY, theme);
    }

    updateThemeToggleUI(theme);
  }

  function updateThemeToggleUI(theme) {
    const toggleBtns = document.querySelectorAll('[data-action="toggle-theme"]');
    toggleBtns.forEach((btn) => {
      const isDark = theme === 'dark';
      const isEn = window.i18n && window.i18n.currentLang === 'en-US';
      const label = isDark
        ? (isEn ? 'Switch to light mode' : 'Ativar modo claro')
        : (isEn ? 'Switch to dark mode' : 'Ativar modo escuro');
      const title = isDark
        ? (isEn ? 'Light Mode' : 'Modo Claro')
        : (isEn ? 'Dark Mode' : 'Modo Escuro');
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', title);
      
      const sunIcon = btn.querySelector('.theme-icon-sun');
      const moonIcon = btn.querySelector('.theme-icon-moon');
      if (sunIcon && moonIcon) {
        sunIcon.style.display = isDark ? 'block' : 'none';
        moonIcon.style.display = isDark ? 'none' : 'block';
      }
    });
  }

  window.addEventListener('languageChanged', () => {
    updateThemeToggleUI(document.documentElement.getAttribute('data-theme') || 'dark');
  });

  window.toggleTheme = function () {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme, true);
  };

  // Listen to OS theme changes if user has not explicitly locked a preference
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        applyTheme(e.matches ? 'dark' : 'light', false);
      }
    });
  }

  // Initialize theme as early as possible
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme, false);

  window.addEventListener('languageChanged', () => {
    updateThemeToggleUI(document.documentElement.getAttribute('data-theme') || initialTheme);
  });

  document.addEventListener('DOMContentLoaded', () => {
    updateThemeToggleUI(document.documentElement.getAttribute('data-theme') || initialTheme);
    
    document.querySelectorAll('[data-action="toggle-theme"]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.toggleTheme();
      });
    });
  });
})();
