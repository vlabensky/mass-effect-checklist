import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Argos Rho

export const me1_location_argos_rho_gorgon_unidentified_space_facility = loc('Unidentified Space Facility')
  .hasMissions(m.me1_mission_depot_sigma_23)
  .build();

export const me1_system_argos_rho_gorgon = sys('Gorgon')
  .hasLocations(
    me1_location_argos_rho_gorgon_unidentified_space_facility,
  )
  .build();

export const me1_location_argos_rho_hydra_canrum = loc('Canrum')
  .hasMissions(m.me1_mission_turian_insignias)
  .build();

export const me1_location_argos_rho_hydra_syba = loc('Syba')
  .hasMissions(m.me1_mission_valuable_minerals_gasses)
  .build();

export const me1_location_argos_rho_hydra_metgos = loc('Metgos')
.hasMissions(m.me1_mission_unusual_readings)
  .build();

export const me1_system_argos_rho_hydra = sys('Hydra')
  .hasLocations(
    me1_location_argos_rho_hydra_canrum,
    me1_location_argos_rho_hydra_syba,
    me1_location_argos_rho_hydra_metgos,
  )
  .build();

export const me1_location_argos_rho_phoenix_patashi = loc('Patashi')
  .hasMissions(m.me1_mission_valuable_minerals_rare_metals)
  .build();

export const me1_location_argos_rho_phoenix_carbonaceous_asteroid = loc('Carbonaceous Asteroid')
  .hasMissions(m.me1_mission_prothean_data_discs)
  .build();

export const me1_location_argos_rho_phoenix_vebinok = loc('Vebinok')
  .hasMissions(m.me1_mission_valuable_minerals_light_metals)
  .build();

export const me1_location_argos_rho_phoenix_tuntau = loc('Tuntau')
  .hasMissions(m.me1_mission_wrex_family_armor)
  .build();

export const me1_system_argos_rho_phoenix = sys('Phoenix')
  .hasLocations(
    me1_location_argos_rho_phoenix_patashi,
    me1_location_argos_rho_phoenix_carbonaceous_asteroid,
    me1_location_argos_rho_phoenix_vebinok,
    me1_location_argos_rho_phoenix_tuntau,
  )
  .build();

export const me1_cluster_argos_rho = cl('Argos Rho', 'Argos_Rho', 'Argos_Rho')
  .hasSystems(
    me1_system_argos_rho_gorgon,
    me1_system_argos_rho_hydra,
    me1_system_argos_rho_phoenix,
  )
  .build();
