import type { GameData } from '@/app/behavior/missions';

const w = (path: string) => `https://masseffect.fandom.com/wiki/${path}`;

const data: GameData = {
  games: [{
    id: 'me1',
    sections: [{
      id: 'me1_prologue',
      missions: [{
        id: 'me1_eden_prime',
        prerequisites: [],
        wikiUrl: w('Find_the_Beacon'),
      }],
    }, {
      id: 'me1_story',
      missions: [{
        id: 'me1_citadel_expose_saren',
        prerequisites: ['me1_eden_prime'],
        wikiUrl: w('Citadel:_Expose_Saren'),
      }, {
        id: 'me1_find_liara',
        prerequisites: ['me1_citadel_expose_saren'],
        wikiUrl: w('Find_Liara_T%27Soni'),
      }, {
        id: 'me1_feros',
        prerequisites: ['me1_citadel_expose_saren'],
        wikiUrl: w('Feros:_Geth_Attack'),
      }, {
        id: 'me1_noveria',
        prerequisites: ['me1_citadel_expose_saren'],
        wikiUrl: w('Noveria#Walkthrough'),
      }, {
        id: 'me1_virmire',
        prerequisites: ['me1_find_liara', 'me1_feros', 'me1_noveria'],
        wikiUrl: w('Virmire:_Saren%27s_Plan'),
      }, {
        id: 'me1_ilos',
        prerequisites: ['me1_virmire'],
        wikiUrl: w('Ilos:_Find_the_Conduit'),
      }, {
        id: 'me1_final_battle',
        prerequisites: ['me1_ilos'],
        wikiUrl: w('Race_Against_Time:_Final_Battle'),
      }],
    }],
  }, {
    id: 'me2',
    sections: [{
      id: 'me2_plot',
      missions: [{
        id: 'me2_prologue_save_joker',
        prerequisites: [],
        wikiUrl: w('Prologue:_Save_Joker'),
      }, {
        id: 'me2_prologue_awakening',
        prerequisites: ['me2_prologue_save_joker'],
        wikiUrl: w('Prologue:_Awakening'),
      }, {
        id: 'me2_freedoms_progress',
        prerequisites: ['me2_prologue_awakening'],
        wikiUrl: w('Freedom%27s_Progress'),
      }, {
        id: 'me2_citadel_anderson',
        prerequisites: ['me2_freedoms_progress'],
        wikiUrl: w('Citadel:_Captain_Anderson'),
      }, {
        id: 'me2_horizon',
        prerequisites: [
          'me2_recruit_archangel',
          'me2_recruit_professor',
          'me2_recruit_warlord',
          'me2_recruit_convict',
        ],
        wikiUrl: w('Horizon_(mission)'),
      }, {
        id: 'me2_collector_ship',
        prerequisites: ['me2_horizon'],
        wikiUrl: w('Collector_Ship_(mission)'),
      }, {
        id: 'me2_iff',
        prerequisites: ['me2_collector_ship'],
        wikiUrl: w('Reaper_IFF_(mission)'),
      }, {
        id: 'me2_suicide_mission',
        prerequisites: ['me2_iff'],
        wikiUrl: w('Suicide_Mission'),
      }],
    }, {
      id: 'me2_dossiers',
      missions: [{
        id: 'me2_recruit_archangel',
        prerequisites: ['me2_freedoms_progress'],
        wikiUrl: w('Dossier:_Archangel'),
      }, {
        id: 'me2_recruit_professor',
        prerequisites: ['me2_freedoms_progress'],
        wikiUrl: w('Dossier:_The_Professor'),
      }, {
        id: 'me2_recruit_warlord',
        prerequisites: ['me2_freedoms_progress'],
        wikiUrl: w('Dossier:_The_Warlord'),
      }, {
        id: 'me2_recruit_convict',
        prerequisites: ['me2_freedoms_progress'],
        wikiUrl: w('Dossier:_The_Convict'),
      }, {
        id: 'me2_recruit_assassin',
        prerequisites: ['me2_horizon'],
        wikiUrl: w('Dossier:_The_Assassin'),
      }, {
        id: 'me2_recruit_justicar',
        prerequisites: ['me2_horizon'],
        wikiUrl: w('Dossier:_The_Justicar'),
      }, {
        id: 'me2_recruit_tali',
        prerequisites: ['me2_horizon'],
        wikiUrl: w('Dossier:_Tali'),
      }],
    }],
  }, {
    id: 'me3',
    sections: [{
      id: 'me3_priority',
      missions: [{
        id: 'me3_prologue',
        prerequisites: [],
        wikiUrl: w('Prologue:_Earth'),
      }, {
        id: 'me3_mars',
        prerequisites: ['me3_prologue'],
        wikiUrl: w('Priority:_Mars'),
      }, {
        id: 'me3_citadel1',
        prerequisites: ['me3_mars'],
        wikiUrl: w('Priority:_The_Citadel_I'),
      }, {
        id: 'me3_palaven',
        prerequisites: ['me3_citadel1'],
        wikiUrl: w('Priority:_Palaven'),
      }, {
        id: 'me3_surkesh',
        prerequisites: ['me3_palaven'],
        wikiUrl: w('Priority:_Sur%27Kesh'),
      }, {
        id: 'me3_tuchanka',
        prerequisites: ['me3_surkesh'],
        wikiUrl: w('Priority:_Tuchanka'),
      }, {
        id: 'me3_citadel2',
        prerequisites: ['me3_tuchanka'],
        wikiUrl: w('Priority:_The_Citadel_II'),
      }, {
        id: 'me3_perseus_veil',
        prerequisites: ['me3_citadel2'],
        wikiUrl:
          w('Priority:_Geth_Dreadnought'),
      }, {
        id: 'me3_rannoch',
        prerequisites: ['me3_perseus_veil'],
        wikiUrl: w('Priority:_Rannoch'),
      }, {
        id: 'me3_thessia',
        prerequisites: ['me3_rannoch'],
        wikiUrl: w('Priority:_Thessia'),
      }, {
        id: 'me3_horizon',
        prerequisites: ['me3_thessia'],
        wikiUrl: w('Priority:_Horizon'),
      }, {
        id: 'me3_cerberus_hq',
        prerequisites: ['me3_horizon'],
        wikiUrl:
          w('Priority:_Cerberus_Headquarters'),
      }, {
        id: 'me3_earth',
        prerequisites: ['me3_cerberus_hq'],
        wikiUrl: w('Priority:_Earth_(mission)'),
      }],
    }],
  }],
};

export default data;
