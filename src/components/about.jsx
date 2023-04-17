import { useTranslation } from 'react-i18next';


const About = () => {
  const [t, i18n] = useTranslation('global');


  return (
    <main className="row info-body pl-sm pr-sm">
      <h2 className="pb-xs">{t('about.title')}</h2>
      <p className="pb-xs">{t('about.description')}</p>
    </main>
  )
}

export default About;
