/* eslint-disable @next/next/no-page-custom-font */
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
  const settingsButtonRef = useRef<HTMLButtonElement>(null);

  const gameData = getGameData();

  const {
    originalIdToShortIdMap,
    shortIdToOriginalIdMap,
  } = useMemo(() => {
    const originalIdToShortIdMap: Record<string, string> = {};
    const shortIdToOriginalIdMap: Record<string, string> = {};

    gameData.games.forEach(({ sections }, gameIndex) => {
      sections.forEach(({ missions }, sectionIndex) => {
        missions.forEach(({ id: missionId }, missionIndex) => {
          const shortId = `${gameIndex}.${sectionIndex}.${missionIndex}`;
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
    const handleClickOutside = (event: MouseEvent) => {
      const isOutside = settingsMenuRef.current
        && !settingsMenuRef.current.contains(event.target as Node)
        && settingsButtonRef.current
        && !settingsButtonRef.current.contains(event.target as Node);

      if (isOutside)
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
      <main className="min-h-screen bg-gradient-to-b text-text-primary p-4 sm:p-8">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4 relative">
            <h1 className="text-3xl sm:text-4xl font-bold text-accent">{t('pageTitle')}</h1>
            <div className="relative">
              <button
                ref={settingsButtonRef}
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

          <MissionList
            game={getActiveGame()}
            completedMissions={completedMissions}
            onToggleMission={handleToggleMission}
          />

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
