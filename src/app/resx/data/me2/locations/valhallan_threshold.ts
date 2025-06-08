import { cl, loc, sys } from '../../builders';

// Valhallan Threshold

export const me2_location_valhallan_threshold_micah_dumah = loc('Dumah')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_valhallan_threshold_micah_elohi = loc('Elohi')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_valhallan_threshold_micah_farlas = loc('Farlas')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_valhallan_threshold_micah_israfil = loc('Israfil')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_valhallan_threshold_micah_kakabel = loc('Kakabel')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_system_valhallan_threshold_micah = sys('Micah')
  .hasLocations(
    me2_location_valhallan_threshold_micah_dumah,
    me2_location_valhallan_threshold_micah_elohi,
    me2_location_valhallan_threshold_micah_farlas,
    me2_location_valhallan_threshold_micah_israfil,
    me2_location_valhallan_threshold_micah_kakabel,
  )
  .build();

export const me2_location_valhallan_threshold_paz_garvug = loc('Garvug')
  .withAdditionalInfo('Good (Element Zero)')
  .build();

export const me2_system_valhallan_threshold_paz = sys('Paz')
  .hasLocations(
    me2_location_valhallan_threshold_paz_garvug,
  )
  .build();

export const me2_location_valhallan_threshold_raheel_leyya_the_migrant_fleet = loc('The Migrant Fleet')
  .withAdditionalInfo('N/A')
  .build();

export const me2_system_valhallan_threshold_raheel_leyya = sys('Raheel-Leyya')
  .hasLocations(
    me2_location_valhallan_threshold_raheel_leyya_the_migrant_fleet,
  )
  .build();

export const me2_cluster_valhallan_threshold = cl('Valhallan Threshold')
  .hasSystems(
    me2_system_valhallan_threshold_micah,
    me2_system_valhallan_threshold_paz,
    me2_system_valhallan_threshold_raheel_leyya,
  )
  .build();
