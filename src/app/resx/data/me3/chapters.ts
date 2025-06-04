import { ch } from '../builders';
import * as m from './missions';

// Main Plot

export const me3_chapter_main_plot = ch('Main Plot')
  .hasMissions(
    m.me3_mission_prologue_earth,
    m.me3_mission_priority_mars,
    m.me3_mission_priority_the_citadel_1,
  )
  .build();
