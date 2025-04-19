'use client'

import React, { useState, useEffect, useMemo } from 'react'; // Added useMemo

// --- Data Structure ---
// Added 'wikiUrl' for each mission.

const missionsData = {
  me1: [
    { id: 'me1_eden_prime', name: 'Prologue: Find the Beacon', prerequisites: [], wikiUrl: 'https://masseffect.fandom.com/wiki/Find_the_Beacon' },
    { id: 'me1_citadel_expose_saren', name: 'Citadel: Expose Saren', prerequisites: ['me1_eden_prime'], wikiUrl: 'https://masseffect.fandom.com/wiki/Citadel:_Expose_Saren' },
    { id: 'me1_find_liara', name: 'Find Liara T\'Soni', prerequisites: ['me1_citadel_expose_saren'], wikiUrl: 'https://masseffect.fandom.com/wiki/Find_Liara_T%27Soni' },
    { id: 'me1_feros', name: 'Feros: Geth Attack', prerequisites: ['me1_citadel_expose_saren'], wikiUrl: 'https://masseffect.fandom.com/wiki/Feros:_Geth_Attack' },
    { id: 'me1_noveria', name: 'Noveria: Matriarch Benezia', prerequisites: ['me1_citadel_expose_saren'], wikiUrl: 'https://masseffect.fandom.com/wiki/Noveria#Walkthrough' }, // Link to walkthrough section
    { id: 'me1_virmire', name: 'Virmire: Saren\'s Plan', prerequisites: ['me1_find_liara', 'me1_feros', 'me1_noveria'], wikiUrl: 'https://masseffect.fandom.com/wiki/Virmire:_Saren%27s_Plan' },
    { id: 'me1_ilum', name: 'Ilos: Find the Conduit', prerequisites: ['me1_virmire'], wikiUrl: 'https://masseffect.fandom.com/wiki/Ilos:_Find_the_Conduit' },
    { id: 'me1_final_battle', name: 'Race Against Time: Final Battle', prerequisites: ['me1_ilum'], wikiUrl: 'https://masseffect.fandom.com/wiki/Race_Against_Time:_Final_Battle' },
  ],
  me2: [
    { id: 'me2_prologue', name: 'Prologue: Awakening', prerequisites: [], wikiUrl: 'https://masseffect.fandom.com/wiki/Prologue:_Awakening' },
    { id: 'me2_freedom', name: 'Freedom\'s Progress', prerequisites: ['me2_prologue'], wikiUrl: 'https://masseffect.fandom.com/wiki/Freedom%27s_Progress' },
    { id: 'me2_citadel_anderson', name: 'Citadel: Captain Anderson', prerequisites: ['me2_freedom'], wikiUrl: 'https://masseffect.fandom.com/wiki/Citadel:_Captain_Anderson' }, // Might be part of other quests
    { id: 'me2_recruit_archangel', name: 'Recruitment: Archangel', prerequisites: ['me2_freedom'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_Archangel' },
    { id: 'me2_recruit_professor', name: 'Recruitment: The Professor', prerequisites: ['me2_freedom'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_The_Professor' },
    { id: 'me2_recruit_warlord', name: 'Recruitment: The Warlord', prerequisites: ['me2_freedom'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_The_Warlord' },
    { id: 'me2_recruit_convict', name: 'Recruitment: The Convict', prerequisites: ['me2_freedom'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_The_Convict' },
    { id: 'me2_horizon', name: 'Horizon', prerequisites: ['me2_recruit_archangel', 'me2_recruit_professor', 'me2_recruit_warlord', 'me2_recruit_convict'], wikiUrl: 'https://masseffect.fandom.com/wiki/Horizon_(mission)' },
    { id: 'me2_recruit_assassin', name: 'Recruitment: The Assassin', prerequisites: ['me2_horizon'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_The_Assassin' },
    { id: 'me2_recruit_justicar', name: 'Recruitment: The Justicar', prerequisites: ['me2_horizon'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_The_Justicar' },
    { id: 'me2_recruit_tali', name: 'Recruitment: Tali', prerequisites: ['me2_horizon'], wikiUrl: 'https://masseffect.fandom.com/wiki/Dossier:_Tali' },
    { id: 'me2_collector_ship', name: 'Collector Ship', prerequisites: ['me2_horizon'], wikiUrl: 'https://masseffect.fandom.com/wiki/Collector_Ship_(mission)' },
    { id: 'me2_iff', name: 'Acquire Reaper IFF', prerequisites: ['me2_collector_ship'], wikiUrl: 'https://masseffect.fandom.com/wiki/Reaper_IFF_(mission)' },
    { id: 'me2_suicide_mission', name: 'Suicide Mission', prerequisites: ['me2_iff'], wikiUrl: 'https://masseffect.fandom.com/wiki/Suicide_Mission' },
  ],
  me3: [
    { id: 'me3_prologue', name: 'Prologue: Earth', prerequisites: [], wikiUrl: 'https://masseffect.fandom.com/wiki/Prologue:_Earth' },
    { id: 'me3_mars', name: 'Priority: Mars', prerequisites: ['me3_prologue'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Mars' },
    { id: 'me3_citadel1', name: 'Priority: The Citadel I', prerequisites: ['me3_mars'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_The_Citadel_I' },
    { id: 'me3_palaven', name: 'Priority: Palaven', prerequisites: ['me3_citadel1'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Palaven' },
    { id: 'me3_surkesh', name: 'Priority: Sur\'Kesh', prerequisites: ['me3_palaven'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Sur%27Kesh' },
    { id: 'me3_tuchanka', name: 'Priority: Tuchanka', prerequisites: ['me3_surkesh'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Tuchanka' },
    { id: 'me3_citadel2', name: 'Priority: The Citadel II', prerequisites: ['me3_tuchanka'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_The_Citadel_II' },
    { id: 'me3_perseus_veil', name: 'Priority: Perseus Veil', prerequisites: ['me3_citadel2'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Geth_Dreadnought' }, // Using Geth Dreadnought mission
    { id: 'me3_rannoch', name: 'Priority: Rannoch', prerequisites: ['me3_perseus_veil'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Rannoch' },
    { id: 'me3_thessia', name: 'Priority: Thessia', prerequisites: ['me3_rannoch'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Thessia' },
    { id: 'me3_horizon', name: 'Priority: Horizon', prerequisites: ['me3_thessia'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Horizon' },
    { id: 'me3_cerberus_hq', name: 'Priority: Cerberus Headquarters', prerequisites: ['me3_horizon'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Cerberus_Headquarters' },
    { id: 'me3_earth', name: 'Priority: Earth', prerequisites: ['me3_cerberus_hq'], wikiUrl: 'https://masseffect.fandom.com/wiki/Priority:_Earth_(mission)' },
  ],
};

// --- Components ---

// WikiLinkIcon Component: Renders the selected SVG icon for the wiki link
const WikiLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
     {/* Selected: External Link Icon */}
     <path fillRule="evenodd" d="M8.25 3.75H6a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 6 18.75h10.5A2.25 2.25 0 0 0 18.75 16.5V14.25a.75.75 0 0 0-1.5 0V16.5a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 0 0-1.5Z" clipRule="evenodd" />
     <path fillRule="evenodd" d="M14.25 3.75a.75.75 0 0 0 0 1.5h1.69L9.72 11.47a.75.75 0 1 0 1.06 1.06l6.22-6.22v1.69a.75.75 0 0 0 1.5 0V3.75h-3.75Z" clipRule="evenodd" />
  </svg>
);

// ChevronIcon Component: Renders a chevron icon for collapse/expand toggle
const ChevronIcon = ({ expanded }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
         className={`w-4 h-4 transition-transform duration-200 ease-in-out ${expanded ? 'rotate-180' : ''}`}>
        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);


// MissionItem Component: Renders a single mission with checkbox, wiki link, and collapsible prerequisites
// Added completedMissions prop
const MissionItem = ({ mission, completed, onToggle, prerequisitesMet, missionNameMap, completedMissions }) => {
  const [isPrereqsExpanded, setIsPrereqsExpanded] = useState(false); // State for prerequisites visibility

  const handleChange = () => {
    if (prerequisitesMet || completed) {
      onToggle(mission.id);
    }
  };

  const togglePrereqs = (e) => {
      e.stopPropagation(); // Prevent triggering label/checkbox click
      setIsPrereqsExpanded(!isPrereqsExpanded);
  };

  // Determine if interaction is allowed (for styling consistency)
  const canInteract = prerequisitesMet || completed;
  const hasPrerequisites = mission.prerequisites && mission.prerequisites.length > 0;

  return (
    // Use React Fragment to group the main row and the collapsible section
    <>
        <li className={`flex items-center justify-between border-b border-gray-700 last:border-b-0 transition-colors duration-150 ${!canInteract ? 'opacity-50' : 'hover:bg-gray-700'}`}>
            {/* Main content row */}
            <div className="flex items-center flex-grow py-2 px-3 min-w-0"> {/* Added min-w-0 for flex-grow */}
                {/* Checkbox */}
                <input
                    type="checkbox"
                    id={mission.id}
                    checked={completed}
                    onChange={handleChange}
                    disabled={!canInteract}
                    className={`mr-3 h-5 w-5 rounded border-gray-500 text-blue-500 focus:ring-blue-600 bg-gray-600 disabled:opacity-70 flex-shrink-0 ${canInteract ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                />
                {/* Prerequisite Toggle Button (only if prerequisites exist) */}
                {hasPrerequisites && (
                    <button
                        onClick={togglePrereqs}
                        className="mr-2 p-0.5 rounded text-gray-400 hover:bg-gray-600 hover:text-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-shrink-0"
                        aria-expanded={isPrereqsExpanded}
                        aria-controls={`prereqs-${mission.id}`} // For accessibility
                        title={isPrereqsExpanded ? "Hide prerequisites" : "Show prerequisites"}
                    >
                        <ChevronIcon expanded={isPrereqsExpanded} />
                        <span className="sr-only">{isPrereqsExpanded ? "Hide prerequisites" : "Show prerequisites"}</span>
                    </button>
                )}
                 {/* Spacer if no prerequisites, to maintain alignment */}
                 {!hasPrerequisites && <div className="w-4 mr-2 flex-shrink-0" style={{marginLeft: '0.125rem', marginRight: '0.625rem'}}></div>}

                {/* Label */}
                <label
                    htmlFor={mission.id}
                    className={`flex-grow ${completed ? 'line-through text-gray-400' : 'text-gray-100'} ${canInteract ? 'cursor-pointer' : 'cursor-not-allowed'} truncate`} // Added truncate
                >
                    {mission.name}
                </label>
            </div>

            {/* Wiki Link Button (remains on the far right) */}
            {mission.wikiUrl && (
                <div className="py-2 px-3 flex-shrink-0"> {/* Wrapper div for padding consistency */}
                    <a
                    href={mission.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View "${mission.name}" on Mass Effect Wiki`}
                    className="p-1 rounded-md text-gray-400 hover:bg-gray-600 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 transition-colors flex-shrink-0 inline-block" // Use inline-block
                    onClick={(e) => e.stopPropagation()}
                    >
                        <WikiLinkIcon />
                        <span className="sr-only">Wiki Link</span>
                    </a>
                </div>
            )}
        </li>

        {/* Collapsible Prerequisites Section */}
        {hasPrerequisites && (
            <div
                id={`prereqs-${mission.id}`} // For aria-controls
                // Use max-height transition for collapse/expand effect
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isPrereqsExpanded ? 'max-h-96' : 'max-h-0'}`}
                style={{transitionProperty: 'max-height'}} // Ensure transition applies
            >
                <ul className="pt-1 pb-2 pl-12 pr-3 bg-gray-800 border-b border-gray-700"> {/* Indent and style */}
                    <li className="text-xs text-gray-500 mb-1">Prerequisites:</li>
                    {mission.prerequisites.map(prereqId => {
                        // Check if this prerequisite mission is completed
                        const isPrereqCompleted = completedMissions.hasOwnProperty(prereqId);
                        return (
                            <li key={prereqId} className={`text-sm py-0.5 ${isPrereqCompleted ? 'text-gray-500 line-through' : 'text-gray-400'}`}> {/* Apply line-through if completed */}
                               - {missionNameMap[prereqId] || 'Unknown Mission'} {/* Lookup name */}
                            </li>
                        );
                    })}
                </ul>
            </div>
        )}
    </>
  );
};

// MissionList Component: Renders the list of missions for the selected game
// Passes completedMissions down to MissionItem
const MissionList = ({ gameId, missions, completedMissions, onToggleMission }) => {

  // Create a map of mission IDs to names for easy lookup in MissionItem
  const missionNameMap = useMemo(() => {
      const map = {};
      Object.values(missionsData).flat().forEach(mission => {
          map[mission.id] = mission.name;
      });
      return map;
  }, []);

  // Function to check if prerequisites for a mission are met
  const checkPrerequisites = (mission) => {
    if (!mission.prerequisites || mission.prerequisites.length === 0) {
      return true; // No prerequisites
    }
    return mission.prerequisites.every(prereqId => completedMissions.hasOwnProperty(prereqId));
  };

  return (
    <ul className="bg-gray-800 rounded-lg shadow-md">
      {missions.map((mission) => (
        <MissionItem
          key={mission.id}
          mission={mission}
          completed={!!completedMissions[mission.id]}
          onToggle={onToggleMission}
          prerequisitesMet={checkPrerequisites(mission)}
          missionNameMap={missionNameMap}
          completedMissions={completedMissions} // Pass down the main completion state
        />
      ))}
    </ul>
  );
};

// Main App Component
export default function App() {
  const [activeTab, setActiveTab] = useState('me1'); // 'me1', 'me2', 'me3'
  const [completedMissions, setCompletedMissions] = useState({});

  // Load completed missions from localStorage on initial render
  useEffect(() => {
    if (typeof window !== 'undefined') {
        const savedState = localStorage.getItem('massEffectChecklistState');
        if (savedState) {
          try {
            const parsedState = JSON.parse(savedState);
            if (typeof parsedState === 'object' && parsedState !== null) {
               setCompletedMissions(parsedState);
            } else {
                 console.warn("Invalid data found in localStorage, resetting state.");
                 localStorage.removeItem('massEffectChecklistState');
                 setCompletedMissions({});
            }
          } catch (error) {
            console.error("Failed to parse localStorage state:", error);
            localStorage.removeItem('massEffectChecklistState');
            setCompletedMissions({});
          }
        }
    }
  }, []);

  // Save completed missions to localStorage whenever they change
  useEffect(() => {
     if (typeof window !== 'undefined') {
        if (Object.keys(completedMissions).length > 0) {
           try {
               localStorage.setItem('massEffectChecklistState', JSON.stringify(completedMissions));
           } catch (error) {
               console.error("Failed to save state to localStorage:", error);
           }
        } else {
            localStorage.removeItem('massEffectChecklistState');
        }
     }
  }, [completedMissions]);

  // --- Recursive Unchecking Helper Function (Corrected) ---
  const recursivelyUncheckDependents = (missionIdToUncheck, stateToModify) => {
    Object.keys(missionsData).forEach(gameKey => {
      missionsData[gameKey].forEach(mission => {
        if (mission.prerequisites.includes(missionIdToUncheck) && stateToModify[mission.id]) {
          // console.log(`Recursively unchecking "${mission.name}" because prerequisite "${missionIdToUncheck}" was unchecked.`); // Keep console logs minimal unless debugging
          delete stateToModify[mission.id];
          recursivelyUncheckDependents(mission.id, stateToModify);
        }
      });
    });
  };
  // --- End Helper Function ---


  const handleToggleMission = (missionId) => {
    setCompletedMissions(prev => {
      let newState = { ...prev };

      if (newState[missionId]) {
        // --- Unchecking Logic ---
        // console.log(`Unchecking mission: ${missionId}`); // Keep console logs minimal
        delete newState[missionId];
        recursivelyUncheckDependents(missionId, newState);

      } else {
        // --- Checking Logic ---
        const missionInfo = Object.values(missionsData).flat().find(m => m.id === missionId);
        if (!missionInfo) return prev;

        const prerequisitesMet = missionInfo.prerequisites.every(prereqId => prev[prereqId]);

        if (prerequisitesMet) {
             // console.log(`Checking mission: ${missionId}`); // Keep console logs minimal
             newState[missionId] = true;
        } else {
            console.warn(`Cannot check ${missionId}, prerequisites not met.`);
            return prev;
        }
      }
      return newState;
    });
  };


  const getMissionsForTab = () => {
    switch (activeTab) {
      case 'me1': return missionsData.me1;
      case 'me2': return missionsData.me2;
      case 'me3': return missionsData.me3;
      default: return [];
    }
  };

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
          body {
            font-family: 'Inter', sans-serif; /* Example font */
          }
          /* Add transition property for max-height */
          .transition-max-height {
            transition-property: max-height;
          }
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
            <MissionList
              gameId={activeTab}
              missions={getMissionsForTab()}
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
