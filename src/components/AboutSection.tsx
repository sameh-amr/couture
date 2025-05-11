import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="py-24 bg-neutral-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className={`text-4xl md:text-5xl font-serif mb-8 text-slate-800 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('aboutHeading')}
          </h2>
          
          <div 
            className={`mb-6 text-lg leading-relaxed text-slate-600 transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="mb-4">{t('aboutText')}</p>
            <p>{t('aboutText2')}</p>
          </div>
          
          <div 
            className={`flex justify-center my-12 transition-all duration-1000 delay-600 ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="w-24 h-1 bg-gold-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;