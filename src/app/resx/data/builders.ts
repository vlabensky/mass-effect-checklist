import { Chapter, type Mission, type Cluster, type System, type Location } from './types';

const always = () => true;

const missionNames = new Set<string>();
const chapterNames = new Set<string>();
const clusterNames = new Set<string>();
const systemNames = new Set<string>();
const locationNames = new Set<string>();

const fandomUrl = (path: string): string => `https://masseffect.fandom.com/wiki/${path}`;
const ignUrl = (path: string): string => `https://www.ign.com/wikis/mass-effect/${path}`;

const createUrls = (fandomPath: string, ignPath: string) => ({
  fandom: fandomUrl(fandomPath),
  ign: ignUrl(ignPath),
});

export class MissionBuilder {
  name: string;
  fandomUrlPath: string;
  ignUrlPath: string;
  isAvailable?: () => boolean;
  additionalInfo?: string;
  innerMissions?: Mission[];

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

  hasInnerMissions(...missions: Mission[]) {
    this.innerMissions = missions;
    return this;
  }

  build(): Mission {
    return {
      name: this.name,
      urls: createUrls(this.fandomUrlPath, this.ignUrlPath),
      innerMissions: this.innerMissions ?? [],
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

export class ClusterBuilder {
  name: string;
  fandomUrlPath: string;
  ignUrlPath: string;
  systems: System[];

  constructor(name: string, fandomUrlPath: string, ignUrlPath: string) {
    if (clusterNames.has(name))
      throw new Error(`Cluster with name ${name} already exists`);

    clusterNames.add(name);

    this.name = name;
    this.fandomUrlPath = fandomUrlPath;
    this.ignUrlPath = ignUrlPath;
    this.systems = [];
  }

  hasSystems(...systems: System[]) {
    this.systems = systems;
    return this;
  }

  build(): Cluster {
    return {
      name: this.name,
      systems: this.systems,
      urls: createUrls(this.fandomUrlPath, this.ignUrlPath),
    };
  }
}

export const cl = (
  name: string,
  fandomUrlPath: string,
  ignUrlPath: string,
) => new ClusterBuilder(
  name,
  fandomUrlPath,
  ignUrlPath,
);

export class SystemBuilder {
  name: string;
  locations: Location[];

  constructor(name: string) {
    if (systemNames.has(name))
      throw new Error(`System with name ${name} already exists`);

    systemNames.add(name);

    this.name = name;
    this.locations = [];
  }

  hasLocations(...locations: Location[]) {
    this.locations = locations;
    return this;
  }

  build(): System {
    return {
      name: this.name,
      locations: this.locations,
    };
  }
}

export const sys = (name: string) => new SystemBuilder(name);

export class LocationBuilder {
  name: string;
  missions: Mission[];

  constructor(name: string) {
    if (locationNames.has(name))
      throw new Error(`Location with name ${name} already exists`);

    locationNames.add(name);

    this.name = name;
    this.missions = [];
  }

  hasMissions(...missions: Mission[]) {
    this.missions = missions;
    return this;
  }

  build(): Location {
    return {
      name: this.name,
      missions: this.missions,
    };
  }
}

export const loc = (name: string) => new LocationBuilder(name);
