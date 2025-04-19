'use client'

import React, { useState, useEffect, useMemo } from 'react';

// --- Data Structure ---
// Restructured data to include mission groups.
// Each game now has an object where keys are group names
// and values are arrays of mission objects.

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
    // Could add groups like "Assignments" later
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
    // Could add groups like "Loyalty Missions", "N7 Missions" later
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
    // Could add groups like "N7 Missions", "DLC", "Citadel Side Missions" later
  },
};

// --- Components ---

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


// MissionItem Component (No changes needed here for grouping)
const MissionItem = ({ mission, completed, onToggle, prerequisitesMet, missionNameMap, completedMissions }) => {
  const [isPrereqsExpanded, setIsPrereqsExpanded] = useState(false);

  const handleChange = () => {
    if (prerequisitesMet || completed) {
      onToggle(mission.id);
    }
  };

  const togglePrereqs = (e) => {
      e.stopPropagation();
      setIsPrereqsExpanded(!isPrereqsExpanded);
  };

  const canInteract = prerequisitesMet || completed;
  const hasPrerequisites = mission.prerequisites && mission.prerequisites.length > 0;

  return (
    <>
        <li className={`flex items-center justify-between border-b border-gray-700 last:border-b-0 transition-colors duration-150 ${!canInteract ? 'opacity-50' : 'hover:bg-gray-700'}`}>
            <div className="flex items-center flex-grow py-2 px-3 min-w-0">
                <input
                    type="checkbox"
                    id={mission.id}
                    checked={completed}
                    onChange={handleChange}
                    disabled={!canInteract}
                    className={`mr-3 h-5 w-5 rounded border-gray-500 text-blue-500 focus:ring-blue-600 bg-gray-600 disabled:opacity-70 flex-shrink-0 ${canInteract ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                />
                {hasPrerequisites && (
                    <button
                        onClick={togglePrereqs}
                        className="mr-2 p-0.5 rounded text-gray-400 hover:bg-gray-600 hover:text-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-shrink-0"
                        aria-expanded={isPrereqsExpanded}
                        aria-controls={`prereqs-${mission.id}`}
                        title={isPrereqsExpanded ? "Hide prerequisites" : "Show prerequisites"}
                    >
                        <ChevronIcon expanded={isPrereqsExpanded} />
                        <span className="sr-only">{isPrereqsExpanded ? "Hide prerequisites" : "Show prerequisites"}</span>
                    </button>
                )}
                 {!hasPrerequisites && <div className="w-4 mr-2 flex-shrink-0" style={{marginLeft: '0.125rem', marginRight: '0.625rem'}}></div>}
                <label
                    htmlFor={mission.id}
                    className={`flex-grow ${completed ? 'line-through text-gray-400' : 'text-gray-100'} ${canInteract ? 'cursor-pointer' : 'cursor-not-allowed'} truncate`}
                >
                    {mission.name}
                </label>
            </div>
            {mission.wikiUrl && (
                <div className="py-2 px-3 flex-shrink-0">
                    <a
                    href={mission.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View "${mission.name}" on Mass Effect Wiki`}
                    className="p-1 rounded-md text-gray-400 hover:bg-gray-600 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 transition-colors flex-shrink-0 inline-block"
                    onClick={(e) => e.stopPropagation()}
                    >
                        <WikiLinkIcon />
                        <span className="sr-only">Wiki Link</span>
                    </a>
                </div>
            )}
        </li>
        {hasPrerequisites && (
            <div
                id={`prereqs-${mission.id}`}
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isPrereqsExpanded ? 'max-h-96' : 'max-h-0'}`}
                style={{transitionProperty: 'max-height'}}
            >
                <ul className="pt-1 pb-2 pl-12 pr-3 bg-gray-800 border-b border-gray-700">
                    <li className="text-xs text-gray-500 mb-1">Prerequisites:</li>
                    {mission.prerequisites.map(prereqId => {
                        const isPrereqCompleted = completedMissions.hasOwnProperty(prereqId);
                        return (
                            <li key={prereqId} className={`text-sm py-0.5 ${isPrereqCompleted ? 'text-gray-500 line-through' : 'text-gray-400'}`}>
                               - {missionNameMap[prereqId] || 'Unknown Mission'}
                            </li>
                        );
                    })}
                </ul>
            </div>
        )}
    </>
  );
};

// MissionList Component: Updated to handle grouped missions
const MissionList = ({ gameId, groupedMissions, completedMissions, onToggleMission }) => {

  // Create a map of mission IDs to names from the grouped structure
  const missionNameMap = useMemo(() => {
      const map = {};
      // Iterate through groups, then missions within each group
      Object.values(groupedMissions).forEach(missionArray => {
          missionArray.forEach(mission => {
              map[mission.id] = mission.name;
          });
      });
      return map;
  }, [groupedMissions]); // Recalculate if groupedMissions changes

  // Function to check if prerequisites for a mission are met
  const checkPrerequisites = (mission) => {
    if (!mission.prerequisites || mission.prerequisites.length === 0) {
      return true; // No prerequisites
    }
    return mission.prerequisites.every(prereqId => completedMissions.hasOwnProperty(prereqId));
  };

  // Get the list of group names (keys) from the groupedMissions object
  const groupNames = Object.keys(groupedMissions);

  return (
    <div className="bg-gray-800 rounded-lg shadow-md"> {/* Changed from ul to div */}
      {groupNames.map((groupName, index) => (
        // Render each group section
        <section key={groupName} aria-labelledby={`group-header-${gameId}-${index}`}>
          {/* Group Header */}
          <h3
            id={`group-header-${gameId}-${index}`}
            className="text-lg font-semibold text-blue-300 bg-gray-700 px-3 py-2 sticky top-0 z-10 border-b border-t border-gray-600 first:border-t-0" // Styling for the header
          >
            {groupName}
          </h3>
          {/* List of missions within the group */}
          <ul className="list-none p-0 m-0"> {/* Use ul here for mission items */}
            {groupedMissions[groupName].map((mission) => (
              <MissionItem
                key={mission.id}
                mission={mission}
                completed={!!completedMissions[mission.id]}
                onToggle={onToggleMission}
                prerequisitesMet={checkPrerequisites(mission)}
                missionNameMap={missionNameMap}
                completedMissions={completedMissions}
              />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

// Main App Component
export default function App() {
  const [activeTab, setActiveTab] = useState('me1');
  const [completedMissions, setCompletedMissions] = useState({});

  // Load state from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
        const savedState = localStorage.getItem('massEffectChecklistState');
        if (savedState) {
          try {
            const parsedState = JSON.parse(savedState);
            if (typeof parsedState === 'object' && parsedState !== null) {
               setCompletedMissions(parsedState);
            } else {
                 localStorage.removeItem('massEffectChecklistState'); setCompletedMissions({});
            }
          } catch (error) {
            localStorage.removeItem('massEffectChecklistState'); setCompletedMissions({});
          }
        }
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
     if (typeof window !== 'undefined') {
        if (Object.keys(completedMissions).length > 0) {
           try { localStorage.setItem('massEffectChecklistState', JSON.stringify(completedMissions)); } catch (error) { console.error("Failed to save state:", error); }
        } else {
            localStorage.removeItem('massEffectChecklistState');
        }
     }
  }, [completedMissions]);

  // Recursive unchecking logic
  const recursivelyUncheckDependents = (missionIdToUncheck, stateToModify) => {
    Object.values(missionsData).forEach(gameGroups => { // Iterate through games
        Object.values(gameGroups).forEach(missionArray => { // Iterate through groups in a game
            missionArray.forEach(mission => { // Iterate through missions in a group
                if (mission.prerequisites.includes(missionIdToUncheck) && stateToModify[mission.id]) {
                    delete stateToModify[mission.id];
                    recursivelyUncheckDependents(mission.id, stateToModify);
                }
            });
        });
    });
  };

  // Toggle mission completion state
  const handleToggleMission = (missionId) => {
    setCompletedMissions(prev => {
      let newState = { ...prev };
      const missionInfo = Object.values(missionsData) // Find mission across all games/groups
                                .flatMap(gameGroups => Object.values(gameGroups))
                                .flat()
                                .find(m => m.id === missionId);
      if (!missionInfo) return prev;

      if (newState[missionId]) { // Unchecking
        delete newState[missionId];
        recursivelyUncheckDependents(missionId, newState);
      } else { // Checking
        const prerequisitesMet = missionInfo.prerequisites.every(prereqId => prev[prereqId]);
        if (prerequisitesMet) {
             newState[missionId] = true;
        } else {
            console.warn(`Cannot check ${missionId}, prerequisites not met.`);
            return prev; // Prevent checking if prereqs not met
        }
      }
      return newState;
    });
  };

  // Get grouped missions for the active tab
  const getMissionsForTab = () => {
    return missionsData[activeTab] || {}; // Return the group object or empty object
  };

  // Tab Button Component
  const TabButton = ({ gameId, label }) => (
    <button
      onClick={() => setActiveTab(gameId)}
      className={`px-4 py-2 font-semibold rounded-t-lg focus:outline-none transition-colors duration-200 ease-in-out
                  ${activeTab === gameId
                    ? 'bg-gray-800 text-white border-b-2 border-blue-500'
                    : 'bg-gray-600 text-gray-300 hover:bg-gray-700'}`}
    >
      {label}
    </button>
  );

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 sm:p-8">
        <style jsx global>{`
          body { font-family: 'Inter', sans-serif; }
          .transition-max-height { transition-property: max-height; }
          /* Basic sticky header styling */
          .sticky { position: sticky; }
          .top-0 { top: 0; }
          .z-10 { z-index: 10; }
        `}</style>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet"/>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-300">
            Mass Effect Legendary Edition Checklist
          </h1>

          <div className="mb-6 border-b border-gray-700 flex space-x-1">
            <TabButton gameId="me1" label="Mass Effect 1" />
            <TabButton gameId="me2" label="Mass Effect 2" />
            <TabButton gameId="me3" label="Mass Effect 3" />
          </div>

          <div>
            {/* Pass the grouped missions to MissionList */}
            <MissionList
              gameId={activeTab}
              groupedMissions={getMissionsForTab()}
              completedMissions={completedMissions}
              onToggleMission={handleToggleMission}
            />
          </div>

           <footer className="mt-12 text-center text-gray-500 text-sm">
             <p>Mission data based on Mass Effect Wiki. Dependencies are simplified examples.</p>
             <p>Your progress is saved locally in your browser.</p>
           </footer>
        </div>
      </main>
    </>
  );
}
