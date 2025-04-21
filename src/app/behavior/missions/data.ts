import type { MissionId, Mission } from './types';
import data from '@/app/resx/data';

const getGameData = () => {
  return data;
};

const findMission = (missionId: MissionId) => {
  let foundMission: Mission | undefined;

  const found = data.games.some(game => {
    return game.sections.some(section => {
      const mission = section.missions.find(({ id }) => id === missionId);
      if (!mission)
        return false;

      foundMission = mission;
      return true;
    })
  })

  return found ? foundMission : null;
};

const forEachMission = (action: (mission: Mission) => void) => {
  data.games.forEach(game =>
    game.sections.forEach(section =>
      section.missions.forEach(action)
    )
  );
}

export { getGameData, findMission, forEachMission };
