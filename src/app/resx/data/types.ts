export type UrlProvider = {
  name: string;
  url: string;
};

export class Chapter {
  name: string;
  missions: Mission[];
  acquireableMissions: Mission[];
  isCompleted: () => boolean;

  constructor(name: string, missions: Mission[], acquireableMissions: Mission[]) {
    this.name = name;
    this.missions = missions;
    this.acquireableMissions = acquireableMissions;
    this.isCompleted = () => missions.every(m => m.isCompleted);
  }
}

export type Mission = {
  name: string;
  urlProviders: UrlProvider[];
  innerMissions: Mission[];
  isAvailable: () => boolean;
  isCompleted: boolean;
  isExpired: () => boolean;
  additionalInfo?: string;
};

export type Cluster = {
  name: string;
  systems: System[];
  urls: {
    fandom: string;
    ign: string;
  };
  isAvailable: () => boolean;
};

export type System = {
  name: string;
  locations: Location[];
};

export type Location = {
  name: string;
  missions: Mission[];
  additionalInfo?: string;
};

export type GameData = {
  chapters: Chapter[];
  missions: Mission[];
  clusters: Cluster[];
};
