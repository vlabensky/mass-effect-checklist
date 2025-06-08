import { cl, loc, sys } from '../../builders';

// Sigurd's Cradle

export const me2_location_sigurds_cradle_decoris_laena = loc('Laena')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_sigurds_cradle_decoris_sanctum = loc('Sanctum')
  .withAdditionalInfo('Good (Element Zero)')
  .build();

export const me2_system_sigurds_cradle_decoris = sys('Decoris')
  .hasLocations(
    me2_location_sigurds_cradle_decoris_laena,
    me2_location_sigurds_cradle_decoris_sanctum,
  )
  .build();

export const me2_location_sigurds_cradle_skepsis_crick = loc('Crick')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_sigurds_cradle_skepsis_darwin = loc('Darwin')
  .withAdditionalInfo('Good')
  .build();

export const me2_location_sigurds_cradle_skepsis_franklin = loc('Franklin')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_sigurds_cradle_skepsis_keimowitz = loc('Keimowitz')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_sigurds_cradle_skepsis_pauling = loc('Pauling')
  .withAdditionalInfo('Poor')
  .build();

export const me2_location_sigurds_cradle_skepsis_wallace = loc('Wallace')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_sigurds_cradle_skepsis_watson = loc('Watson')
  .withAdditionalInfo('Good (Element Zero)')
  .build();

export const me2_system_sigurds_cradle_skepsis = sys('Skepsis')
  .hasLocations(
    me2_location_sigurds_cradle_skepsis_crick,
    me2_location_sigurds_cradle_skepsis_darwin,
    me2_location_sigurds_cradle_skepsis_franklin,
    me2_location_sigurds_cradle_skepsis_keimowitz,
    me2_location_sigurds_cradle_skepsis_pauling,
    me2_location_sigurds_cradle_skepsis_wallace,
    me2_location_sigurds_cradle_skepsis_watson,
  )
  .build();

export const me2_cluster_sigurds_cradle = cl('Sigurd\'s Cradle')
  .hasSystems(
    me2_system_sigurds_cradle_decoris,
    me2_system_sigurds_cradle_skepsis,
  )
  .build();
