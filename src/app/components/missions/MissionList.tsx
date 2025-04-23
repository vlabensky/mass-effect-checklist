import type { Game, Mission, MissionId } from '@/app/behavior/missions';
import type { TextKey } from '@/app/behavior/translations';
import { useTranslations } from '../language';
import MissionItem from './MissionItem';

type Props = {
  game: Game;
  completedMissions: Record<MissionId, boolean>;
  onToggleMission: (missionId: MissionId) => void;
}

const MissionList = ({ game, completedMissions, onToggleMission }: Props) => {
  const { t } = useTranslations();

  const checkPrerequisites = (mission: Mission) => {
    if (!mission.prerequisites || mission.prerequisites.length === 0)
      return true;

    return mission.prerequisites.every(id => completedMissions.hasOwnProperty(id));
  };

  const allComplete = (sectionMissions: Mission[]) => {
    return sectionMissions.every(({ id }) => completedMissions.hasOwnProperty(id));
  };

  return (
    <div className="bg-background-list rounded-lg shadow-md">
      {game.sections.map((section, index) => {
        const groupKey: TextKey = `group_${section.id}`;
        const lblId = `group-header-${game.id}-${index}`;
        const sectionComplete = allComplete(section.missions);
        return (
          <section key={groupKey} aria-labelledby={lblId}>
            <h3
              id={lblId}
              className={`text-lg font-semibold text-accent bg-background-header px-3 py-2 sticky top-0 z-10 border-b border-t border-border first:border-t-0 ${sectionComplete ? 'line-through' : ''}`}
            >
              {t(groupKey)}
            </h3>
            <ul className="list-none p-0 m-0">
              {section.missions.map(mission => (
                <MissionItem
                  key={mission.id}
                  mission={mission}
                  completed={!!completedMissions[mission.id]}
                  onToggle={onToggleMission}
                  prerequisitesMet={checkPrerequisites(mission)}
                  completedMissions={completedMissions}
                />
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
};

export default MissionList;
