import { useTranslation } from 'react-i18next';
import { Mail, Linkedin } from 'lucide-react';
import profilePic from '../../img/ronald_rivero_profile_hd.jpg';
import Lang from './lang';
import Theme from './theme';

const WhatsAppIcon = ({ size = 14, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

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
            <Mail size={14} aria-hidden="true" />
            {t('info.email')}
          </a>

          <a
            href="https://www.linkedin.com/in/ronald-rivero/"
            className="info-btn btn-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
          >
            <Linkedin size={14} aria-hidden="true" />
            {t('info.linkedin')}
          </a>

          <a
            href="https://wa.me/+59893776930"
            className="info-btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('info.whatsapp')}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <WhatsAppIcon size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Info;
