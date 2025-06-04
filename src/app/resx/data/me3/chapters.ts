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
  )
  .build();

