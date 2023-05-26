import React, { useState, useEffect } from 'react';

const Theme = () => {
  const [lightMode, setLightMode] = useState(false);

  const themeToggler = () => {
    setLightMode(!lightMode);
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', !lightMode);
  }, [lightMode]);

  return (
    <div className="theme">
      <i onClick={themeToggler} className="theme-btn bi bi-brightness-high"></i>
      <i onClick={themeToggler} className="theme-btn bi bi-moon"></i>
    </div>
  );
}

export default Theme;

