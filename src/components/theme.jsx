import React, { useState, useEffect } from 'react';

const Theme = () => {
  const [theme, setTheme] = useState('light');

  const setLight = () => setTheme('light');
  const setDark  = () => setTheme('dark');

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="theme">
      <i
        onClick={setLight}
        className={`theme-btn bi bi-brightness-high ${
          theme === 'light' ? 'theme-btn-active' : ''
        }`}
        aria-label="Activar modo claro"
      ></i>
      <i
        onClick={setDark}
        className={`theme-btn bi bi-moon ${
          theme === 'dark' ? 'theme-btn-active' : ''
        }`}
        aria-label="Activar modo oscuro"
      ></i>
    </div>
  );
};

export default Theme;
