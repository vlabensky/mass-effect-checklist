import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Valhallan Threshold

export const me3_location_valhallan_threshold_raheel_leyya_northeast_of_star = loc('Northeast of Star')
  .withAdditionalInfo('Wreckage: Fuel 95')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_valhallan_threshold_raheel_leyya = sys('Raheel-Leyya')
  .hasLocations(
    me3_location_valhallan_threshold_raheel_leyya_northeast_of_star,
  )
  .build();

export const me3_location_valhallan_threshold_paz_garvug = loc('Garvug')
  .hasMissions(m.me3_mission_valhallan_threshold_prothean_data_drives)
  .build();

export const me3_location_valhallan_threshold_paz_east_of_star = loc('East of Star')
  .withAdditionalInfo('Wreckage: Fuel 160')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_valhallan_threshold_paz = sys('Paz')
  .hasLocations(
    me3_location_valhallan_threshold_paz_garvug,
    me3_location_valhallan_threshold_paz_east_of_star,
  )
  .build();

export const me3_location_valhallan_threshold_micah_elohi = loc('Elohi')
  .withAdditionalInfo('Emergency Fuel Pods')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_valhallan_threshold_micah_farlas = loc('Farlas')
  .withAdditionalInfo('Element Zero Converter')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_valhallan_threshold_micah_southeast_of_star = loc('Southeast of Star')
  .withAdditionalInfo('Wreckage: Fuel 340')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_valhallan_threshold_micah = sys('Micah')
  .hasLocations(
    me3_location_valhallan_threshold_micah_elohi,
    me3_location_valhallan_threshold_micah_farlas,
    me3_location_valhallan_threshold_micah_southeast_of_star,
  )
  .build();

export const me3_cluster_valhallan_threshold = cl('Valhallan Threshold', 'Valhallan_Threshold', 'Valhallan_Threshold')
  .hasSystems(
    me3_system_valhallan_threshold_raheel_leyya,
    me3_system_valhallan_threshold_paz,
    me3_system_valhallan_threshold_micah,
  )
  .build();
