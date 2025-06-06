import type { GameData } from '../types';
import * as m from './missions';
import * as chapters from './chapters';
import * as clusters from './locations';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { predicates, ...missions } = m;

export const me3_game_data: GameData = {
  chapters: Object.values(chapters),
  missions: Object.values(missions),
  clusters: Object.values(clusters),
};
