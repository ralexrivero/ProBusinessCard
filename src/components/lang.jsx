import { useTranslation } from "react-i18next";


const Lang = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="lang">
      <i className="lang-main-btn bi bi-translate"></i>
      <div className="lang-group">
        <button className="lang-btn lang-btn-active" onClick={() => i18n.changeLanguage("en")}>en</button>
        <button className="lang-btn" onClick={() => i18n.changeLanguage("es")}>es</button>
      </div>
    </div>
  )
}

export default Lang;
