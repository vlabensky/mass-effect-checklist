import { ch, m, cl, sys, loc } from './builders';

describe('Builders tests', () => {
  describe('when building a mission', () => {
    it('should build a mission with default values', () => {
      const mission = m('Test Mission 1', 'Test_Fandom_Path_1', 'Test_IGN_Path_1').build();

      expect(mission.name).toBe('Test Mission 1');
      expect(mission.urls.fandom).toBe('https://masseffect.fandom.com/wiki/Test_Fandom_Path_1');
      expect(mission.urls.ign).toBe('https://www.ign.com/wikis/mass-effect/Test_IGN_Path_1');
      expect(mission.innerMissions).toEqual([]);
      expect(mission.isAvailable()).toBe(true);
      expect(mission.isCompleted).toBe(false);
      expect(mission.additionalInfo).toBeUndefined();
    });

    it('should build a mission with custom availability', () => {
      const mission = m('Test Mission 2', 'Test_Fandom_Path_2', 'Test_IGN_Path_2')
        .availableWhen(() => false)
        .build();

      expect(mission.isAvailable()).toBe(false);
    });

    it('should build a mission with additional info', () => {
      const mission = m('Test Mission 3', 'Test_Fandom_Path_3', 'Test_IGN_Path_3')
        .withAdditionalInfo('Some additional information')
        .build();

      expect(mission.additionalInfo).toBe('Some additional information');
    });

    it('should not allow adding mission with the same name twice', () => {
      expect(() => {
        m('Duplicate Test Mission', 'Test_Fandom_Path', 'Test_IGN_Path')
          .build();
        m('Duplicate Test Mission', 'Test_Fandom_Path', 'Test_IGN_Path')
          .build();
      }).toThrow('Mission with name Duplicate Test Mission already exists');
    });

    it('should build a mission with inner missions', () => {
      const innerMission1 = m('Inner Mission 1', 'Inner_Mission_1', 'Inner_Mission_1').build();
      const innerMission2 = m('Inner Mission 2', 'Inner_Mission_2', 'Inner_Mission_2').build();

      const mission = m('Test Mission 4', 'Test_Fandom_Path_4', 'Test_IGN_Path_4')
        .hasInnerMissions(innerMission1, innerMission2)
        .build();

      expect(mission.innerMissions).toHaveLength(2);
      expect(mission.innerMissions[0].name).toBe('Inner Mission 1');
      expect(mission.innerMissions[1].name).toBe('Inner Mission 2');
    });

    it('should default to empty inner missions array when hasInnerMissions is not called', () => {
      const mission = m('Test Mission 5', 'Test_Fandom_Path_5', 'Test_IGN_Path_5').build();

      expect(mission.innerMissions).toBeDefined();
      expect(Array.isArray(mission.innerMissions)).toBe(true);
      expect(mission.innerMissions).toHaveLength(0);
    });

    it('should not allow adding inner missions with the same name', () => {
      const duplicateInnerMissions = [{
        name: 'Duplicate Inner Mission',
        urls: {
          fandom: 'url1',
          ign: 'url2',
        },
        innerMissions: [],
        isAvailable: () => true,
        isExpired: () => false,
        isCompleted: false,
        additionalInfo: undefined,
      }, {
        name: 'Duplicate Inner Mission',
        urls: {
          fandom: 'url3',
          ign: 'url4',
        },
        innerMissions: [],
        isAvailable: () => true,
        isExpired: () => false,
        isCompleted: true,
        additionalInfo: undefined,
      }];

      const missionBuilder = m('Test Mission 6', 'Test_Fandom_Path_6', 'Test_IGN_Path_6');

      expect(() => {
        missionBuilder.hasInnerMissions(...duplicateInnerMissions);
      }).toThrow('Inner mission with name Duplicate Inner Mission already exists');
    });

    it('should set default expiration to false when expiresAfter is not called', () => {
      const mission = m('Test Mission 7', 'Test_Fandom_Path_7', 'Test_IGN_Path_7').build();

      expect(mission.isExpired()).toBe(false);
    });

    it('should expire the mission when the predicate returns true', () => {
      const mission = m('Test Mission 8', 'Test_Fandom_Path_8', 'Test_IGN_Path_8')
        .expiresAfter(() => true)
        .build();

      expect(mission.isExpired()).toBe(true);
    });

    it('should not expire the mission when the predicate returns false', () => {
      const mission = m('Test Mission 9', 'Test_Fandom_Path_9', 'Test_IGN_Path_9')
        .expiresAfter(() => false)
        .build();

      expect(mission.isExpired()).toBe(false);
    });
  });

  describe('when building a chapter', () => {
    const mockMissions = [{
      name: 'Mock Mission 1',
      urls: {
        fandom: 'url1',
        ign: 'url2',
      },
      innerMissions: [],
      isAvailable: () => true,
      isExpired: () => false,
      isCompleted: false,
      additionalInfo: undefined,
    }, {
      name: 'Mock Mission 2',
      urls: {
        fandom: 'url3',
        ign: 'url4',
      },
      innerMissions: [],
      isAvailable: () => true,
      isExpired: () => false,
      isCompleted: true,
      additionalInfo: undefined,
    }];

    it('should build a chapter with default values', () => {
      const chapter = ch('Test Chapter 1').build();

      expect(chapter.name).toBe('Test Chapter 1');
      expect(chapter.missions).toEqual([]);
      expect(chapter.acquireableMissions).toEqual([]);
    });

    it('should build a chapter with missions', () => {
      const chapter = ch('Test Chapter 2')
        .hasMissions(...mockMissions)
        .build();

      expect(chapter.missions[0].name).toEqual('Mock Mission 1');
      expect(chapter.missions[1].name).toEqual('Mock Mission 2');
    });

    it('should build a chapter with acquireable missions', () => {
      const chapter = ch('Test Chapter 3')
        .canAcquireMissions(...mockMissions)
        .build();

      expect(chapter.acquireableMissions[0].name).toEqual('Mock Mission 1');
      expect(chapter.acquireableMissions[1].name).toEqual('Mock Mission 2');
    });

    it('should be incomplete when none of the missions is completed', () => {
      const chapter = ch('Test Chapter 4')
        .hasMissions(...mockMissions.map(m => ({ ...m, isCompleted: false })))
        .build();

      expect(chapter.isCompleted()).toBe(false);
    });

    it('should be incomplete when some missions are completed', () => {
      const chapter = ch('Test Chapter 5')
        .hasMissions(...mockMissions)
        .build();

      expect(chapter.isCompleted()).toBe(false);
    });

    it('should be complete when all missions are completed', () => {
      const chapter = ch('Test Chapter 6')
        .hasMissions(...mockMissions.map(m => ({ ...m, isCompleted: true })))
        .build();

      expect(chapter.isCompleted()).toBe(true);
    });

    it('should not allow adding chapter with the same name twice', () => {
      expect(() => {
        ch('Duplicate Test Chapter').build();
        ch('Duplicate Test Chapter').build();
      }).toThrow('Chapter with name Duplicate Test Chapter already exists');
    });
  });

  describe('when building a location', () => {
    const mockMissions = [{
      name: 'Mock Mission 1',
      urls: {
        fandom: 'url1',
        ign: 'url2',
      },
      innerMissions: [],
      isAvailable: () => true,
      isExpired: () => false,
      isCompleted: false,
      additionalInfo: undefined,
    }, {
      name: 'Mock Mission 2',
      urls: {
        fandom: 'url3',
        ign: 'url4',
      },
      innerMissions: [],
      isAvailable: () => true,
      isExpired: () => false,
      isCompleted: true,
      additionalInfo: undefined,
    }];

    it('should build a location with default values', () => {
      const location = loc('Test Location 1').build();

      expect(location.name).toBe('Test Location 1');
      expect(location.missions).toEqual([]);
    });

    it('should build a location with missions', () => {
      const location = loc('Test Location 2')
        .hasMissions(...mockMissions)
        .build();

      expect(location.missions[0].name).toEqual('Mock Mission 1');
      expect(location.missions[1].name).toEqual('Mock Mission 2');
    });

    it('should build a location with additional info', () => {
      const location = loc('Test Location 3')
        .withAdditionalInfo('Some location additional information')
        .build();

      expect(location.additionalInfo).toBe('Some location additional information');
    });

    it('should not allow adding location with the same name twice', () => {
      expect(() => {
        loc('Duplicate Test Location').build();
        loc('Duplicate Test Location').build();
      }).toThrow('Location with name Duplicate Test Location already exists');
    });
  });

  describe('when building a system', () => {
    const mockLocations = [{
      name: 'Mock Location 1',
      missions: [],
    }, {
      name: 'Mock Location 2',
      missions: [],
    }];

    it('should build a system with default values', () => {
      const system = sys('Test System 1').build();

      expect(system.name).toBe('Test System 1');
      expect(system.locations).toEqual([]);
    });

    it('should build a system with locations', () => {
      const system = sys('Test System 2')
        .hasLocations(...mockLocations)
        .build();

      expect(system.locations[0].name).toEqual('Mock Location 1');
      expect(system.locations[1].name).toEqual('Mock Location 2');
    });

    it('should not allow adding system with the same name twice', () => {
      expect(() => {
        sys('Duplicate Test System').build();
        sys('Duplicate Test System').build();
      }).toThrow('System with name Duplicate Test System already exists');
    });
  });

  describe('when building a cluster', () => {
    const mockSystems = [{
      name: 'Mock System 1',
      locations: [{
        name: 'Mock Location 1',
        missions: [],
      }],
    }, {
      name: 'Mock System 2',
      locations: [{
        name: 'Mock Location 2',
        missions: [],
      }],
    }];

    it('should build a cluster with default values', () => {
      const cluster = cl('Test Cluster 1', 'Test_Fandom_Path_1', 'Test_IGN_Path_1').build();

      expect(cluster.name).toBe('Test Cluster 1');
      expect(cluster.systems).toEqual([]);
    });

    it('should correctly format fandom and ign URLs', () => {
      const cluster = cl('Artemis Tau', 'Artemis_Tau', 'Artemis_Tau_Cluster').build();

      expect(cluster.urls.fandom).toBe('https://masseffect.fandom.com/wiki/Artemis_Tau');
      expect(cluster.urls.ign).toBe('https://www.ign.com/wikis/mass-effect/Artemis_Tau_Cluster');
    });

    it('should build a cluster with systems', () => {
      const cluster = cl('Test Cluster 2', 'Test_Fandom_Path_2', 'Test_IGN_Path_2')
        .hasSystems(...mockSystems)
        .build();

      expect(cluster.systems[0].name).toEqual('Mock System 1');
      expect(cluster.systems[1].name).toEqual('Mock System 2');
      expect(cluster.systems[0].locations[0].name).toEqual('Mock Location 1');
      expect(cluster.systems[1].locations[0].name).toEqual('Mock Location 2');
    });

    it('should not allow adding cluster with the same name twice', () => {
      expect(() => {
        cl('Duplicate Test Cluster', 'Test_Fandom_Path', 'Test_IGN_Path').build();
        cl('Duplicate Test Cluster', 'Test_Fandom_Path', 'Test_IGN_Path').build();
      }).toThrow('Cluster with name Duplicate Test Cluster already exists');
    });
  });
});
