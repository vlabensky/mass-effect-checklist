import { cl, loc, sys } from '../../builders';

// Argos Rho

export const me3_location_argos_rho_hydra_south_of_star = loc('South of Star 2nd Ring')
  .withAdditionalInfo('Wreckage: Fuel 270')
  .build();

export const me3_location_argos_rho_hydra_canrum = loc('Canrum')
  .withAdditionalInfo('Haptic Optics Array')
  .build();

export const me3_system_argos_rho_hydra = sys('Hydra')
  .hasLocations(
    me3_location_argos_rho_hydra_south_of_star,
    me3_location_argos_rho_hydra_canrum,
  )
  .build();

export const me3_location_argos_rho_phoenix_pinnacle_station = loc('Pinnacle Station')
  .withAdditionalInfo('Turian Spec Ops Team')
  .build();

export const me3_location_argos_rho_phoenix_intai_sei = loc('Intai\'sei')
  .withAdditionalInfo('Citadel: Kakliosaur Fossil')
  .build();

export const me3_location_argos_rho_phoenix_northeast_of_intai_sei = loc('Northeast of Intai\'sei')
  .withAdditionalInfo('Wreckage: Fuel 450')
  .build();

export const me3_system_argos_rho_phoenix = sys('Phoenix')
  .hasLocations(
    me3_location_argos_rho_phoenix_pinnacle_station,
    me3_location_argos_rho_phoenix_intai_sei,
    me3_location_argos_rho_phoenix_northeast_of_intai_sei,
  )
  .build();

export const me3_location_argos_rho_gorgon_camaron = loc('Camaron')
  .withAdditionalInfo('Advanced Power Relay')
  .build();

export const me3_system_argos_rho_gorgon = sys('Gorgon')
  .hasLocations(
    me3_location_argos_rho_gorgon_camaron,
  )
  .build();

export const me3_cluster_argos_rho = cl('Argos Rho', 'Argos_Rho', 'Argos_Rho')
  .hasSystems(
    me3_system_argos_rho_hydra,
    me3_system_argos_rho_phoenix,
    me3_system_argos_rho_gorgon,
  )
  .build();
