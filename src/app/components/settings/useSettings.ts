import { useContext } from 'react';
import SettingsContext from './SettingsContext';

const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === null)
    throw Error('useSettings hook can be used only in scope of the SettingsContext. Make sure you\'re using SettingsProvider.');

  return {
    fontSizeMultiplier: context.fontSizeMultiplier,
    increaseFontSize: context.increaseFontSize,
    decreaseFontSize: context.decreaseFontSize,
    activeTheme: context.activeTheme,
    setActiveTheme: context.setActiveTheme,
  };
};

export default useSettings;
