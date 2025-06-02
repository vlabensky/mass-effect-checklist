import { ch, m } from './builders';

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
});
