import { ch } from '../builders';
import * as m from './missions';

// Main Plot

export const me3_chapter_main_plot = ch('Main Plot')
  .hasMissions(
    m.me3_mission_prologue_earth,
    m.me3_mission_priority_mars,
    m.me3_mission_priority_the_citadel_1,
    m.me3_mission_priority_palaven,
    m.me3_mission_priority_surkesh,
    m.me3_mission_priority_tuchanka,
    m.me3_mission_priority_citadel_2,
    m.me3_mission_priority_perseus_veil,
    m.me3_mission_priority_geth_dreadnought,
    m.me3_mission_priority_rannoch,
    m.me3_mission_priority_citadel_3,
    m.me3_mission_priority_thessia,
    m.me3_mission_priority_horizon,
    m.me3_mission_priority_cerberus_hq,
    m.me3_mission_priority_earth,
  )
  .build();

// Post-Citadel I Missions

export const me3_chapter_post_citadel_1 = ch('Post-Citadel I Missions')
  .hasMissions(
    m.me3_mission_n7_cerberus_lab,
    m.me3_mission_priority_eden_prime,
  )
  .build();

// Post-Palaven Missions

export const me3_chapter_post_palaven = ch('Post-Palaven Missions')
  .hasMissions(
    m.me3_mission_aria_blood_pack,
    m.me3_mission_aria_blue_suns,
    m.me3_mission_aria_eclipse,
    m.me3_mission_citadel_gx12_thermal_pipe,
    m.me3_mission_citadel_hanar_diplomat,
    m.me3_mission_apien_crest_banner_of_the_first_regiment,
    m.me3_mission_ismar_frontier_prototype_components,
    m.me3_mission_kites_nest_pillars_of_strength,
    m.me3_mission_shrike_abyssal_prothean_obelisk,
    m.me3_mission_citadel_aria_t_loak,
    m.me3_mission_citadel_dr_bryson,
  )
  .build();

// Post-Sur'Kesh Missions

export const me3_chapter_post_surkesh = ch('Post-Sur\'Kesh Missions')
  .hasMissions(
    m.me3_mission_attican_traverse_krogan_team_the_rachni,
    m.me3_mission_tuchanka_turian_platoon,
    m.me3_mission_tuchanka_bomb,
    m.me3_mission_n7_cerberus_abductions,
    m.me3_mission_n7_cerberus_attack,
    m.me3_mission_citadel_barla_von,
  )
  .build();

// Post-Tuchanka Missions

export const me3_chapter_post_tuchanka = ch('Post-Tuchanka Missions')
  .hasMissions(
    m.me3_mission_irune_book_of_plenix,
    m.me3_mission_n7_cerberus_fighter_base,
  )
  .build();

