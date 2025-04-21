'use client'

import AppContent from './components/AppContent';
import { LanguageProvider } from './components/language';
import { SettingsProvider } from './components/settings';

export default function RootApp() {
  return (
    <LanguageProvider>
      <SettingsProvider>
        <AppContent />
      </SettingsProvider>
    </LanguageProvider>
  );
}
