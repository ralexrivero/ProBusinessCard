import { useTranslation } from 'react-i18next';

const About = () => {
  const [t] = useTranslation('global');

  return (
    <main className="info-body">
      <h2>{t('about.title')}</h2>
      <p>{t('about.description')}</p>
    </main>
  );
};

export default About;
