'use client'

import React, { useState, useEffect } from 'react';

// --- Data Structure ---
// Define the mission data for each game.
// 'id' should be unique across all games.
// 'prerequisites' is an array of 'id's of missions that must be completed first.

const missionsData = {
  me1: [
    { id: 'me1_eden_prime', name: 'Prologue: Find the Beacon', prerequisites: [] },
    { id: 'me1_citadel_expose_saren', name: 'Citadel: Expose Saren', prerequisites: ['me1_eden_prime'] },
    { id: 'me1_find_liara', name: 'Find Liara T\'Soni', prerequisites: ['me1_citadel_expose_saren'] },
    { id: 'me1_feros', name: 'Feros: Geth Attack', prerequisites: ['me1_citadel_expose_saren'] },
    { id: 'me1_noveria', name: 'Noveria: Matriarch Benezia', prerequisites: ['me1_citadel_expose_saren'] },
    { id: 'me1_virmire', name: 'Virmire: Saren\'s Plan', prerequisites: ['me1_find_liara', 'me1_feros', 'me1_noveria'] },
    { id: 'me1_ilum', name: 'Ilos: Find the Conduit', prerequisites: ['me1_virmire'] },
    { id: 'me1_final_battle', name: 'Race Against Time: Final Battle', prerequisites: ['me1_ilum'] },
    // Add more ME1 missions as needed
  ],
  me2: [
    { id: 'me2_prologue', name: 'Prologue: Awakening', prerequisites: [] },
    { id: 'me2_freedom', name: 'Freedom\'s Progress', prerequisites: ['me2_prologue'] },
    { id: 'me2_citadel_anderson', name: 'Citadel: Captain Anderson', prerequisites: ['me2_freedom'] },
    { id: 'me2_recruit_archangel', name: 'Recruitment: Archangel', prerequisites: ['me2_freedom'] },
    { id: 'me2_recruit_professor', name: 'Recruitment: The Professor', prerequisites: ['me2_freedom'] },
    { id: 'me2_recruit_warlord', name: 'Recruitment: The Warlord', prerequisites: ['me2_freedom'] },
    { id: 'me2_recruit_convict', name: 'Recruitment: The Convict', prerequisites: ['me2_freedom'] },
    { id: 'me2_horizon', name: 'Horizon', prerequisites: ['me2_recruit_archangel', 'me2_recruit_professor', 'me2_recruit_warlord', 'me2_recruit_convict'] }, // Simplified prerequisite
    { id: 'me2_recruit_assassin', name: 'Recruitment: The Assassin', prerequisites: ['me2_horizon'] },
    { id: 'me2_recruit_justicar', name: 'Recruitment: The Justicar', prerequisites: ['me2_horizon'] },
    { id: 'me2_recruit_tali', name: 'Recruitment: Tali', prerequisites: ['me2_horizon'] },
    { id: 'me2_collector_ship', name: 'Collector Ship', prerequisites: ['me2_horizon'] }, // Simplified prerequisite
    { id: 'me2_iff', name: 'Acquire Reaper IFF', prerequisites: ['me2_collector_ship'] }, // Simplified prerequisite
    { id: 'me2_suicide_mission', name: 'Suicide Mission', prerequisites: ['me2_iff'] },
    // Add more ME2 missions and loyalty missions as needed
  ],
  me3: [
    { id: 'me3_prologue', name: 'Prologue: Earth', prerequisites: [] },
    { id: 'me3_mars', name: 'Priority: Mars', prerequisites: ['me3_prologue'] },
    { id: 'me3_citadel1', name: 'Priority: The Citadel I', prerequisites: ['me3_mars'] },
    { id: 'me3_palaven', name: 'Priority: Palaven', prerequisites: ['me3_citadel1'] },
    { id: 'me3_surkesh', name: 'Priority: Sur\'Kesh', prerequisites: ['me3_palaven'] }, // Or Grissom Academy
    { id: 'me3_tuchanka', name: 'Priority: Tuchanka', prerequisites: ['me3_surkesh'] },
    { id: 'me3_citadel2', name: 'Priority: The Citadel II', prerequisites: ['me3_tuchanka'] },
    { id: 'me3_perseus_veil', name: 'Priority: Perseus Veil', prerequisites: ['me3_citadel2'] }, // Rannoch or Geth Dreadnought
    { id: 'me3_rannoch', name: 'Priority: Rannoch', prerequisites: ['me3_perseus_veil']},
    { id: 'me3_thessia', name: 'Priority: Thessia', prerequisites: ['me3_rannoch'] },
    { id: 'me3_horizon', name: 'Priority: Horizon', prerequisites: ['me3_thessia'] },
    { id: 'me3_cerberus_hq', name: 'Priority: Cerberus Headquarters', prerequisites: ['me3_horizon'] },
    { id: 'me3_earth', name: 'Priority: Earth', prerequisites: ['me3_cerberus_hq'] },
    // Add more ME3 missions as needed
  ],
};

