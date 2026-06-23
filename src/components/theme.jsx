import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

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
        <Sun size={14} aria-hidden="true" />
      </button>
      <button
        onClick={setDark}
        className={`theme-btn ${theme === 'dark' ? 'theme-btn-active' : ''}`}
        aria-label="Activar modo oscuro"
        type="button"
      >
        <Moon size={14} aria-hidden="true" />
      </button>
    </div>
  );
};

export default Theme;
