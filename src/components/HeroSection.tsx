import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Instagram, Music2 as BrandTiktok } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();
  
  const scrollToDesigns = () => {
    const designsSection = document.getElementById('designs');
    if (designsSection) {
      designsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1189675/pexels-photo-1189675.jpeg?auto=compress&cs=tinysrgb&w=600")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 
          className="text-5xl md:text-7xl font-serif mb-4 opacity-0 animate-fade-in-down"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          {t('heroHeading')}
        </h1>
        
        <p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          {t('heroSubheading')}
        </p>
        
        <button 
          onClick={scrollToDesigns}
          className="px-8 py-3 bg-gold-500 text-white rounded-full text-lg transition-all duration-300 hover:bg-gold-600 hover:shadow-lg transform hover:-translate-y-1 opacity-0 animate-fade-in mb-8"
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
        >
          {t('exploreButton')}
        </button>

        <div 
          className="flex justify-center gap-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
        >
          <a
            href="https://www.instagram.com/samahhamdycouture?igsh=eGtkcHF0eDZrMmtm"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-gold-500 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@s.h.fashiondesigner?_t=ZS-8wHEVg26BYm&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-gold-500 transition-all duration-300"
            aria-label="TikTok"
          >
            <BrandTiktok className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown 
          className="w-10 h-10 text-white cursor-pointer hover:text-gold-300 transition-colors duration-300" 
          onClick={scrollToDesigns}
        />
      </div>
    </section>
  );
};

export default HeroSection;