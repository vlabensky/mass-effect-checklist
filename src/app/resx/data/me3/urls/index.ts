import fandomUrls from './fandom';
import ignUrls from './ign';

const urlProviders = [
  {
    name: 'fandom' as const,
    missionUrls: fandomUrls,
  },
  {
    name: 'ign' as const,
    missionUrls: ignUrls,
  },
];

export { urlProviders };
