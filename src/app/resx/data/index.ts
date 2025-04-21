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
        id: 'me2_omega_aria_tloak',
        prerequisites: ['me2_freedoms_progress'],
        wikiUrl: w('Omega:_Aria_T\'Loak'),
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
        wikiUrl: w('Reaper_IFF'),
      }, {
        id: 'me2_await_iff',
        prerequisites: ['me2_iff'],
        wikiUrl: w('Stop_the_Collectors#Await_IFF_Installation'),
      }, {
        id: 'me2_use_omega4_relay',
        prerequisites: ['me2_await_iff'],
        wikiUrl: w('Stop_the_Collectors#Use_Omega_4_Relay'),
      }, {
        id: 'me2_suicide_mission_infiltration',
        prerequisites: ['me2_use_omega4_relay'],
        wikiUrl: w('Collector_Base:_Infiltration'),
      }, {
        id: 'me2_suicide_mission_the_long_walk',
        prerequisites: ['me2_suicide_mission_infiltration'],
        wikiUrl: w('Collector_Base:_The_Long_Walk'),
      }, {
        id: 'me2_suicide_mission_final_battle',
        prerequisites: ['me2_suicide_mission_the_long_walk'],
        wikiUrl: w('Collector_Base:_Final_Battle'),
      }],
    }, {
      id: 'me2_dossiers',
      missions: [{
        id: 'me2_dossier_the_master_thief',
        prerequisites: ['me2_freedoms_progress'],
        wikiUrl: w('Dossier:_The_Master_Thief'),
      }, {
        id: 'me2_dossier_the_veteran',
        prerequisites: ['me2_freedoms_progress'],
        wikiUrl: w('Dossier:_The_Veteran'),
      }, {
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
    }, {
      id: 'me2_loyalty',
      missions: [{
        id: 'me2_loyalty_garrus',
        prerequisites: ['me2_horizon'],
        wikiUrl: w('Garrus:_Eye_for_an_Eye'),
      }, {
        id: 'me2_loyalty_grunt',
        prerequisites: ['me2_horizon'],
        wikiUrl: w('Grunt:_Rite_of_Passage'),
      }, {
        id: 'me2_loyalty_jack',
        prerequisites: ['me2_horizon'],
        wikiUrl: w('Jack:_Subject_Zero'),
      }, {
        id: 'me2_loyalty_jacob',
        prerequisites: ['me2_horizon'],
        wikiUrl: w('Jacob:_The_Gift_of_Greatness'),
      }, {
        id: 'me2_loyalty_miranda',
        prerequisites: ['me2_horizon'],
        wikiUrl: w('Miranda:_The_Prodigal'),
      }, {
        id: 'me2_loyalty_mordin',
        prerequisites: ['me2_horizon'],
        wikiUrl: w('Mordin:_Old_Blood'),
      }, {
        id: 'me2_loyalty_samara',
        prerequisites: ['me2_recruit_justicar'],
        wikiUrl: w('Samara:_The_Ardat-Yakshi'),
      }, {
        id: 'me2_loyalty_tali',
        prerequisites: ['me2_recruit_tali'],
        wikiUrl: w('Tali:_Treason'),
      }, {
        id: 'me2_loyalty_thane',
        prerequisites: ['me2_recruit_assassin'],
        wikiUrl: w('Thane:_Sins_of_the_Father'),
      }],
    }, {
      id: 'me2_citadel',
      missions: [{
        id: 'me2_citadel_crime_in_progress',
        prerequisites: ['me2_freedoms_progress'],
        wikiUrl: w('Citadel:_Crime_in_Progress'),
      }, {
        id: 'me2_citadel_found_forged_id',
        // TODO: add 'me2_loyalty_garrus' OR 'me2_loyalty_thane'
        prerequisites: ['me2_freedoms_progress'],
        wikiUrl: w('Citadel:_Found_Forged_ID'),
      }, {
        id: 'me2_citadel_krogan_sushi',
        prerequisites: ['me2_freedoms_progress'],
        wikiUrl: w('Citadel:_Krogan_Sushi'),
      }, {
        id: 'me2_citadel_captain_bailey',
        prerequisites: ['me2_freedoms_progress'],
        wikiUrl: w('Citadel:_Captain_Bailey'),
      }, {
        id: 'me2_citadel_the_council',
        prerequisites: ['me2_freedoms_progress'],
        wikiUrl: w('Citadel:_The_Council'),
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
