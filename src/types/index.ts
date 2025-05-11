export type LanguageType = 'en' | 'ar';

export interface TranslationType {
  [key: string]: {
    en: string;
    ar: string;
  };
}