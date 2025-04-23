import type { Game, MissionId } from '@/app/behavior/missions';
import Section from './Section';

type Props = {
  game: Game;
  completedMissions: Record<MissionId, boolean>;
  onToggleMission: (missionId: MissionId) => void;
}

const MissionList = ({ game, completedMissions, onToggleMission }: Props) => {
  return (
    <div className="bg-background-list rounded-lg shadow-md">
      {game.sections.map(section => {
        return <Section key={section.id} section={section} completedMissions={completedMissions} onToggleMission={onToggleMission} />
      })}
    </div>
  );
};

export default MissionList;
