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
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a101d' : '#f8fafc');
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
      btn.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
      btn.setAttribute('title', isDark ? 'Modo Claro' : 'Modo Escuro');
      
      const sunIcon = btn.querySelector('.theme-icon-sun');
      const moonIcon = btn.querySelector('.theme-icon-moon');
      if (sunIcon && moonIcon) {
        sunIcon.style.display = isDark ? 'block' : 'none';
        moonIcon.style.display = isDark ? 'none' : 'block';
      }
    });
  }

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
