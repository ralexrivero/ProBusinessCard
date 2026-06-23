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

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

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
        onClick={toggleTheme}
        className="theme-btn"
        aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
        type="button"
      >
        {theme === 'light' ? (
          <Moon size={14} aria-hidden="true" />
        ) : (
          <Sun size={14} aria-hidden="true" />
        )}
      </button>
    </div>
  );
};

export default Theme;
