const missionsData = {
  me1: {
    Prologue: [
      {
        id: "me1_eden_prime",
        name: "Find the Beacon",
        prerequisites: [],
        wikiUrl: "https://masseffect.fandom.com/wiki/Find_the_Beacon",
      },
    ],
    "Main Story": [
      {
        id: "me1_citadel_expose_saren",
        name: "Citadel: Expose Saren",
        prerequisites: ["me1_eden_prime"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Citadel:_Expose_Saren",
      },
      {
        id: "me1_find_liara",
        name: "Find Liara T'Soni",
        prerequisites: ["me1_citadel_expose_saren"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Find_Liara_T%27Soni",
      },
      {
        id: "me1_feros",
        name: "Feros: Geth Attack",
        prerequisites: ["me1_citadel_expose_saren"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Feros:_Geth_Attack",
      },
      {
        id: "me1_noveria",
        name: "Noveria: Matriarch Benezia",
        prerequisites: ["me1_citadel_expose_saren"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Noveria#Walkthrough",
      },
      {
        id: "me1_virmire",
        name: "Virmire: Saren's Plan",
        prerequisites: ["me1_find_liara", "me1_feros", "me1_noveria"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Virmire:_Saren%27s_Plan",
      },
      {
        id: "me1_ilum",
        name: "Ilos: Find the Conduit",
        prerequisites: ["me1_virmire"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Ilos:_Find_the_Conduit",
      },
      {
        id: "me1_final_battle",
        name: "Race Against Time: Final Battle",
        prerequisites: ["me1_ilum"],
        wikiUrl:
          "https://masseffect.fandom.com/wiki/Race_Against_Time:_Final_Battle",
      },
    ],
  },
  me2: {
    "Prologue & Freedom": [
      {
        id: "me2_prologue",
        name: "Prologue: Awakening",
        prerequisites: [],
        wikiUrl: "https://masseffect.fandom.com/wiki/Prologue:_Awakening",
      },
      {
        id: "me2_freedom",
        name: "Freedom's Progress",
        prerequisites: ["me2_prologue"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Freedom%27s_Progress",
      },
      {
        id: "me2_citadel_anderson",
        name: "Citadel: Captain Anderson",
        prerequisites: ["me2_freedom"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Citadel:_Captain_Anderson",
      },
    ],
    "Recruitment (Dossiers - Part 1)": [
      {
        id: "me2_recruit_archangel",
        name: "Dossier: Archangel",
        prerequisites: ["me2_freedom"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_Archangel",
      },
      {
        id: "me2_recruit_professor",
        name: "Dossier: The Professor",
        prerequisites: ["me2_freedom"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_The_Professor",
      },
      {
        id: "me2_recruit_warlord",
        name: "Dossier: The Warlord",
        prerequisites: ["me2_freedom"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_The_Warlord",
      },
      {
        id: "me2_recruit_convict",
        name: "Dossier: The Convict",
        prerequisites: ["me2_freedom"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_The_Convict",
      },
    ],
    "Plot Missions (Mid-Game)": [
      {
        id: "me2_horizon",
        name: "Horizon",
        prerequisites: [
          "me2_recruit_archangel",
          "me2_recruit_professor",
          "me2_recruit_warlord",
          "me2_recruit_convict",
        ],
        wikiUrl: "https://masseffect.fandom.com/wiki/Horizon_(mission)",
      },
    ],
    "Recruitment (Dossiers - Part 2)": [
      {
        id: "me2_recruit_assassin",
        name: "Dossier: The Assassin",
        prerequisites: ["me2_horizon"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_The_Assassin",
      },
      {
        id: "me2_recruit_justicar",
        name: "Dossier: The Justicar",
        prerequisites: ["me2_horizon"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_The_Justicar",
      },
      {
        id: "me2_recruit_tali",
        name: "Dossier: Tali",
        prerequisites: ["me2_horizon"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_Tali",
      },
    ],
    "Plot Missions (Late-Game)": [
      {
        id: "me2_collector_ship",
        name: "Collector Ship",
        prerequisites: ["me2_horizon"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Collector_Ship_(mission)",
      },
      {
        id: "me2_iff",
        name: "Acquire Reaper IFF",
        prerequisites: ["me2_collector_ship"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Reaper_IFF_(mission)",
      },
      {
        id: "me2_suicide_mission",
        name: "Suicide Mission",
        prerequisites: ["me2_iff"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Suicide_Mission",
      },
    ],
  },
  me3: {
    "Opening Missions": [
      {
        id: "me3_prologue",
        name: "Prologue: Earth",
        prerequisites: [],
        wikiUrl: "https://masseffect.fandom.com/wiki/Prologue:_Earth",
      },
      {
        id: "me3_mars",
        name: "Priority: Mars",
        prerequisites: ["me3_prologue"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Mars",
      },
      {
        id: "me3_citadel1",
        name: "Priority: The Citadel I",
        prerequisites: ["me3_mars"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_The_Citadel_I",
      },
    ],
    "Main Story Arc": [
      {
        id: "me3_palaven",
        name: "Priority: Palaven",
        prerequisites: ["me3_citadel1"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Palaven",
      },
      {
        id: "me3_surkesh",
        name: "Priority: Sur'Kesh",
        prerequisites: ["me3_palaven"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Sur%27Kesh",
      },
      {
        id: "me3_tuchanka",
        name: "Priority: Tuchanka",
        prerequisites: ["me3_surkesh"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Tuchanka",
      },
      {
        id: "me3_citadel2",
        name: "Priority: The Citadel II",
        prerequisites: ["me3_tuchanka"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_The_Citadel_II",
      },
      {
        id: "me3_perseus_veil",
        name: "Priority: Perseus Veil",
        prerequisites: ["me3_citadel2"],
        wikiUrl:
          "https://masseffect.fandom.com/wiki/Priority:_Geth_Dreadnought",
      },
      {
        id: "me3_rannoch",
        name: "Priority: Rannoch",
        prerequisites: ["me3_perseus_veil"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Rannoch",
      },
      {
        id: "me3_thessia",
        name: "Priority: Thessia",
        prerequisites: ["me3_rannoch"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Thessia",
      },
      {
        id: "me3_horizon",
        name: "Priority: Horizon",
        prerequisites: ["me3_thessia"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Horizon",
      },
    ],
    "End Game": [
      {
        id: "me3_cerberus_hq",
        name: "Priority: Cerberus Headquarters",
        prerequisites: ["me3_horizon"],
        wikiUrl:
          "https://masseffect.fandom.com/wiki/Priority:_Cerberus_Headquarters",
      },
      {
        id: "me3_earth",
        name: "Priority: Earth",
        prerequisites: ["me3_cerberus_hq"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Earth_(mission)",
      },
    ],
  },
};

export { missionsData };
