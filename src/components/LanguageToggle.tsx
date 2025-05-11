import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-gold-400 text-white rounded-full transition-all duration-300 hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-300"
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      {t('languageToggle')}
    </button>
  );
};

export default LanguageToggle;