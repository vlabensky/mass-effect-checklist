export type GameId =
  | 'me1'
  | 'me2'
  | 'me3'
  ;

export type SectionId =
  | 'me1_prologue'
  | 'me1_story'
  | 'me2_plot'
  | 'me2_dossiers'
  | 'me2_citadel'
  | 'me3_priority'
  ;

export type MissionId =
  | 'me1_eden_prime'
  | 'me1_citadel_expose_saren'
  | 'me1_eden_prime'
  | 'me1_citadel_expose_saren'
  | 'me1_find_liara'
  | 'me1_feros'
  | 'me1_noveria'
  | 'me1_virmire'
  | 'me1_ilos'
  | 'me1_final_battle'
  | 'me2_prologue_save_joker'
  | 'me2_prologue_awakening'
  | 'me2_freedoms_progress'
  | 'me2_omega_aria_tloak'
  | 'me2_citadel_anderson'
  | 'me2_recruit_archangel'
  | 'me2_recruit_professor'
  | 'me2_recruit_warlord'
  | 'me2_recruit_convict'
  | 'me2_horizon'
  | 'me2_recruit_assassin'
  | 'me2_recruit_justicar'
  | 'me2_recruit_tali'
  | 'me2_collector_ship'
  | 'me2_iff'
  | 'me2_await_iff'
  | 'me2_use_omega4_relay'
  | 'me2_suicide_mission_infiltration'
  | 'me2_suicide_mission_the_long_walk'
  | 'me2_suicide_mission_final_battle'
  | 'me2_citadel_crime_in_progress'
  | 'me2_citadel_found_forged_id'
  | 'me2_citadel_krogan_sushi'
  | 'me2_citadel_captain_bailey'
  | 'me2_citadel_the_council'
  | 'me2_dossier_the_master_thief'
  | 'me3_prologue'
  | 'me3_mars'
  | 'me3_citadel1'
  | 'me3_palaven'
  | 'me3_surkesh'
  | 'me3_tuchanka'
  | 'me3_citadel2'
  | 'me3_perseus_veil'
  | 'me3_rannoch'
  | 'me3_thessia'
  | 'me3_horizon'
  | 'me3_cerberus_hq'
  | 'me3_earth'
  ;

export type Mission = {
  id: MissionId;
  prerequisites: MissionId[];
  wikiUrl: string;
};

export type Game = {
  id: GameId;
  sections: {
    id: SectionId;
    missions: Mission[];
  }[];
};

export type GameData = {
  games: Game[];
};
