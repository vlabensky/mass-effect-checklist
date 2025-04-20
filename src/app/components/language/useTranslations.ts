import { useContext } from 'react';
import LanguageContext from './LanguageContext';

const useTranslations = () => {
  const context = useContext(LanguageContext);
  if (context === null)
    throw Error('useTranslations hook can be used only in scope of the LanguageContext. Make sure you\'re using LanguageProvider.');

  return {
    t: context.t,
    currentLanguage: context.currentLanguage,
    setLanguage: context.setCurrentLanguage,
    supportedLanguages: context.supportedLanguages,
  };
};

export default useTranslations;
