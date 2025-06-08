import * as fandom from './fandom';
import * as ign from './ign';

const urlProviders = [
  {
    name: 'fandom' as const,
    missionUrls: fandom.missionUrls,
    clusterUrls: fandom.clusterUrls,
  },
  {
    name: 'ign' as const,
    missionUrls: ign.missionUrls,
    clusterUrls: ign.clusterUrls,
  },
];

export { urlProviders };
