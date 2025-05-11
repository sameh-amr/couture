import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Palette, Ruler, Sparkles } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: MessageSquare,
      title: 'step1Title',
      description: 'step1Desc',
    },
    {
      icon: Palette,
      title: 'step2Title',
      description: 'step2Desc',
    },
    {
      icon: Ruler,
      title: 'step3Title',
      description: 'step3Desc',
    },
    {
      icon: Sparkles,
      title: 'step4Title',
      description: 'step4Desc',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-neutral-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-serif mb-4 text-slate-800 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('processHeading')}
          </h2>
          <p 
            className={`text-xl text-slate-600 transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('processSubheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-8">
                  <div className="inline-block p-4 bg-white rounded-full shadow-md">
                    <Icon className="w-8 h-8 text-gold-500" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 w-full hidden lg:block">
                      <div className="h-0.5 bg-gold-200"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-serif mb-3 text-slate-800">
                  {t(step.title)}
                </h3>
                <p className="text-slate-600">
                  {t(step.description)}
                </p>
              </div>
            )}
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;