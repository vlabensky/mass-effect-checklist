import { useContext } from 'react';
import SettingsContext from './SettingsContext';

const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === null)
    throw Error('useSettings hook can be used only in scope of the SettingsContext. Make sure you\'re using SettingsProvider.');

  return {
    a: false,
  };
};

export default useSettings;
