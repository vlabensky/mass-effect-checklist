import { cl, loc, sys } from '../../builders';

// Eagle Nebula

export const me2_location_eagle_nebula_amun_anhur = loc('Anhur')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_eagle_nebula_amun_bast = loc('Bast')
  .withAdditionalInfo('Poor')
  .build();

export const me2_location_eagle_nebula_amun_neith = loc('Neith')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_eagle_nebula_amun_sekhmet = loc('Sekhmet')
  .withAdditionalInfo('Moderate (Element Zero)')
  .build();

export const me2_location_eagle_nebula_amun_sobek = loc('Sobek')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_eagle_nebula_amun = sys('Amun')
  .hasLocations(
    me2_location_eagle_nebula_amun_anhur,
    me2_location_eagle_nebula_amun_bast,
    me2_location_eagle_nebula_amun_neith,
    me2_location_eagle_nebula_amun_sekhmet,
    me2_location_eagle_nebula_amun_sobek,
  )
  .build();

export const me2_location_eagle_nebula_imir_gregas = loc('Gregas')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_eagle_nebula_imir_korlus = loc('Korlus')
  .withAdditionalInfo('N/A')
  .build();

export const me2_location_eagle_nebula_imir_osalri = loc('Osalri')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_eagle_nebula_imir_quodis = loc('Quodis')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_eagle_nebula_imir = sys('Imir')
  .hasLocations(
    me2_location_eagle_nebula_imir_gregas,
    me2_location_eagle_nebula_imir_korlus,
    me2_location_eagle_nebula_imir_osalri,
    me2_location_eagle_nebula_imir_quodis,
  )
  .build();

export const me2_location_eagle_nebula_malgus_flett = loc('Flett')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_eagle_nebula_malgus_uzin = loc('Uzin')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_eagle_nebula_malgus_wrill = loc('Wrill')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_eagle_nebula_malgus = sys('Malgus')
  .hasLocations(
    me2_location_eagle_nebula_malgus_flett,
    me2_location_eagle_nebula_malgus_uzin,
    me2_location_eagle_nebula_malgus_wrill,
  )
  .build();

export const me2_location_eagle_nebula_relic_beach_thunder = loc('Beach Thunder')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_eagle_nebula_relic_first_land = loc('First Land')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_eagle_nebula_relic_fitful_current = loc('Fitful Current')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_eagle_nebula_relic_island_wind = loc('Island Wind')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_eagle_nebula_relic_murky_water = loc('Murky Water')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_eagle_nebula_relic_preying_mouth = loc('Preying Mouth')
  .withAdditionalInfo('Moderate (Element Zero)')
  .build();

export const me2_location_eagle_nebula_relic_rough_tide = loc('Rough Tide')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_eagle_nebula_relic = sys('Relic')
  .hasLocations(
    me2_location_eagle_nebula_relic_beach_thunder,
    me2_location_eagle_nebula_relic_first_land,
    me2_location_eagle_nebula_relic_fitful_current,
    me2_location_eagle_nebula_relic_island_wind,
    me2_location_eagle_nebula_relic_murky_water,
    me2_location_eagle_nebula_relic_preying_mouth,
    me2_location_eagle_nebula_relic_rough_tide,
  )
  .build();

export const me2_location_eagle_nebula_strabo_antigar = loc('Antigar')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_eagle_nebula_strabo_jarrahe_station = loc('Jarrahe Station')
  .withAdditionalInfo('N/A')
  .build();

export const me2_system_eagle_nebula_strabo = sys('Strabo')
  .hasLocations(
    me2_location_eagle_nebula_strabo_antigar,
    me2_location_eagle_nebula_strabo_jarrahe_station,
  )
  .build();

export const me2_cluster_eagle_nebula = cl('Eagle Nebula', 'Eagle_Nebula', 'Eagle_Nebula')
  .hasSystems(
    me2_system_eagle_nebula_amun,
    me2_system_eagle_nebula_imir,
    me2_system_eagle_nebula_malgus,
    me2_system_eagle_nebula_relic,
    me2_system_eagle_nebula_strabo,
  )
  .build();
