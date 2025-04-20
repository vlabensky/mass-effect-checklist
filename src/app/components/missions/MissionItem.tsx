import type { Mission, MissionId } from '@/app/behavior/missions';
import { useTranslations } from '@/app/components/language';
import { useState } from 'react';
import { ChevronIcon, NewTabLinkIcon } from '../icons';

type Props = {
  mission: Mission;
  completed: boolean;
  onToggle: (missionId: string) => void;
  prerequisitesMet: boolean;
  completedMissionIds: MissionId[];
};

const MissionItem = ({ mission, completed, onToggle, prerequisitesMet, completedMissionIds }: Props) => {
  const { t } = useTranslations();
  const [isPrereqsExpanded, setIsPrereqsExpanded] = useState(false);
  const handleChange = () => void ((prerequisitesMet || completed) && onToggle(mission.id));

  const togglePrereqs = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsPrereqsExpanded(!isPrereqsExpanded);
  };

  const canInteract = prerequisitesMet || completed;
  const hasPrerequisites = mission.prerequisites && mission.prerequisites.length > 0;
  const missionTitle = t(`mission_${mission.id}`);

  return (
    <>
      <li className={`flex items-center justify-between border-b border-border last:border-b-0 transition-colors duration-150 ${!canInteract ? 'opacity-50' : 'hover:bg-background-hover'}`}>
        <div className="flex items-center flex-grow py-2 px-3 min-w-0">
          <input
            type="checkbox"
            id={mission.id}
            checked={completed}
            onChange={handleChange}
            disabled={!canInteract}
            className={`mr-3 h-5 w-5 rounded border-border-input text-accent focus:ring-accent bg-input-bg disabled:opacity-70 flex-shrink-0 ${canInteract ? 'cursor-pointer' : 'cursor-not-allowed'}`}
          />
          {hasPrerequisites && (
            <button
              onClick={togglePrereqs}
              className="mr-2 p-0.5 rounded text-text-secondary hover:bg-background-hover hover:text-accent focus:outline-none focus:ring-1 focus:ring-accent flex-shrink-0"
              aria-expanded={isPrereqsExpanded}
              aria-controls={`prereqs-${mission.id}`}
              title={isPrereqsExpanded ? t('hidePrereqsTitle') : t('showPrereqsTitle')}
            >
              <ChevronIcon expanded={isPrereqsExpanded} />
              <span className="sr-only">{isPrereqsExpanded ? t('hidePrereqsTitle') : t('showPrereqsTitle')}</span>
            </button>
          )}
          {!hasPrerequisites &&
            <div className="w-4 mr-2 flex-shrink-0" style={{marginLeft: '0.125rem', marginRight: '0.625rem'}}></div>
          }
          <label
            htmlFor={mission.id}
            className={`flex-grow ${completed ? 'line-through text-text-disabled' : 'text-text-primary'} ${canInteract ? 'cursor-pointer' : 'cursor-not-allowed'} truncate`}
          >
            {missionTitle}
          </label>
        </div>
        <div className="py-2 px-3 flex-shrink-0">
          <a
            href={mission.wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            // TODO: make title localizable
            title={`View "${missionTitle}" on Mass Effect Wiki`}
            className="p-1 rounded-md text-text-secondary hover:bg-background-hover hover:text-accent focus:outline-none focus:ring-2 focus:ring-offset-background focus:ring-accent transition-colors flex-shrink-0 inline-block"
            onClick={e => e.stopPropagation()}
          >
            <NewTabLinkIcon />
            <span className="sr-only">{t('wikiLinkAlt')}</span>
          </a>
        </div>
      </li>
      {hasPrerequisites && (
        <div
          id={`prereqs-${mission.id}`}
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isPrereqsExpanded ? 'max-h-96' : 'max-h-0'}`}
          style={{transitionProperty: 'max-height'}}
        >
          <ul className="pt-1 pb-2 pl-12 pr-3 bg-background-subtle border-b border-border">
            <li className="text-xs text-text-secondary mb-1">{t('prerequisitesLabel')}</li>
            {mission.prerequisites.map(prerequisiteId => {
              const isPrereqCompleted = completedMissionIds.some(id => id === prerequisiteId);
              const prerequisiteName = t(`mission_${prerequisiteId}`);
              return (
                <li key={prerequisiteId} className={`text-sm py-0.5 ${isPrereqCompleted ? 'text-text-disabled line-through' : 'text-text-secondary'}`}> - {prerequisiteName}</li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default MissionItem;
