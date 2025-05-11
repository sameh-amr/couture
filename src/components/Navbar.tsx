import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const { language, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 
            className={`text-xl font-serif font-medium ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            {t('brandName')}
          </h1>
        </div>
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default Navbar;