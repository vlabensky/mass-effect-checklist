import type { GameData } from '../types';
import * as m from './missions';
import * as chapters from './chapters';
import * as clusters from './locations';
import { urlProviders } from './urls';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { predicates, ...missions } = m;

const me2_game_data: GameData = {
  chapters: Object.values(chapters),
  missions: Object.values(missions),
  clusters: Object.values(clusters),
};

urlProviders.forEach(({ name: providerName, missionUrls, clusterUrls }) => {
  for (const [mission_id, mission] of Object.entries(missions)) {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const url = Object.entries(missionUrls).find(([missionUrlId, _]) => missionUrlId === mission_id)![1];
    mission.urls.push({
      name: providerName,
      url,
    });
  }

  for (const [cluster_id, cluster] of Object.entries(clusters)) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const url = Object.entries(clusterUrls).find(([clusterUrlId, _]) => clusterUrlId === cluster_id)![1];
    cluster.urls.push({
      name: providerName,
      url,
    });
  }
});

export { me2_game_data };
