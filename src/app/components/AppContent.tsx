import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from './language';
import { SettingsMenu } from './settings';
import {
  type GameId,
  type MissionId,
  findMission,
  forEachMission,
  getGameData
} from '@/app/behavior/missions';
import { LOCAL_STORAGE_COMPLETION_KEY, SHORT_ID_DELIMITER } from './constants';
import { TabButton } from './layout';
import { MissionList } from './missions';
import { SettingsIcon } from './icons';

const AppContent = () => {
  const { t } = useTranslations();
  const [activeTab, setActiveTab] = useState<GameId>('me1');
  const [completedMissions, setCompletedMissions] = useState<Record<string, boolean>>({});
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const settingsMenuRef = useRef<HTMLDivElement>(null);

  const gameData = getGameData();

  const {
    originalIdToShortIdMap,
    shortIdToOriginalIdMap,
  } = useMemo(() => {
    const originalIdToShortIdMap: Record<string, string> = {};
    const shortIdToOriginalIdMap: Record<string, string> = {};

    gameData.games.forEach(({ sections }, gameIndex) => {
      sections.forEach(({ missions }) => {
        missions.forEach(({ id: missionId }, missionIndex) => {
          const shortId = `${gameIndex}.${missionIndex}`;
          originalIdToShortIdMap[missionId] = shortId;
          shortIdToOriginalIdMap[shortId] = missionId;
        });
      });
    });

    return {
      originalIdToShortIdMap,
      shortIdToOriginalIdMap,
    };
  }, [gameData.games]);

  // Load only completion state here (settings loaded in providers)
  useEffect(() => {
    if (typeof window === 'undefined')
      return;

    const savedCompletionString = localStorage.getItem(LOCAL_STORAGE_COMPLETION_KEY);
    const initialCompletedMissions: Record<string, boolean> = {};
    if (savedCompletionString) {
      try {
        const shortIds = savedCompletionString
          .split(SHORT_ID_DELIMITER)
          .filter(id => id);

        shortIds.forEach((shortId) => {
          const originalId = shortIdToOriginalIdMap[shortId];
          if (originalId)
            initialCompletedMissions[originalId] = true;
        });
      } catch {
        localStorage.removeItem(LOCAL_STORAGE_COMPLETION_KEY);
      }
    }
    setCompletedMissions(initialCompletedMissions);

  }, [originalIdToShortIdMap, shortIdToOriginalIdMap]); // Depend on maps

  // Save completion state
  useEffect(() => {
    if (typeof window === 'undefined')
      return;

    const completedOriginalIds = Object.keys(completedMissions).filter(id => completedMissions[id]);

    if (completedOriginalIds.length > 0) {
      const completedShortIds = completedOriginalIds
        .map(originalId => originalIdToShortIdMap[originalId])
        .filter(id => id);

      const storageString = completedShortIds.join(SHORT_ID_DELIMITER);
      localStorage.setItem(LOCAL_STORAGE_COMPLETION_KEY, storageString);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_COMPLETION_KEY);
    }
  }, [completedMissions, originalIdToShortIdMap]);

  // Effect to handle clicks outside settings menu
  useEffect(() => {
    const handleClickOutside = () => {
      if (settingsMenuRef.current)
        setIsSettingsMenuOpen(false);
    };

    if (isSettingsMenuOpen)
      document.addEventListener("mousedown", handleClickOutside);
    else
      document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSettingsMenuOpen]);

  // Recursive unchecking logic
  const recursivelyUncheckDependents = (missionIdToUncheck: MissionId, stateToModify: Record<string, boolean>) => {
    forEachMission(mission => {
      const includesPrereqs = mission.prerequisites.includes(missionIdToUncheck);
      if (includesPrereqs && stateToModify[mission.id]) {
        delete stateToModify[mission.id];
        recursivelyUncheckDependents(mission.id, stateToModify);
      }
    });
  };

  // Toggle mission completion state
  const handleToggleMission = (missionId: MissionId) => setCompletedMissions(prev => {
    const newState = { ...prev };
    const missionInfo = findMission(missionId);

    if (!missionInfo)
      return prev;

    if (newState[missionId]) {
      delete newState[missionId];
      recursivelyUncheckDependents(missionId, newState);
    } else {
      const prereqsMet = missionInfo.prerequisites.every((id) => prev[id]);
      if (prereqsMet) {
        newState[missionId] = true;
      } else {
        console.warn(`Cannot check ${missionId}, prerequisites not met.`);
        return prev;
      }
    }
    return newState;
  });

  // Toggle settings menu
  const toggleSettingsMenu = () => setIsSettingsMenuOpen(prev => !prev);

  // Get grouped missions for the active tab
  const getActiveGame = () => {
    const game = gameData.games.find(({ id }) => id === activeTab);
    if (game)
      return game;

    throw Error(`Unknown game ID set as currently active tab: ${activeTab}`);
  };

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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4 relative">
            <h1 className="text-3xl sm:text-4xl font-bold text-accent">{t('pageTitle')}</h1>
            <div className="relative">
              <button
                onClick={toggleSettingsMenu}
                aria-label={t('settingsLabel')}
                aria-expanded={isSettingsMenuOpen}
                aria-controls="settings-menu"
                className="p-2 rounded-md text-text-secondary hover:bg-background-hover hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <SettingsIcon />
              </button>
              <SettingsMenu
                isOpen={isSettingsMenuOpen}
                menuRef={settingsMenuRef}
              />
            </div>
          </div>

          <div className="mb-6 border-b border-border flex flex-wrap space-x-1">
            <TabButton labelKey="tabME1" onClick={() => setActiveTab("me1")} isActiveTab={activeTab === "me1"} />
            <TabButton labelKey="tabME2" onClick={() => setActiveTab("me2")} isActiveTab={activeTab === "me2"} />
            <TabButton labelKey="tabME3" onClick={() => setActiveTab("me3")} isActiveTab={activeTab === "me3"} />
          </div>

          <div>
            <MissionList
              game={getActiveGame()}
              completedMissions={completedMissions}
              onToggleMission={handleToggleMission}
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

export default AppContent;
