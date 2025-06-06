import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Kite's Nest

export const me3_location_kites_nest_harsa_verush = loc('Verush')
  .withAdditionalInfo('Weapon Upgrade Kit')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_kites_nest_harsa_west_of_verush = loc('West of Verush')
  .withAdditionalInfo('Wreckage: Fuel 300')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_kites_nest_harsa_kharshan = loc('Khar\'shan')
  .hasMissions(m.me3_mission_kites_nest_pillars_of_strength)
  .build();

export const me3_system_kites_nest_harsa = sys('Harsa')
  .hasLocations(
    me3_location_kites_nest_harsa_verush,
    me3_location_kites_nest_harsa_west_of_verush,
    me3_location_kites_nest_harsa_kharshan,
  )
  .build();

export const me3_location_kites_nest_untrel_adek = loc('Adek')
  .withAdditionalInfo('Salvage: Credits 10,000')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_kites_nest_untrel_west_of_adek = loc('West of Adek')
  .withAdditionalInfo('Wreckage: Fuel 100')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_kites_nest_untrel = sys('Untrel')
  .hasLocations(
    me3_location_kites_nest_untrel_adek,
    me3_location_kites_nest_untrel_west_of_adek,
  )
  .build();

export const me3_location_kites_nest_vular_vana = loc('Vana')
  .hasMissions(m.me3_mission_aria_blue_suns)
  .build();

export const me3_location_kites_nest_vular_northwest_of_star = loc('Northwest of Star, 3rd Ring')
  .withAdditionalInfo('Wreckage: Fuel 150')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_kites_nest_vular = sys('Vular')
  .hasLocations(
    me3_location_kites_nest_vular_vana,
    me3_location_kites_nest_vular_northwest_of_star,
  )
  .build();

export const me3_location_kites_nest_indris_cholis = loc('Cholis')
  .withAdditionalInfo('Govenor Grothan Pazness')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_kites_nest_indris_north_northeast_of_star = loc('N/NE of star between 2nd and 3rd ring')
  .withAdditionalInfo('Wreckage: Fuel 300')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_kites_nest_indris = sys('Indris (Leviathan DLC)')
  .hasLocations(
    me3_location_kites_nest_indris_cholis,
    me3_location_kites_nest_indris_north_northeast_of_star,
  )
  .build();

export const me3_cluster_kites_nest = cl('Kite\'s Nest', 'Kites_Nest', 'Kites_Nest')
  .hasSystems(
    me3_system_kites_nest_harsa,
    me3_system_kites_nest_untrel,
    me3_system_kites_nest_vular,
    me3_system_kites_nest_indris,
  )
  .build();
