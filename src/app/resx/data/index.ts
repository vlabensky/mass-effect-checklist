import type { GameData } from "@/app/behavior/missions";

// TODO: DRY with the base URL
const data: GameData = {
  games: [{
    id: 'me1',
    sections: [{
      id: 'me1_prologue',
      missions: [{
        id: "me1_eden_prime",
        prerequisites: [],
        wikiUrl: "https://masseffect.fandom.com/wiki/Find_the_Beacon",
      }],
    }, {
      id: 'me1_story',
      missions: [{
        id: "me1_citadel_expose_saren",
        prerequisites: ["me1_eden_prime"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Citadel:_Expose_Saren",
      }, {
        id: "me1_find_liara",
        prerequisites: ["me1_citadel_expose_saren"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Find_Liara_T%27Soni",
      }, {
        id: "me1_feros",
        prerequisites: ["me1_citadel_expose_saren"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Feros:_Geth_Attack",
      }, {
        id: "me1_noveria",
        prerequisites: ["me1_citadel_expose_saren"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Noveria#Walkthrough",
      }, {
        id: "me1_virmire",
        prerequisites: ["me1_find_liara", "me1_feros", "me1_noveria"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Virmire:_Saren%27s_Plan",
      }, {
        id: "me1_ilum",
        prerequisites: ["me1_virmire"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Ilos:_Find_the_Conduit",
      }, {
        id: "me1_final_battle",
        prerequisites: ["me1_ilum"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Race_Against_Time:_Final_Battle",
      }],
    }],
  }, {
    id: 'me2',
    sections: [{
      id: 'me2_plot',
      missions: [{
        id: "me2_prologue",
        prerequisites: [],
        wikiUrl: "https://masseffect.fandom.com/wiki/Prologue:_Awakening",
      }, {
        id: "me2_freedom",
        prerequisites: ["me2_prologue"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Freedom%27s_Progress",
      }, {
        id: "me2_citadel_anderson",
        prerequisites: ["me2_freedom"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Citadel:_Captain_Anderson",
      }, {
        id: "me2_horizon",
        prerequisites: [
          "me2_recruit_archangel",
          "me2_recruit_professor",
          "me2_recruit_warlord",
          "me2_recruit_convict",
        ],
        wikiUrl: "https://masseffect.fandom.com/wiki/Horizon_(mission)",
      }, {
        id: "me2_collector_ship",
        prerequisites: ["me2_horizon"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Collector_Ship_(mission)",
      }, {
        id: "me2_iff",
        prerequisites: ["me2_collector_ship"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Reaper_IFF_(mission)",
      }, {
        id: "me2_suicide_mission",
        prerequisites: ["me2_iff"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Suicide_Mission",
      }],
    }, {
      id: 'me2_dossiers',
      missions: [{
        id: "me2_recruit_archangel",
        prerequisites: ["me2_freedom"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_Archangel",
      }, {
        id: "me2_recruit_professor",
        prerequisites: ["me2_freedom"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_The_Professor",
      }, {
        id: "me2_recruit_warlord",
        prerequisites: ["me2_freedom"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_The_Warlord",
      }, {
        id: "me2_recruit_convict",
        prerequisites: ["me2_freedom"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_The_Convict",
      }, {
        id: "me2_recruit_assassin",
        prerequisites: ["me2_horizon"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_The_Assassin",
      }, {
        id: "me2_recruit_justicar",
        prerequisites: ["me2_horizon"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_The_Justicar",
      }, {
        id: "me2_recruit_tali",
        prerequisites: ["me2_horizon"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Dossier:_Tali",
      }],
    }],
  }, {
    id: 'me3',
    sections: [{
      id: 'me3_priority',
      missions: [{
        id: "me3_prologue",
        prerequisites: [],
        wikiUrl: "https://masseffect.fandom.com/wiki/Prologue:_Earth",
      }, {
        id: "me3_mars",
        prerequisites: ["me3_prologue"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Mars",
      }, {
        id: "me3_citadel1",
        prerequisites: ["me3_mars"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_The_Citadel_I",
      }, {
        id: "me3_palaven",
        prerequisites: ["me3_citadel1"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Palaven",
      }, {
        id: "me3_surkesh",
        prerequisites: ["me3_palaven"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Sur%27Kesh",
      }, {
        id: "me3_tuchanka",
        prerequisites: ["me3_surkesh"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Tuchanka",
      }, {
        id: "me3_citadel2",
        prerequisites: ["me3_tuchanka"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_The_Citadel_II",
      }, {
        id: "me3_perseus_veil",
        prerequisites: ["me3_citadel2"],
        wikiUrl:
          "https://masseffect.fandom.com/wiki/Priority:_Geth_Dreadnought",
      }, {
        id: "me3_rannoch",
        prerequisites: ["me3_perseus_veil"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Rannoch",
      }, {
        id: "me3_thessia",
        prerequisites: ["me3_rannoch"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Thessia",
      }, {
        id: "me3_horizon",
        prerequisites: ["me3_thessia"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Horizon",
      }, {
        id: "me3_cerberus_hq",
        prerequisites: ["me3_horizon"],
        wikiUrl:
          "https://masseffect.fandom.com/wiki/Priority:_Cerberus_Headquarters",
      }, {
        id: "me3_earth",
        prerequisites: ["me3_cerberus_hq"],
        wikiUrl: "https://masseffect.fandom.com/wiki/Priority:_Earth_(mission)",
      }],
    }],
  }],
};

export default data;
