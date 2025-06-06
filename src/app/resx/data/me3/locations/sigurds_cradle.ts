import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Sigurd's Cradle

export const me3_location_sigurds_cradle_skepsis_watson = loc('Watson')
  .withAdditionalInfo('Javelin Missle Launchers')
  .build();

export const me3_location_sigurds_cradle_skepsis_between_crick_and_mass_relay = loc('Between Crick and Mass Relay')
  .withAdditionalInfo('Wreckage: Fuel 200')
  .build();

export const me3_system_sigurds_cradle_skepsis = sys('Skepsis')
  .hasLocations(
    me3_location_sigurds_cradle_skepsis_watson,
    me3_location_sigurds_cradle_skepsis_between_crick_and_mass_relay,
  )
  .build();

export const me3_location_sigurds_cradle_decoris_laena = loc('Laena')
  .withAdditionalInfo('Salvage: Credits 10,000')
  .build();

export const me3_location_sigurds_cradle_decoris_south_of_star = loc('South of Star')
  .withAdditionalInfo('Wreckage: Fuel 350')
  .build();

export const me3_location_sigurds_cradle_decoris_sanctum = loc('Sanctum')
  .withAdditionalInfo('N7: Cerberus Lab')
  .build();

export const me3_system_sigurds_cradle_decoris = sys('Decoris')
  .hasLocations(
    me3_location_sigurds_cradle_decoris_laena,
    me3_location_sigurds_cradle_decoris_south_of_star,
    me3_location_sigurds_cradle_decoris_sanctum,
  )
  .build();

export const me3_location_sigurds_cradle_mil_chalkhos = loc('Chalkhos')
  .withAdditionalInfo('Husk Neural Map')
  .build();

export const me3_location_sigurds_cradle_mil_mylasi = loc('Mylasi (Asteroid belt NE of star)')
  .withAdditionalInfo('Unsuccessful search for Leviathan')
  .build();

export const me3_system_sigurds_cradle_mil = sys('Mil (Leviathan DLC)')
  .hasLocations(
    me3_location_sigurds_cradle_mil_chalkhos,
    me3_location_sigurds_cradle_mil_mylasi,
  )
  .build();

export const me3_location_sigurds_cradle_lenal_triginta_petra = loc('Triginta Petra')
  .withAdditionalInfo('Dextro Rations')
  .build();

export const me3_location_sigurds_cradle_lenal_laconix = loc('Laconix')
  .withAdditionalInfo('Unsuccessful search for Leviathan')
  .build();

export const me3_system_sigurds_cradle_lenal = sys('Lenal (Leviathan DLC)')
  .hasLocations(
    me3_location_sigurds_cradle_lenal_triginta_petra,
    me3_location_sigurds_cradle_lenal_laconix,
  )
  .build();

export const me3_location_sigurds_cradle_psi_tophet_2181_despoina = loc('2181 Despoina')
  .withAdditionalInfo('Leviathan')
  .build();

export const me3_system_sigurds_cradle_psi_tophet = sys('Psi Tophet (Leviathan DLC)')
  .hasLocations(
    me3_location_sigurds_cradle_psi_tophet_2181_despoina,
  )
  .build();

export const me3_cluster_sigurds_cradle = cl('Sigurd\'s Cradle', 'Sigurds_Cradle', 'Sigurds_Cradle')
  .hasSystems(
    me3_system_sigurds_cradle_skepsis,
    me3_system_sigurds_cradle_decoris,
    me3_system_sigurds_cradle_mil,
    me3_system_sigurds_cradle_lenal,
    me3_system_sigurds_cradle_psi_tophet,
  )
  .build();
