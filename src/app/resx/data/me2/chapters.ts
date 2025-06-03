import { ch } from '../builders';
import * as m from './missions';

// Prologue

export const me2_chapter_prologue = ch('Prologue')
  .hasMissions(
    m.me2_mission_prologue_save_joker,
    m.me2_mission_prologue_awakening,
    m.me2_mission_prologue_freedoms_progress,
  )
  .build();
