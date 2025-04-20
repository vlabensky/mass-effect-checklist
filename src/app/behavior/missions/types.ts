export type MissionId =
  | 'me1_eden_prime'
  | 'me1_citadel_expose_saren'
  | 'me1_eden_prime'
  | 'me1_citadel_expose_saren'
  | 'me1_find_liara'
  | 'me1_feros'
  | 'me1_noveria'
  | 'me1_virmire'
  | 'me1_ilum'
  | 'me1_final_battle'
  | 'me2_prologue'
  | 'me2_freedom'
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
  | 'me2_suicide_mission'
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

export type GameData = {
  games: {
    id: string;
    sections: {
      id: string;
      missions: Mission[];
    }[];
  }[];
};
