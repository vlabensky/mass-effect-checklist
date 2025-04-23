import type { Mission, MissionId } from '@/app/behavior/missions';
import { useTranslations } from '@/app/components/language';
import { useRef, useState } from 'react';
import { ChevronIcon, InformationIcon, NewTabLinkIcon } from '../icons';

type Props = {
  mission: Mission;
  completed: boolean;
  onToggle: (missionId: MissionId) => void;
  prerequisitesMet: boolean;
  completedMissions: Record<MissionId, boolean>;
};

const MissionItem = ({ mission, completed, onToggle, prerequisitesMet, completedMissions }: Props) => {
  const { t } = useTranslations();
  const [isPrereqsExpanded, setIsPrereqsExpanded] = useState(false);
  const handleChange = () => void ((prerequisitesMet || completed) && onToggle(mission.id));
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const togglePrereqs = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsPrereqsExpanded(!isPrereqsExpanded);
  };

  const toggleInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    togglePrereqs(e);

    if (isPrereqsExpanded)
      return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      setIsHighlighted(false);
    }

    setTimeout(() => {
      setIsHighlighted(true);

      timeoutRef.current = setTimeout(() => {
        setIsHighlighted(false);
        timeoutRef.current = null;
      }, 1000);
    }, 10);
  };

  const canInteract = prerequisitesMet || completed;
  const hasPrerequisites = mission.prerequisites && mission.prerequisites.length > 0;
  const missionTitle = t(`mission_${mission.id}`);
  const hasAdditionalInfo = !!mission.additionalInfo;

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
            <div className="w-4 mr-2 flex-shrink-0" style={{ marginLeft: '0.125rem', marginRight: '0.625rem' }}></div>
          }
          <label
            htmlFor={mission.id}
            className={`flex-grow ${completed ? 'line-through text-text-disabled' : 'text-text-primary'} ${canInteract ? 'cursor-pointer' : 'cursor-not-allowed'} truncate`}
          >
            {missionTitle}
          </label>
        </div>
        <div className="py-2 px-3 flex-shrink-0 flex items-center space-x-2">
          {hasAdditionalInfo && (
            <button
              onClick={toggleInfo}
              title={t('infoButtonAlt')}
              aria-label={t('infoButtonAlt')}
              className="p-1 rounded-md text-text-secondary hover:bg-background-hover hover:text-accent focus:outline-none focus:ring-2 focus:ring-offset-background focus:ring-accent transition-colors"
            >
              <InformationIcon />
              <span className="sr-only">{t('infoButtonAlt')}</span>
            </button>
          )}
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
      {(hasPrerequisites || hasAdditionalInfo) && (
        <div
          id={`prereqs-${mission.id}`}
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isPrereqsExpanded ? 'max-h-96' : 'max-h-0'}`}
          style={{ transitionProperty: 'max-height' }}
        >
          <div className="pt-1 pb-2 pl-12 pr-3 bg-background-subtle border-b border-border">
            {hasPrerequisites &&
              <ul>
                <li className="text-xs text-text-secondary mb-1">{t('prerequisitesLabel')}</li>
                {mission.prerequisites.map(prerequisiteId => {
                  const isPrereqCompleted = completedMissions[prerequisiteId];
                  const prerequisiteName = t(`mission_${prerequisiteId}`);
                  return (
                    <li
                      key={prerequisiteId}
                      className={`text-sm py-0.5 ${isPrereqCompleted ? 'text-text-disabled line-through' : 'text-text-secondary'}`}
                    >
                      - {prerequisiteName}
                    </li>
                  );
                })}
              </ul>
            }
            {hasAdditionalInfo &&
              <p className={`text-sm text-text-secondary mt-2 mb-1 ${isHighlighted ? 'animate-highlight-fade' : ''}`}>{t(mission.additionalInfo!)}</p>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default MissionItem;
