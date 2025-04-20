'use client'

import React, { useState, useEffect, useMemo, useRef, useContext, createContext } from 'react'; // Added useContext, createContext
import { missionsData } from './resx/data';
import { LanguageProvider, useTranslations } from './components/language';
import { ChevronIcon, NewTabLinkIcon, SettingsIcon } from './components/icons';

// Function to generate a safe key from a display name
const generateKeyFromName = (name) => name.replace(/[^a-zA-Z0-9]/g, '');

// --- Constants ---
const FONT_SIZE_STEP = 0.1; const MIN_FONT_SIZE_MULTIPLIER = 0.7; const MAX_FONT_SIZE_MULTIPLIER = 1.5; const DEFAULT_FONT_SIZE_MULTIPLIER = 1.0; const BASE_HTML_FONT_SIZE_PX = 16; const DEFAULT_THEME = 'theme-dark'; const THEMES = { 'theme-dark': 'Dark', 'theme-light': 'Light', 'theme-hc-dark': 'High Contrast Dark', 'theme-hc-light': 'High Contrast Light', }; const SHORT_ID_DELIMITER = ';'; const LOCAL_STORAGE_COMPLETION_KEY = 'massEffectChecklistStateShort'; const LOCAL_STORAGE_FONT_KEY = 'massEffectFontSizeMultiplier'; const LOCAL_STORAGE_THEME_KEY = 'massEffectActiveTheme';

// --- Components ---

