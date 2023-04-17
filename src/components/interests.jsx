import { useTranslation } from 'react-i18next';

const Interests = () => {
  const [t, i18n] = useTranslation('global');
  const interestsList = t('interests.list', { returnObjects: true });

  return (
    <aside className="interests-body p-sm">
      <h3 className="pb-sm">{t('interests.title')}</h3>
      <ul className="li-none insterest-items">
        {interestsList.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </aside>
  )
}

export default Interests;
