import { useTranslation } from 'react-i18next';
import profilePic from '../../img/ronald_rivero_profile_hd.jpg';
import Lang from './lang';
import Theme from './theme';


const Info = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <header>
      <div className="header-nav">
        <Lang />
        <Theme />
        <img className="img-responsive profilePic" src={profilePic} alt={t('info.altProfilePhoto')} />
      </div>
      <div className="header-body f-wcc">
        <h1>{t('info.name')}</h1>
        <span className="txt-c personal-title">{t('info.title')}</span>
        <small><a href="https://ralexrivero.github.io/" target="_blank" className="link link-website">{t('info.website')}</a></small>
        <div className="f-rsec">
        <a href="mailto.ralexrivero@gmail.com" className="info-btn btn-email" target="_blank"><i className="bi bi-envelope"></i>{t('info.email')}</a>
        <a href="https://www.linkedin.com/in/ronald-rivero/" className="info-btn btn-linkedin" target="_blank"><i className="bi bi-linkedin"></i>{t('info.linkedin')}</a>
        <a aria-label={t('info.whatsapp')} href="https.//wa.me/59893776930" className="info-btn btn-whatsapp" target="_blank"><i className="bi bi-whatsapp"></i></a>
        </div>
      </div>
    </header>
  );
};

export default Info;
