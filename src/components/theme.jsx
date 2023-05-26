import React, { useState, useEffect } from 'react';

const Theme = () => {
  const [lightMode, setLightMode] = useState(true);

  const themeToggler = () => {
    setLightMode(!lightMode);
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', !lightMode);
    body.classList.toggle('light-theme', lightMode);
  }, [lightMode]);

  return (
    <div className="theme">
      <i onClick={themeToggler} className="theme-btn bi bi-brightness-high"></i>
      <i onClick={themeToggler} className="theme-btn bi bi-moon"></i>
    </div>
  );
}

export default Theme;
