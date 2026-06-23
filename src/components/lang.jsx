import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Lang = () => {
  const [t, i18n] = useTranslation("global");
  const current = i18n.language;
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const switchToEn = () => { i18n.changeLanguage("en"); setOpen(false); };
  const switchToEs = () => { i18n.changeLanguage("es"); setOpen(false); };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="lang" ref={ref}>
      <button
        className="lang-toggle-btn"
        onClick={() => setOpen(!open)}
        type="button"
        aria-label="Cambiar idioma"
        aria-expanded={open}
      >
        <i className="bi bi-translate" aria-hidden="true"></i>
      </button>

      {open && (
        <div className="lang-dropdown">
          <button
            onClick={switchToEn}
            className={`lang-btn ${current === 'en' ? 'lang-btn-active' : ''}`}
            type="button"
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            onClick={switchToEs}
            className={`lang-btn ${current === 'es' ? 'lang-btn-active' : ''}`}
            type="button"
            aria-label="Cambiar a Español"
          >
            ES
          </button>
        </div>
      )}
    </div>
  );
};

export default Lang;
