import { useTranslation } from 'react-i18next';

const Interests = () => {
  const [t] = useTranslation('global');
  const interestsList = t('interests.list', { returnObjects: true });

  return (
    <aside className="interests-body">
      <h3>{t('interests.title')}</h3>
      <ul className="insterest-items">
        {interestsList.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Interests;
