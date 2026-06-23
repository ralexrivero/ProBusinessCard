import React, { useState, useEffect } from 'react';

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    // Check system preference on mount
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  const setLight = () => setTheme('light');
  const setDark  = () => setTheme('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="theme">
      <button
        onClick={setLight}
        className={`theme-btn ${theme === 'light' ? 'theme-btn-active' : ''}`}
        aria-label="Activar modo claro"
        type="button"
      >
        <i className="bi bi-brightness-high" aria-hidden="true"></i>
      </button>
      <button
        onClick={setDark}
        className={`theme-btn ${theme === 'dark' ? 'theme-btn-active' : ''}`}
        aria-label="Activar modo oscuro"
        type="button"
      >
        <i className="bi bi-moon" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Theme;