// --- Components ---

// MissionItem Component: Renders a single mission with a checkbox
const MissionItem = ({ mission, completed, onToggle, prerequisitesMet }) => {
  const handleChange = () => {
    // Allow toggling only if prerequisites are met OR if the item is already completed (to allow unchecking)
    if (prerequisitesMet || completed) {
      onToggle(mission.id);
    }
  };

  return (
    <li className={`py-2 px-3 flex items-center border-b border-gray-700 last:border-b-0 ${!prerequisitesMet && !completed ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}>
      <input
        type="checkbox"
        id={mission.id}
        checked={completed}
        onChange={handleChange}
        // Disable checkbox only if prerequisites are not met AND it's not already completed
        disabled={!prerequisitesMet && !completed}
        className={`mr-3 h-5 w-5 rounded border-gray-500 text-blue-500 focus:ring-blue-600 bg-gray-600 disabled:opacity-70 ${prerequisitesMet || completed ? 'cursor-pointer' : 'cursor-not-allowed'}`}
      />
      <label
        htmlFor={mission.id}
        className={`flex-grow ${completed ? 'line-through text-gray-400' : 'text-gray-100'} ${prerequisitesMet || completed ? 'cursor-pointer' : 'cursor-not-allowed'}`}
      >
        {mission.name}
      </label>
    </li>
  );
};

// MissionList Component: Renders the list of missions for the selected game
const MissionList = ({ gameId, missions, completedMissions, onToggleMission }) => {
  // Function to check if prerequisites for a mission are met
  const checkPrerequisites = (mission) => {
    if (!mission.prerequisites || mission.prerequisites.length === 0) {
      return true; // No prerequisites
    }
    // Check if *all* prerequisite IDs exist as keys in completedMissions
    return mission.prerequisites.every(prereqId => completedMissions.hasOwnProperty(prereqId));
  };

  return (
    <ul className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {missions.map((mission) => (
        <MissionItem
          key={mission.id}
          mission={mission}
          completed={!!completedMissions[mission.id]}
          onToggle={onToggleMission}
          prerequisitesMet={checkPrerequisites(mission)}
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
  // This function now directly modifies the 'stateToModify' object.
  const recursivelyUncheckDependents = (missionIdToUncheck, stateToModify) => {
    // Iterate through all missions across all games
    Object.keys(missionsData).forEach(gameKey => {
      missionsData[gameKey].forEach(mission => {
        // Check if this mission ('mission') depends on the 'missionIdToUncheck'
        // AND if this mission ('mission') is currently marked as completed in the state object being modified.
        if (mission.prerequisites.includes(missionIdToUncheck) && stateToModify[mission.id]) {
          // If both conditions are true, it means this mission is a direct dependent that needs unchecking.
          console.log(`Recursively unchecking "${mission.name}" because prerequisite "${missionIdToUncheck}" was unchecked.`);

          // Uncheck this dependent mission by deleting its key from the state object.
          delete stateToModify[mission.id];

          // *** Recursive Call ***
          // Immediately call the function again for the mission we just unchecked ('mission.id').
          // This ensures we go down the dependency chain.
          // Pass the same 'stateToModify' object, which now reflects the latest unchecking.
          recursivelyUncheckDependents(mission.id, stateToModify);
        }
      });
    });
    // No return value needed as the stateToModify object is mutated directly.
  };
  // --- End Helper Function ---


  const handleToggleMission = (missionId) => {
    setCompletedMissions(prev => {
      let newState = { ...prev }; // Start with a copy of the previous state

      if (newState[missionId]) {
        // --- Unchecking Logic ---
        console.log(`Unchecking mission: ${missionId}`);
        delete newState[missionId]; // Uncheck the primary mission first

        // Call the recursive function to handle dependents.
        // Pass the 'newState' object, which will be modified directly by the function.
        recursivelyUncheckDependents(missionId, newState);

      } else {
        // --- Checking Logic ---
        // Find the mission info to check prerequisites
        const missionInfo = Object.values(missionsData).flat().find(m => m.id === missionId);
        if (!missionInfo) return prev; // Should not happen, but safety check

        // Check if all prerequisites are present in the *previous* state (before this toggle)
        const prerequisitesMet = missionInfo.prerequisites.every(prereqId => prev[prereqId]);

        if (prerequisitesMet) {
             console.log(`Checking mission: ${missionId}`);
             newState[missionId] = true; // Check: add to state
        } else {
            console.warn(`Cannot check ${missionId}, prerequisites not met.`);
            // Important: If check is disallowed, return the original 'prev' state, discarding 'newState'
            return prev;
        }
      }

      // Return the final 'newState' object, which now contains all modifications
      // from the initial toggle and any recursive unchecking.
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
