import { Chapter, type Mission } from './types';

const always = () => true;

const missionNames = new Set<string>();
const chapterNames = new Set<string>();

export class MissionBuilder {
  name: string;
  fandomUrlPath: string;
  ignUrlPath: string;
  isAvailable?: () => boolean;
  additionalInfo?: string;

  constructor(name: string, fandomUrlPath: string, ignUrlPath: string) {
    if (missionNames.has(name))
      throw new Error(`Mission with name ${name} already exists`);

    missionNames.add(name);
    
    this.name = name;
    this.fandomUrlPath = fandomUrlPath;
    this.ignUrlPath = ignUrlPath;
  }

  availableWhen(predicate: () => boolean) {
    this.isAvailable = predicate;
    return this;
  }

  withAdditionalInfo(info: string) {
    this.additionalInfo = info;
    return this;
  }

  build(): Mission {
    return {
      name: this.name,
      urls: {
        fandom: `https://masseffect.fandom.com/wiki/${this.fandomUrlPath}`,
        ign: `https://www.ign.com/wikis/mass-effect/${this.ignUrlPath}`,
      },
      innerMissions: [],
      isAvailable: this.isAvailable ?? always,
      isCompleted: false,
      additionalInfo: this.additionalInfo,
    };
  }
}

export const m = (
  name: string,
  fandomUrlPath: string,
  ignUrlPath: string,
) => new MissionBuilder(
  name,
  fandomUrlPath,
  ignUrlPath,
);

export class ChapterBuilder {
  name: string;
  missions?: Mission[];
  acquireableMissions?: Mission[];

  constructor(name: string) {
    if (chapterNames.has(name))
      throw new Error(`Chapter with name ${name} already exists`);

    chapterNames.add(name);
    
    this.name = name;
  }

  hasMissions(...missions: Mission[]) {
    this.missions = missions;
    return this;
  }

  canAcquireMissions(...missions: Mission[]) {
    this.acquireableMissions = missions;
    return this;
  }

  build() {
    return new Chapter(
      this.name,
      this.missions ?? [],
      this.acquireableMissions ?? [],
    );
  }
};

export const ch = (name: string) => new ChapterBuilder(name);
