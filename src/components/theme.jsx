import React, { useState, useEffect } from 'react';

const Theme = () => {
  const [theme, setTheme] = useState('light');

  const lightMode = () => {
    setTheme('light');
  }

  const darkMode = () => {
    setTheme('dark')
  }
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', theme === 'dark');
    body.classList.toggle('light-theme', theme === 'light');
  }, [lightMode]);

  return (
    <div className="theme">
      <i onClick={lightMode} className="theme-btn bi bi-brightness-high"></i>
      <i onClick={darkMode} className="theme-btn bi bi-moon"></i>
    </div>
  );
}

export default Theme;
