import { useTranslation } from "react-i18next";

const Lang = () => {
  const [t, i18n] = useTranslation("global");
  const current = i18n.language;

  const switchToEn = () => i18n.changeLanguage("en");
  const switchToEs = () => i18n.changeLanguage("es");

  return (
    <div className="lang">
      <i className="lang-main-btn bi bi-translate" aria-label="Cambiar idioma"></i>
      <div className="lang-group">
        <button
          onClick={switchToEn}
          className={`lang-btn ${current === 'en' ? 'lang-btn-active' : ''}`}
        >
          EN
        </button>
        <button
          onClick={switchToEs}
          className={`lang-btn ${current === 'es' ? 'lang-btn-active' : ''}`}
        >
          ES
        </button>
      </div>
    </div>
  );
};

export default Lang;
