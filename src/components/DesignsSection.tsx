import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from 'react-intersection-observer';

interface Design {
  id: number;
  image: string;
  category: string;
}

const designs: Design[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3328127/pexels-photo-3328127.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'eveningCategory'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/8250083/pexels-photo-8250083.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'brideCategory'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/8995809/pexels-photo-8995809.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'eveningCategory'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/8525733/pexels-photo-8525733.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'occasionCategory'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/5973552/pexels-photo-5973552.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'brideCategory'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/8350504/pexels-photo-8350504.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'occasionCategory'
  }
];

const DesignsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="designs"
      ref={ref}
      className="py-24 bg-white"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-serif mb-4 text-slate-800 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('designsHeading')}
          </h2>
          <p 
            className={`text-xl text-slate-600 transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('designsSubheading')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div 
              key={design.id}
              className={`group relative overflow-hidden rounded-lg shadow-md transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={design.image} 
                  alt={t(design.category)} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 w-full">
                  <span className="inline-block px-4 py-1 bg-gold-500 text-white text-sm rounded-full mb-2">
                    {t(design.category)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignsSection