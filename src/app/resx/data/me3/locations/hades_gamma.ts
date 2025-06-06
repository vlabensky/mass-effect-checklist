import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Hades Gamma

export const me3_location_hades_gamma_dis_east_of_star = loc('East of Star (2nd Ring)')
  .withAdditionalInfo('Wreckage: Fuel 200')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_hades_gamma_dis_klensal = loc('Klensal')
  .withAdditionalInfo('Salvage: Credits 10,000')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_hades_gamma_dis = sys('Dis')
  .hasLocations(
    me3_location_hades_gamma_dis_east_of_star,
    me3_location_hades_gamma_dis_klensal,
  )
  .build();

export const me3_location_hades_gamma_farinata_north_of_star = loc('North of Star (1st Ring)')
  .withAdditionalInfo('Wreckage: Fuel 200')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_hades_gamma_farinata_juntauma = loc('Juntauma')
  .withAdditionalInfo('Alliance Frigate Agincourt, Alliance First Fleet')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_hades_gamma_farinata = sys('Farinata')
  .hasLocations(
    me3_location_hades_gamma_farinata_north_of_star,
    me3_location_hades_gamma_farinata_juntauma,
  )
  .build();

export const me3_location_hades_gamma_cacus_chohe = loc('Chohe')
  .withAdditionalInfo('Salvage: Credits 10,000')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_hades_gamma_cacus_west_of_xamarri = loc('West of Xamarri (Between 4th and 5th Rings)')
  .withAdditionalInfo('Wreckage: Fuel 400')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_hades_gamma_cacus = sys('Cacus')
  .hasLocations(
    me3_location_hades_gamma_cacus_chohe,
    me3_location_hades_gamma_cacus_west_of_xamarri,
  )
  .build();

export const me3_location_hades_gamma_antaeus_near_mass_relay = loc('Near Mass Relay')
  .withAdditionalInfo('Wreckage: Fuel 300')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_hades_gamma_antaeus_trebin = loc('Trebin')
  .withAdditionalInfo('Salvage: Credits 10,000')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_hades_gamma_antaeus = sys('Antaeus')
  .hasLocations(
    me3_location_hades_gamma_antaeus_near_mass_relay,
    me3_location_hades_gamma_antaeus_trebin,
  )
  .build();

export const me3_location_hades_gamma_plutus_nonuel = loc('Nonuel')
  .withAdditionalInfo('Spec Ops Team Zeta, 103rd Marine Division')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_hades_gamma_plutus = sys('Plutus')
  .hasLocations(
    me3_location_hades_gamma_plutus_nonuel,
  )
  .build();

export const me3_cluster_hades_gamma = cl('Hades Gamma', 'Hades_Gamma', 'Hades_Gamma')
  .hasSystems(
    me3_system_hades_gamma_dis,
    me3_system_hades_gamma_farinata,
    me3_system_hades_gamma_cacus,
    me3_system_hades_gamma_antaeus,
    me3_system_hades_gamma_plutus,
  )
  .build();
