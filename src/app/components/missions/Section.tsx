import type { TextKey } from "@/app/behavior/translations";
import type { Mission, MissionId, Section } from "@/app/behavior/missions";
import { Fragment, useState } from "react";
import { ChevronIcon } from "../icons";
import { useTranslations } from "../language";
import MissionItem from "./MissionItem";

type Props = {
  section: Section;
  completedMissions: Record<MissionId, boolean>;
  onToggleMission: (missionId: MissionId) => void;
};

const GameSection = ({ section, completedMissions, onToggleMission }: Props) => {
  const { t } = useTranslations();

  const groupKey: TextKey = `group_${section.id}`;
  const lblId = `group-header-${section.id}`;

  const sectionComplete = section.missions.every(({ id }) => completedMissions.hasOwnProperty(id));

  const [isSectionExpanded, setSectionExpanded] = useState(true);

  const toggleSectionExpanded = () => setSectionExpanded(!isSectionExpanded);

  const checkPrerequisites = (mission: Mission) => {
    if (!mission.prerequisites || mission.prerequisites.length === 0)
      return true;

    return mission.prerequisites.every(id => completedMissions.hasOwnProperty(id));
  };

  return (
    <section key={groupKey} aria-labelledby={lblId}>
      <h3
        id={lblId}
        className={`text-lg font-semibold text-accent bg-background-header px-3 py-2 sticky top-0 z-10 border-b border-t border-border first:border-t-0 ${sectionComplete ? 'line-through' : ''}`}
      >
        <button
          onClick={toggleSectionExpanded}
          className="mr-2 p-0.5 rounded text-text-secondary hover:bg-background-hover hover:text-accent focus:outline-none focus:ring-1 focus:ring-accent flex-shrink-0"
          aria-expanded={isSectionExpanded}
          aria-controls={groupKey}
          title={isSectionExpanded ? t('hidePrereqsTitle') : t('showPrereqsTitle')}
        >
          <ChevronIcon expanded={isSectionExpanded} />
          <span className="sr-only">{isSectionExpanded ? t('hidePrereqsTitle') : t('showPrereqsTitle')}</span>
        </button>
        {t(groupKey)}
      </h3>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isSectionExpanded ? 'max-h-700' : 'max-h-0'}`}
        style={{ transitionProperty: 'max-height' }}
      >
        {isSectionExpanded && (
          <ul className="list-none p-0 m-0" id={groupKey}>
            {section.missions.map((mission, i) => {
              const nextIndex = i + 1;
              const anchorMissionId = section.missions.length > nextIndex ? section.missions[nextIndex].id : mission.id;
              const anchor = `a_mission_${anchorMissionId}`;

              return (
                <Fragment key={mission.id}>
                  <a id={anchor} className='invisible' aria-hidden></a>
                  <MissionItem
                    mission={mission}
                    completed={!!completedMissions[mission.id]}
                    onToggle={onToggleMission}
                    prerequisitesMet={checkPrerequisites(mission)}
                    completedMissions={completedMissions}
                  />
                </Fragment>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default GameSection;
