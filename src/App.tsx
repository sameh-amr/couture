import React, { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { translations } from './data/translations';
import { useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import DesignsSection from './components/DesignsSection';
import ProcessSection from './components/ProcessSection';
import SocialLinks from './components/SocialLinks';
import { updateMetaTags } from './utils/seo';

const AppContent: React.FC = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    updateMetaTags(language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);
  
  return (
    <div className={language === 'ar' ? 'font-arabic' : ''}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DesignsSection />
      <ProcessSection />
      <SocialLinks />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider translations={translations}>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;