// MissionItem Component - Uses useTranslations hook
const MissionItem = ({ mission, completed, onToggle, prerequisitesMet, missionNameMap, completedMissions }) => {
  const { t } = useTranslations(); // Get translation function from hook
  const [isPrereqsExpanded, setIsPrereqsExpanded] = useState(false);
  const handleChange = () => { if (prerequisitesMet || completed) { onToggle(mission.id); } };
  const togglePrereqs = (e) => { e.stopPropagation(); setIsPrereqsExpanded(!isPrereqsExpanded); };
  const canInteract = prerequisitesMet || completed;
  const hasPrerequisites = mission.prerequisites && mission.prerequisites.length > 0;
  const missionTitle = t(`mission_${mission.id}`, mission.name);

  return (
    <>
        <li className={`flex items-center justify-between border-b border-border last:border-b-0 transition-colors duration-150 ${!canInteract ? 'opacity-50' : 'hover:bg-background-hover'}`}>
            <div className="flex items-center flex-grow py-2 px-3 min-w-0">
                <input type="checkbox" id={mission.id} checked={completed} onChange={handleChange} disabled={!canInteract} className={`mr-3 h-5 w-5 rounded border-border-input text-accent focus:ring-accent bg-input-bg disabled:opacity-70 flex-shrink-0 ${canInteract ? 'cursor-pointer' : 'cursor-not-allowed'}`} />
                {hasPrerequisites && ( <button onClick={togglePrereqs} className="mr-2 p-0.5 rounded text-text-secondary hover:bg-background-hover hover:text-accent focus:outline-none focus:ring-1 focus:ring-accent flex-shrink-0" aria-expanded={isPrereqsExpanded} aria-controls={`prereqs-${mission.id}`} title={isPrereqsExpanded ? t('hidePrereqsTitle') : t('showPrereqsTitle')} > <ChevronIcon expanded={isPrereqsExpanded} /> <span className="sr-only">{isPrereqsExpanded ? t('hidePrereqsTitle') : t('showPrereqsTitle')}</span> </button> )}
                {!hasPrerequisites && <div className="w-4 mr-2 flex-shrink-0" style={{marginLeft: '0.125rem', marginRight: '0.625rem'}}></div>}
                <label htmlFor={mission.id} className={`flex-grow ${completed ? 'line-through text-text-disabled' : 'text-text-primary'} ${canInteract ? 'cursor-pointer' : 'cursor-not-allowed'} truncate`} > {missionTitle} </label>
            </div>
            {mission.wikiUrl && ( <div className="py-2 px-3 flex-shrink-0"> <a href={mission.wikiUrl} target="_blank" rel="noopener noreferrer" title={`View "${missionTitle}" on Mass Effect Wiki`} className="p-1 rounded-md text-text-secondary hover:bg-background-hover hover:text-accent focus:outline-none focus:ring-2 focus:ring-offset-background focus:ring-accent transition-colors flex-shrink-0 inline-block" onClick={(e) => e.stopPropagation()} > <NewTabLinkIcon /> <span className="sr-only">{t('wikiLinkAlt')}</span> </a> </div> )}
        </li>
        {hasPrerequisites && (
            <div id={`prereqs-${mission.id}`} className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isPrereqsExpanded ? 'max-h-96' : 'max-h-0'}`} style={{transitionProperty: 'max-height'}} >
                <ul className="pt-1 pb-2 pl-12 pr-3 bg-background-subtle border-b border-border">
                    <li className="text-xs text-text-secondary mb-1">{t('prerequisitesLabel')}</li>
                    {mission.prerequisites.map(prereqId => { const isPrereqCompleted = completedMissions.hasOwnProperty(prereqId); const prereqName = t(`mission_${prereqId}`, missionNameMap[prereqId] || t('unknownMission')); return ( <li key={prereqId} className={`text-sm py-0.5 ${isPrereqCompleted ? 'text-text-disabled line-through' : 'text-text-secondary'}`}> - {prereqName} </li> ); })}
                </ul>
            </div>
        )}
    </>
  );
};

// MissionList Component - Uses useTranslations hook
const MissionList = ({ gameId, groupedMissions, completedMissions, onToggleMission }) => {
  const { t } = useTranslations(); // Get translation function from hook
  const missionNameMap = useMemo(() => { const map = {}; Object.values(groupedMissions).forEach(arr => arr.forEach(m => map[m.id] = m.name)); return map; }, [groupedMissions]);
  const checkPrerequisites = (mission) => { if (!mission.prerequisites || mission.prerequisites.length === 0) return true; return mission.prerequisites.every(id => completedMissions.hasOwnProperty(id)); };
  const groupNames = Object.keys(groupedMissions);

  return (
    <div className="bg-background-list rounded-lg shadow-md">
      {groupNames.map((groupName, index) => {
          const groupKey = `group_${gameId}_${generateKeyFromName(groupName)}`;
          return (
            <section key={groupName} aria-labelledby={`group-header-${gameId}-${index}`}>
              <h3 id={`group-header-${gameId}-${index}`} className="text-lg font-semibold text-accent bg-background-header px-3 py-2 sticky top-0 z-10 border-b border-t border-border first:border-t-0" > {t(groupKey, groupName)} </h3>
              <ul className="list-none p-0 m-0"> {groupedMissions[groupName].map((mission) => ( <MissionItem key={mission.id} mission={mission} completed={!!completedMissions[mission.id]} onToggle={onToggleMission} prerequisitesMet={checkPrerequisites(mission)} missionNameMap={missionNameMap} completedMissions={completedMissions} /* Removed t prop */ /> ))} </ul>
            </section>
          );
      })}
    </div>
  );
};

// Settings Menu Component - Moved from App for clarity, uses useTranslations
const SettingsMenu = ({ isOpen, menuRef, buttonRef, closeMenu }) => {
    const { t, currentLanguage, setLanguage, supportedLanguages } = useTranslations();
    const { fontSizeMultiplier, increaseFontSize, decreaseFontSize, activeTheme, setActiveTheme } = useContext(SettingsContext); // Get settings state via context

    if (!isOpen) return null;

    return (
        <div
            ref={menuRef}
            id="settings-menu"
            role="menu"
            className="absolute top-full right-0 mt-2 w-64 p-4 rounded-md shadow-lg bg-background-list border border-border z-20"
        >
            {/* Font Size Controls */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-text-secondary mb-2">{t('fontSizeLabel')}</label>
                <div className="flex items-center justify-center">
                    <FontSizeButton onClick={decreaseFontSize} ariaLabel="Decrease font size" disabled={fontSizeMultiplier <= MIN_FONT_SIZE_MULTIPLIER}>A-</FontSizeButton>
                    <span className="mx-2 text-text-primary tabular-nums">{(fontSizeMultiplier * 100).toFixed(0)}%</span>
                    <FontSizeButton onClick={increaseFontSize} ariaLabel="Increase font size" disabled={fontSizeMultiplier >= MAX_FONT_SIZE_MULTIPLIER}>A+</FontSizeButton>
                </div>
            </div>
            {/* Theme Selector */}
            <div className="mb-4">
                <label htmlFor="theme-select" className="block text-sm font-medium text-text-secondary mb-2">{t('themeLabel')}</label>
                <select id="theme-select" value={activeTheme} onChange={(e) => setActiveTheme(e.target.value)} className="w-full px-2 py-1 rounded-md border border-border-input bg-input-bg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent">
                    {Object.entries(THEMES).map(([themeKey, themeDisplayName]) => (
                        <option key={themeKey} value={themeKey}>{t(`themeName_${themeKey.replace(/-/g, '_')}`, themeDisplayName)}</option>
                    ))}
                </select>
            </div>
            {/* Language Selector */}
            <div>
                <label htmlFor="language-select" className="block text-sm font-medium text-text-secondary mb-2">{t('languageLabel')}</label>
                <select id="language-select" value={currentLanguage} onChange={(e) => setLanguage(e.target.value)} className="w-full px-2 py-1 rounded-md border border-border-input bg-input-bg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent">
                    {supportedLanguages.map(({ code, displayName }) => (
                        <option key={code} value={code}>{displayName}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

// Settings Context for Font Size and Theme (to avoid drilling them into SettingsMenu)
const SettingsContext = createContext();

// Main App Component - Refactored to use LanguageProvider and SettingsContext
function AppContent() {
  // Get translation function via hook
  const { t } = useTranslations();
  const [activeTab, setActiveTab] = useState('me1');
  const [completedMissions, setCompletedMissions] = useState({});
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const settingsMenuRef = useRef(null);
  const settingsButtonRef = useRef(null);

  // Settings state moved to SettingsProvider below
  const { fontSizeMultiplier, activeTheme } = useContext(SettingsContext);

  // --- Short ID Generation and Mapping ---
  const { originalIdToShortIdMap, shortIdToOriginalIdMap } = useMemo(() => { /* ... same generation logic ... */
    const originalToShort = {}; const shortToOriginal = {}; let gameIndex = 1; const gameKeys = ['me1', 'me2', 'me3'];
    gameKeys.forEach(gameKey => { const gameData = missionsData[gameKey]; let missionIndex = 1; Object.keys(gameData).forEach(groupKey => { gameData[groupKey].forEach(mission => { const shortId = `${gameIndex}.${missionIndex}`; originalToShort[mission.id] = shortId; shortToOriginal[shortId] = mission.id; missionIndex++; }); }); gameIndex++; });
    return { originalIdToShortIdMap: originalToShort, shortIdToOriginalIdMap: shortToOriginal };
  }, []);

  // Load only completion state here (settings loaded in providers)
  useEffect(() => {
    if (typeof window !== 'undefined') {
        const savedCompletionString = localStorage.getItem(LOCAL_STORAGE_COMPLETION_KEY); const initialCompletedMissions = {}; if (savedCompletionString) { try { const shortIds = savedCompletionString.split(SHORT_ID_DELIMITER).filter(id => id); shortIds.forEach(shortId => { const originalId = shortIdToOriginalIdMap[shortId]; if (originalId) { initialCompletedMissions[originalId] = true; } }); } catch (e) { localStorage.removeItem(LOCAL_STORAGE_COMPLETION_KEY); } } setCompletedMissions(initialCompletedMissions);
    }
  }, [originalIdToShortIdMap, shortIdToOriginalIdMap]); // Depend on maps

  // Save completion state
  useEffect(() => { if (typeof window !== 'undefined') { const completedOriginalIds = Object.keys(completedMissions).filter(id => completedMissions[id]); if (completedOriginalIds.length > 0) { try { const completedShortIds = completedOriginalIds.map(originalId => originalIdToShortIdMap[originalId]).filter(id => id); const storageString = completedShortIds.join(SHORT_ID_DELIMITER) + SHORT_ID_DELIMITER; localStorage.setItem(LOCAL_STORAGE_COMPLETION_KEY, storageString); } catch (e) { console.error("Failed to save completion state string:", e); } } else { localStorage.removeItem(LOCAL_STORAGE_COMPLETION_KEY); } } }, [completedMissions, originalIdToShortIdMap]);

  // Effect to handle clicks outside settings menu
  useEffect(() => { const handleClickOutside = (event) => { if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target) && settingsButtonRef.current && !settingsButtonRef.current.contains(event.target)) { setIsSettingsMenuOpen(false); } }; if (isSettingsMenuOpen) { document.addEventListener('mousedown', handleClickOutside); } else { document.removeEventListener('mousedown', handleClickOutside); } return () => { document.removeEventListener('mousedown', handleClickOutside); }; }, [isSettingsMenuOpen]);

  // Recursive unchecking logic
  const recursivelyUncheckDependents = (missionIdToUncheck, stateToModify) => { Object.values(missionsData).forEach(gameGroups => { Object.values(gameGroups).forEach(missionArray => { missionArray.forEach(mission => { if (mission.prerequisites.includes(missionIdToUncheck) && stateToModify[mission.id]) { delete stateToModify[mission.id]; recursivelyUncheckDependents(mission.id, stateToModify); } }); }); }); };
  // Toggle mission completion state
  const handleToggleMission = (missionId) => { setCompletedMissions(prev => { let newState = { ...prev }; const missionInfo = Object.values(missionsData).flatMap(g => Object.values(g)).flat().find(m => m.id === missionId); if (!missionInfo) return prev; if (newState[missionId]) { delete newState[missionId]; recursivelyUncheckDependents(missionId, newState); } else { const prereqsMet = missionInfo.prerequisites.every(id => prev[id]); if (prereqsMet) { newState[missionId] = true; } else { console.warn(`Cannot check ${missionId}, prerequisites not met.`); return prev; } } return newState; }); };
  // Toggle settings menu
  const toggleSettingsMenu = () => { setIsSettingsMenuOpen(prev => !prev); };
  // Get grouped missions for the active tab
  const getMissionsForTab = () => { return missionsData[activeTab] || {}; };

  // Tab Button Component - Uses useTranslations hook
  const TabButton = ({ gameId, labelKey }) => {
      const { t } = useTranslations();
      return ( <button onClick={() => setActiveTab(gameId)} className={`px-4 py-2 font-semibold rounded-t-lg focus:outline-none transition-colors duration-200 ease-in-out border-b-2 ${activeTab === gameId ? 'bg-background-list text-text-primary border-accent' : 'bg-background-header text-text-secondary border-transparent hover:bg-background-hover hover:text-text-primary'}`} > {t(labelKey)} </button> );
  }

  return (
    <>
       {/* Theme styles are now global, injected once */}
       <style jsx global>{` /* ... CSS Variables and Theme Styles ... */
          :root { /* CSS Variables */
            --color-background: #111827; --color-background-gradient-end: #000000; --color-background-list: #1f2937; --color-background-header: #374151; --color-background-hover: #4b5563; --color-background-subtle: #1f2937; --color-input-bg: #4b5563;
            --color-text-primary: #f9fafb; --color-text-secondary: #d1d5db; --color-text-disabled: #6b7280; --color-text-footer: #6b7280; --color-text-accent: #93c5fd;
            --color-border: #374151; --color-border-input: #6b7280; --color-border-tab-active: #3b82f6; --color-border-tab-inactive: transparent;
            --color-accent: #3b82f6; --color-focus-ring: #3b82f6;
          }
          html.theme-light { /* Light Theme */
            --color-background: #f9fafb; --color-background-gradient-end: #e5e7eb; --color-background-list: #ffffff; --color-background-header: #f3f4f6; --color-background-hover: #e5e7eb; --color-background-subtle: #ffffff; --color-input-bg: #e5e7eb;
            --color-text-primary: #111827; --color-text-secondary: #374151; --color-text-disabled: #9ca3af; --color-text-footer: #6b7280; --color-text-accent: #2563eb;
            --color-border: #e5e7eb; --color-border-input: #9ca3af; --color-border-tab-active: #2563eb;
            --color-accent: #2563eb; --color-focus-ring: #2563eb;
          }
          html.theme-hc-dark { /* HC Dark Theme */
            --color-background: #000000; --color-background-gradient-end: #000000; --color-background-list: #000000; --color-background-header: #000000; --color-background-hover: #333333; --color-background-subtle: #000000; --color-input-bg: #000000;
            --color-text-primary: #ffffff; --color-text-secondary: #ffff00; --color-text-disabled: #aaaaaa; --color-text-footer: #aaaaaa; --color-text-accent: #ffff00;
            --color-border: #ffffff; --color-border-input: #ffffff; --color-border-tab-active: #ffff00;
            --color-accent: #ffff00; --color-focus-ring: #ffff00;
          }
          html.theme-hc-light { /* HC Light Theme */
            --color-background: #ffffff; --color-background-gradient-end: #ffffff; --color-background-list: #ffffff; --color-background-header: #ffffff; --color-background-hover: #eeeeee; --color-background-subtle: #ffffff; --color-input-bg: #ffffff;
            --color-text-primary: #000000; --color-text-secondary: #0000ff; --color-text-disabled: #555555; --color-text-footer: #555555; --color-text-accent: #0000ff;
            --color-border: #000000; --color-border-input: #000000; --color-border-tab-active: #0000ff;
            --color-accent: #0000ff; --color-focus-ring: #0000ff;
          }
          body { font-family: 'Inter', sans-serif; background-color: var(--color-background); }
          .transition-max-height { transition-property: max-height; } .sticky { position: sticky; } .top-0 { top: 0; } .z-10 { z-index: 10; } .z-20 { z-index: 20; } /* For settings menu */
          /* Utility classes using CSS variables */
          .bg-background { background-color: var(--color-background); } .bg-gradient-to-b { background-image: linear-gradient(to bottom, var(--color-background), var(--color-background-gradient-end)); } .bg-background-list { background-color: var(--color-background-list); } .bg-background-header { background-color: var(--color-background-header); } .hover\\:bg-background-hover:hover { background-color: var(--color-background-hover); } .bg-background-subtle { background-color: var(--color-background-subtle); } .bg-input-bg { background-color: var(--color-input-bg); }
          .text-text-primary { color: var(--color-text-primary); } .text-text-secondary { color: var(--color-text-secondary); } .text-text-disabled { color: var(--color-text-disabled); } .text-text-footer { color: var(--color-text-footer); } .text-accent { color: var(--color-text-accent); }
          .border-border { border-color: var(--color-border); } .border-border-input { border-color: var(--color-border-input); } .border-accent { border-color: var(--color-accent); } .border-transparent { border-color: transparent; }
          .focus\\:ring-accent:focus { --tw-ring-color: var(--color-focus-ring); box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); } .focus\\:ring-offset-background:focus { --tw-ring-offset-color: var(--color-background); } .text-accent { color: var(--color-accent); }
        `}</style>
      <main className="min-h-screen bg-gradient-to-b text-text-primary p-4 sm:p-8">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet"/>

        <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-between items-center mb-8 gap-4 relative">
                <h1 className="text-3xl sm:text-4xl font-bold text-accent"> {t('pageTitle')} </h1>
                 <div className="relative">
                     <button ref={settingsButtonRef} onClick={toggleSettingsMenu} aria-label={t('settingsLabel')} aria-expanded={isSettingsMenuOpen} aria-controls="settings-menu" className="p-2 rounded-md text-text-secondary hover:bg-background-hover hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent" > <SettingsIcon /> </button>
                     {/* Settings Menu Component - Pass state down */}
                     <SettingsMenu
                        isOpen={isSettingsMenuOpen}
                        menuRef={settingsMenuRef}
                        buttonRef={settingsButtonRef}
                        closeMenu={() => setIsSettingsMenuOpen(false)}
                     />
                 </div>
            </div>

          <div className="mb-6 border-b border-border flex flex-wrap space-x-1">
            <TabButton gameId="me1" labelKey="tabME1" />
            <TabButton gameId="me2" labelKey="tabME2" />
            <TabButton gameId="me3" labelKey="tabME3" />
          </div>

          <div>
            <MissionList
              gameId={activeTab}
              groupedMissions={getMissionsForTab()}
              completedMissions={completedMissions}
              onToggleMission={handleToggleMission}
              // Removed t prop
            />
          </div>

           <footer className="mt-12 text-center text-text-footer text-sm">
             <p>{t('footerSource')}</p>
             <p>{t('footerSave')}</p>
           </footer>
        </div>
      </main>
    </>
  );
}

// Settings Provider Component to manage Font Size and Theme state
const SettingsProvider = ({ children }) => {
    const [fontSizeMultiplier, setFontSizeMultiplier] = useState(DEFAULT_FONT_SIZE_MULTIPLIER);
    const [activeTheme, setActiveTheme] = useState(DEFAULT_THEME);

    // Load settings from localStorage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedFontSize = localStorage.getItem(LOCAL_STORAGE_FONT_KEY); if (savedFontSize) { const s = parseFloat(savedFontSize); if(!isNaN(s) && s >= MIN_FONT_SIZE_MULTIPLIER && s <= MAX_FONT_SIZE_MULTIPLIER) setFontSizeMultiplier(s); else localStorage.removeItem(LOCAL_STORAGE_FONT_KEY); }
            const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY); if (savedTheme && THEMES[savedTheme]) { setActiveTheme(savedTheme); } else { localStorage.removeItem(LOCAL_STORAGE_THEME_KEY); }
        }
    }, []);

    // Save font size state & apply
    useEffect(() => { if (typeof window !== 'undefined') { try { localStorage.setItem(LOCAL_STORAGE_FONT_KEY, fontSizeMultiplier.toString()); } catch (e) { console.error("Failed to save font size state:", e); } const newSize = BASE_HTML_FONT_SIZE_PX * fontSizeMultiplier; document.documentElement.style.fontSize = `${newSize}px`; } }, [fontSizeMultiplier]);
    // Save theme state & apply
    useEffect(() => { if (typeof window !== 'undefined') { try { localStorage.setItem(LOCAL_STORAGE_THEME_KEY, activeTheme); } catch (e) { console.error("Failed to save theme state:", e); } const root = document.documentElement; Object.keys(THEMES).forEach(themeKey => root.classList.remove(themeKey)); root.classList.add(activeTheme); } }, [activeTheme]);

    const increaseFontSize = () => { setFontSizeMultiplier(prev => Math.min(MAX_FONT_SIZE_MULTIPLIER, prev + FONT_SIZE_STEP)); };
    const decreaseFontSize = () => { setFontSizeMultiplier(prev => Math.max(MIN_FONT_SIZE_MULTIPLIER, prev - FONT_SIZE_STEP)); };

    const value = {
        fontSizeMultiplier,
        increaseFontSize,
        decreaseFontSize,
        activeTheme,
        setActiveTheme
    };

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};

// Font Size Button (no changes needed, but keep it defined)
const FontSizeButton = ({ onClick, children, ariaLabel, disabled }) => ( <button onClick={onClick} disabled={disabled} aria-label={ariaLabel} className={`px-2 py-1 mx-1 rounded-md border border-border-input text-text-secondary hover:bg-background-hover focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed`} > {children} </button> );


// Export the main App component wrapped in Providers
export default function RootApp() {
    return (
        <LanguageProvider>
            <SettingsProvider>
                <AppContent />
            </SettingsProvider>
        </LanguageProvider>
    );
}
