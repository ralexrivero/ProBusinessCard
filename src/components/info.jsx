import { useTranslation } from 'react-i18next';
import profilePic from '../../img/ronald_rivero_profile_hd.jpg';
import Lang from './lang';
import Theme from './theme';

const Info = () => {
  const [t] = useTranslation('global');

  return (
    <header>
      {/* Top layer: language, theme, and full-width profile image */}
      <div className="header-nav">
        <Theme />
        <Lang />

        <img
          className="profilePic"
          src={profilePic}
          alt={t('info.altProfilePhoto')}
          width="800"
          height="800"
          style={{ width: '100%', height: 'auto' }}
          loading="lazy"
        />
      </div>

      {/* Personal info */}
      <div className="header-body f-wcc">
        <h1>{t('info.name')}</h1>
        <h2 className="txt-c personal-title">{t('info.title')}</h2>

        {/* Personal website */}
        <small>
          <a
            href="https://ralex.works/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-website"
            aria-label="Sitio web personal"
          >
            {t('info.website')}
          </a>
        </small>

        {/* Contact buttons */}
        <div className="info-btns" role="group" aria-label="Enlaces de contacto">
          <a
            href="mailto:ralexrivero@gmail.com"
            className="info-btn btn-email"
            aria-label="Enviar correo electrónico"
          >
            <i className="bi bi-envelope" aria-hidden="true"></i>
            {t('info.email')}
          </a>

          <a
            href="https://www.linkedin.com/in/ronald-rivero/"
            className="info-btn btn-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
          >
            <i className="bi bi-linkedin" aria-hidden="true"></i>
            {t('info.linkedin')}
          </a>

          <a
            href="https://wa.me/+59893776930"
            className="info-btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('info.whatsapp')}
          >
            <i className="bi bi-whatsapp" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Info;
