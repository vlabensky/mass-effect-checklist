'use client'

import React, { useState, useEffect, useMemo, useRef } from 'react'; // Added useRef

// --- Data Structure ---
// (Data remains the same)
const missionsData = {
  me1: {
    "Prologue": [
        { id: 'me1_eden_prime', name: 'Find the Beacon', prerequisites: [], wikiUrl: 'https://masseffect.fandom.com/wiki/Find_the_Beacon' },
    ],
    "Main Story": [
        { id: 'me1_citadel_expose_saren', name: 'Citadel: Expose Saren', prerequisites: ['me1_eden_prime'], wikiUrl: 'https://masseffect.fandom.com/wiki/Citadel:_Expose_Saren' },
        { id: 'me1_find_liara', name: 'Find Liara T\'Soni', prerequisites: ['me1_citadel_expose_saren'], wikiUrl: 'https://masseffect.fandom.com/wiki/Find_Liara_T%27Soni' },
        { id: 'me1_feros', name: 'Feros: Geth Attack', prerequisites: ['me1_citadel_expose_saren'], wikiUrl: 'https://masseffect.fandom.com/wiki/Feros:_Geth_Attack' },
        { id: 'me1_noveria', name: 'Noveria: Matriarch Benezia', prerequisites: ['me1_citadel_expose_saren'], wikiUrl: 'https://masseffect.fandom.com/wiki/Noveria#Walkthrough' },
        { id: 'me1_virmire', name: 'Virmire: Saren\'s Plan', prerequisites: ['me1_find_liara', 'me1_feros', 'me1_noveria'], wikiUrl: 'https://masseffect.fandom.com/wiki/Virmire:_Saren%27s_Plan' },
        { id: 'me1_ilum', name: 'Ilos: Find the Conduit', prerequisites: ['me1_virmire'], wikiUrl: 'https://masseffect.fandom.com/wiki/Ilos:_Find_the_Conduit' },
        { id: 'me1_final_battle', name: 'Race Against Time: Final Battle', prerequisites: ['me1_ilum'], wikiUrl: 'https://masseffect.fandom.com/wiki/Race_Against_Time:_Final_Battle' },
    ]
  },
  me2: {
    "Prologue & Freedom": [
        { id: 'me2_prologue', name: 'Prologue: Awakening', prerequisites: [], wikiUrl: 'https://masseffect.fandom.com/wiki/Prologue:_Awakening' },
        { id: 'me2_freedom', name: 'Freedom\'s Progress', prerequisites: ['me2_prologue'], wikiUrl: 'https://masseffect.fandom.com/wiki/Freedom%27s_Progress' },
        { id: 'me2_citadel_anderson', name: 'Citadel: Captain Anderson', prerequisites: ['me2_freedom'], wikiUrl: 'https://masseffect.fandom.com/wiki/Citadel:_Captain_Anderson' },
    ],
    "Recruitment (Dossiers - Part 1)": [
        { id: 'me2_recruit_archangel', name: 'Dossier: Archangel', prerequisites: ['me2_freedom'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_Archangel' },
        { id: 'me2_recruit_professor', name: 'Dossier: The Professor', prerequisites: ['me2_freedom'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_The_Professor' },
        { id: 'me2_recruit_warlord', name: 'Dossier: The Warlord', prerequisites: ['me2_freedom'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_The_Warlord' },
        { id: 'me2_recruit_convict', name: 'Dossier: The Convict', prerequisites: ['me2_freedom'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_The_Convict' },
    ],
    "Plot Missions (Mid-Game)": [
        { id: 'me2_horizon', name: 'Horizon', prerequisites: ['me2_recruit_archangel', 'me2_recruit_professor', 'me2_recruit_warlord', 'me2_recruit_convict'], wikiUrl: 'https://masseffect.fandom.com/wiki/Horizon_(mission)' },
    ],
    "Recruitment (Dossiers - Part 2)": [
        { id: 'me2_recruit_assassin', name: 'Dossier: The Assassin', prerequisites: ['me2_horizon'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_The_Assassin' },
        { id: 'me2_recruit_justicar', name: 'Dossier: The Justicar', prerequisites: ['me2_horizon'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_The_Justicar' },
        { id: 'me2_recruit_tali', name: 'Dossier: Tali', prerequisites: ['me2_horizon'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_Tali' },
    ],
     "Plot Missions (Late-Game)": [
        { id: 'me2_collector_ship', name: 'Collector Ship', prerequisites: ['me2_horizon'], wikiUrl: 'https://masseffect.fandom.com/wiki/Collector_Ship_(mission)' }, // Simplified dependency
        { id: 'me2_iff', name: 'Acquire Reaper IFF', prerequisites: ['me2_collector_ship'], wikiUrl: 'https://masseffect.fandom.com/wiki/Reaper_IFF_(mission)' },
        { id: 'me2_suicide_mission', name: 'Suicide Mission', prerequisites: ['me2_iff'], wikiUrl: 'https://masseffect.fandom.com/wiki/Suicide_Mission' },
    ]
  },
  me3: {
    "Opening Missions": [
        { id: 'me3_prologue', name: 'Prologue: Earth', prerequisites: [], wikiUrl: 'https://masseffect.fandom.com/wiki/Prologue:_Earth' },
        { id: 'me3_mars', name: 'Priority: Mars', prerequisites: ['me3_prologue'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Mars' },
        { id: 'me3_citadel1', name: 'Priority: The Citadel I', prerequisites: ['me3_mars'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_The_Citadel_I' },
    ],
    "Main Story Arc": [
        { id: 'me3_palaven', name: 'Priority: Palaven', prerequisites: ['me3_citadel1'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Palaven' },
        { id: 'me3_surkesh', name: 'Priority: Sur\'Kesh', prerequisites: ['me3_palaven'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Sur%27Kesh' },
        { id: 'me3_tuchanka', name: 'Priority: Tuchanka', prerequisites: ['me3_surkesh'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Tuchanka' },
        { id: 'me3_citadel2', name: 'Priority: The Citadel II', prerequisites: ['me3_tuchanka'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_The_Citadel_II' },
        { id: 'me3_perseus_veil', name: 'Priority: Perseus Veil', prerequisites: ['me3_citadel2'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Geth_Dreadnought' }, // Using Geth Dreadnought mission
        { id: 'me3_rannoch', name: 'Priority: Rannoch', prerequisites: ['me3_perseus_veil'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Rannoch' },
        { id: 'me3_thessia', name: 'Priority: Thessia', prerequisites: ['me3_rannoch'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Thessia' },
        { id: 'me3_horizon', name: 'Priority: Horizon', prerequisites: ['me3_thessia'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Horizon' },
    ],
    "End Game": [
        { id: 'me3_cerberus_hq', name: 'Priority: Cerberus Headquarters', prerequisites: ['me3_horizon'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Cerberus_Headquarters' },
        { id: 'me3_earth', name: 'Priority: Earth', prerequisites: ['me3_cerberus_hq'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Earth_(mission)' },
    ]
  },
};

// --- Constants ---
const FONT_SIZE_STEP = 0.1;
const MIN_FONT_SIZE_MULTIPLIER = 0.7;
const MAX_FONT_SIZE_MULTIPLIER = 1.5;
const DEFAULT_FONT_SIZE_MULTIPLIER = 1.0;
const BASE_HTML_FONT_SIZE_PX = 16;
const DEFAULT_THEME = 'theme-dark';
const THEMES = {
    'theme-dark': 'Dark',
    'theme-light': 'Light',
    'theme-hc-dark': 'High Contrast Dark',
    'theme-hc-light': 'High Contrast Light',
};

// --- Components ---

// SettingsIcon (Cog) Component
const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M11.49 3.17a.75.75 0 0 1 1.02.67l.09 1.12a1.75 1.75 0 0 0 2.44 1.44l1.06-.53a.75.75 0 1 1 .67 1.02l-.53 1.06a1.75 1.75 0 0 0 1.44 2.44l1.12.09a.75.75 0 0 1 .67 1.02l-.09 1.12a1.75 1.75 0 0 0-1.44 2.44l.53 1.06a.75.75 0 1 1-1.02.67l-1.06-.53a1.75 1.75 0 0 0-2.44 1.44l-.09 1.12a.75.75 0 0 1-1.02.67l-1.12-.09a1.75 1.75 0 0 0-2.44-1.44l-1.06.53a.75.75 0 1 1-.67-1.02l.53-1.06a1.75 1.75 0 0 0-1.44-2.44l-1.12-.09a.75.75 0 0 1-.67-1.02l.09-1.12a1.75 1.75 0 0 0 1.44-2.44l-.53-1.06a.75.75 0 1 1 1.02-.67l1.06.53a1.75 1.75 0 0 0 2.44-1.44l.09-1.12a.75.75 0 0 1 .67-1.02l1.12.09Zm-1.98 7.72a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z" clipRule="evenodd" />
    </svg>
);


// WikiLinkIcon Component
const WikiLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
     <path fillRule="evenodd" d="M8.25 3.75H6a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 6 18.75h10.5A2.25 2.25 0 0 0 18.75 16.5V14.25a.75.75 0 0 0-1.5 0V16.5a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 0 0-1.5Z" clipRule="evenodd" />
     <path fillRule="evenodd" d="M14.25 3.75a.75.75 0 0 0 0 1.5h1.69L9.72 11.47a.75.75 0 1 0 1.06 1.06l6.22-6.22v1.69a.75.75 0 0 0 1.5 0V3.75h-3.75Z" clipRule="evenodd" />
  </svg>
);

// ChevronIcon Component
const ChevronIcon = ({ expanded }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
         className={`w-4 h-4 transition-transform duration-200 ease-in-out ${expanded ? 'rotate-180' : ''}`}>
        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

// MissionItem Component
const MissionItem = ({ mission, completed, onToggle, prerequisitesMet, missionNameMap, completedMissions }) => {
  const [isPrereqsExpanded, setIsPrereqsExpanded] = useState(false);
  const handleChange = () => { if (prerequisitesMet || completed) { onToggle(mission.id); } };
  const togglePrereqs = (e) => { e.stopPropagation(); setIsPrereqsExpanded(!isPrereqsExpanded); };
  const canInteract = prerequisitesMet || completed;
  const hasPrerequisites = mission.prerequisites && mission.prerequisites.length > 0;

  return (
    <>
        <li className={`flex items-center justify-between border-b border-border last:border-b-0 transition-colors duration-150 ${!canInteract ? 'opacity-50' : 'hover:bg-background-hover'}`}>
            <div className="flex items-center flex-grow py-2 px-3 min-w-0">
                <input type="checkbox" id={mission.id} checked={completed} onChange={handleChange} disabled={!canInteract} className={`mr-3 h-5 w-5 rounded border-border-input text-accent focus:ring-accent bg-input-bg disabled:opacity-70 flex-shrink-0 ${canInteract ? 'cursor-pointer' : 'cursor-not-allowed'}`} />
                {hasPrerequisites && ( <button onClick={togglePrereqs} className="mr-2 p-0.5 rounded text-text-secondary hover:bg-background-hover hover:text-accent focus:outline-none focus:ring-1 focus:ring-accent flex-shrink-0" aria-expanded={isPrereqsExpanded} aria-controls={`prereqs-${mission.id}`} title={isPrereqsExpanded ? "Hide prerequisites" : "Show prerequisites"} > <ChevronIcon expanded={isPrereqsExpanded} /> <span className="sr-only">{isPrereqsExpanded ? "Hide prerequisites" : "Show prerequisites"}</span> </button> )}
                {!hasPrerequisites && <div className="w-4 mr-2 flex-shrink-0" style={{marginLeft: '0.125rem', marginRight: '0.625rem'}}></div>}
                <label htmlFor={mission.id} className={`flex-grow ${completed ? 'line-through text-text-disabled' : 'text-text-primary'} ${canInteract ? 'cursor-pointer' : 'cursor-not-allowed'} truncate`} > {mission.name} </label>
            </div>
            {mission.wikiUrl && ( <div className="py-2 px-3 flex-shrink-0"> <a href={mission.wikiUrl} target="_blank" rel="noopener noreferrer" title={`View "${mission.name}" on Mass Effect Wiki`} className="p-1 rounded-md text-text-secondary hover:bg-background-hover hover:text-accent focus:outline-none focus:ring-2 focus:ring-offset-background focus:ring-accent transition-colors flex-shrink-0 inline-block" onClick={(e) => e.stopPropagation()} > <WikiLinkIcon /> <span className="sr-only">Wiki Link</span> </a> </div> )}
        </li>
        {hasPrerequisites && (
            <div id={`prereqs-${mission.id}`} className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isPrereqsExpanded ? 'max-h-96' : 'max-h-0'}`} style={{transitionProperty: 'max-height'}} >
                <ul className="pt-1 pb-2 pl-12 pr-3 bg-background-subtle border-b border-border">
                    <li className="text-xs text-text-secondary mb-1">Prerequisites:</li>
                    {mission.prerequisites.map(prereqId => { const isPrereqCompleted = completedMissions.hasOwnProperty(prereqId); return ( <li key={prereqId} className={`text-sm py-0.5 ${isPrereqCompleted ? 'text-text-disabled line-through' : 'text-text-secondary'}`}> - {missionNameMap[prereqId] || 'Unknown Mission'} </li> ); })}
                </ul>
            </div>
        )}
    </>
  );
};

// MissionList Component
const MissionList = ({ gameId, groupedMissions, completedMissions, onToggleMission }) => {
  const missionNameMap = useMemo(() => { const map = {}; Object.values(groupedMissions).forEach(arr => arr.forEach(m => map[m.id] = m.name)); return map; }, [groupedMissions]);
  const checkPrerequisites = (mission) => { if (!mission.prerequisites || mission.prerequisites.length === 0) return true; return mission.prerequisites.every(id => completedMissions.hasOwnProperty(id)); };
  const groupNames = Object.keys(groupedMissions);

  return (
    <div className="bg-background-list rounded-lg shadow-md">
      {groupNames.map((groupName, index) => (
        <section key={groupName} aria-labelledby={`group-header-${gameId}-${index}`}>
          <h3 id={`group-header-${gameId}-${index}`} className="text-lg font-semibold text-accent bg-background-header px-3 py-2 sticky top-0 z-10 border-b border-t border-border first:border-t-0" > {groupName} </h3>
          <ul className="list-none p-0 m-0"> {groupedMissions[groupName].map((mission) => ( <MissionItem key={mission.id} mission={mission} completed={!!completedMissions[mission.id]} onToggle={onToggleMission} prerequisitesMet={checkPrerequisites(mission)} missionNameMap={missionNameMap} completedMissions={completedMissions} /> ))} </ul>
        </section>
      ))}
    </div>
  );
};

// Main App Component - Added Settings Menu
export default function App() {
  const [activeTab, setActiveTab] = useState('me1');
  const [completedMissions, setCompletedMissions] = useState({});
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(DEFAULT_FONT_SIZE_MULTIPLIER);
  const [activeTheme, setActiveTheme] = useState(DEFAULT_THEME);
  // State for settings menu visibility
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const settingsMenuRef = useRef(null); // Ref for the settings menu
  const settingsButtonRef = useRef(null); // Ref for the settings button

  // Load state from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
        const savedCompletionState = localStorage.getItem('massEffectChecklistState'); if (savedCompletionState) { try { const d = JSON.parse(savedCompletionState); if(typeof d === 'object' && d !== null) setCompletedMissions(d); else localStorage.removeItem('massEffectChecklistState'); } catch (e) { localStorage.removeItem('massEffectChecklistState'); } }
        const savedFontSize = localStorage.getItem('massEffectFontSizeMultiplier'); if (savedFontSize) { const s = parseFloat(savedFontSize); if(!isNaN(s) && s >= MIN_FONT_SIZE_MULTIPLIER && s <= MAX_FONT_SIZE_MULTIPLIER) setFontSizeMultiplier(s); else localStorage.removeItem('massEffectFontSizeMultiplier'); }
        const savedTheme = localStorage.getItem('massEffectActiveTheme'); if (savedTheme && THEMES[savedTheme]) { setActiveTheme(savedTheme); } else { localStorage.removeItem('massEffectActiveTheme'); }
    }
  }, []);

  // Save completion state
  useEffect(() => { if (typeof window !== 'undefined') { if (Object.keys(completedMissions).length > 0) { try { localStorage.setItem('massEffectChecklistState', JSON.stringify(completedMissions)); } catch (e) { console.error("Failed to save completion state:", e); } } else { localStorage.removeItem('massEffectChecklistState'); } } }, [completedMissions]);

  // Save font size state & apply
  useEffect(() => { if (typeof window !== 'undefined') { try { localStorage.setItem('massEffectFontSizeMultiplier', fontSizeMultiplier.toString()); } catch (e) { console.error("Failed to save font size state:", e); } const newSize = BASE_HTML_FONT_SIZE_PX * fontSizeMultiplier; document.documentElement.style.fontSize = `${newSize}px`; } }, [fontSizeMultiplier]);

  // Save theme state & apply
  useEffect(() => { if (typeof window !== 'undefined') { try { localStorage.setItem('massEffectActiveTheme', activeTheme); } catch (e) { console.error("Failed to save theme state:", e); } const root = document.documentElement; Object.keys(THEMES).forEach(themeKey => root.classList.remove(themeKey)); root.classList.add(activeTheme); } }, [activeTheme]);

  // Effect to handle clicks outside the settings menu to close it
   useEffect(() => {
     const handleClickOutside = (event) => {
       if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target) &&
           settingsButtonRef.current && !settingsButtonRef.current.contains(event.target)) {
         setIsSettingsMenuOpen(false);
       }
     };

     if (isSettingsMenuOpen) {
       document.addEventListener('mousedown', handleClickOutside);
     } else {
       document.removeEventListener('mousedown', handleClickOutside);
     }

     return () => {
       document.removeEventListener('mousedown', handleClickOutside);
     };
   }, [isSettingsMenuOpen]); // Only run when menu visibility changes


  // Recursive unchecking logic
  const recursivelyUncheckDependents = (missionIdToUncheck, stateToModify) => { Object.values(missionsData).forEach(gameGroups => { Object.values(gameGroups).forEach(missionArray => { missionArray.forEach(mission => { if (mission.prerequisites.includes(missionIdToUncheck) && stateToModify[mission.id]) { delete stateToModify[mission.id]; recursivelyUncheckDependents(mission.id, stateToModify); } }); }); }); };

  // Toggle mission completion state
  const handleToggleMission = (missionId) => { setCompletedMissions(prev => { let newState = { ...prev }; const missionInfo = Object.values(missionsData).flatMap(g => Object.values(g)).flat().find(m => m.id === missionId); if (!missionInfo) return prev; if (newState[missionId]) { delete newState[missionId]; recursivelyUncheckDependents(missionId, newState); } else { const prereqsMet = missionInfo.prerequisites.every(id => prev[id]); if (prereqsMet) { newState[missionId] = true; } else { console.warn(`Cannot check ${missionId}, prerequisites not met.`); return prev; } } return newState; }); };

  // Font Size Control Functions
  const increaseFontSize = () => { setFontSizeMultiplier(prev => Math.min(MAX_FONT_SIZE_MULTIPLIER, prev + FONT_SIZE_STEP)); };
  const decreaseFontSize = () => { setFontSizeMultiplier(prev => Math.max(MIN_FONT_SIZE_MULTIPLIER, prev - FONT_SIZE_STEP)); };

  // Toggle settings menu
  const toggleSettingsMenu = () => { setIsSettingsMenuOpen(prev => !prev); };

  // Get grouped missions for the active tab
  const getMissionsForTab = () => { return missionsData[activeTab] || {}; };

  // Tab Button Component
  const TabButton = ({ gameId, label }) => ( <button onClick={() => setActiveTab(gameId)} className={`px-4 py-2 font-semibold rounded-t-lg focus:outline-none transition-colors duration-200 ease-in-out border-b-2 ${activeTab === gameId ? 'bg-background-list text-text-primary border-accent' : 'bg-background-header text-text-secondary border-transparent hover:bg-background-hover hover:text-text-primary'}`} > {label} </button> );

  // Font Size Control Button Component
  const FontSizeButton = ({ onClick, children, ariaLabel, disabled }) => ( <button onClick={onClick} disabled={disabled} aria-label={ariaLabel} className={`px-2 py-1 mx-1 rounded-md border border-border-input text-text-secondary hover:bg-background-hover focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed`} > {children} </button> );

  return (
    <>
       {/* Inject theme styles and CSS variables */}
       <style jsx global>{`
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
          .bg-background { background-color: var(--color-background); } .bg-gradient-to-b { background-image: linear-gradient(to bottom, var(--color-background), var(--color-background-gradient-end)); } .bg-background-list { background-color: var(--color-background-list); } .bg-background-header { background-color: var(--color-background-header); } .bg-background-hover:hover { background-color: var(--color-background-hover); } .bg-background-subtle { background-color: var(--color-background-subtle); } .bg-input-bg { background-color: var(--color-input-bg); }
          .text-text-primary { color: var(--color-text-primary); } .text-text-secondary { color: var(--color-text-secondary); } .text-text-disabled { color: var(--color-text-disabled); } .text-text-footer { color: var(--color-text-footer); } .text-accent { color: var(--color-text-accent); }
          .border-border { border-color: var(--color-border); } .border-border-input { border-color: var(--color-border-input); } .border-accent { border-color: var(--color-accent); } .border-transparent { border-color: transparent; }
          .focus\\:ring-accent:focus { --tw-ring-color: var(--color-focus-ring); box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); } .focus\\:ring-offset-background:focus { --tw-ring-offset-color: var(--color-background); } .text-accent { color: var(--color-accent); }
        `}</style>

      <main className="min-h-screen bg-gradient-to-b text-text-primary p-4 sm:p-8">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet"/>

        <div className="max-w-4xl mx-auto">
            {/* Header Row */}
            <div className="flex flex-wrap justify-between items-center mb-8 gap-4 relative"> {/* Added relative positioning */}
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-bold text-accent">
                    Mass Effect Checklist
                </h1>
                 {/* Settings Cog Button */}
                 <div className="relative"> {/* Wrapper for positioning menu */}
                     <button
                         ref={settingsButtonRef} // Add ref to button
                         onClick={toggleSettingsMenu}
                         aria-label="Open settings menu"
                         aria-expanded={isSettingsMenuOpen}
                         aria-controls="settings-menu"
                         className="p-2 rounded-md text-text-secondary hover:bg-background-hover hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
                     >
                         <SettingsIcon />
                     </button>

                     {/* Settings Menu (Conditionally Rendered) */}
                     {isSettingsMenuOpen && (
                         <div
                             ref={settingsMenuRef} // Add ref to menu
                             id="settings-menu"
                             role="menu"
                             // Use theme variables for menu background, border, shadow
                             className="absolute top-full right-0 mt-2 w-64 p-4 rounded-md shadow-lg bg-background-list border border-border z-20"
                         >
                             {/* Font Size Controls */}
                             <div className="mb-4">
                                 <label className="block text-sm font-medium text-text-secondary mb-2">Font Size</label>
                                 <div className="flex items-center justify-center">
                                     <FontSizeButton onClick={decreaseFontSize} ariaLabel="Decrease font size" disabled={fontSizeMultiplier <= MIN_FONT_SIZE_MULTIPLIER}>A-</FontSizeButton>
                                     <span className="mx-2 text-text-primary tabular-nums">{(fontSizeMultiplier * 100).toFixed(0)}%</span>
                                     <FontSizeButton onClick={increaseFontSize} ariaLabel="Increase font size" disabled={fontSizeMultiplier >= MAX_FONT_SIZE_MULTIPLIER}>A+</FontSizeButton>
                                 </div>
                             </div>

                             {/* Theme Selector */}
                             <div>
                                  <label htmlFor="theme-select" className="block text-sm font-medium text-text-secondary mb-2">Theme</label>
                                  <select
                                      id="theme-select"
                                      value={activeTheme}
                                      onChange={(e) => setActiveTheme(e.target.value)}
                                      className="w-full px-2 py-1 rounded-md border border-border-input bg-input-bg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                                  >
                                      {Object.entries(THEMES).map(([themeKey, themeName]) => (
                                          <option key={themeKey} value={themeKey}>{themeName}</option>
                                      ))}
                                  </select>
                             </div>
                         </div>
                     )}
                 </div>
            </div>


          <div className="mb-6 border-b border-border flex flex-wrap space-x-1">
            <TabButton gameId="me1" label="Mass Effect 1" />
            <TabButton gameId="me2" label="Mass Effect 2" />
            <TabButton gameId="me3" label="Mass Effect 3" />
          </div>

          <div>
            <MissionList
              gameId={activeTab}
              groupedMissions={getMissionsForTab()}
              completedMissions={completedMissions}
              onToggleMission={handleToggleMission}
            />
          </div>

           <footer className="mt-12 text-center text-text-footer text-sm">
             <p>Mission data based on Mass Effect Wiki. Dependencies are simplified examples.</p>
             <p>Your progress is saved locally in your browser.</p>
           </footer>
        </div>
      </main>
    </>
  );
}
