export const updateMetaTags = (language: 'en' | 'ar'): void => {
  const title = language === 'en' 
    ? 'Samah Hamdy Couture | Elegant Dress Design in Egypt' 
    : 'سماح حمدي كوتور | تصميم فساتين أنيقة في مصر';
  
  const description = language === 'en'
    ? 'Samah Hamdy Couture creates bespoke, elegant dresses and gowns in Egypt. Expert craftsmanship for bridal, evening, and special occasion wear.'
    : 'تصمم سماح حمدي كوتور فساتين وأثواب أنيقة مخصصة في مصر. حرفية خبيرة لفساتين الزفاف والسهرة والمناسبات الخاصة.';

  // Update title
  document.title = title;
  
  // Update meta tags
  updateMetaTag('description', description);
  updateMetaTag('keywords', 'couture, fashion design, dresses, Egypt, bridal, evening gowns, Samah Hamdy, سماح حمدي, فساتين, أزياء, مصر');
  updateMetaTag('og:title', title);
  updateMetaTag('og:description', description);
  updateMetaTag('og:type', 'website');
  updateMetaTag('og:locale', language === 'en' ? 'en_US' : 'ar_EG');
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', title);
  updateMetaTag('twitter:description', description);
};

const updateMetaTag = (name: string, content: string): void => {
  // First try to find an existing tag
  let metaTag = document.querySelector(`meta[name="${name}"]`) || 
                document.querySelector(`meta[property="${name}"]`);
                
  if (!metaTag) {
    // Create new tag if it doesn't exist
    metaTag = document.createElement('meta');
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      metaTag.setAttribute('property', name);
    } else {
      metaTag.setAttribute('name', name);
    }
    document.head.appendChild(metaTag);
  }
  
  // Set content
  metaTag.setAttribute('content', content);
};